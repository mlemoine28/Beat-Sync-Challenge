let playnow = document.querySelector('#playnowbutton');

playnow.addEventListener('click', onPlayNowClick);

function onPlayNowClick() {
    document.querySelector('.intropage').style.display = "none";
    document.querySelector('#wholegame').style.display = 'block';
    console.log('hello');    
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

let mouseClickSmiley = document.querySelector('#smileydiv')

mouseClickSmiley.addEventListener('click', expandSmiley)

function expandSmiley() {
    let expand = document.querySelector('#smileydiv');
    expand.classList.add('smileyimage');
}
function stopImageAnimation() {
    let expand = document.querySelector('#smileydiv');
    let animations = expand.getAnimations();
    animations.forEach(animation=> {
        animation.pause();
    });
    setTimeout(stopImageAnimation, 1000);
    
}
