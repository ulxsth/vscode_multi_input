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
      context.workspaceState.update("index", 0);
      vscode.window.showInformationMessage(`カーソル位置を保存しました！`);

      // 最初のカーソル位置に移動
      const cursor = cursorPositions[0];
      const newPosition = new vscode.Position(cursor[0], cursor[1]);
      editor.selection = new vscode.Selection(newPosition, newPosition);
    }
  );
