$(document).ready(function() {

  /*
    click
    blur
    focus
    change
    mouseenter & mouseleave

    $("#").on("focus", function(){

    });
  */

  // Changes the "type here" background to yellow when focused on
  $("#mySingleLineText").on("focus", function() {
    $("#log").append("<br>input focus");
    $(this).css("background-color", "#FDD7E4");
  })

  // Changes the "type here" background back to white
  .on("blur", function() {
    $("#log").append("<br>input blur");
    $(this).css("background-color", "#FFF");
  });

  // Give the user a message about their selection
  $("#mySelect").on("change", function() {
    $("#log").append("<br>input change");
    var val = $(this).val();
    $("#mySelectMessage").html(val + " times the coziness!")
  });

  // Mouse Enter - Mouse Leave
  $("#myButton").on("mouseenter", function() {
    $("#log").append("<br>Button mouseenter");
    $(this).text("SO COZY!");
  })

  .on("mouseleave", function() {
    $("#log").append("<br>Button mouseleave");
    $(this).text("Place Order!");
  });



  $("#myButton").on("click", function() {

    // The more efficient way of writing the code (userOrder)
    var userOrder = {};

    userOrder.myInput = $("#mySingleLineText").val();
    userOrder.myTextarea = $("#myTextarea").val();
    userOrder.mySelect = $("#mySelect").val();
    userOrder.myRadio = $("[name = 'scent']:checked").val();
    userOrder.myCheckValues = [];

    $("[name='wick']:checked").each(function() {
      userOrder.myCheckValues.push($(this).val());
    });

    $("#log").append("<br>User clicked the button");
    $("#log").append("<br>Value of input is: " + userOrder.myInput);
    $("#log").append("<br>Value of the textarea is: " + userOrder.myTextarea);
    $("#log").append("<br>Value of select is: " + userOrder.mySelect);
    $("#log").append("<br>Value of checks is: " + userOrder.myCheckValues.join());
    $("#log").append("<br>Value of radio is: " + userOrder.myRadio);
    $("#log").append("<br>Your order is being processed!");
    $("#log").append("<br><br>Value of userOrder is: " + JSON.stringify(userOrder));

    /*
        var myInput = $("#mySingleLineText").val();
        var myTextarea = $("#myTextarea").val();
        var mySelect = $("#mySelect").val();
        var myRadio = $("[name = 'gender']:checked").val();

        var myCheckValues = [];
        //each is a jquery loop for objects/arrays
        $("[name='vehicle']:checked").each(function() {
          myCheckValues.push($(this).val());
        });



        $("#log").append("<br>User clicked the button");
        $("#log").append("<br>Value of input is: " +myInput);
        $("#log").append("<br>Value of the textarea is: " +myTextarea);
        $("#log").append("<br>Value of select is: " +mySelect);
        $("#log").append("<br>Value of checks is: " +myCheckValues.join());

    */


  });
});
