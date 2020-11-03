// populateslocal date
var m = moment();
$("#date").html(m.format("L"));

function searchOpenWeather() {
    // assinged api key
    var apiKey = '&appid=de0ec6f3570292137d3181d62efc0a84';
    // input taken from user
    var inputCity = $('#searched-city').val().trim();
    // url for weather api (current weather)
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + apiKey;
    // calling api (current weather)
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {

        console.dir(response);

        var cityName = $('#city').text(response.name);
        var date = $("#date").html(m.format("L"));
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        var cityTemp = $('#temp').text('Temperature: ' + tempF.toFixed(2) + ' °F');
        var cityHum = $('#humidity').text('Humidity: ' + response.main.humidity + '%');
        var cityWS = $('#wind-speed').text('Wind Speed: ' + response.wind.speed + ' MPH');
        var cityUV = $('#uv-idx').text('UV Index: ' + 'unavailable');

        // url for 5 day forecast api
        var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputCity + apiKey;
        // calling api (5 day forecast)
        $.ajax({
            url: queryURLForecast,
            method: 'GET'
        }).then(function (response) {
            console.dir(response);

            var forecast = $('#forecast-text').text('5-Day Forecast:')
            var day1 = $('#day-1').addClass('forecasted-days');
            var day2 = $('#day-2').addClass('forecasted-days');
            var day3 = $('#day-3').addClass('forecasted-days');
            var day4 = $('#day-4').addClass('forecasted-days');
            var day5 = $('#day-5').addClass('forecasted-days');

            // forecast: next day
            var nextDayDate = $('#next-day').text(response.list[8].dt_txt.split(' ')[0]);
            var nextDayIcon = $('#icon-next-day').html('<i>').addClass('fa fa-search');
            var tempF1 = (response.list[8].main.temp - 273.15) * 1.80 + 32;
            var nextDayTemp = $('#next-day-temp').text("Temp: " + tempF.toFixed(2) + ' °F');
            var nextDayHumidity = $('#next-day-humidity').text('Humidity: ' + response.list[8].main.humidity + '%');
            // forecast: 2 days out
            var nextDayDate2 = $('#next-day2').text(response.list[16].dt_txt.split(' ')[0]);
            var nextDayIcon2 = $('#icon-next-day2').attr("src", '...');
            var tempF2 = (response.list[16].main.temp - 273.15) * 1.80 + 32;
            var nextDayTemp2 = $('#next-day-temp2').text("Temp: " + tempF.toFixed(2) + ' °F');
            var nextDayHumidity2 = $('#next-day-humidity2').text('Humidity: ' + response.list[16].main.humidity + '%');
            // forecast: 3 days out
            var nextDayDate3 = $('#next-day3').text(response.list[24].dt_txt.split(' ')[0]);
            var nextDayIcon3 = $('#icon-next-day3').attr("src", '...');
            var tempF3 = (response.list[24].main.temp - 273.15) * 1.80 + 32;
            var nextDayTemp3 = $('#next-day-temp3').text("Temp: " + tempF.toFixed(2) + ' °F');
            var nextDayHumidity3 = $('#next-day-humidity3').text('Humidity: ' + response.list[24].main.humidity + '%');
            // forecast: 4 days out
            var nextDayDate4 = $('#next-day4').text(response.list[32].dt_txt.split(' ')[0]);
            var nextDayIcon4 = $('#icon-next-day4').attr("src", '...');
            var tempF4 = (response.list[32].main.temp - 273.15) * 1.80 + 32;
            var nextDayTemp4 = $('#next-day-temp4').text("Temp: " + tempF.toFixed(2) + ' °F');
            var nextDayHumidity4 = $('#next-day-humidity4').text('Humidity: ' + response.list[32].main.humidity + '%');
            // forecast: 5 days out
            var nextDayDate5 = $('#next-day5').text(response.list[39].dt_txt.split(' ')[0]);
            var nextDayIcon5 = $('#icon-next-day5').attr("src", '...');
            var tempF5 = (response.list[39].main.temp - 273.15) * 1.80 + 32;
            var nextDayTemp5 = $('#next-day-temp5').text("Temp: " + tempF.toFixed(2) + ' °F');
            var nextDayHumidity5 = $('#next-day-humidity5').text('Humidity: ' + response.list[39].main.humidity + '%');


            // $('day1').empty();
            // $('day1').append(futureDate1);

            // $('#forecast').empty();
            // $('#forecast').append(day1, day2, day3, day4, day5);
        });
    })
};


$('button').on('click', function (event) {
    event.preventDefault();

    var inputCity = $('#searched-city').val().trim();
    searchOpenWeather(inputCity);
})



