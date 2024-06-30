import * as vscode from 'vscode';

type CursorPosition = [number, number];

export function activate(context: vscode.ExtensionContext) {
	const onTabPressed = vscode.commands.registerCommand('vscode-multi-input.on-tab-pressed', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
		}

		const cursorPositions: CursorPosition[] | undefined = context.workspaceState.get("cursorPositions");
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


	const activateMultiInputMode = vscode.commands.registerCommand('vscode-multi-input.activate-multi-input-mode', () => {

		// workspace にカーソル情報が保存されていれば表示
		const cursors: CursorPosition[] | undefined = context.workspaceState.get('cursorPositions');
		if (cursors) {
			vscode.window.showInformationMessage(`カーソル位置: ${cursors}`);
		}

		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('有効なエディタが選択されていません。');
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
		context.workspaceState.update('cursorPositions', cursorPositions);
		vscode.window.showInformationMessage(`カーソル位置を保存しました！`);
	});

	context.subscriptions.push(activateMultiInputMode);
}

export function deactivate() {}
