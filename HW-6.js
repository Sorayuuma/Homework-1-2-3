//Bài 6
let songs = ["Hayloft", "Vertigo", "Teenagers", "Boilermaker"];
let artists = ["Mother Mother", "Alice Merton", "My Chemical Romance", "Royal Blood"];
let playlist = {}, playlist_reverse = {};

for (let i = 0; i < songs.length; i++) {
    for (let j = 1; j == songs.length; j++) {
        if (songs[i] === songs[j]) {
            playlist[songs[j]] = artists[i];
            playlist_reverse[artists[i]] = songs[j];
        }
        else {
            playlist[songs[i]] = artists[i];
            playlist_reverse[artists[i]] = songs[i];
        }
    }
}
console.log(playlist);
console.log(playlist_reverse);