$(document).ready(function() {

  $("#getClients").on("click", function() {

  $.getJSON("http://michelleabes.github.io/otherProjects/ajaxExamples/jsonDatabase/dogs.json", function(data) {

    var html= "<table class='table table-hover table-striped'>" + "<tr><th>Breed</th><th>Age</th><th>Weight</th></tr>";

    $.each(data, function(index, item){

      html += "<ol>" +
      "<li>" + item.breed + "</li>" +
      "<li>" + item.age + "</li>" +
      "<li>" + item.weight + "</li>" +
      "</ol>";

    })

      html += "</table>";
      $("#data").append(html);


    // alert(data);
    //console.dir(data);
    //  $("#data").append(item.name)

  })

  })
});


/* $.getJSON("someFolder/someFile.json", function (data) {

$(document).ready(function () {

	var html = "";

$.each(data, function (index, item) {
        	html += "<div>" +
            	"<span class='song'>" + item.name + "</span>" +
            	"<span class='artist'>" + item.artist + "</span>" +
            	"</div>"
    	});

    	$("#musicDiv").append(html);

	});
}); */
