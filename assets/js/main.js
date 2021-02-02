var btn = document.getElementById("talkButton")
var alertPop = document.getElementById("alert")

btn.addEventListener("click", function() {
    alertPop.style.display = "block"
})

closePop.addEventListener("click", function() {
    alertPop.style.display = "none"
})

var btn2 = document.getElementById("talkButton2")
var alertPop2 = document.getElementById("alert2")
var closePop2 = document.getElementById("closePop2")

btn2.addEventListener("click", function() {
    alertPop2.style.display = "block"
})

closePop2.addEventListener("click", function() {
    alertPop2.style.display = "none"
})