const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-btn");
const pauseButton = document.getElementById("pause-btn");
const songTitle = document.getElementById("song-title");

// Play functionality
playButton.addEventListener("click", () => {
    audioPlayer.play();
    songTitle.textContent = "Playing: Example Song";
});

// Pause functionality
pauseButton.addEventListener("click", () => {
    audioPlayer.pause();
    songTitle.textContent = "Paused: Example Song";
});
