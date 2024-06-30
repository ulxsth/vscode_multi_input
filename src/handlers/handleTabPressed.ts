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

    const index: number | undefined = context.workspaceState.get("index");
    if (index === undefined) {
      vscode.commands.executeCommand("tab");
      return;
    }

    const cursor = cursorPositions[index];
    const newPosition = new vscode.Position(cursor[0], cursor[1]);
    editor.selection = new vscode.Selection(newPosition, newPosition);

    const nextIndex = index + 1;
    if (nextIndex >= cursorPositions.length) {
      vscode.window.showInformationMessage("終端のカーソルなので、複数入力を終了します！");
      context.workspaceState.update("cursorPositions", undefined);
      context.workspaceState.update("index", undefined);
    } else {
      context.workspaceState.update("index", nextIndex);
    }
  });
