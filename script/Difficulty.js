const btns = document.querySelectorAll("button");


const btnshandler = (event) => {
    const level = event.target.innerText.toLowerCase();
    console.log(level);
    localStorage.setItem("Level", level);
    window.location.assign("/");
}

btns.forEach(btn => {
    btn.addEventListener("click", btnshandler);
})