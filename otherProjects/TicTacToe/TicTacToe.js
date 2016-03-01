$(document).ready(function() {

  var circleOrEx = "o"; // this represents who goes first - "o" goes first in this case.
  var isGameInProgress = true; // the tictactoe board is an active game when the document loads.
  var winningCombos = { // these values outline the winning combinations starting from each possible sqaure on the board, the game board is a series of nine square boxes but because it is an array the variables go from 0 to 8.
    // the board is written out as follows:

      // 0 | 1 | 2
     // ---------
     // 3 | 4 | 5
     // ---------
     // 6 | 7 | 8


    0: [ //0 is key (winning combinations starting from 0 or top left square)
      [1, 2], //this multiDimensional Array is values - The user wins if they enter in three of the same values across the top three squares
      [3, 6], //The user wins if they enter three of the same values down the left column
      [4, 8]//The user wins if they enter three of the same values from the top left corner to the bottom right corner
    ],
    1: [ //The winning combinations when starting from 1 or the top middle square
      [0, 2], //User wins if they enter three of the same values across the top three squares
      [4, 7]  //User wins if they enter the three same values down the middle column of squares

    ],    // Because of the location of 1, 3, 5 and 7 there cannot be diagonal winning combinations

    2: [ //The winning combinations when starting from 2 or the top right square
      [0, 1], //User wins if they enter three of the same values across the top squares (2,1,0)
      [5, 8], //User wins if they enter three of the same values down the right column (2,5,8)
      [4, 6]  //User wins if they enter three of the same values diagonally from the top right to the bottom left (2,4,6)
    ],
    3: [ //The winning combinations when starting from 3 or the middle left square
      [0, 6], //User wins if they enter three of the same values down the left column (0,3,6)
      [4, 5]  //User wins if they enter the same values across the middle row (3,4,5)
    ],
    4: [  //The winning combinations when starting from 4 of the square in the middle
      [1, 8], //Should not be a winning combination
      [2, 6], //User wins if they enter three of the same values from the top left square to the bottom right square (0,4,8)
      [1, 7], //User wins if they enter three of the same values down the middle column (1,4,7)
      [3, 5] // User wins if they enter three of the same values across the middle row (3,4,5)
    ],
    5: [ //The winning combinations when starting from 5 or the sqaure in the middle right square
      [2, 8], //User wins if they enter three of the same values down the far right column (2,5,8)
      [3, 4] //User wins if they enter three of the same values across the middle row (5,4,3)
    ],
    6: [ //Winning combinations when starting from 6 or the bottom left square
      [0, 3], //User wins if they enter three of the same values down the left column (0,3,6)
      [2, 4], //User wins if they enter three of the same values from the bottom right square to the top left square (6,4,2)
      [7, 8] //User wins if they enter three of the same values across the bottom row (6,7,8)
    ],
    7: [ //Winning combinations when starting from 7 or the bottom middle square
      [1, 4], //User wins if they enter three of the same values down the middle column (1,4,7)
      [6, 8] //User wins if they enter three of the same value across the bottom row (6,7,8)
    ],
    8: [ //Winning combinations when starting from 8 or the bottom right square
      [0, 4], //User wins if they enter three of the same values from top left corner square to botton right corner square (8,4,0)
      [2, 5], //User wins if they enter three of the same values down the right column (2,5,8)
      [6, 7] //User wins if they enter three of the same values across the bottom row (6,7,8)
    ]
  };

  //Explain what this event does
  //When the user clicks on the board, the function runs and the game is now in progress
  $("#board").find("div").on("click", function() {

    if (isGameInProgress && $(this).hasClass("empty")) { //Within the board, this removes the empty space and adds either the "O" or "X" value.
      $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span"); //Allows the user to inset an "X" or "O" value into the square.

      checkIfWon($(this).index(), circleOrEx); //Function determines the turn cycle of the game

      if (circleOrEx === "o") { //If "O" has played their turn, run the code on line 69 so "X" can play
        circleOrEx = "x"; // It's "X"'s turn now
      } else {
        circleOrEx = "o"; //It's not "o"s turn again
      }
    }

  });

  // Explain what this event does
  // This event runs the function after the button with 'new game' id has been clicked.
  $("#newGame").on("click", function() {

    var boardSquares = $("#board").find("div"); //what is this variable - BoardSquares is now every div element within #board, the divs are each of the nine blank squares that make up the game.
    var firstEmptyMemorySquare = $(".container").find(".nine").filter(function() { //bonus Explain what filter does -
      return $.trim($(this).text()) === "" && $(this).children().length === 0;
    }).not("#board").first();

    if (firstEmptyMemorySquare.length == 1) { //This if satement places a previously played game in an EmptyMemorySquare
      firstEmptyMemorySquare.html($("#board").html());
    } else {
      $(".container").find(".nine").not("#board").empty();
      $(".container").find(".nine").first().html($("#board").html());
    }

    //This deletes anything in the empty class to games that are in progress,
    //This allows the user to enter "X" or "O" in the boardSquares
    boardSquares.each(function() {
      $(this).addClass("empty").empty();
    })
    isGameInProgress = true;
  })

  //Explain this funciton, describe the parameters; what are the possible values of the paramaters
  //This function checks to see if a player has won,
  //ChosenSquare is the final value in a winning combination;
  //The possible values for the chosenSquare parameter is (0) to (8)
  function checkIfWon(chosenSquare) {

    var mulitArr = winningCombos[chosenSquare];
    var playerWon;

    for (var i = 0; i < mulitArr.length; i++) { //The length of the multidimensional array is provided by the nested loop
      playerWon = true;
      for (var j = 0; j < mulitArr[i].length; j++) {
        if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) { //Explain this condition
          playerWon = false;
        }
      }

      if (playerWon) {  //Remaining lines affect the board when a player enters a winning combination

        for (var j = 0; j < mulitArr[i].length; j++) {
          $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //Makes the first two inputs of the winning combination the colour green

        }
        $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green"); //This makes the last input of the winning combination the colour green
        alert("Winner is " + circleOrEx.toUpperCase() + "!"); //Alerts the users who the winner of the game is
        isGameInProgress = false; //Scince a player has won, the game is no longer in progress
        return false; //This exits the loop
      }
    }


  }
})
