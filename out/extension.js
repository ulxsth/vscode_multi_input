"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const handleTabPressed_1 = require("./handlers/handleTabPressed");
const activateMultiInputMode_1 = require("./commands/activateMultiInputMode");
const deactivateMultiInputMode_1 = require("./commands/deactivateMultiInputMode");
function activate(context) {
    context.subscriptions.push((0, handleTabPressed_1.handleTabPressed)(context), (0, activateMultiInputMode_1.activateMultiInputMode)(context), (0, deactivateMultiInputMode_1.deactivateMultiInputMode)(context));
}
function deactivate() { }
//# sourceMappingURL=extension.js.map