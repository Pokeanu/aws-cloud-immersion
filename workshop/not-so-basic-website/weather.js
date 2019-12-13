$(document).ready(function() {
  $("#weather_button").click(function(e) {
    console.log(e);
    e.preventDefault();
    $.ajax({
      type: "POST",
      data: "json",
      url:
        "https://api.openweathermap.org/data/2.5/weather?id=1733046&units=metric&appid=539756b83366c299af98e440614ce980",
      success: function(result) {
        console.log(result);
        $(".city-name").text(result.name);
        $(".weather-main").text(
          result.weather && result.weather[0] && result.weather[0].main
        );
        $(".description").text(
          result.weather && result.weather[0] && result.weather[0].description
        );
        $(".temperature").text(
          result.main && "Temperature is " + result.main.temp + " celsius"
        );
        $(".feelslike").text(
          result.main && "But Feels like" + result.main.feels_like + " celsius"
        );
      },
      error: function(result) {
        console.log("error", result);
        $(".error").text(result.error);
      }
    });
  });
});
