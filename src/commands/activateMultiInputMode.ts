import * as vscode from "vscode";

import type { CursorPosition } from "../types/CursorPosition";

export const activateMultiInputMode = (context: vscode.ExtensionContext) =>
  vscode.commands.registerCommand(
    "vscode-multi-input.activate-multi-input-mode",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("有効なエディタが選択されていません。");
        return;
      }

      let cursorPositions: CursorPosition[] = [];
      editor.selections.forEach((selection) => {
        const selectionLine = selection.active.line;
        const selectionCharacter = selection.active.character;

        editor.edit((editBuilder) => {
          cursorPositions.push([selectionLine, selectionCharacter]);
        });
      });

      // workspace にカーソル位置を保存
      context.workspaceState.update("cursorPositions", cursorPositions);
      vscode.window.showInformationMessage(`カーソル位置を保存しました！`);
    }
  );
