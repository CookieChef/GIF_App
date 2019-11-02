// $(document).ready(function() {
//     console.log("is working");

//     var animals =[ "cat", "dog", "rabbit", "snake", "fish", "horse"];

//     function renderBtn () {
//         $("#animalBtn").empty();
//         for (var i=0; i<animals.length; i++) {
//             var a =$("<button>");
//             a.addClass("animal");
//             a.attr("data-animal", animals[i]);
//             a.text(animals[i]);
//             $("#animalBtn").append(a);
//         }
//     }

//     $("#add-animal").on("click", function (event) {
//         event.preventDefault();
//         var animal = $("#animal-input").val().trim();
//         animals.push(animal);
//         renderBtn();
//     });

//     $(document).on("click", ".animalBtn", function () {
//         var animal = $(this).attr("data-animals");
//         $("#animals").empty();
//         $(".animal-button").removeClass("active");
//         $(this).addClass("active");
//         var type=$(this).attr("data-type");
//         var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
//         //xbZ4W8BLBjNYVW6LTKVNoNQ9qkuwMdwi

//              $.ajax({
//              url: queryURL,
//              method: "GET"
//              }).then(function(response) {
//                  var results=response.data
//                  for (var i=0; i<results.length; i++) {

//                     }
//            });


$(document).ready(function () {
    console.log("its working!!");

    var animals = ["cat", "dog", "fish", "horse"];

    //function that takes the the elements of the array and creates a button for them
    function renderBtn() {
        $("#animalBtn").empty();
        for (var i = 0; i < animals.length; i++) {
            var a = $("<button>");
            a.addClass("animal");
            a.attr("data-animal", animals[i]);
            a.text(animals[i]);
            $("#animalBtn").append(a);

        }
    }

    //when the user hits sumbit this code snippet takes the user input and pushes is into the array
    $("#add-animal").on("click", function (event) {
        event.preventDefault();
        var animal = $("#animal-input").val().trim();
        animals.push(animal);
        renderBtn();
    })

    $(document).on("click", "#animalBtn", function () {
        $("#animals").empty();
        $("#animalBtn").removeClass("active");
        $(this).addClass("active");

        var type = $(this).attr("data-type");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

        //makes the call to get a response 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
                var results = response.data;
                //this following code will loop throgh the response the ajax call got
                //and it will create an animalDiv class
                for (var i=0; i<results.length; i++) {
                    var animalDiv = $("<div class=\"animal-item\">");
                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);

                    //this will make the image be animated and be still 
                    var animated = results[i].images.fixed_height.url;
                    var still = results[i].images.fixed_height_still.url;

                    //this will create an image tag, add the attributes to the img 
                    var animalImg =$("<img>");
                    animalImg.attr("src", still);
                    animalImg.attr("data-still", still);
                    animalImg.attr("data-animate", animated);
                    animalImg.attr("data-state", "still");
                    animalImg.addClass("animal-image");

                    //this appends 'adds' the ratings text stored in the 'p' var to the animalDiv
                    animalDiv.append(p);
                    //this will append 'adds' the animal image to the animalDiv
                    animalDiv.append(animalImg);
                    //this appends 'adds' the animalDiv with all its elements to where they will display
                    $("#animals-display").append(animalDiv);
                }
            });
    });
    
    $("#add-animal").on("click", function (event) {
        event.preventDefault();
        var newAnimal = $("input").eq(0).val();

            if (newAnimal.length > 2) {
                animals.push(newAnimal);
            }
            renderBtn();
    });

    


    renderBtn();
})



