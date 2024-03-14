document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('preview-grid');
    const numberOfGifs = Math.floor(window.innerWidth / 200) * Math.floor(window.innerHeight / 200);
    const playButton = document.getElementById('play-button');
    const audioPlayer = document.getElementById('audio-player');

    for (let i = 0; i < numberOfGifs; i++) {
        const gifSlot = document.createElement('div');
        gifSlot.classList.add('gif-slot');
        gifSlot.textContent = 'Saul Goodman'; // Label for the GIF
        grid.appendChild(gifSlot);
    }

    playButton.addEventListener('click', () => {
        audioPlayer.play();
    });
});
