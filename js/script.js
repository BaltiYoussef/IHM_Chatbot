var sfx = {
   push: new Howl({
      src: [
         './../IHM_Chatbot/audio.mp3',
      ]
   })
}

function setup() {
	chatbot.loadFiles(['brain/bot.rive']);
}

window.onload = sfx.push.play();
window.onload = setup;

