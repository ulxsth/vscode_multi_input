import * as vscode from "vscode";

import type { CursorPosition } from "../types/CursorPosition";

export const handleTabPressed = (context: vscode.ExtensionContext) =>
  vscode.commands.registerCommand("vscode-multi-input.on-tab-pressed", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const cursorPositions: CursorPosition[] | undefined =
      context.workspaceState.get("cursorPositions");
    if (!cursorPositions) {
      vscode.commands.executeCommand("tab");
      return;
    }

    const cursor = cursorPositions.shift();
    if (!cursor) {
      vscode.commands.executeCommand("tab");
      return;
    }

    vscode.window.showInformationMessage(`${cursor[0]} ${cursor[1]}`);
    const newPosition = new vscode.Position(cursor[0], cursor[1]);
    editor.selection = new vscode.Selection(newPosition, newPosition);

    context.workspaceState.update("cursorPositions", cursorPositions);
  });
