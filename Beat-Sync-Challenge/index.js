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
    document.querySelector('.howtoplaymodal').show();
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
    document.querySelector('.howtoplaymodal').close();
}

let howtoplay2 = document.querySelector('#howtoplay2')

howtoplay2.addEventListener('click', onHowToPlayClick2)

function onHowToPlayClick2() {
    document.querySelector('.howtoplaymodal').show();
}

let mouseClickSmiley = document.querySelector('#smileydiv')

mouseClickSmiley.addEventListener('click', expandSmiley)

function expandSmiley() {
    document.querySelector('#smileydiv').style.transform = 'scale(1.5)';
}