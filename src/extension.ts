import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const activateMultiInputMode = vscode.commands.registerCommand('vscode-multi-input.activate-multi-input-mode', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('有効なエディタが選択されていません。');
			return;
		}

		let out = "";
		editor.selections.forEach((selection) => {
			const selectionLine = selection.active.line;
			const selectionCharacter = selection.active.character;

			editor.edit((editBuilder) => {
				// TODO: ここに挿入処理を記述
				out += `[${selectionLine}, ${selectionCharacter}], \n`;
			});
		});

		vscode.window.showInformationMessage(out);
  });

	context.subscriptions.push(activateMultiInputMode);
}

export function deactivate() {}
