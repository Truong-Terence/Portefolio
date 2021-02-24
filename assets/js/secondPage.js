var trinketCasino = document.querySelector(".hiddenTrinketCasino")
var showTrinketCasino = document.querySelector(".showTrinketCasino")
trinketCasino.style.display = "none"

var trinketDico = document.querySelector(".hiddenTrinketDico")
var showTrinketDico = document.querySelector(".showTrinketDico")
trinketDico.style.display = "none"

showTrinketHangman.addEventListener("click", function() {
    if (trinketHangman.style.display === "none") {
        trinketHangman.style.display = "block"
        trinketCasino.style.display = "none"
        trinketDico.style.display = "none"
    } else {
        trinketHangman.style.display = "none"
    }
})

showTrinketDico.addEventListener("click", function() {
    if (trinketDico.style.display === "none") {
        trinketDico.style.display = "block"
        trinketCasino.style.display = "none"
        trinketHangman.style.display = "none"
    } else {
        trinketDico.style.display = "none"
    }
})

showTrinketCasino.addEventListener("click", function() {
    if (trinketCasino.style.display === "none") {
        trinketCasino.style.display = "block"
        trinketDico.style.display = "none"
        trinketHangman.style.display = "none"
    } else {
        trinketCasino.style.display = "none"
    }
})