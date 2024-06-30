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
exports.handleTabPressed = void 0;
const vscode = __importStar(require("vscode"));
const handleTabPressed = (context) => vscode.commands.registerCommand("vscode-multi-input.on-tab-pressed", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    const cursorPositions = context.workspaceState.get("cursorPositions");
    if (!cursorPositions) {
        vscode.commands.executeCommand("tab");
        return;
    }
    const index = context.workspaceState.get("index");
    if (index === undefined) {
        vscode.commands.executeCommand("tab");
        return;
    }
    const cursor = cursorPositions[index];
    const newPosition = new vscode.Position(cursor[0], cursor[1]);
    editor.selection = new vscode.Selection(newPosition, newPosition);
    const newIndex = index + 1;
    if (newIndex >= cursorPositions.length) {
        vscode.window.showInformationMessage("終端のカーソルなので、複数入力を終了します！");
        context.workspaceState.update("cursorPositions", undefined);
        context.workspaceState.update("index", undefined);
    }
    else {
        context.workspaceState.update("index", newIndex);
    }
});
exports.handleTabPressed = handleTabPressed;
//# sourceMappingURL=handleTabPressed.js.map