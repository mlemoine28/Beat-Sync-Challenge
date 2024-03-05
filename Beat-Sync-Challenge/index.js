let playnow = document.querySelector('#playnowbutton');

playnow.addEventListener('click', onPlayNowClick);

function onPlayNowClick() {
    document.querySelector('.intropage').style.display = "none";
    document.querySelector('#wholegame').style.display = 'block';  
}



let leaderboards = document.querySelector('#leaderboards')

leaderboards.addEventListener('click',onLeaderboardsClick)

function onLeaderboardsClick() {
    document.querySelector('#wholegame').style.display = "none";
    document.querySelector('#highscores').style.display = "block";
}

let howtoplay = document.querySelector('#howtoplaybutton')

howtoplay.addEventListener('click', onHowToPlayClick)

function onHowToPlayClick() {
    let modal = document.querySelector('.howtoplaymodal')
    modal.show();
    modal.style.display = "flex";
    
}

let back = document.querySelector('#back')

back.addEventListener('click', onBackClick)

function onBackClick() {
    document.querySelector('#highscores').style.display="none";
    document.querySelector('#wholegame').style.display="block";
}

let gotIt = document.querySelector('#got-it-button')

gotIt.addEventListener('click',gotItClick)

function gotItClick() {
    let modal = document.querySelector('.howtoplaymodal')
    modal.close();
    modal.style.display = "none";

}

let howtoplay2 = document.querySelector('#howtoplay2')

howtoplay2.addEventListener('click', onHowToPlayClick)

let smileyfacemain = document.querySelector('#smileyface');
smileyfacemain.addEventListener('click', (e) => {
e.target.classList.add('smileyimage');
let animations = e.target.getAnimations();
for (let animation of animations) {
 animation.currentTime = 0;
}
});
smileyfacemain.addEventListener('animationend', (e) => {
    e.target.classList.remove('smileyimage');
});

/*let kickButton = document.querySelector('#kickButton')
kickButton.addEventListener('click', kickDrum)


function kickDrum(){
    let kickDrumSound = document.querySelector('#kickdrumsound')
    if (kickDrumSound.paused) {
        kickDrumSound.play();
    } else {
        kickDrumSound.currentTime = 0;
    }
    kickDrumSound.loop = true;
}




let lastTimestamp = 0;

function animate(timestamp) {
    if (!lastTimestamp) { //This is for the purpose of making sure that lastTimestamp only starts after rendering the second frame. Needed for accurately calculating deltaTime.
        lastTimestamp = timestamp;
    } else {

    const deltaTime = timestamp - lastTimestamp; //the CURRENT time minus the time since the last frame. Basically, the amount of times between frames.

    lastTimestamp = timestamp; //this updates lastTimestamp for the next frame, otherwise the times won't be consistent
    console.log(deltaTime);
    
}
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);


console.log(lastTimestamp);

document.addEventListener('DOMContentLoaded', () => {
    const bpm = 126;
    const beatInterval = 60000 / bpm;
    let lastBeatTime = 0;
})

function checkBeat(timestamp) {
    const currentTime = kickDrumSound.currentTime * 1000;
    if (currentTime - lastBeatTime >= beatInterval) {
      lastBeatTime += beatInterval;
    }

    requestAnimationFrame(checkBeat);
  }
  requestAnimationFrame(checkBeat);

  console.log(checkBeat);
  */


  document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('song');
    const feedbackElement = document.getElementById('feedback');
    audio.play();

    const keyBeat = [476, 952, 1428, 1904, 2380, 2856, 3332, 3808, 4284, 4760, 5236, 5712, 6188, 6664, 7140, 7616, 8092, 8568, 9044, 9520, 9996, 10472, 10948, 11424, 11900, 12376, 12852, 13328, 13804, 14280, 14756, 15232, 15708, 16184, 16660]
  }