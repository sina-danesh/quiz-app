const highscors = JSON.parse(localStorage.getItem("highscores")) || [];

const list = document.querySelector("ol");

const contant = highscors.map((score, index) => {
    return `<li>
    <span>${index + 1}</span>
    <p>${score.name}</p>
    <span>${score.score}</span>
   </li> `
})

list.innerHTML = contant.join("");