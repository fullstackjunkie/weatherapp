async function getWeather(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=EAZ5W4DS635YEAYKRZDTTM359&contentType=json`, {mode: 'cors'})
    return await response.json()
}


async function displayInfo() {
    
    let weather = await getWeather(32024);
    let container = document.querySelector(".container");
    let mainP = document.querySelector("#main__P");
    if(weather.currentConditions.datetime > '18:00' && weather.currentConditions.datetime <= '6:00') {
        container.classList.remove("daytime");
        container.classList.add("night");
    } else {
        container.classList.remove("night");
        container.classList.add("daytime");
    }


    // mainImg.src = weather.currentConditions.icon;
    mainP.innerText = "Condition: " + weather.currentConditions.conditions
    
    console.log(weather);
}


displayInfo();




