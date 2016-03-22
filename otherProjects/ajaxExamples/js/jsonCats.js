$(document).ready(function() {

  $.getJSON("jsonDatabase/jsonCats.json", function(data) {

    console.dir(data);
    var html = "";

    $.each(data, function(index, item) {
        html += '<div class="col-md-4">' +
          '<div class="catName"><small>name: </small>' + item.name + '</div>' +
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
    $("#catData").append(html);
  })
})

/*
//one per cat
<div class="col-md-4 cat">
<div class="catName"></div>
<div class="catType"></div>
<div class="catGender"></div>
<img src= ""/>
<div class="commentsContainer">
//one per comment
  <div class="renterName"></div>
  <div class="renterLocation"></div>
  <div class="renterStars"></div>
  //5 stars, some full, some empty
  </div> //end comments container
</div> //end cat

*/
