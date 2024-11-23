async function getWeather(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=EAZ5W4DS635YEAYKRZDTTM359&contentType=json`)
    response.json().then(function(response) {
        console.log(response);
    });
}

getWeather(32024);