// call for local date
var m = moment();
$("#date").html(m.format("L"));

function searchOpenWeather() {
    var apiKey = '&appid=de0ec6f3570292137d3181d62efc0a84';
    var inputCity = $('#searched-city').val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + apiKey;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        // console.log(response);
        var cityName = $('#city').text(response.name);
        var date = $("#date").html(m.format("L"));
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        var cityTemp = $('#temp').text('Temperature: ' + tempF.toFixed(2) + ' °F');
        var cityHum = $('#humidity').text('Humidity: ' + response.main.humidity + '%');
        var cityWS = $('#wind-speed').text('Wind Speed: ' + response.wind.speed + ' MPH');
        var cityUV = $('#uv-idx').text('UV Index: ' + response.main.temp);

        // $('.jumbotron').empty();
        // $('.jumbotron').append(cityName, date, cityTemp, cityHum, cityWS, cityUV)

        var forecast = $('#forecast-text').text('5-Day Forecast:')
        var day1 = $('#day-1').addClass('forecasted-days');
        var day2 = $('#day-2').addClass('forecasted-days');
        var day3 = $('#day-3').addClass('forecasted-days');
        var day4 = $('#day-4').addClass('forecasted-days');
        var day5 = $('#day-5').addClass('forecasted-days');



        var nextDayDate = $('#next-day').text('date');
        var nextDayIcon = $('#icon-next-day').attr("src",'...');
        var nextDayTemp = $('#next-day-temp').text("Temp: ");
        var nextDayHumidity = $('#next-day-humidity').text('Humidity: ');

        var nextDayDate2 = $('#next-day2').text('date');
        var nextDayIcon2 = $('#icon-next-day2').attr("src",'...');
        var nextDayTemp2 = $('#next-day-temp2').text("Temp: ");
        var nextDayHumidity2 = $('#next-day-humidity2').text('Humidity: ');

        var nextDayDate3 = $('#next-day3').text('date');
        var nextDayIcon3 = $('#icon-next-day3').attr("src",'...');
        var nextDayTemp3 = $('#next-day-temp3').text("Temp: ");
        var nextDayHumidity3 = $('#next-day-humidity3').text('Humidity: ');

        var nextDayDate4 = $('#next-day4').text('date');
        var nextDayIcon4 = $('#icon-next-day4').attr("src",'...');
        var nextDayTemp4 = $('#next-day-temp4').text("Temp: ");
        var nextDayHumidity4 = $('#next-day-humidity4').text('Humidity: ');

        var nextDayDate5 = $('#next-day5').text('date');
        var nextDayIcon5 = $('#icon-next-day5').attr("src",'...');
        var nextDayTemp5 = $('#next-day-temp5').text("Temp: ");
        var nextDayHumidity5 = $('#next-day-humidity5').text('Humidity: ');


        // $('day1').empty();
        // $('day1').append(futureDate1);

        // $('#forecast').empty();
        // $('#forecast').append(day1, day2, day3, day4, day5);
    });
}


$('button').on('click', function (event) {
    event.preventDefault();

    var inputCity = $('#searched-city').val().trim();
    searchOpenWeather(inputCity);
})



