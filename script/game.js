import formatedData from "./helper.js";

const loder = document.getElementById("loder");
const container = document.getElementById("container");
const answer_text = document.querySelectorAll(".answer-text");
const Question_text = document.getElementById("Question-text");
const scoreText = document.getElementById("score");
const Question_number = document.getElementById("Question-number");
const next_button = document.getElementById("next-button");
const finish_button = document.getElementById("finish-button");

const level = localStorage.getItem("Level") || "mdium";
const URL = `https://opentdb.com/api.php?amount=10&difficulty=${level}&type=multiple`;
const CORRECT_BUNUS = 10;
let formatdata = null;
let questionIndex = 0;
let correct_answer = null;
let score = 0;
let isAccepted = true;



const fetchData = async () => {
    const response = await fetch(URL);
    const json = await response.json();
    formatdata = formatedData(json.results);
    start();
}

const start = () => {
    Showquestion();
    loder.style.display = "none";
    container.style.display = "block";
}


const Showquestion = () => {
    const { question, answre, correctanswer } = formatdata[questionIndex];
    Question_text.innerText = question;
    correct_answer = correctanswer;
    answer_text.forEach((button, index) => {
        button.innerText = answre[index];
    })
}

const checkanswer = (event, index) => {
    if (!isAccepted) return;
    isAccepted = false;
    const iscorrect = correct_answer === index ? true : false;
    if (iscorrect) {
        event.target.classList.add("correct");
        score += CORRECT_BUNUS;

        scoreText.innerText = score;
    } else {
        event.target.classList.add("incorrect");
        answer_text[correct_answer].classList.add("correct");
    }
}

const nexthandler = () => {
    questionIndex++;
    if (questionIndex < formatdata.length) {
        Question_number.innerText = questionIndex + 1;
        chenghcolor();
        isAccepted = true;
        Showquestion();
    } else {
        finishhandler();
    }
}

const chenghcolor = () => {
    answer_text.forEach(button => {
        button.className = "answer-text";
    })
}

const finishhandler = () => {
    localStorage.setItem("score", JSON.stringify(score));
    window.location.assign("/end.html");
}

window.addEventListener("load", fetchData);
next_button.addEventListener("click", nexthandler)
finish_button.addEventListener("click", finishhandler)
answer_text.forEach((button, index) => {
    button.addEventListener("click", (event) => checkanswer(event, index));
})



