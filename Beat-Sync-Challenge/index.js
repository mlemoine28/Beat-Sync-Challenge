let playnow = document.querySelector('#playnowbutton')
let song = document.querySelector('#song')
let song2 = document.querySelector('#song2')
let song3 = document.querySelector('#song3')
let leaderboards = document.querySelector('#leaderboards')
let kickButton = document.querySelector('#kickButton')
let howtoplay = document.querySelector('#howtoplaybutton')
let back = document.querySelector('#back')
let gotIt = document.querySelector('#got-it-button')
let modal = document.querySelector('.howtoplaymodal')
let howtoplay2 = document.querySelector('#howtoplay2')
let kickDrumSound = document.querySelector('#kickdrumsound')
let songButton = document.querySelector('#songButton')
let songButton2 = document.querySelector('#songButton2')
let songButton3 = document.querySelector('#songButton3')
let smileyfacemain = document.querySelector('#smileyface')
let enterhighscore = document.querySelector('#enterhighscore')

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

smileyfacemain.addEventListener('click', animationEvent);

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        animationEvent({target: smileyfacemain}); //I need to put target: smileyfacemain here because otherwise, the target (e) will be referring to the animations of the document, not to the smileyfacemain, which is why the animation was not resetting after future clicks or presses!
    } else if (e.code === 'ArrowDown') {
        animationEvent({target: smileyfacemain});
    }
});   
    
function animationEvent(e) {
    smileyfacemain.classList.add('smileyimage');
    let animations = e.target.getAnimations();
    for (let animation of animations) {
        animation.currentTime = 0;
    }
}

smileyfacemain.addEventListener('animationend', (e) => {
    smileyfacemain.classList.remove('smileyimage');
});

songButton.addEventListener('click', () => {
    if (song.paused) {
        song.play();
        song.currentTime = 0;
    } else {
        song.currentTime = 0;
    }
})

songButton2.addEventListener('click', () => {
    if (song2.paused) {
        song2.play();
        song2.currentTime = 0;
    } else {
        song2.currentTime = 0;
    }
})

songButton3.addEventListener('click', () => {
    if (song3.paused) {
        song3.play();
        song3.currentTime = 0;
    } else {
        song3.currentTime = 0;
    }
})

const bpm = 126;
const beatInterval = 60000 / bpm;
let score = 0;

const bpm2 = 85;
const beatInterval2 = 60000 / bpm2;

const bpm3 = 125;
const beatInterval3 = 60000 / bpm3;

// 55000
function clickTiming(clickTimestamp, interval, maximum) {
    let wasCloseToBeat = false;
    let judgment = "Oh no!";
    for (let keyBeat = interval; keyBeat <= maximum; keyBeat += interval) {
        const timeDifference = Math.abs(clickTimestamp - keyBeat);
        if (timeDifference <= 55) {
            const showperfectimage = document.querySelector('#perfect_image')
            console.log("Perfect");
            judgment = "Perfect +100";
            score += 100;
            showperfectimage.style.display = 'block';
            wasCloseToBeat = true;
            break;
        } else if (timeDifference <= 100) {
            const showgreatimage = document.querySelector('#great_image')
            console.log("Great");
            judgment = "Great +50";
            score += 50;
            showgreatimage.style.display = 'block';
            wasCloseToBeat = true;
            break;
        } else if (timeDifference <= 150) {
            const showgoodimage = document.querySelector('#good_image')
            console.log("Good");
            judgment = "Good +25";
            score += 25;
            showgoodimage.style.display = 'block';
            wasCloseToBeat = true;
            break;
        }
    }
    if (!wasCloseToBeat) {
        const showpoorimage = document.querySelector('#poor_image')
        console.log("Poor");
        judgment = "Poor -20";
        score -= 20;
        showpoorimage.style.display = 'block';
    }
    setTimeout(function() {
        document.getElementById('perfect_image').style.display = 'none';
        document.getElementById('great_image').style.display = 'none';
        document.getElementById('good_image').style.display = 'none';
        document.getElementById('poor_image').style.display = 'none';
    }, 800);
    return judgment;   
}

smileyfacemain.addEventListener('click', () => buttonPress(song, beatInterval, 55000));
smileyfacemain.addEventListener('click', () => buttonPress(song2, beatInterval2, 50000));
smileyfacemain.addEventListener('click', () => buttonPress(song3, beatInterval3, 94000));

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        buttonPress(song, beatInterval, 55000);
    } else if (e.code === 'ArrowDown') {
        buttonPress(song, beatInterval, 55000);
    }
}); 

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        buttonPress(song2, beatInterval2, 50000);
    } else if (e.code === 'ArrowDown') {
        buttonPress(song2, beatInterval2, 50000);
    }
}); 

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        buttonPress(song3, beatInterval3, 94000);
    } else if (e.code === 'ArrowDown') {
        buttonPress(song3, beatInterval3, 94000);
    }
}); 

function buttonPress(song, interval, maximum) {
    if (!song.paused) {
        const clickTime = song.currentTime * 1000;
        let judgment = clickTiming(clickTime, interval, maximum); 
        document.querySelector('#scoretitle').innerText = "Score: " + score;
        console.log(judgment);
        console.log(clickTime);
    }    
}

let topscores = [
    {username: "Bill", score: 10000},
    {username: "Joey", score: 9000},
    {username: "Bob", score: 8000},
    {username: "George", score: 7000},
    {username: "Mark", score: 6000},
    {username: "Reginald", score: 5000},
    {username: "Fernando", score: 4000},
    {username: "Rafiki", score: 3000},
    {username: "Simba", score: 2000},
    {username: "Scar", score: 1000},
];
topscores.sort((a, b) => b.score - a.score) // ANY two objects in the array, represents two different objects being compared in the array at that time; goes through ALL the elements to do the sort.

let scorelength = topscores.length;
console.log(topscores);


function updateLeaderboard() {
    let list = document.createElement("ul");
    for (let i = 0; i < scorelength; i++) {
        let li = document.createElement("li");
        li.innerText = topscores[i].username + " " + topscores[i].score;
        list.appendChild(li); //appendChild actually populates the list in this case. This is the same operation as "push".
    }
    document.getElementById("topscorelist").replaceChildren(list); //This is how the scores get updated with a NEW list. Without this, the scores would stay the same; no new list. Allows you to see the new list on the page.
}

document.querySelector("#scoreForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    let usernameInput = document.querySelector('#username');
    let username = usernameInput.value;
    if (username !== "") {
        let newScore = score;
        if (newScore > topscores[9].score) {
                topscores.push({username: username, score: newScore});
                topscores.sort((a, b) => b.score - a.score);
                updateLeaderboard();
        }
    }
}
);   

song.addEventListener("ended", (e) => {         //Use if statement so that if score is higher than the 9th object in the array, then perform the function of adding a new high score. Username will be inputted from the user, score will automatically be added into the array. (submit button, use onClick event with the submit to update the array and put the new list on the page)
    let newScore = score;
    if (newScore > topscores[9].score) {
        document.querySelector('#highscorediv').style.display = 'block';       
    } else {
    alert("Aw, no high score. Try again!")
    };
});







song2.addEventListener("ended", (e) => {
    let newScore = score;
    if (newScore > topscores[9].score) {
        document.querySelector('#highscorediv').style.display = 'block';       
    } else {
    alert("Aw, no high score. Try again!")
    };
});

song3.addEventListener("ended", (e) => {
    let newScore = score;
    if (newScore > topscores[9].score) {
        document.querySelector('#highscorediv').style.display = 'block';       
    } else {
    alert("Aw, no high score. Try again!")
    };
});

document.addEventListener('DOMContentLoaded', function() {
    updateLeaderboard();
});
