const { app, BrowserWindow, settingCache } = require('electron')
const path = require('path')
const fs = require('fs')

app.whenReady().then(async () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({ show: false })

  // and load the index.html of the app.
  await mainWindow.loadFile(path.join(__dirname, 'dist/index.html'))

  const pdf = await mainWindow.webContents.printToPDF({
    landscape: false,
    margins: {
      marginType: 'none'
    },
    pageRanges: '1',
    printBackground: true,
    pageSize: 'A4'
  })
  fs.writeFileSync('./dist/cv.pdf', pdf)
  app.quit()
})
