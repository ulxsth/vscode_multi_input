import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('vscode-multi-input.hogehoge', () => {

	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
