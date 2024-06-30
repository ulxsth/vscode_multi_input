import * as vscode from 'vscode';

export const handleEscapePressed = (context: vscode.ExtensionContext) => {
  return vscode.commands.registerCommand(
    "vscode-multi-input.on-escape-pressed",
    () => {
      const cursorPositions = context.workspaceState.get("cursorPositions");
      if (!cursorPositions) {
        return;
      }

      context.workspaceState.update("cursorPositions", undefined);
      vscode.window.showInformationMessage("複数入力状態を解除しました！");
    }
  );
}
