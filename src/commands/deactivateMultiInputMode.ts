import * as vscode from "vscode";

export const deactivateMultiInputMode = (context: vscode.ExtensionContext) => vscode.commands.registerCommand(
  "vscode-multi-input.deactivate-multi-input-mode",
  () => {
    context.workspaceState.update("cursorPositions", undefined);
    vscode.window.showInformationMessage("カーソル位置の保存を解除しました！");
  }
);
