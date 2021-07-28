const where = document.querySelector('.where') //위치
const days = document.querySelector('.days') //요일
const month = document.querySelector('.month') //월
const date = document.querySelector('.date') //일
const year = document.querySelector('.year') //년
let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

//날짜 위치 받아옴
let today = new Date();

days.innerHTML = today.getDay() // 요일
month.innerHTML = monthNames[today.getMonth()] // 월
date.innerHTML = today.getDate() // 일
year.innerHTML = today.getFullYear() // 년

let test = navigator.geolocation.getCurrentPosition(function(position){
    console.log(position.coords.longitude)
    console.log(position.coords.latitude)
})

const API_KEY = "89d85ff62df12e8662adafcdab382698"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
        where.innerText = data.name;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);