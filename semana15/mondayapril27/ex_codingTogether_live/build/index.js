"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
const fileManager = new JSONFileManager_1.JSONFileManager('playlist.json');
const jsonPlaylist = fileManager.getObjectFromJSON();
console.log(jsonPlaylist.getName());
//# sourceMappingURL=index.js.map