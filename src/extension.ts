import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('vscode-multi-input.activate-multi-input-mode', () => {
		
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
