var img = document.querySelector('img');
img.addEventListener('click', onClick, false);






function onClick() {
    const music = new Audio('./../IHM_Chatbot/img/roulette.mp3');
    music.play()


    this.removeAttribute('style');

    var deg = Math.round(Math.random() * 1500);



    if (deg < 500 && deg > 0)
        console.log(deg)


    var css = '-webkit-transform: rotate(' + deg + 'deg);';



    this.setAttribute(
        'style', css
    );
}