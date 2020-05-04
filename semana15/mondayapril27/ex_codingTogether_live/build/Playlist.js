"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Playlist {
    constructor(name) {
        this.name = name;
        this.musics = [];
    }
    addMusic(music) {
        this.musics.push(music);
    }
    playPlaylist() {
        console.log('Tocando a playlist:', this.name);
        this.musics.forEach(music => {
            music.playMusic();
        });
    }
    getName() {
        return this.name;
    }
}
exports.Playlist = Playlist;
//# sourceMappingURL=Playlist.js.map