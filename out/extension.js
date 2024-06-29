"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
function activate(context) {
    const activateMultiInputMode = vscode.commands.registerCommand('vscode-multi-input.activate-multi-input-mode', () => {
        // workspace にカーソル情報が保存されていれば表示
        const cursors = context.workspaceState.get('cursorPositions');
        if (cursors) {
            vscode.window.showInformationMessage(`カーソル位置: ${cursors}`);
        }
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('有効なエディタが選択されていません。');
            return;
        }
        let cursorPositions = [];
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
function deactivate() { }
//# sourceMappingURL=extension.js.map