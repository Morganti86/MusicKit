
// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".keyboard").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".keyboard")[i].addEventListener("click", function () {
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
        case "c":
            var doo = new Audio("sounds/do-stretched.mp3");
            doo.play();
            break;
        case "d":
            var re = new Audio("sounds/re-stretched.mp3");
            re.play();
            break;
        case "e":
            var mi = new Audio("sounds/mi-stretched.mp3");
            mi.play();
            break;
        case "f":
            var fa = new Audio("sounds/fa-stretched.mp3");
            fa.play();
            break;

        case "g":
            var sol = new Audio("sounds/sol-stretched.mp3");
            sol.play();
            break;
        case "a":
            var la = new Audio("sounds/la-stretched.mp3");
            la.play();
            break;
        case "b":
            var si = new Audio("sounds/si-stretched.mp3");
            si.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(key) {
    switch (key) {
        case "c":
        case "d":
        case "e":
        case "f":
        case "g":
        case "a":
        case "b":
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