var m = moment();
$("#date").html(m.format("L"));

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
    var date = $("#date").html(m.format("L"));
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    var cityTemp = $('#temp').text('Temperature: ' + tempF.toFixed(2) + ' °F');
    var cityHum = $('#humidity').text('Humidity: ' + response.main.humidity + '%');
    var cityWS = $('#wind-speed').text('Wind Speed: ' +response.wind.speed + ' MPH');
    var cityUV = $('#uv-idx').text('UV Index: ' + response.main.temp);
    var forecast = $('#forecast-text').text('5-Day Forecast:')
    var day1 = $('#day-1').toggleClass('forecasted-days');
    var day2 = $('#day-2').toggleClass('forecasted-days');
    var day3 = $('#day-3').toggleClass('forecasted-days');
    var day4 = $('#day-4').toggleClass('forecasted-days');
    var day5 = $('#day-5').toggleClass('forecasted-days');

    $('.jumbotron').empty();
    $('.jumbotron').append(cityName, date, cityTemp, cityHum, cityWS, cityUV)

//     $('#forecast-text').empty();
//     $('#forecast-text').append(forecast);

//     $('#forecast').empty();
//     $('#forecast').append(day1, day2, day3, day4, day5);
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



