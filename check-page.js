const { app, BrowserWindow } = require('electron')
const path = require('path')

app.whenReady().then(async () => {
  const window = new BrowserWindow({ show: false })

  await window.loadFile(path.join(__dirname, 'dist/index.html'))
  await window.webContents.executeJavaScript('document.fonts.ready')

  const { clientHeight, scrollHeight } = await window.webContents.executeJavaScript(`
    (() => {
      const sheet = document.querySelector('.sheet-content')
      return { clientHeight: sheet.clientHeight, scrollHeight: sheet.scrollHeight }
    })()
  `)

  if (scrollHeight > clientHeight + 1) {
    console.error(
      `CV content overflows its single A4 page (${scrollHeight}px content / ${clientHeight}px page).`
    )
    app.exit(1)
    return
  }

  console.log(`CV fits on one A4 page (${scrollHeight}px / ${clientHeight}px).`)
  app.quit()
})
