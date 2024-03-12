let playnow = document.querySelector('#playnowbutton');
let song = document.querySelector('#song');
let leaderboards = document.querySelector('#leaderboards')
let kickButton = document.querySelector('#kickButton')
let howtoplay = document.querySelector('#howtoplaybutton')
let back = document.querySelector('#back')
let gotIt = document.querySelector('#got-it-button')
let modal = document.querySelector('.howtoplaymodal')
let howtoplay2 = document.querySelector('#howtoplay2')
let kickDrumSound = document.querySelector('#kickdrumsound')
let songButton = document.querySelector('#songButton')
let smileyfacemain = document.querySelector('#smileyface');

playnow.addEventListener('click', onPlayNowClick);

function onPlayNowClick() {
    document.querySelector('.intropage').style.display = "none";
    document.querySelector('#wholegame').style.display = 'block';  
}

leaderboards.addEventListener('click',onLeaderboardsClick)

function onLeaderboardsClick() {
    document.querySelector('#wholegame').style.display = "none";
    document.querySelector('#highscores').style.display = "block";
}

howtoplay.addEventListener('click', onHowToPlayClick)

function onHowToPlayClick() {

    modal.show();
    modal.style.display = "flex";
}

back.addEventListener('click', onBackClick)

function onBackClick() {
    document.querySelector('#highscores').style.display="none";
    document.querySelector('#wholegame').style.display="block";
}

gotIt.addEventListener('click', () => {
    modal.close();
    modal.style.display = "none";
})

howtoplay2.addEventListener('click', onHowToPlayClick)

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



songButton.addEventListener('click', () => {
    if (song.paused) {
            song.play();
            song.currentTime = 0;
    } else {
        song.currentTime = 0;
    }
})



const bpm = 126;
const beatInterval = 60000 / bpm;

function clickTiming(clickTimestamp) {
    let wasCloseToBeat = false;
    for (let keyBeat = beatInterval; keyBeat <= 55000; keyBeat += beatInterval) {
        const timeDifference = Math.abs(clickTimestamp - keyBeat);
         if (timeDifference <= 100) {
         console.log("Perfect!");
         wasCloseToBeat = true;
         break;
        } else if (timeDifference <= 125) {
            console.log("Great!");
            wasCloseToBeat = true;
            break;
        } else if (timeDifference <= 150) {
        console.log("Good");
        wasCloseToBeat = true;
            break;
    }
}
    if (!wasCloseToBeat) {
            console.log("Oh no!");
        }
    }

    


  smileyfacemain.addEventListener('click', function() {
    const clickTime = song.currentTime * 1000;
    clickTiming(clickTime); 
    console.log(clickTime);
  });




  /*kickButton.addEventListener('click', () => {
    
    if (kickDrumSound.paused) {
        kickDrumSound.play();
    } else {
        kickDrumSound.currentTime = 0;
    }
    kickDrumSound.loop = true;
})
  /*function animate(timestamp) {
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
 
   document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('song');
    const feedbackElement = document.getElementById('feedback');
    audio.play();

    const keyBeat = [476, 952, 1428, 1904, 2380, 2856, 3332, 3808, 4284, 4760, 5236, 5712, 6188, 6664, 7140, 7616, 8092, 8568, 9044, 9520, 9996, 10472, 10948, 11424, 11900, 12376, 12852, 13328, 13804, 14280, 14756, 15232, 15708, 16184, 16660]
  })
*/