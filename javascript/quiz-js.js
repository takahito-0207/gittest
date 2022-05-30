const seikai = "正解";
const huseikai = "不正解";

document.getElementById('answerA').addEventListener('click', function () {
    this.style.backgroundColor = "yellow";
    this.textContent = huseikai;
    this.style.fontSize = "30px";
    this.style.color = "black";
})
document.getElementById('answerB').addEventListener('click', function () {
    this.style.backgroundColor = "yellow";
    this.textContent = huseikai;
    this.style.fontSize = "30px";
    this.style.color = "black";
})
document.getElementById('answerC').addEventListener('click', function () {
    this.style.backgroundColor = "white";
    this.textContent = seikai;
    this.style.fontSize = "30px";
    this.style.color = "red";
})
document.getElementById('answerD').addEventListener('click', function () {
    this.style.backgroundColor = "yellow";
    this.textContent = huseikai;
    this.style.fontSize = "30px";
    this.style.color = "black";
})
