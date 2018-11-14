
var wins = 0;
var losses = 0;
var targetNumber = Math.floor((Math.random() * 120) + 19);
console.log(targetNumber);

$("#random-number").text(targetNumber);
var counter = 0;
var numberOptions = [10, 5, 3, 7];

// define function here for creating a randomized number, return in the wins/losses

function gemReset() {

    $("#crystals").empty()

    for (var i = 0; i < numberOptions.length; i++) {
        numberOptions[i] = Math.floor((Math.random() * 13) + 1);
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", `assets/images/${i}.png` );
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        $("#crystals").append(imageCrystal);
    }
}

function reset() {
    // things to reset
    gemReset();
    $("#totalguesses").text(0);
    counter = 0;    
    targetNumber = Math.floor((Math.random() * 108) + 12);
    // - new target number
    $("#random-number").text(targetNumber);
    console.log(targetNumber);
}

gemReset()
// This time, our click event applies to every single crystal on the page. Not just one.
$("#crystals").on("click",".crystal-image", function () {
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    // alert("New score: " + counter);
    // The player wins if their total score matches the random number from the beginning of the game.
    // The player loses if their score goes above the random number.
    // The game restarts whenever the player wins or loses.
    $("#totalguesses").text(counter);
    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        $("#random-number").text(targetNumber);
        reset();
        $("#winsText").text("Wins: " + wins);
    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
        losses++;
        $("#random-number").text(targetNumber);
        reset();
        $("#lossesText").text("Losses: " + losses);

    }


})

;