'use strict'

import { autoUpdater } from 'electron-updater'
import { app, BrowserWindow, ipcMain, Menu, Tray } from 'electron'
const request = require('request').defaults({jar: true})

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let tray
let mainWindow

const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })
  mainWindow.loadURL(winURL)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  createWindow()
  tray = new Tray(__static + '/logo.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: '打开主面板', type: 'radio', click: () => { mainWindow.show() }},
    // {label: '最小化', type: 'radio', click: () => { mainWindow.hide() }},
    {label: '退出', type: 'radio', click: () => { app.quit() }}
  ])
  tray.setContextMenu(contextMenu)
})

app.on('window-all-closed', (event) => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('quit', () => {
  app.quit()
})

ipcMain.on('minimize', () => {
  mainWindow.hide()
})

ipcMain.on('login', (name, passwd) => {
  request({
    methods: 'POST',
    url: 'http://wx.nsi-soft.com:5902/sso/login.do',
    form: {
      requestUrl: 'http://nsi-soft.com/nsiNetdisk/',
      name: name,
      password: passwd
    }
  }, (err, res, body) => {
    if (!err) {
      console.log(body)
    }
  })
})

// var videoList = ['rmvb','flv','mp4','wmv','asf','rm','mov','avi','mpg','mpeg']
// var audoList = ['mp3','aac','ogg','cda','wav','mid']
// var codeList = ['sql','c','qs','cpp','py','js','css','html','js','vue','json','xml','smail','java','o','lua','conf','cnf','php','asp','cs','vbs','ts','jar','jad','class']
// var imageList = ['png','jpg','jpeg','bmp','gif','svg','raw','psd','ai']
// var zipList = ['zip','rar','7z','tgz','gz','tar','cpio','bz','bz2','gzip','gunzip','cab','iso','gho']

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */
