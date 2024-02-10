const apikey = "dcad63399d7549fda03ed6e72754e0d5";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serachBox = document.querySelector(".search input");
const serachBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkEwather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {

        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        if(data.weather[0].main == "Clouds")
        {
            weatherIcon.src = "images/images/clouds.png"
        }
        else if(data.weather[0].main == "Clear")
        {
            weatherIcon.src = "images/images/clear.png"
        }
        else if(data.weather[0].main == "Rain")
        {
            weatherIcon.src = "images/images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle")
        {
            weatherIcon.src = "images/images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist")
        {
            weatherIcon.src = "images/images/mist.png"
        }
        else if(data.weather[0].main == "Snow")
        {
            weatherIcon.src = "images/images/snow.png"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }   
}

serachBtn.addEventListener("click", ()=>{
    checkEwather(serachBox.value)
})

// window.addEventListener("keydown", ()=>{
//     checkEwather(serachBox.value)
// })

