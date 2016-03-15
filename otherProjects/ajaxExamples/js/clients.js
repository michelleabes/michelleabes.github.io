$(document).ready(function() {

  $("#getClients").on("click", function() {

  $.getJSON("http://michelleabes.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json", function(data) {

    $.each(data, function (index, item){
      $("#data").append(item.name)

    })
    // alert(data);
    // console.dir(data);

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
