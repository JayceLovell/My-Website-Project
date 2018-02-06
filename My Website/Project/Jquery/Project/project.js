//Made by Waynell Lovell
//Please Do Not Copy My Code word for word,Atleast change it up
var difficulty = 6000;
var difficultyshow = "Starting Level";
var autoAdvance = setInterval(slideshowbackground, 20000);
var autoreset = setInterval(reset, difficulty);
var i = 1;
var then;
var lifes = 10;
var gameend = false;
var lastlifecheck = 10;
var counter = 0;
var close;
var done = true;
var round = 0;

function slideshowbackground() {
    var filename = "images/background_0" + i + ".jpg";
    document.body.style.backgroundImage = "url("+filename+")";
    i++;
    if (i == 6)
        i = 1;
}
function Start() {
    document.getElementById("start").remove(document.getElementById("start"))
    document.getElementById("startbutton").remove(document.getElementById("startbutton"));
    //Make reset Button
    var btn = document.createElement("BUTTON");        // Create a <button> element
    var t = document.createTextNode("Restart");       // Create a text node
    btn.setAttribute("class", "button");
    btn.setAttribute("onclick", "Restart_Game()");
    btn.appendChild(t);                                // Append the text to <button>
    document.getElementById("Restart").appendChild(btn);                    // Append <button> to <body>

    var btn = document.createElement("BUTTON");        // Create a <button> element
    var t = document.createTextNode("Level Up");       // Create a text node
    btn.setAttribute("class", "button");
    btn.setAttribute("onclick", "LevelUp()");
    btn.appendChild(t);                                // Append the text to <button>
    document.getElementById("Level").appendChild(btn);                    // Append <button> to <body>

    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Map");
    btn.setAttribute("class", "button");
    btn.setAttribute("id", "mapbutton");
    btn.setAttribute("onclick", "Location()");
    btn.appendChild(t);
    document.getElementById("Level").appendChild(btn);

    document.getElementById("life").setAttribute("src", "images/full_health.jpg");
    then = Date.now();
    main();
    document.getElementById("game").appendChild(canvas);
}

        // Create the canvas
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.setAttribute("id", "canvas");
        canvas.width = 512;
        canvas.height = 480;
        canvas.style.cursor = "url(images/mouse_icon.png), auto";

        // Background image
        var bgReady = false;
        var bgImage = new Image();
        bgImage.onload = function () {
            bgReady = true;
        };
        bgImage.src = "images/background.png";

        // Monster image
        var monsterReady = false;
        var monsterImage = new Image();
        monsterImage.onload = function () {
            monsterReady = true;
        };
        monsterImage.src = "images/marine.png";

        // Game objects
        var monster = {};
        var monstersCaught = 0;
        reset();
// Reset the game when the player catches a monster
function reset() {
    // Throw the monster somewhere on the screen randomly
    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
}

//check if click match
canvas.addEventListener("mousedown", check, false);
function check(event) {
    var canvas = document.getElementById("canvas");
    var canvasleft = canvas.offsetLeft;
    var canvasTop = canvas.offsetTop;
    var h;
    var v;

    if (event.x != undefined && event.y != undefined) {
        h = event.x;
        v = event.y;
    }
    else // Firefox method to get the position
    {
        h = event.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
        v = event.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;
    }

    h -= canvas.offsetLeft;
    v -= canvas.offsetTop;

    if (h <= (monster.x + 51)
        && monster.x <= (h + 51)
        && v <= (monster.y + 44)
        && monster.y <= (v + 44)
        ) {
        canvas.style.cursor = "url(images/attack_icon.png), auto";
        if (difficultyshow == "Impossible")
            var randomnumber = Math.floor(Math.random() * (10 - 1 + 1)) + 100;
        else if (difficultyshow == "Hard")
            var randomnumber = Math.floor(Math.random() * (100 - 10 + 1)) + 100;
        else
            var randomnumber = Math.floor(Math.random() * (500 - 100 + 1)) + 100;

        difficultycheck(randomnumber);
        clearInterval(autoreset);
        autoreset = setInterval(reset, difficulty);
        ++monstersCaught;
        reset();
    }
    else
    {
        canvas.style.cursor = "url(images/mouse_icon.png), auto";
        clearInterval(autoreset);
        reset();
        autoreset = setInterval(reset, difficulty);
        lifes = lifes - 1;
        if ((lifes == 0) && (monstersCaught > 25) && done) {
            lifes = lifes + 1;
            One_Last_Chance();
            done = false;
        }
    }
    switch (lifes) {
        case 0:
        case 1:
        case 2:
        case 3:
            document.getElementById("life").setAttribute("src", "images/low_health.jpg");
            break;
        case 4:
        case 5:
        case 6:
        case 7:
            document.getElementById("life").setAttribute("src", "images/half_health.jpg");
            break;
        default:
            document.getElementById("life").setAttribute("src", "images/full_health.jpg");
    }
    if (lifes == 0)
    {
        GameOver();
    }
    if (monstersCaught == lastlifecheck)
    {
        lastlifecheck = lastlifecheck + 10;
        lifes = lifes + 1;
        counter++;
    }
    if (counter == 2) {
        Bonus();
    }
}

//Checks Difficulty
function difficultycheck(random) {

    difficulty = difficulty - random;
    if (difficulty <= 1) {
        difficultyshow = "Impossible";
        difficulty = 1;
    }
    else if (difficulty < 500)
        difficultyshow = "Impossible";
    else if (difficulty < 1000)
        difficultyshow = "Hard";
    else if (difficulty < 2000)
        difficultyshow = "Normal";
    else if (difficulty < 5000)
        difficultyshow = "Easy";
    else if (difficulty >= 6000)
        difficultyshow = "Starting Level";
}

// Draw everything
render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }
    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Marines Killed: " + monstersCaught, 1, 1);
    ctx.fillText("Difficulty: " + difficultyshow, 1, 20);
    ctx.fillStyle = "red";
    ctx.fillText("Lifes: " + lifes, 400, 1);
    ctx.fillStyle = "black";
    ctx.font = "12px Helvetica";
    ctx.fillText("version: 4.1.2", 430, 450);
};
// The main game loop
main = function () {
    var now = Date.now();
    var delta = now - then;

    render();
    then = now;

    // Request to do this again ASAP
    requestAnimationFrame(main);
}

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

function Restart_Game() {
    if (gameend) {
        StartCookies();
        round++;
        document.getElementById("game").style.display = "";
        document.getElementById("game").style.width = "";
        document.getElementById("game").style.height = "";
        document.getElementById("game").style.margin = "";
        document.getElementById("game").style.backgroundImage = "";
        document.getElementById("life").setAttribute("src", "images/full_health.jpg");
 
        // Create the canvas
        canvas = document.createElement("canvas");
        ctx = canvas.getContext("2d");
        canvas.setAttribute("id", "canvas");
        canvas.width = 512;
        canvas.height = 480;
        canvas.style.cursor = "url(images/mouse_icon.png), auto";

        // Background image
        bgReady = false;
        bgImage = new Image();
        bgImage.onload = function () {
            bgReady = true;
        };
        bgImage.src = "images/background.png";

        // Monster image
        monsterReady = false;
        monsterImage = new Image();
        monsterImage.onload = function () {
            monsterReady = true;
        };
        monsterImage.src = "images/marine.png";

        // Game objects
        monster = {};
        monstersCaught = 0;
        then = Date.now();
        main();
        document.getElementById("game").appendChild(canvas);
        difficulty = 6000;
        difficultycheck(0);
        lifes = 10;
        reset();
        autoreset = setInterval(reset, difficulty);
        gameend = false;
        canvas.addEventListener("mousedown", check, false);
    }
    else {
        clearInterval(autoreset);
        monstersCaught = 0;
        difficulty = 6000;
        difficultycheck(0);
        lifes = 10;
        reset();
        autoreset = setInterval(reset, difficulty);
    }
}

function LevelUp() {
    switch (difficultyshow) {
        case "Starting Level":
            difficulty = 4999;
            break;
        case "Easy":
            difficulty = 1999;
            break;
        case "Normal":
            difficulty = 999;
            break;
        case "Hard":
            difficulty = 499;
            break;
        default:
            alert("really that easy for you?");
    }
    clearInterval(autoreset);
    difficultycheck(0);
    reset();
    autoreset = setInterval(reset, difficulty);
}
function Location() {
    document.getElementById("map").style.display = "";
    document.getElementById("Level").removeChild(document.getElementById("mapbutton"));
    if (typeof google !== 'object') {
        var script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&callback=geoTest";
        document.body.appendChild(script);
    }
}
function geoTest() {
    waitForUser = setTimeout(fail, 10000);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(createDirections, fail, { timeout: 10000 });
    } else {
        fail();
    }
}
function createDirections(position) {
    clearTimeout(waitForUser);
    //   console.log("Longitude: " + position.coords.longitude);
    //   console.log("Latitude: " + position.coords.latitude);
    var currPosLat = position.coords.latitude;
    var currPosLng = position.coords.longitude;
    var mapOptions = {
        center: new google.maps.LatLng(currPosLat, currPosLng),
        zoom: 11
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
function fail() {
    //   console.log("Geolocation information not available or not authorized.");
    document.getElementById("map").innerHTML = "Unable to access your current location.";
}
function GameOver() {
    var can = document.getElementById("canvas");
    var box = document.getElementById("game");
    clearInterval(autoreset);
    box.removeChild(can);
    gameend = true;
    document.getElementById("game").style.display = "block";
    document.getElementById("game").style.width = "512px";
    document.getElementById("game").style.height = "480px";
    document.getElementById("game").style.margin = "auto";
    document.getElementById("game").style.backgroundImage = "url(images/gameover.gif)";
}
function Bonus() {
    canvas.removeEventListener("mousedown", check);
    document.getElementById("bonus").style.backgroundImage = "url(images/Bonus.gif)";
    document.getElementById("bonus").style.width = "512px";
    document.getElementById("bonus").style.height = "480px";
    close = setInterval(EndBonus, 3000);
}
function EndBonus() {
    document.getElementById("bonus").style.backgroundImage = "";
    document.getElementById("bonus").style.width = "";
    document.getElementById("bonus").style.height = "";
    clearInterval(close);
    counter = 0;
    for (var i = 0; i < 5; i++) {
        monstersCaught++;
    }
    reset();
    canvas.addEventListener("mousedown", check, false);
}
function One_Last_Chance() {
    canvas.removeEventListener("mousedown", check);
    document.getElementById("bonus").style.backgroundImage = "url(images/onelastchance.gif)";
    document.getElementById("bonus").style.width = "512px";
    document.getElementById("bonus").style.height = "379px";
    close = setInterval(EndLastChance, 3000);
}
function EndLastChance() {
    document.getElementById("bonus").style.backgroundImage = "";
    document.getElementById("bonus").style.width = "";
    document.getElementById("bonus").style.height = "";
    clearInterval(close);
    counter = 0;
    reset();
    canvas.addEventListener("mousedown", check, false);
}
function StartCookies() {
    document.cookie = "username" + round;
    document.cookie = "highscores" + round;
    var user = getCookie("username" + round);

        user = prompt("Please enter your name for highscores:", "");
        if (user != "" && user != null) {
            setCookie("username" + round, user, 1);
            setCookie("highscores" + round, monstersCaught, 1);
        }
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function HighScore() {
    var para;
    var node;
    document.getElementById("Score").innerHTML = "";
    if (getCookie("username" + 0) == null || getCookie("username" + 0) == "") {
        alert("There is No High Scores");
    }
    else {
        for (var i = 0; i < round; i++) {
            var name = getCookie("username" + i);
            var score = getCookie("highscores" + i);
            para = document.createElement("h5");
            node = document.createTextNode(name +" : " + score);
            para.appendChild(node);
            document.getElementById("Score").appendChild(para);
        }
    }
    var button = document.createElement("BUTTON");
    var text = document.createTextNode("HighScores");
    button.appendChild(text);
    button.setAttribute("onclick", "HighScore()");
    button.setAttribute("class", "button");
    document.getElementById("Score").appendChild(button);
}