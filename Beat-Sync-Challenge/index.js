let playnow = document.querySelector('#playnowbutton')

playnow.addEventListener('click', onClick)

function onClick() {
    document.querySelector('#intropage').style.display='none';
    document.querySelector('#wholegame').style.display='block';
    console.log('hello')    
}



let leaderboards = document.querySelector('#leaderboards')

leaderboards.addEventListener('click',onClick2)

function onClick2() {
    document.querySelector('#wholegame').style.display = "none";
    document.querySelector('#highscores').style.display = "block";
}

let howtoplay = document.querySelector('#howtoplaybutton')

howtoplay.addEventListener('click', onClick3)

function onClick3() {
    document.querySelector('#intropage').style.display = "none";
    document.querySelector('#howtoplaypage').style.display = "block";
}

let back = document.querySelector('#back')

back.addEventListener('click', onClick4)

function onClick4() {
    document.querySelector('#highscores').style.display="none";
    document.querySelector('#wholegame').style.display="block";
}

let back2 = document.querySelector('#back2')

back2.addEventListener('click',onClick5)

function onClick5() {
    document.querySelector('#howtoplaypage').style.display="none";
    document.querySelector('#wholegame').style.display="block";
}

let howtoplay2 = document.querySelector('#howtoplay2')

howtoplay2.addEventListener('click', onClick6)

function onClick6() {
    document.querySelector('#wholegame').style.display="none";
    document.querySelector('#howtoplaypage').style.display="block";
}