import * as vscode from 'vscode';
import { CursorPosition } from '../types/CursorPosition';

export const handleShiftTabPressed = (context: vscode.ExtensionContext) => {
  return vscode.commands.registerCommand(
    "vscode-multi-input.on-shift-tab-pressed",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

      const index: number | undefined = context.workspaceState.get("index");
      if (index === undefined || index === 0) {
        vscode.commands.executeCommand("outdent");
        return;
      }

      const cursorPositions: CursorPosition[] | undefined =
        context.workspaceState.get("cursorPositions");
      if (!cursorPositions) {
        vscode.commands.executeCommand("tab");
        return;
      }

      const newIndex = index - 1;
      const cursor = cursorPositions[newIndex];
      const newPosition = new vscode.Position(cursor[0], cursor[1]);
      editor.selection = new vscode.Selection(newPosition, newPosition);

      context.workspaceState.update("index", newIndex);
    }
  );
}
