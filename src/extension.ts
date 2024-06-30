import * as vscode from 'vscode';
import { handleTabPressed } from './handlers/handleTabPressed';
import { activateMultiInputMode } from './commands/activateMultiInputMode';

import type { CursorPosition } from './types/CursorPosition';

export function activate(context: vscode.ExtensionContext) {


	const deactivateMultiInputMode = vscode.commands.registerCommand('vscode-multi-input.deactivate-multi-input-mode', () => {
		context.workspaceState.update('cursorPositions', undefined);
		vscode.window.showInformationMessage('カーソル位置の保存を解除しました！');
	});

	context.subscriptions.push(handleTabPressed(context));
	context.subscriptions.push(activateMultiInputMode(context));
}

export function deactivate() {}
