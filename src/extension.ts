import * as vscode from 'vscode';

type CursorPosition = [number, number];

export function activate(context: vscode.ExtensionContext) {
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
		context.subscriptions.push(activateMultiInputMode);
	});

}

export function deactivate() {}
