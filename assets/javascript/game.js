
var wins = 0;
var losses = 0;
var targetNumber = Math.floor((Math.random() * 108) + 12);
// The random number shown at the start of the game should be between 19 - 120.
console.log(targetNumber);

$("#random-number").text(targetNumber);
var counter = 0;
var numberOptions = [10, 5, 3, 7];

// function ranNumber () {
//     Math.floor((Math.random() * 100) + 1);
// }
// define function here for creating a randomized number, return in the wins/losses

// $(document).ready(function) {}

function gemReset() {

    $("#crystals").empty()

    for (var i = 0; i < numberOptions.length; i++) {
        numberOptions[i] = Math.floor((Math.random() * 13) + 1);
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "http://www.ehashley.com/assets/images/categories/wholesale-swarovski-crystal-shimmer-effect.jpg");
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        $("#crystals").append(imageCrystal);

    }

}

function reset() {
    // things to reset
    // - values of crystals
    gemReset();
    // - counter to 0
    $("#totalscore").text(0);
    counter = 0;    
    targetNumber = Math.floor((Math.random() * 108) + 12);
    // - new target number
    $("#random-number").text(targetNumber);
}

gemReset()
// This time, our click event applies to every single crystal on the page. Not just one.
$("#crystals").on("click",".crystal-image", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    // alert("New score: " + counter);
    $("#totalscore").text(counter);
    // The player wins if their total score matches the random number from the beginning of the game.
    // The player loses if their score goes above the random number.
    // The game restarts whenever the player wins or loses.
    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        $("#random-number").text(targetNumber);
        reset();
        $("#winsText").text("Wins " + wins);
    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
        losses++;
        $("#random-number").text(targetNumber);
        reset();
        $("#lossesText").text("Losses " + losses);

    }



})

;