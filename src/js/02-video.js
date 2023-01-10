import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoPlayer = document.querySelector('iframe#vimeo-player');
console.log(videoPlayer);

const player = new Player(videoPlayer);
player.on('timeupdate', throttle(onTimeUpdate, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}

function onTimeUpdate(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(data.seconds);
}
