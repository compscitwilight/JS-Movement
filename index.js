const electron = require("electron")
const app = electron.app

app.whenReady().then(() => {
    const win = new electron.BrowserWindow({
        width: 1200,
        height: 800
    })

    win.loadFile("./index.html")
    win.setProgressBar(80)
})