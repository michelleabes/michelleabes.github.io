$(document).ready(function() {

    //get all the nav li, add click event
    $(".nav").find("li").on("click", function() {

        //remove all active class
        $(".nav").find("li").removeClass("active");

        //add active class to clicked li
        $(this).addClass("active");

        var page = $(this).attr("id");
        getPartial(page);

      }) //click

    function getPartial(partial) {


      if (partial == "homePage") { //ajax get home.html

        $.get("partials/home.html", function(data) {
          $("#pageContent").html(data);
          $('.carousel').carousel();

        })

      } else if (partial == "whatPage") { //ajax models.html

        // paste the getJSON here; change the append id; change the file name

        $.getJSON("jsonDatabase/final.json", function(data) {

          console.dir(data);
          var html = "";

          $.each(data, function(index, item) {
              html += '<div class="col-md-4">' +
                '<div class="catName"><small></small>' + item.name + '</div>' +
                '<div class="catType"><small>type: </small>' + item.type + '</div>' +
                '<div class="catGender"><small>gender: </small>' + item.gender + '</div>' +
                '<img class="catImage" src= "' + item.image + '"/>' +
                // '<div class="commentsContainer">';
                // deleted commentsContainer
                '<div class="panel panel-default">' + //added
                '<div class="panel panel-heading"> Renter Comments </div>' //added
              $.each(item.comments, function(ind, i) {
                  html += '<div class = "panel-body">' + //added
                    '<div class="renterName"> ' + i.username + '</div>' +
                    '<div class="renterComment">' + i.comment + '</div>' +
                    '<div class="renterStars">';


                  var numStars = Number(i.stars);

                  for (var i = 1; i <= 5; i++) {
                    if (i <= numStars) {
                      html += '<img src="images/fullstar.png"/>';
                    } else {
                      html += '<img src="images/emptystar.png"/>';
                    }
                  }

                  html += '</div>' +
                    '</div>'; //end stars
                }) //each comment

              html += '</div>' + //commentsContainer
                '</div>'; //col-md-4

            }) //each cat
          $("#pageContent").html(html);
        })

  } else if (partial == "orderPage") { //ajax get order.html

    $.get("partials/order.html", function(data) {
      $("#pageContent").html(data);
      //put the takeAnOrder.js here (inside get)

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

      });
    });
  }
}

//being the program, get the homepage
getPartial("homePage");

}) //ready
