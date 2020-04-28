"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Music {
    constructor(name, artist, album, year) {
        this.name = name;
        this.artist = artist;
        this.album = album;
        this.year = year;
    }
    playMusic() {
        console.log(` A música ${this.name} de ${this.artist} está tocando`);
    }
    setName(name) {
        if (name.length < 5) {
            console.log('O nome da música deve ter mais de 5 caracteres');
        }
        else {
            this.name = name;
        }
    }
}
exports.Music = Music;
//# sourceMappingURL=Music.js.map