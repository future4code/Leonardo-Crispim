"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const Playlist_1 = require("./Playlist");
const Music_1 = require("./Music");
class JSONFileManager {
    constructor(fileName) {
        this.fileName = fileName;
    }
    writeInJSON(playlist) {
        fs_1.writeFileSync(this.fileName, JSON.stringify(playlist, null, 2));
    }
    getObjectFromJSON() {
        const playlistJSON = JSON.parse(fs_1.readFileSync(this.fileName).toString());
        const playlistInstance = new Playlist_1.Playlist(playlistJSON.name);
        playlistJSON.musics.forEach((music) => {
            const musicInstance = new Music_1.Music(music.name, music.artist, music.album, music.year);
            playlistInstance.addMusic(musicInstance);
        });
        return playlistInstance;
    }
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map