import { app, BrowserWindow } from 'electron/main'

function createWindow() {
	// Edit Windows settings
	const win = new BrowserWindow({
		width: 1200,
		height: 900,
		autoHideMenuBar: false,
	})
	// Open Dev-Tools
	win.webContents.openDevTools()
	// Disable Menu Bar
	win.setMenuBarVisibility(false)
	// Loading main HTML file
	win.loadFile('web-source/index.html')
}

app.whenReady().then(() => {
	createWindow()
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})
})

app.on('window-all-closed', () => {
	app.quit()
})
