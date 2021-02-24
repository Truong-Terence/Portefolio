/**
 * 2 buttons linked to altert
 * PHP Not learned yet so there is no form
 * Allow to open the alert again with : display = "none" and not data-dismiss = "alert"
 */
var alertPop = document.getElementById("alert")

function PopTheAlert() {alertPop.style.display = "block"}

document.getElementById("talkButton").addEventListener("click", PopTheAlert)
document.getElementById("talkButton2").addEventListener("click", PopTheAlert)

document.getElementById("closePop").addEventListener("click", function() {
    alertPop.style.display = "none"
})

showTrinketHangman.addEventListener("click", function() {
    if (trinket.style.display === "none") {
        trinket.style.display = "block"
        showTrinketText.innerHTML = "<span>hide project</span>"
    } else {
        trinket.style.display = "none"
        showTrinketText.innerHTML = "<span>view project</span>"
    }
})