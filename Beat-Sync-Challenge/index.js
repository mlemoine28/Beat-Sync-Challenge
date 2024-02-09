let playnow = document.querySelector('#playnow')

playnow.addEventListener('click', onClick)

function onClick() {
    document.querySelector('#intropage').style.display = "none";
    document.querySelector('#wholegame').style.display = "block";
    console.log('hello')    
}



let leaderboards = document.querySelector('#leaderboards')

leaderboards.addEventListener('click',onClick2)

function onClick2() {
    document.querySelector('#wholegame').style.display = "none";
    document.querySelector('#highscores').style.display = "block";
}