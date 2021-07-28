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

//동영상안에 버튼 클릭시 동영상 정지
//다시누르면 재생 
//이미지도 같이 바뀜
const video = document.querySelector('video')
const video_btn = document.querySelector('.video_btn')

video_btn.addEventListener('click',function(){
    if(video_btn.src == 'http://127.0.0.1:5500/portfolio/image/play.png'){
        video.pause()
        video_btn.src = 'image/stop.png'
    }else{
        video.play()
        video_btn.src = 'image/play.png'
    }
})




//위치 받아오기
const API_KEY = "89d85ff62df12e8662adafcdab382698" // api 개인 key
function onGeoOk(position){
    const lat = position.coords.latitude; //위도 
    const lon = position.coords.longitude; //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url) //fetch로 API 호출
    .then((reponse) => reponse.json()) //그후에 응답하면 json받아오고
    .then((data) => {
        where.innerText = data.name;
    }); // 받아온 위도와 경도 API_KEY를 이용해 도시 이름 추출 
}
//위치가 찾을 수 없거나 동의하지 않았을 경우에
function onGeoError(){
    alert("위치를 찾을 수 없습니다.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

//박스를 클릭하면 폰트색 변경
const blueFont = document.querySelector('.blue_font')
const greenFont = document.querySelector('.green_font')
const yellowFont = document.querySelector('.yellow_font')
const brownFont = document.querySelector('.brown_font')
const basicFont = document.querySelectorAll('.fontcolor')

//더블클릭하면 전체 폰트색깔 기본으로 
// 나머지는 누르면 이미지 색깔처럼 바뀜
basicFont.forEach( i => {
    i.addEventListener('dblclick',function(){
        document.body.style.color = '#4D4D4D'
    })
})
blueFont.addEventListener('click',function(){
    document.body.style.color = '#738AA9'
})
greenFont.addEventListener('click',function(){
    document.body.style.color = '#7EA886'
})
yellowFont.addEventListener('click',function(){
    document.body.style.color = '#A7AC72'
})
brownFont.addEventListener('click',function(){
    document.body.style.color = '#A78F77'
})
let winH = window.innerHeight
let skills = document.querySelector('.skills')
//skill부분 viewport에 따른 인터렉션 효과 ! 
// window.addEventListener('scroll',function(){
//     let sct = skills.getBoundingClientRect().top
//     let scb = skills.getBoundingClientRect().bottom
//     console.log(scb)
// })