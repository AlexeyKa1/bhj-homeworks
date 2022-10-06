const addText = function () {
    const timer = document.getElementById("timer");
    timer.textContent -= 1;
    if (timer.textContent <= 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(inervalID);
    }
}
const inervalID = setInterval(addText, 1000);