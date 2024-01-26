const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = import("electron-is-dev");
const path = require("path");
const fs = require("fs");

require("@electron/remote/main").initialize();

function createWindow() {
  app.setPath("userData", path.join(__dirname, "userData"));

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);

  mainWindow.webContents.once("dom-ready", () => {
    mainWindow.webContents.send("load-todos");
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

let todos = [];
// Handle IPC messages
ipcMain.handle("load-todos", (event) => {
  // Return the todos to the renderer process
  if (todos.length === 0) {
    const todoFilePath = path.join(app.getPath("userData"), "todos.json");
    try {
      const todosData = fs.readFileSync(todoFilePath, "utf-8");
      const storedTodos = JSON.parse(todosData);
      todos = storedTodos;
    } catch (error) {
      console.error("Error reading todos file:", error);
    }
  }
  return todos;
});

ipcMain.on("save-todos", (event, updatedTodos) => {
  // Update the todos array with the received data
  todos = updatedTodos;
  const todoFilePath = path.join(app.getPath("userData"), "todos.json");
  fs.writeFile(todoFilePath, JSON.stringify(updatedTodos), "utf-8", (err) => {
    if (err) {
      console.error("Error saving todos:", err);
    } else {
      console.log("Todos saved successfully.");
    }
  });
});
