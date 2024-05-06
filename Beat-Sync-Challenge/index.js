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
let topscorelisteasy = document.querySelector("#topscorelisteasy")
let topscorelistmedium = document.querySelector("#topscorelistmedium")
let topscorelisthard = document.querySelector("#topscorelisthard")

playnow.addEventListener('click', onPlayNowClick);

function onPlayNowClick() {
    document.querySelector('.intropage').style.display = "none";
    document.querySelector('#wholegame').style.display = 'block';  
    stopAllSongs();
}

leaderboards.addEventListener('click',onLeaderboardsClick)

function onLeaderboardsClick() {
    document.querySelector('#wholegame').style.display = "none";
    document.querySelector('#leaderboardcontainer').style.display = "flex";
}

howtoplay.addEventListener('click', onHowToPlayClick)

function onHowToPlayClick() {
    modal.show();
    modal.style.display = "flex";
}

back.addEventListener('click', onBackClick)

function onBackClick() {
    document.querySelector('#leaderboardcontainer').style.display="none";
    document.querySelector('#wholegame').style.display="block";
}

gotIt.addEventListener('click', () => {
    modal.close();
    modal.style.display = "none";
})

howtoplay2.addEventListener('click', onHowToPlayClick)

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        if (song && !song.paused) {
            smileyfacemain.classList.add('smileyimage');
            resetAnimation(smileyfacemain);
       } else if (song2 && !song2.paused) {
        smileyfacemain.classList.add('smileyimage2');
        resetAnimation(smileyfacemain);
       } else if (song3 && !song3.paused) {
        smileyfacemain.classList.add('smileyimage3');
        resetAnimation(smileyfacemain);
       }
    }
});

function resetAnimation(e) {
    let animations = e.getAnimations();
        for (let animation of animations) {
            animation.currentTime = 0;
    }
}

smileyfacemain.addEventListener('click', () => {
    if (song && !song.paused) {
        smileyfacemain.classList.add('smileyimage');
        resetAnimation(smileyfacemain);
    } else if (song2 && !song2.paused) {
        smileyfacemain.classList.add('smileyimage2');
        resetAnimation(smileyfacemain);
    } else if (song3 && !song3.paused) {
        smileyfacemain.classList.add('smileyimage3');
        resetAnimation(smileyfacemain);
    }
});

smileyfacemain.addEventListener('animationend', (e) => {
    smileyfacemain.classList.remove('smileyimage', 'smileyimage2', 'smileyimage3');
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
    document.querySelector('#warm_up_image').style.display='block';
    countdown = countdownDuration
    let id = setInterval(() => {
        countdown--;
        if (countdown === 0) {
            clearInterval(id);
            document.querySelector('#go_image').style.display='block';
            setTimeout(() => {
            document.querySelector('#go_image').style.display='none';
        }, beatInterval);
            console.log("Go!");    
        } else if (countdown === 3) {
            document.querySelector('#warm_up_image').style.display='none';
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

function clickTiming(clickTimestamp, interval, maximum) {
    let wasCloseToBeat = false;
    let judgment = "Oh no!";
    for (let keyBeat = interval; keyBeat <= maximum; keyBeat += interval) {
        const timeDifference = Math.abs(clickTimestamp - keyBeat);
        if (timeDifference <= 50) {
            const showperfectimage = document.querySelector('#perfect_image')
            console.log("Perfect");
            judgment = "Perfect +100";
            setScore(score + 100);
            showperfectimage.style.display = 'block';
            wasCloseToBeat = true;
            break;
        } else if (timeDifference <= 80) {
            const showgreatimage = document.querySelector('#great_image')
            console.log("Great");
            judgment = "Great +50";
            setScore(score + 50);
            showgreatimage.style.display = 'block';
            wasCloseToBeat = true;
            break;
        } else if (timeDifference <= 120) {
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
    }, 200);
    return judgment;   
}

let mouseButtonDown = false

smileyfacemain.addEventListener('mousedown', () => {
    if (!mouseButtonDown && !spacebarDown) {
        mouseButtonDown = true;
        buttonPress(song, beatInterval, 55000);
        buttonPress(song2, beatInterval2, 50000);
        buttonPress(song3, beatInterval3, 94000);
    }
});

smileyfacemain.addEventListener('mouseup', () => {
    mouseButtonDown = false;
});

let spacebarDown = false;

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
    }
    if (e.code === 'Space' && !spacebarDown && !mouseButtonDown) {
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

let topscoreseasy = [
    {username: "Bill", score: 7000},
    {username: "Joey", score: 6000},
    {username: "Bob", score: 5000},
    {username: "George", score: 4500},
    {username: "Mark", score: 4000},
    {username: "Reginald", score: 3500},
    {username: "Fernando", score: 3000},
    {username: "Rafiki", score: 2500},
    {username: "Simba", score: 2000},
    {username: "Scar", score: 1500},
];

let topscoresmedium = [
    {username: "Billy", score: 6000},
    {username: "Joey", score: 5500},
    {username: "Bob", score: 5000},
    {username: "George", score: 4500},
    {username: "Mark", score: 4000},
    {username: "Reginald", score: 3500},
    {username: "Fernando", score: 3000},
    {username: "Rafiki", score: 2500},
    {username: "Simba", score: 2000},
    {username: "Scar", score: 1500},
];

let topscoreshard = [
    {username: "Bill", score: 15000},
    {username: "Joey", score: 14000},
    {username: "Zelda", score: 13000},
    {username: "George", score: 12000},
    {username: "Mark", score: 11000},
    {username: "Reginald", score: 10000},
    {username: "Fernando", score: 9000},
    {username: "Rafiki", score: 8000},
    {username: "Simba", score: 7000},
    {username: "Scar", score: 6000},
];

let storedLeaderboardsString = localStorage.getItem('leaderboards');
if (storedLeaderboardsString) {
    let storedLeaderboards = JSON.parse(storedLeaderboardsString);
    topscoreseasy = storedLeaderboards.easy;
    topscoresmedium = storedLeaderboards.medium;
    topscoreshard = storedLeaderboards.hard;
}

topscoreseasy.sort((a, b) => b.score - a.score);
topscoresmedium.sort((a, b) => b.score - a.score);   
topscoreshard.sort((a, b) => b.score - a.score);        
                              // ANY two objects in the array, represents two different objects being compared in the array at that time; goes through ALL the elements to do the sort.
updateLeaderboard(topscoreseasy, topscorelisteasy);
updateLeaderboard(topscoresmedium, topscorelistmedium);
updateLeaderboard(topscoreshard, topscorelisthard);

//So I need to make three total leaderboard. But I don't want a ton of code repeated. Need to combine similarly to how I did before. Need to change all the topscores. Need a topscoreseasy array, topscoresmedium array, and topscoreshard array.
//Then I need to have updateLeaderboard with parameters like updateLeaderboard(topscore) and have the argument be for one of the three leaderboards.

function updateLeaderboard(topscores, list) {
    let items = [];
    for (let i = 0; i < topscores.length; i++) {
        let li = document.createElement("li");
        li.className = "highscoreitem";
        li.innerText = topscores[i].username + " " + topscores[i].score;
        items.push(li); //appendChild actually populates the list in this case. This is the same operation as "push".
    }
    list.replaceChildren(...items); //This is how the scores get updated with a NEW list. Without this, the scores would stay the same; no new list. Allows you to see the new list on the page.
}


let currentLeaderboard = null;
let currentLeaderboardEl = null;

function storeLeaderboards() {
    localStorage.setItem('leaderboards', JSON.stringify({
        easy: topscoreseasy,
        medium: topscoresmedium,
        hard: topscoreshard
    }));
}

document.querySelector("#scoreForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    let usernameInput = document.querySelector('#username');
    let username = usernameInput.value;
    if (username !== "") {
        let newScore = score;
        if (newScore > currentLeaderboard[9].score) {
                currentLeaderboard.push({username: username, score: newScore});
                currentLeaderboard.sort((a, b) => b.score - a.score);
                currentLeaderboard.splice(10, 1);
                storeLeaderboards();
                updateLeaderboard(currentLeaderboard, currentLeaderboardEl);   
                document.querySelector('#highscorediv').style.display = 'none';   
                setScore(0); 
        }
    }  
});   



function updateScores(leaderboard, leaderboardEl) {
    let newScore = score;
    if (newScore > leaderboard[9].score) {
        currentLeaderboard = leaderboard;
        currentLeaderboardEl = leaderboardEl;
        document.querySelector('#highscorediv').style.display = 'block';       
    } else {
    alert("Aw, no high score. Try again!")
    setScore(0);
    };
}


song.addEventListener("ended", (e) => {         
    updateScores(topscoreseasy, topscorelisteasy);
    document.querySelector('#beatCircle').style.display='none';
});

song2.addEventListener("ended", (e) => {
    updateScores(topscoresmedium, topscorelistmedium);
    document.querySelector('#beatCircle2').style.display='none';
});

song3.addEventListener("ended", (e) => {
    updateScores(topscoreshard, topscorelisthard);
    document.querySelector('#beatCircle3').style.display='none';
});



function stopAllSongs() {
    document.querySelectorAll('audio').forEach(audiofile => {
        audiofile.pause();
        audiofile.currentTime = 0;
    });

    document.querySelectorAll('#beatCircle, #beatCircle2, #beatCircle3').forEach(circle => {
        circle.style.display='none';
    });
}

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

