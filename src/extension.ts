import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposableCollection: vscode.Disposable[] = [];
	disposableCollection.push(vscode.commands.registerCommand('ext.openSettings', () => {
		vscode.commands.executeCommand('workbench.action.openSettings');
	}));
	disposableCollection.push(vscode.commands.registerCommand('ext.openSettingsQuery', async () => {
		const choice = await vscode.window.showInputBox({ placeHolder: 'Search Query' });
		if (choice) {
			vscode.commands.executeCommand('workbench.action.openSettings', choice);
		}
	}));
	context.subscriptions.push(...disposableCollection);
}

export function deactivate() { }
