import * as vscode from 'vscode';
import { handleTabPressed } from './handlers/handleTabPressed';
import { activateMultiInputMode } from './commands/activateMultiInputMode';
import { deactivateMultiInputMode } from './commands/deactivateMultiInputMode';
import { handleEscapePressed } from './handlers/handleEscapePressed';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		handleTabPressed(context),
		handleEscapePressed(context),
    activateMultiInputMode(context),
		deactivateMultiInputMode(context)
	);
}

export function deactivate() {}
