async function getWeather(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=EAZ5W4DS635YEAYKRZDTTM359&contentType=json`, {mode: 'cors'})
    return await response.json()
}


async function displayInfo() {
    
    let area = document.querySelector("#area");
    let areaBtn = document.querySelector("#area__button");
    let container = document.querySelector(".container");

    container.classList.add("container__regular");
    areaBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        let weather = await getWeather(area.value);
        
        let mainP = document.querySelector("#main__P");
        if(weather.currentConditions.datetime > '18:00' && weather.currentConditions.datetime <= '6:00') {
            container.classList.remove("daytime");
            container.classList.add("night");
        } else {
            container.classList.remove("night");
            container.classList.add("daytime");
        }

        

        mainP.innerText = "Condition: " + weather.currentConditions.conditions

    });


    // mainImg.src = weather.currentConditions.icon;
       
        
        // console.log(weather);
}


displayInfo();




