// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);
//     });

$(document).ready(function() {
    
    const animals =[ "cat", "dog", "rabbit", "snake", "fish", "horse"];

    function renderBtn () {
        $("#animalBtn").empty();
        for (var i=0; i<animals.length; i++) {
            var a =$("<button>");
            a.addClass("animal");
            a.attr("data-animal", animals[i]);
            a.text(animals[i]);
            $("#animalBtn").append(a);
        }
    }

    $("#add-animal").on("click", function (event) {
        event.preventDefault();
        var animal = $("#animal-input").val().trim();
        animals.push(animal);
        renderBtn();
    });

    $("#button").on("click", function () {
        var animal = $(this).attr("data-animals");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
             $.ajax({
             url: queryURL,
             method: "GET"
             }).then(function(response) {
                 console.log(queryURL);
                 console.log(response);

                 for (var i=0; i<response.length; i++) {
                     var animalDiv =$("<div>");
                     var p=$("<p>").text("Rating: " + response[i].rating);
                     var animalImage=$("<img>");
                     animalImage.attr("src",response[i].images.fixed_height.url);

                     animalDiv.append(p);
                    animalDiv.append(animalImage);

                    $("#animals").prepend(animalDiv);
                    }
           });

    })
    renderBtn(); 
})
