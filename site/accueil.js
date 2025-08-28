const audio = document.getElementById('audio');
const seek = document.getElementById('seek');
const backward = document.getElementById('backward');
const forward = document.getElementById('forward');
const play = document.getElementById('play');
const heart = document.getElementById('heart');
const current_time = document.getElementById('current-time');
const total_time = document.getElementById('total-time');

function readable(seconds) {
    let minuts = Math.floor(seconds / 60);
    let sec = seconds % 60;
    if (sec < 10) {
        sec = '0' + sec.toString();
    } else {
        sec = sec.toString();
    }
    const message = minuts.toString() + ':' + sec;
    return message;
};  // le audio.duration est en secondes, cette fonction le converti au format minutes:secondes
total_time.textContent = readable(audio.duration);

play.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        play.className = 'fi-xnsuxl-pause-solid';
    } else {
        audio.pause();
        play.className = 'fi-xnsuxl-play-solid';
    }
    window.friconix_update();
});  // lance ou met sur pause l'audio et change la class du bouton play/pause

audio.addEventListener('timeupdate', () => {
    seek.value = (audio.currentTime / audio.duration) * 1000;
    current_time.textContent = readable(parseInt(audio.currentTime));
    total_time.textContent = readable(audio.duration);
});  // met à jour le temps en continu

seek.addEventListener('input', () => {
    audio.currentTime = (seek.value / 1000) * audio.duration;
});   // met à jour le temps lorsque l'user utilise la barre de temps ( input type="range" )

heart.addEventListener('click', () => {
    if (heart.className === 'fi-xnluxl-heart') {
        heart.className = 'fi-xnsuxl-heart-solid';
    } else {
        heart.className = 'fi-xnluxl-heart';
    }
    window.friconix_update();
})  // change la class du coeur s'il est cliqué