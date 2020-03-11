import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "settings-open" is now active!');
	let disposable = vscode.commands.registerCommand('ext.openSettings', () => {
		vscode.commands.executeCommand('workbench.action.openSettings');
	});
	context.subscriptions.push(disposable);
}

export function deactivate() { }
