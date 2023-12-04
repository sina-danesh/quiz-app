const score = document.getElementById("score");
const input = document.querySelector("input");
const btn = document.querySelector("button");

const highscorse = JSON.parse(localStorage.getItem("highscores")) || [];
const savescore = localStorage.getItem("score", JSON);
score.innerText = savescore;

const savehandler = () => {
    if (input.value === "" || savescore === null) {
        alert("invalid username or score")
    } else {
        const finalscore = { name: input.value, score:savescore };
        highscorse.push(finalscore);
        console.log(highscorse);
        highscorse.sort((a, b) =>b.score - a.score )
        console.log();
        highscorse.splice(10);
        localStorage.setItem("highscores", JSON.stringify(highscorse));
        localStorage.removeItem("score");
        window.location.assign("/")
    }
}

btn.addEventListener("click", savehandler);
