import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('welcome-page.open', () => {
        openWelcomeFile();
    });

    context.subscriptions.push(disposable);

    openWelcomeFile();
}

function openWelcomeFile() {
    const config = vscode.workspace.getConfiguration('welcomePage');
    const filePath = config.get<string>('filePath');

    if (filePath && filePath.trim() !== "") {
        const uri = vscode.Uri.file(filePath);
        vscode.workspace.openTextDocument(uri).then(doc => {
            vscode.window.showTextDocument(doc, { preview: false });
        }, err => {
            vscode.window.showErrorMessage(`Failed to open welcome file: ${err.message}`);
        });
    } else {
        vscode.window.showInformationMessage(
            "No welcome file configured.",
            "Open Settings"
        ).then(selection => {
            if (selection === "Open Settings") {
                vscode.commands.executeCommand(
                    "workbench.action.openSettings",
                    "welcomePage.filePath"
                );
            }
        });
    }
}


export function deactivate() {}
