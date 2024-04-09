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
let progressBar = document.querySelector('#progress-bar')


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
}});   
    
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

function setScore(newScore) {
    score = newScore;
    document.querySelector('#scoretitle').innerText = "Score: " + score;
}

let countdown = 7

function handleCountDown(song, countdownDuration, beatInterval) {
    stopAllSongs();
    song.play();
    song.currentTime = 0;
    setScore(0);
    countdown = countdownDuration
    let id = setInterval(() => {  //Get images for the countdown!! 3, 2, 1, GO!
        countdown--;
        if (countdown === 0) {
            clearInterval(id);
            document.querySelector('#go_image').style.display='block';
            setTimeout(() => {
            document.querySelector('#go_image').style.display='none';
        }, beatInterval);
            console.log("Go!");    
        } else if (countdown === 3) {
            document.querySelector('#three_image').style.display='block';
            setTimeout(() => {
                document.querySelector('#three_image').style.display='none';
            }, beatInterval);
            console.log("3");
        } else if (countdown === 2) {
            document.querySelector('#two_image').style.display='block';
            setTimeout(() => {
                document.querySelector('#two_image').style.display='none';
            }, beatInterval);
            console.log("2");
        } else if (countdown === 1) {
            document.querySelector('#one_image').style.display='block';
            setTimeout(() => {
                document.querySelector('#one_image').style.display='none';
            }, beatInterval);
            console.log("1");
        }    
    }, beatInterval)
}


songButton.addEventListener('click', () => {
    handleCountDown(song, 15, beatInterval);  
    document.querySelector('#beatCircle').style.display='block';
});

songButton2.addEventListener('click', () => {
   handleCountDown(song2, 7, beatInterval2);
   document.querySelector('#beatCircle2').style.display='block';
});

songButton3.addEventListener('click', () => {
    handleCountDown(song3, 15, beatInterval3);
    document.querySelector('#beatCircle3').style.display='block';
});

const bpm = 126;
const beatInterval = 60000 / bpm;
let score = null;
setScore(0);

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
            setScore(score + 100);
            showperfectimage.style.display = 'block';
            wasCloseToBeat = true;
            break;
        } else if (timeDifference <= 100) {
            const showgreatimage = document.querySelector('#great_image')
            console.log("Great");
            judgment = "Great +50";
            setScore(score + 50);
            showgreatimage.style.display = 'block';
            wasCloseToBeat = true;
            break;
        } else if (timeDifference <= 150) {
            const showgoodimage = document.querySelector('#good_image')
            console.log("Good");
            judgment = "Good +25";
            setScore(score + 25);
            showgoodimage.style.display = 'block';
            wasCloseToBeat = true;
            break;
        }
    }
    if (!wasCloseToBeat) {
        const showpoorimage = document.querySelector('#poor_image')
        console.log("Poor");
        judgment = "Poor -80";
        setScore(score - 80);
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

let spacebarDown = false; //Change this to inputDown and use this also in the mouseclick function. Use 'mousedown' and 'mouseup', specifically, INSTEAD of 'click'.

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
    }
    if (e.code === 'Space' && !spacebarDown) {
        spacebarDown = true;
        buttonPress(song, beatInterval, 55000);
        buttonPress(song2, beatInterval2, 50000);
        buttonPress(song3, beatInterval3, 94000);
}});

function buttonPress(song, interval, maximum) {
    if (!song.paused && countdown === 0) { //This is what makes it so that the score isn't calculated until the countdown is over
        const clickTime = song.currentTime * 1000;
        let judgment = clickTiming(clickTime, interval, maximum); 
        document.querySelector('#scoretitle').innerText = "Score: " + score;
        console.log(judgment);
        console.log(clickTime);
    }    
}
document.addEventListener ('keyup', (e) => {
    if (e.code ==='Space') {
        spacebarDown = false;
    }
});

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

function updateLeaderboard() {
    let list = document.createElement("ol");
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
                document.querySelector('#highscorediv').style.display = 'none';   
                setScore(0); 
        }
    }  
});   

function updateScores() {
    let newScore = score;
    if (newScore > topscores[9].score) {
        document.querySelector('#highscorediv').style.display = 'block';       
    } else {
    alert("Aw, no high score. Try again!")
    setScore(0);
    };
}

song.addEventListener("ended", (e) => {         
    updateScores();
    document.querySelector('#beatCircle').style.display='none';
});

song2.addEventListener("ended", (e) => {
    updateScores();
    document.querySelector('#beatCircle2').style.display='none';
});

song3.addEventListener("ended", (e) => {
    updateScores();
    document.querySelector('#beatCircle3').style.display='none';
});



function stopAllSongs() {
    document.querySelectorAll('audio').forEach(audiofile => {
        audiofile.pause();
        audiofile.currentTime = 0;
    }
)}

document.addEventListener('DOMContentLoaded', function() {
    updateLeaderboard();
});

function timeline (audio) {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.style.width = `${progress}%`;
    console.log(progress);
}

song.addEventListener('timeupdate', () => {
    timeline(song);
});

song2.addEventListener('timeupdate', () => {
    timeline(song2);
});

song3.addEventListener('timeupdate', () => {
    timeline(song3);
});

document.addEventListener('DOMContentLoaded', function() {
    const beatCircle = document.querySelector('#beatCircle');

    function animateCircle() {
        beatCircle.classList.add('smileyimage');
        setTimeout(() => {
            beatCircle.classList.remove('smileyimage');
        }, 200);
    }    
    setInterval(animateCircle, beatInterval);
});



