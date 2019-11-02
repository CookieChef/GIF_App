$(document).ready(function() {
    console.log("is working");
    
    var animals =[ "cat", "dog", "rabbit", "snake", "fish", "horse"];

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

    $(document).on("click", ".animalBtn", function () {
        var animal = $(this).attr("data-animals");
        $("#animals").empty();
        $(".animal-button").removeClass("active");
        $(this).addClass("active");
        var type=$(this).attr("data-type");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
        //xbZ4W8BLBjNYVW6LTKVNoNQ9qkuwMdwi

             $.ajax({
             url: queryURL,
             method: "GET"
             }).then(function(response) {
                 var results=response.data
                 for (var i=0; i<results.length; i++) {
                    
                    }
           });


