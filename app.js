$(document).ready(function () {
  console.log("app.js is linked to the index.html");
    var animals = ["cat", "dog", "fish", "horse"];

    var makeBtn = function () {
      $("#dump_buttons").empty();
      for (var i=0; i<animals.length; i++) {
        var a = $("<button class=\"btn btn-outline-dark\">");
        a.addClass("<button>");
        a.attr("data-type", animals[i]);
        a.text(animals[i]);
        $("#dump_buttons").append(a);
      }
    }
    makeBtn();


$(document).on("click", "#dump_buttons", function () {
  var type = $(this).attr("data-type");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=5";
  $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(function(response) {
              var results = response.data;
              console.log(results);
              for (var i = 0; i < results.length; i++) {
                var animalDiv = $("<div>").addClass("animal_disp");
                $("#image_dump").append(animalDiv);
                var rating = results[i].rating;
                var p=$("<p>").text("Rating: " + rating);
                var animated = results[i].images.fixed_height.url;
                
                var animalImage = $("<img>");
                animalImage.attr("src", animated);
                animalImage.addClass("animal_img");


                animalDiv.append(p);
                animalDiv.append(animalImage);

                $("#animal_dump").append(animalDiv);
              }
                  

})
})

$("#add_animal").on("click", function(event){
  event.preventDefault();

  var newAnimal = $("#animal-input").val();
  animals.push(newAnimal);
  $("#animal-input").val("");
  
  makeBtn();
})
//========================
})

