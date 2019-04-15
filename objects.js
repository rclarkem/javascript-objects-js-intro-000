let playlist = {
  artist:"Hey I just meet you",
};

function  updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, artistName[songTitle])
}
