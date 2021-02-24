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

/**
 * Show and hide python project
 * Animation with keyframes
 */
var trinket = document.querySelector(".hiddenTrinket")
var showTrinket = document.querySelector(".showTrinket")
var showTrinketText = document.querySelector(".showTrinket span")
trinket.style.display = "none"


showTrinket.addEventListener("click", function() {
    if (trinket.style.display === "none") {
        $(".hiddenTrinketMain").removeClass("hideBackTrinket").addClass("hiddenTrinket")
        trinket.style.display = "block"
        showTrinketText.innerHTML = "<span>hide project</span>"
    } else {
        $(".hiddenTrinketMain").removeClass("hiddenTrinket").addClass("hideBackTrinket")
        trinket.style.display = "none"
        showTrinketText.innerHTML = "<span>view project</span>"
    }
})
