// populateslocal date
var m = moment();
$("#date").html(m.format("L"));
// varible assinments
var storageInput = $('#searched-city');
var storedInput = localStorage.getItem('searched city');
var storedInputArray = localStorage.getItem('searched city array');
var storedCities = [];
//assins function to be exectuted upon clickign the searhc button
$('button').on('click', function (event) {
    event.preventDefault();

    var inputCity = $('#searched-city').val().trim();
    searchOpenWeather(inputCity);

    saveToLocalStorage();
    renderLiEl();

    storageInput.on('input', letter => {
        storageInput.textContent = letter.target.value;
    })
})
//function assignments
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
        renderWeatherData();
        renderForecast();

        function renderWeatherData() {

            $('#city').text(response.name);
            renderWeatherIcon();
            $("#date").html(m.format("L"));
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $('#temp').text('Temperature: ' + tempF.toFixed() + '°F');
            $('#humidity').text('Humidity: ' + response.main.humidity + '%');
            $('#wind-speed').text('Wind Speed: ' + response.wind.speed + ' MPH');
            $('#uv-idx').text('UV Index: ' + 'unavailable');

            function renderWeatherIcon() {
                console.dir(response);

                if (response.weather[0].main === "Clouds") {
                    $('#city').append('  ☁️');
                } else if (response.weather[0].main === "Clear") {
                    $('#city').append('  ☀️');
                } else if (response.weather[0].main === "Rain") {
                    $('#city').append(' 🌧');
                } else if (response.weather[0].main === "Snow") {
                    $('#city').append(' 🌨');
                }
            }
        }
        //creates 5 day forecast
        function renderForecast() {
            // url for 5 day forecast api
            var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputCity + apiKey;
            // calling api (5 day forecast)
            $.ajax({
                url: queryURLForecast,
                method: 'GET'
            }).then(function (response) {
                console.dir(response);
                //titels: 5-Day Forecast
                $('#forecast-text').text('5-Day Forecast:');
                //funciotn executions
                nextDay();
                day2();
                day3();
                day4();
                day5();
                //funcitn assignments:
                // forecast: next day
                function nextDay() {
                    $('#day-1').addClass('forecasted-days');
                    $('#next-day').text(response.list[4].dt_txt.split(' ')[0]);
                    var nextDayIcon = $('#icon-next-day');
                    renderNextDayIcon();
                    var tempF1 = (response.list[4].main.temp - 273.15) * 1.80 + 32;
                    $('#next-day-temp').text("Temp: " + tempF1.toFixed() + '°F');
                    $('#next-day-humidity').text('Humidity: ' + response.list[4].main.humidity + '%');
                    function renderNextDayIcon() {
                        if (response.list[4].weather[0].main === "Clouds") {
                            nextDayIcon.text('☁️');
                        } else if (response.list[4].weather[0].main === "Clear") {
                            nextDayIcon.text('  ☀️');
                        } else if (response.list[4].weather[0].main === "Rain") {
                            nextDayIcon.text(' 🌧');
                        } else if (response.list[4].weather[0].main === "Snow") {
                            nextDayIcon.text(' 🌨');
                        }
                    }
                }
                // forecast: 2 days out
                function day2() {
                    $('#day-2').addClass('forecasted-days');
                    $('#next-day2').text(response.list[12].dt_txt.split(' ')[0]);
                    var nextDayIcon2 = $('#icon-next-day2');
                    renderNextDayIcon2();
                    var tempF2 = (response.list[12].main.temp - 273.15) * 1.80 + 32;
                    $('#next-day-temp2').text("Temp: " + tempF2.toFixed() + '°F');
                    $('#next-day-humidity2').text('Humidity: ' + response.list[12].main.humidity + '%');
                    function renderNextDayIcon2() {
                        if (response.list[12].weather[0].main === "Clouds") {
                            nextDayIcon2.text('  ☁️');
                        } else if (response.list[12].weather[0].main === "Clear") {
                            nextDayIcon2.text('  ☀️');
                        } else if (response.list[12].weather[0].main === "Rain") {
                            nextDayIcon2.text(' 🌧');
                        } else if (response.list[12].weather[0].main === "Snow") {
                            nextDayIcon2.text(' 🌨');
                        };
                    }
                }
                // forecast: 3 days out
                function day3() {
                    $('#day-3').addClass('forecasted-days');
                    $('#next-day3').text(response.list[20].dt_txt.split(' ')[0]);
                    var nextDayIcon3 = $('#icon-next-day3');
                    renderNextDayIcon3();
                    var tempF3 = (response.list[20].main.temp - 273.15) * 1.80 + 32;
                    $('#next-day-temp3').text("Temp: " + tempF3.toFixed() + '°F');
                    $('#next-day-humidity3').text('Humidity: ' + response.list[20].main.humidity + '%');
                    function renderNextDayIcon3() {
                        if (response.list[20].weather[0].main === "Clouds") {
                            nextDayIcon3.text('  ☁️');
                        } else if (response.list[20].weather[0].main === "Clear") {
                            nextDayIcon3.text('  ☀️');
                        } else if (response.list[20].weather[0].main === "Rain") {
                            nextDayIcon3.text(' 🌧');
                        } else if (response.list[20].weather[0].main === "Snow") {
                            nextDayIcon3.text(' 🌨');
                        };
                    }
                }
                // forecast: 4 days out
                function day4() {
                    $('#day-4').addClass('forecasted-days');
                    $('#next-day4').text(response.list[28].dt_txt.split(' ')[0]);
                    var nextDayIcon4 = $('#icon-next-day4');
                    renderNextDayIcon4();
                    var tempF4 = (response.list[28].main.temp - 273.15) * 1.80 + 32;
                    $('#next-day-temp4').text("Temp: " + tempF4.toFixed() + '°F');
                    $('#next-day-humidity4').text('Humidity: ' + response.list[28].main.humidity + '%');
                    function renderNextDayIcon4() {
                        if (response.list[28].weather[0].main === "Clouds") {
                            nextDayIcon4.text('  ☁️');
                        } else if (response.list[28].weather[0].main === "Clear") {
                            nextDayIcon4.text('  ☀️');
                        } else if (response.list[28].weather[0].main === "Rain") {
                            nextDayIcon4.text(' 🌧');
                        } else if (response.list[28].weather[0].main === "Snow") {
                            nextDayIcon4.text(' 🌨');
                        }
                    }
                }
                // forecast: 5 days out
                function day5() {
                    $('#day-5').addClass('forecasted-days');
                    $('#next-day5').text(response.list[36].dt_txt.split(' ')[0]);
                    var nextDayIcon5 = $('#icon-next-day5');
                    renderNextDayIcon5()
                    var tempF5 = (response.list[36].main.temp - 273.15) * 1.80 + 32;
                    $('#next-day-temp5').text("Temp: " + tempF5.toFixed() + '°F');
                    $('#next-day-humidity5').text('Humidity: ' + response.list[36].main.humidity + '%');
                    function renderNextDayIcon5() {
                        if (response.list[36].weather[0].main === "Clouds") {
                            nextDayIcon5.text('  ☁️');
                        } else if (response.list[36].weather[0].main === "Clear") {
                            nextDayIcon5.text('  ☀️');
                        } else if (response.list[36].weather[0].main === "Rain") {
                            nextDayIcon5.text(' 🌧');
                        } else if (response.list[36].weather[0].main === "Snow") {
                            nextDayIcon4.text(' 🌨');
                        };
                    }
                }
            });
        }
    })
};
//responisble for saving data to local storage
var saveToLocalStorage = () => {
    localStorage.setItem('searched city', storageInput.textContent);

    var inputCity = $('#searched-city').val().trim();
    storedCities.push(inputCity);

    localStorage.setItem('seached city array', storedCities);

}
// responsible for creting the history list
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
// responsible for creating the lis element on the page
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








