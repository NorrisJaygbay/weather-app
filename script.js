const input = document.querySelector('.input1');




const apikey = "8827e06793dd276e757957c6208ab049";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";

const search = document.querySelector('.search input');
const btn = document.querySelector('.search button')
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?unit=metric";
// const cityname = 


// async function submit(){

//     const response = await fetch(apiurl + `&appid=${apikey}`);
//     let data = await response.json();
//     document.querySelector('.city').innerHTML = data.name;
//     document.querySelector('.p1').innerHTML = data.weather[0].description;
// }

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.p1').innerHTML = data.weather[0].main;
    document.querySelector('.humidity').innerHTML = data.wind.gust + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
    input.value="";
    
}


btn.addEventListener('click', ()=>{
    checkweather(search.value);
})