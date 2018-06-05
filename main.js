const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//Init Win
let win;

function createWindow() {
    //Create Window Object
    win = new BrowserWindow({width: 800, height: 600, icon: __dirname+'/img/saturn.png' })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));


    //DevTools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win= null;
    });

}

//Run function window
app.on('ready', createWindow);

//Quit all window
app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit;
    }
});