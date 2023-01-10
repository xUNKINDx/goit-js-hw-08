import Player from '@vimeo/player';
const videoPlayer = document.querySelector("iframe#vimeo-player");
console.log(videoPlayer);

const player = new Player(videoPlayer);
player.on("timeupdate", logTime);

function logTime(data) {
    console.log(data.seconds); 
}
