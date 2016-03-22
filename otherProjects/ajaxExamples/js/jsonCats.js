$(document).ready(function(){

  $.getJSON("http://michelleabes.github.io/otherProjects/ajaxExamples/jsonDatabase/jsonCats.json", function(data){

    console.dir(data);

  })
})
