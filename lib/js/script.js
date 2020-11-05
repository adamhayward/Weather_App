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

        cityName = $('#city').text(response.name);

        if (response.weather[0].main === "Clouds") {
            $('#city').append('  ☁️');
        } else if (response.weather[0].main === "Clear") {
            $('#city').append('  ☀️');
        } else if (response.weather[0].main === "Rain") {
            $('#city').append(' 🌧');
        } else if (response.weather[0].main === "Snow") {
            $('#city').append(' 🌨');
        }

        $("#date").html(m.format("L"));
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $('#temp').text('Temperature: ' + tempF.toFixed(2) + ' °F');
        $('#humidity').text('Humidity: ' + response.main.humidity + '%');
        $('#wind-speed').text('Wind Speed: ' + response.wind.speed + ' MPH');
        $('#uv-idx').text('UV Index: ' + 'unavailable');

        // url for 5 day forecast api
        var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputCity + apiKey;
       
        // calling api (5 day forecast)
        $.ajax({
            url: queryURLForecast,
            method: 'GET'
        }).then(function (response) {
            console.dir(response);

            $('#forecast-text').text('5-Day Forecast:')
            $('#day-1').addClass('forecasted-days');
            $('#day-2').addClass('forecasted-days');
            $('#day-3').addClass('forecasted-days');
            $('#day-4').addClass('forecasted-days');
            $('#day-5').addClass('forecasted-days');

            // forecast: next day
            $('#next-day').text(response.list[4].dt_txt.split(' ')[0]);
            var nextDayIcon = $('#icon-next-day');
            if (response.list[4].weather[0].main === "Clouds") {
                nextDayIcon.text('☁️');
            } else if (response.list[4].weather[0].main === "Clear") {
                nextDayIcon.text('  ☀️');
            } else if (response.list[4].weather[0].main === "Rain") {
                nextDayIcon.text(' 🌧');
            } else if (response.list[4].weather[0].main === "Snow") {
                nextDayIcon.text(' 🌨');
            };
            var tempF1 = (response.list[4].main.temp - 273.15) * 1.80 + 32;
            $('#next-day-temp').text("Temp: " + tempF1.toFixed(2) + ' °F');
            $('#next-day-humidity').text('Humidity: ' + response.list[4].main.humidity + '%');
          
            // forecast: 2 days out
            $('#next-day2').text(response.list[12].dt_txt.split(' ')[0]);
            var nextDayIcon2 = $('#icon-next-day2');
            if (response.list[12].weather[0].main === "Clouds") {
                nextDayIcon2.text('  ☁️');
            } else if (response.list[12].weather[0].main === "Clear") {
                nextDayIcon2.text('  ☀️');
            } else if (response.list[12].weather[0].main === "Rain") {
                nextDayIcon2.text(' 🌧');
            } else if (response.list[12].weather[0].main === "Snow") {
                nextDayIcon2.text(' 🌨');
            };
            var tempF2 = (response.list[12].main.temp - 273.15) * 1.80 + 32;
            $('#next-day-temp2').text("Temp: " + tempF2.toFixed(2) + ' °F');
            $('#next-day-humidity2').text('Humidity: ' + response.list[12].main.humidity + '%');
            // forecast: 3 days out

            $('#next-day3').text(response.list[20].dt_txt.split(' ')[0]);
            var nextDayIcon3 = $('#icon-next-day3');
            if (response.list[20].weather[0].main === "Clouds") {
                nextDayIcon3.text('  ☁️');
            } else if (response.list[20].weather[0].main === "Clear") {
                nextDayIcon3.text('  ☀️');
            } else if (response.list[20].weather[0].main === "Rain") {
                nextDayIcon3.text(' 🌧');
            } else if (response.list[20].weather[0].main === "Snow") {
                nextDayIcon3.text(' 🌨');
            };
            var tempF3 = (response.list[20].main.temp - 273.15) * 1.80 + 32;
            $('#next-day-temp3').text("Temp: " + tempF3.toFixed(2) + ' °F');
            $('#next-day-humidity3').text('Humidity: ' + response.list[20].main.humidity + '%');

            // forecast: 4 days out
            $('#next-day4').text(response.list[28].dt_txt.split(' ')[0]);
            var nextDayIcon4 = $('#icon-next-day4');
            if (response.list[28].weather[0].main === "Clouds") {
                nextDayIcon4.text('  ☁️');
            } else if (response.list[28].weather[0].main === "Clear") {
                nextDayIcon4.text('  ☀️');
            } else if (response.list[28].weather[0].main === "Rain") {
                nextDayIcon4.text(' 🌧');
            } else if (response.list[28].weather[0].main === "Snow") {
                nextDayIcon4.text(' 🌨');
            };
            var tempF4 = (response.list[28].main.temp - 273.15) * 1.80 + 32;
            $('#next-day-temp4').text("Temp: " + tempF4.toFixed(2) + ' °F');
            $('#next-day-humidity4').text('Humidity: ' + response.list[28].main.humidity + '%');

            // forecast: 5 days out
            $('#next-day5').text(response.list[36].dt_txt.split(' ')[0]);
            var nextDayIcon5 = $('#icon-next-day5');
            if (response.list[36].weather[0].main === "Clouds") {
                nextDayIcon5.text('  ☁️');
            } else if (response.list[36].weather[0].main === "Clear") {
                nextDayIcon5.text('  ☀️');
            } else if (response.list[36].weather[0].main === "Rain") {
                nextDayIcon5.text(' 🌧');
            } else if (response.list[36].weather[0].main === "Snow") {
                nextDayIcon4.text(' 🌨');
            };
            var tempF5 = (response.list[36].main.temp - 273.15) * 1.80 + 32;
            $('#next-day-temp5').text("Temp: " + tempF5.toFixed(2) + ' °F');
            $('#next-day-humidity5').text('Humidity: ' + response.list[36].main.humidity + '%');
        });
    })
};

var storageInput = $('#searched-city');
var storedInput = localStorage.getItem('searched city');
var storedInputArray = localStorage.getItem('searched city array');
var storedCities = [];

storageInput.on('input', letter => {
    storageInput.textContent = letter.target.value;
})

var saveToLocalStorage = () => {
    localStorage.setItem('searched city', storageInput.textContent);

    var inputCity = $('#searched-city').val().trim();
    storedCities.push(inputCity);

    localStorage.setItem('seached city array', storedCities);

}


function renderHistoryLi() {
    $('.list-group').empty();

    for (var i = 0; i < storedCities.length; i++) {


        var newLiEl = $('<li>');
        newLiEl.addClass('list-group-item');
        newLiEl.attr("data-name", storedCities[i]);

        console.log(storedCities)

        newLiEl.text(storedCities[i]);
        $('.list-group'
        ).append(newLiEl);
    }
}

function renderLiEl() {
    $('.list-group').empty();
    for (var i = 0; i < storedCities.length; i++) {

        var a = $('<li>');
        a.addClass('list-group-item');
        a.attr("data-name", storedCities[i]);

        console.log(storedCities)
        a.text(storedCities[i]);
        $('.list-group'
        ).append(a);
    }
}

$('button').on('click', function (event) {
    event.preventDefault();

    var inputCity = $('#searched-city').val().trim();
    searchOpenWeather(inputCity);

    saveToLocalStorage();
    renderLiEl();
})






