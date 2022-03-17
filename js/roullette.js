var img = document.querySelector('img');
img.addEventListener('click', onClick, false);


function onClick() {
    const music = new Audio('./../img/audio.wav');
    music.play();
    music.loop = true;
    music.playbackRate = 2;
    music.pause();

    this.removeAttribute('style');

    var deg = 500 + Math.round(Math.random() * 1500);

    var css = '-webkit-transform: rotate(' + deg + 'deg);';



    this.setAttribute(
        'style', css
    );
}