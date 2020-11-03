function searchOpenWeather()   {
var apiKey = '&appid=de0ec6f3570292137d3181d62efc0a84';
var inputCity = $('#searched-city').val().trim();
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + apiKey;
$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    console.log(response);

    var cityName = $('#city').text(response.name);
    var cityTemp = $('#temp').text('Temperature: ' +response.main.temp);
    var cityHum = $('#humidity').text('Humidity: ' + response.main.humidity);
    var cityWS = $('#wind-speed').text('Wind Speed: ' +response.wind.speed);
    var cityUV = $('#uv-idx').text('UV Index: ' + response.main.temp);

    $('.jumbotron').empty();
    $('.jumbotron').append(cityName, cityTemp, cityHum, cityWS, cityUV )
});
}


$('button'). on('click', function(event) {
    event.preventDefault();

    var inputCity = $('#searched-city').val().trim();
    searchOpenWeather(inputCity);
})


// $('button').on('click', function (event) {f
//     event.preventDefault();
//     var userInput= $('#searched-city').val().trim();
//     cities.push(userInput);

// })















// var searchBTN = $('#search-button');
// var userInput = $('#searched-city').val();


// $(document).ready(function(){
//     $("button").click(function(){
//       console.log($("input:text").val());

//       alert($("input:text").val());
//     });
//   });

// $( "button" ).click(function() {
//     var text = userInput.text();
//     $( "input" ).val( text );
//     console.log(text)
//   });



