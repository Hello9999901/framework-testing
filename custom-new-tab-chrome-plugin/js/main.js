const os = require('os');
const pty = require('node-pty');

var shell = os.platform() === "win32" ? "powershell.exe" : "bash";
var ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 24,
    cwd: process.env.HOME,
    env: process.env
});

ptyProcess.on("data", (data) => {
    mainWindow.webContents.send("terminal-incData", data);
});

ipcMain.on("terminal-into", (event, data) => {
    ptyProcess.write(data);
})