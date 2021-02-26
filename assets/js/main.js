/**
 * Show and hide python project
 * Animation with keyframes
 */
var trinketHangman = document.querySelector(".hiddenTrinketHangman")
var showTrinketHangman = document.querySelector(".showTrinketHangman")
trinketHangman.style.display = "none"

function darkMode() {
    document.body.classList.toggle("darkMode")
    $("#skills").toggleClass("bg-white bg-box-darkMode")
    $(".latestProjects").toggleClass("bg-white bg-box-darkMode")
    $(".card").toggleClass("bg-box-darkMode")
    $(".boxCard").toggleClass("boxCardDark")
 }