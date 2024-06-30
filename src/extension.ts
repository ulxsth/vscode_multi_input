import * as vscode from 'vscode';
import { handleTabPressed } from './handlers/handleTabPressed';
import { activateMultiInputMode } from './commands/activateMultiInputMode';
import { deactivateMultiInputMode } from './commands/deactivateMultiInputMode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
    handleTabPressed(context),
    activateMultiInputMode(context),
		deactivateMultiInputMode(context)
	);
}

export function deactivate() {}
