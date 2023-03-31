
// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".guitar").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".guitar")[i].addEventListener("click", function () {
        var key = this.innerHTML.toLowerCase();
        makeSound(key);
        buttonAnimation(key);
    })
}

// Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
    var key = event.key.toLowerCase();
    makeSound(key);
    buttonAnimation(key);

});


function makeSound(key) {
    switch (key) {
        case "a":
            var chordA = new Audio("sounds/chordsA.mp3");
            chordA.play();
            break;
        case "b":
            var chordB = new Audio("sounds/chordsB.mp3");
            chordB.play();
            break;
        case "c":
            var chordC = new Audio("sounds/chordsC.mp3");
            chordC.play();
            break;
        case "d":
            var chordD = new Audio("sounds/chordsD.mp3");
            chordD.play();
            break;

        case "e":
            var chordE = new Audio("sounds/chordsE.mp3");
            chordE.play();
            break;
        case "f":
            var chordF = new Audio("sounds/chordsF.mp3");
            chordF.play();
            break;
        case "j":
            var chordJ = new Audio("sounds/chordsJ.mp3");
            chordJ.play();
            break;
        case "m":
            var chordM = new Audio("sounds/chordsM.mp3");
            chordM.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(key) {
    switch (key) {
        case "a":
        case "b":
        case "c":
        case "d":
        case "e":
        case "f":
        case "j":
        case "m":
            var activeButton = document.querySelector("." + key);
            activeButton.classList.add("pressed");

            setTimeout(function () {
                activeButton.classList.remove("pressed");
            }, 100);
            break;
        default:
            break;
    }
}