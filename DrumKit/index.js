
// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".instrument").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document
      .querySelectorAll(".instrument")
      [i].addEventListener("click", function () {
        var key = this.innerHTML.toLowerCase();
        makeSound(key);
        buttonAnimation(key);
      });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
    var key = event.key.toLowerCase();
    makeSound(key);
    buttonAnimation(key);

});


function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/kick-bass.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/crash.mp3");
            kick.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(key) {
    switch (key) {
        case "w":
        case "a":
        case "s":
        case "d":
        case "j":
        case "k":
        case "l":
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