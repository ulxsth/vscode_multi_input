import * as vscode from 'vscode';
import { handleTabPressed } from './handlers/handleTabPressed';
import { activateMultiInputMode } from './commands/activateMultiInputMode';
import { deactivateMultiInputMode } from './commands/deactivateMultiInputMode';
import { handleEscapePressed } from './handlers/handleEscapePressed';
import { handleShiftTabPressed } from './handlers/handleShiftTabPressed';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		handleTabPressed(context),
		handleEscapePressed(context),
		handleShiftTabPressed(context),
    activateMultiInputMode(context),
		deactivateMultiInputMode(context)
	);
}

export function deactivate() {}
