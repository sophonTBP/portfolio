
let jsonStr = JSON.stringify({'now':  new Date()}) 
var now = Date.now();
var ONE_DAY_IN_MS = 86400000;


 var moonCal  = [
  {  Date:(Date.UTC(2021,2,28,18,50,00))},
  {  Date:(Date.UTC(2021,3,27,03,33,00))},
  {  Date:(Date.UTC(2021,4,26,11,14,00))},
  {  Date:(Date.UTC(2021,5,24,18,40,00))},
  {  Date:(Date.UTC(2021,6,24,02,37,00))},
  {  Date:(Date.UTC(2021,7,22,12,02,00))},
  {  Date:(Date.UTC(2021,8,20,23,54,00))},
  {  Date:(Date.UTC(2021,9,20,14,57,00))},
  {  Date:(Date.UTC(2021,10,19,08,59,00))},
  {  Date:(Date.UTC(2021,11,19,04,37,00))},
  
  {  Date:(Date.UTC(2022,0,18,23,51,00))},
  {  Date:(Date.UTC(2022,1,16,16,59,00))},
  {  Date:(Date.UTC(2022,2,18,07,20,00))},
  {  Date:(Date.UTC(2022,3,16,18,57,00))},
  {  Date:(Date.UTC(2022,4,16,4,15,00))},
  {  Date:(Date.UTC(2022,5,14,11,52,00))},
  {  Date:(Date.UTC(2022,6,13,18,38,00))},
  {  Date:(Date.UTC(2022,7,12,1,36,00))},
  {  Date:(Date.UTC(2022,8,10,9,58,00))},
  {  Date:(Date.UTC(2022,9,9,20,54,00))},
  {  Date:(Date.UTC(2022,10,8,11,02,00))},
  {  Date:(Date.UTC(2022,11,8,04,09,00))},

  {  Date:(Date.UTC(2023,0,06,23,09,00))},
  {  Date:(Date.UTC(2023,1,05,18,30,00))},
  {  Date:(Date.UTC(2023,2,07,12,42,00))},
  {  Date:(Date.UTC(2023,3,06,04,37,00))},
  {  Date:(Date.UTC(2023,4,05,17,36,00))},
  {  Date:(Date.UTC(2023,5,04,03,43,00))},
  {  Date:(Date.UTC(2023,6,03,11,40,00))},
  {  Date:(Date.UTC(2023,7,01,18,33,00))},
  {  Date:(Date.UTC(2023,7,31,01,37,00))},
  {  Date:(Date.UTC(2023,8,29,09,58,00))},
  {  Date:(Date.UTC(2023,9,28,20,24,00))},
  {  Date:(Date.UTC(2023,10,27,09,16,00))},
  {  Date:(Date.UTC(2023,11,27,00,33,00))},
  
  {  Date:(Date.UTC(2024,0,25,17,54,00))},
  {  Date:(Date.UTC(2024,1,24,12,31,00))},
  {  Date:(Date.UTC(2024,2,25,07,01,00))},
  {  Date:(Date.UTC(2024,3,23,23,51,00))},
  {  Date:(Date.UTC(2024,4,23,13,55,00))},
  {  Date:(Date.UTC(2024,5,22,01,10,00))},
  {  Date:(Date.UTC(2024,6,21,10,19,00))},
  {  Date:(Date.UTC(2024,7,19,18,28,00))},
  {  Date:(Date.UTC(2024,8,18,02,36,00))},
  {  Date:(Date.UTC(2024,9,17,11,27,00))},
  {  Date:(Date.UTC(2024,10,15,21,29,00))},
  {  Date:(Date.UTC(2024,11,15,09,02,00))},
  
  {  Date:(Date.UTC(2025,00,13,22,27,00))},
  {  Date:(Date.UTC(2025,01,12,13,54,00))},
  {  Date:(Date.UTC(2025,02,14,06,55,00))},
  {  Date:(Date.UTC(2025,03,13,00,23,00))},
  {  Date:(Date.UTC(2025,04,12,16,58,00))},
  {  Date:(Date.UTC(2025,05,11,07,46,00))},
  {  Date:(Date.UTC(2025,06,10,20,38,00))},
  {  Date:(Date.UTC(2025,07,09,07,57,00))},
  {  Date:(Date.UTC(2025,08,07,18,10,00))},
  {  Date:(Date.UTC(2025,09,07,03,48,00))},
  {  Date:(Date.UTC(2025,10,05,13,20,00))},
  {  Date:(Date.UTC(2025,11,04,23,15,00))},

  {  Date:(Date.UTC(2026,00,03,10,04,00))},
  {  Date:(Date.UTC(2026,01,01,22,10,00))},
  {  Date:(Date.UTC(2026,02,03,11,39,00))},
  {  Date:(Date.UTC(2026,03,02,02,13,00))},
  {  Date:(Date.UTC(2026,04,01,17,24,00))},
  {  Date:(Date.UTC(2026,04,31,08,46,00))},
  {  Date:(Date.UTC(2026,05,29,23,58,00))},
  {  Date:(Date.UTC(2026,06,29,14,37,00))},
  {  Date:(Date.UTC(2026,07,28,04,19,00))},
  {  Date:(Date.UTC(2026,08,26,16,50,00))},
  {  Date:(Date.UTC(2026,09,26,04,13,00))},
  {  Date:(Date.UTC(2026,10,24,14,55,00))},
  {  Date:(Date.UTC(2026,11,24,01,29,00))},

  {  Date:(Date.UTC(2027,00,22,12,18,00))},
  {  Date:(Date.UTC(2027,01,20,23,24,00))},
  {  Date:(Date.UTC(2027,02,22,10,44,00))},
  {  Date:(Date.UTC(2027,03,20,22,27,00))},
  {  Date:(Date.UTC(2027,04,20,10,59,00))},
  {  Date:(Date.UTC(2027,05,19,00,45,00))},
  {  Date:(Date.UTC(2027,06,18,15,46,00))},
  {  Date:(Date.UTC(2027,07,17,07,30,00))},
  {  Date:(Date.UTC(2027,08,15,23,05,00))},
  {  Date:(Date.UTC(2027,09,15,13,48,00))},
  {  Date:(Date.UTC(2027,10,14,03,27,00))},
  {  Date:(Date.UTC(2027,11,13,16,10,00))},

  {  Date:(Date.UTC(2028,00,12,04,04,00))},
  {  Date:(Date.UTC(2028,01,10,15,04,00))},
  {  Date:(Date.UTC(2028,02,11,01,06,00))},
  {  Date:(Date.UTC(2028,03,09,10,26,00))},
  {  Date:(Date.UTC(2028,04,08,19,49,00))},
  {  Date:(Date.UTC(2028,05,07,06,09,00))},
  {  Date:(Date.UTC(2028,06,06,18,12,00))},
  {  Date:(Date.UTC(2028,07,05,08,11,00))},
  {  Date:(Date.UTC(2028,08,04,23,49,00))},
  {  Date:(Date.UTC(2028,09,03,16,26,00))},
  {  Date:(Date.UTC(2028,10,02,09,19,00))},
  {  Date:(Date.UTC(2028,11,02,01,41,00))},
  {  Date:(Date.UTC(2028,11,31,16,49,00))},





]




now


 const today = new Date()



  
const closestNext = moonCal.reduce((acc, cur) => {
  const adiff = acc.Date - today;
  return adiff > 0 && adiff < cur.Date - today ? acc : cur;
});

closestNext
let next = new Date(moonCal[1].Date).toUTCString()
next

const closestLast = moonCal.reduce((acc, cur) => {
  const adiff = acc.Date - today;
  return adiff < 0 && adiff < cur.Date - today ? acc : cur;
});
let last= 
new Date(closestLast.Date).toUTCString()
last


let lunationLength = closestNext.Date - closestLast.Date;
lunationLengthDays = lunationLength /86400000
lunationLengthDays

let timeTillNext = closestNext.Date - today  
timeTillNextDays = timeTillNext/86400000
timeTillNextDays

let percentShade = (timeTillNext *100)/lunationLength 
percentShade 


let d= Math.round(percentShade/10)




let moon=""

switch (d) {
    case 1: moon="moon4"
    
    break;
    case 2: moon="moon3"
    
    break;
    case 3: moon="moon2"
    
    break;
    case 4: moon="moon1"
    
    break;
    case 5: moon="moon10"
    break;
    case 6: moon="moon9"
    
    break;
    case 7: moon="moon8"
    
    break;
    case 8: moon="moon7"
    
    break;
    case 9: moon="moon6"
    
   




  default:moon="moon5"
    break;
}


 


const jstoggle = document.getElementById('js-toggle');
  jstoggle.addEventListener('click', () => {
    const animations = document.querySelectorAll('[data-animation');
    animations.forEach(animation => {
      const running = animation.style.animationPlayState || 'paused';
      animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
    })

    
  });



  







//------------------------Theme switcher-----------------------

  const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;


// Apply the cached theme on reload  
const theme = localStorage.getItem('theme');
const celestial = document.getElementById('celestial-body');


  let time = today.getHours()
  if (6<=time && time<=18) {
    let theme = localStorage.getItem('theme');
    celestial.classList.replace(moon,"sun")
    body.classList.replace(theme, 'light')
    localStorage.setItem('theme', 'light');
}
  else if(18<=time && time<=21){
    let theme = localStorage.getItem('theme');
    body.classList.replace(theme, 'solar')
    localStorage.setItem('theme', 'solar');
}
  else {
    let theme = localStorage.getItem('theme');
    celestial.classList.replace("sun",moon)
    body.classList.replace(theme, 'dark')
    localStorage.setItem('theme', 'dark');
}








if (theme) {
  body.classList.add(theme);
 
}

// Button Event Handlers

darkButton.onclick = () => {
  let theme = localStorage.getItem('theme');
  body.classList.replace(theme, 'dark');
  celestial.classList.replace("sun",moon)
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  let theme = localStorage.getItem('theme');
  body.classList.replace(theme, 'light');
  celestial.classList.replace(moon,"sun")
  localStorage.setItem('theme', 'light');
};

solarButton.onclick = () => {
  let theme = localStorage.getItem('theme');
  body.classList.replace(theme, 'solar');
  celestial.classList.replace(moon,"sun")
  localStorage.setItem('theme', 'solar');
};




//---------------------------------Animation on switch-------------

var checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});




var rellax =  new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
breakpoints: [576, 768, 1201]

  });
  let m =today.getMinutes()
m = (m < 10) ? "0" + m : m;
  var time2 = today.getHours() + ":" +m;
  document.querySelector('.timeofday').innerHTML = time2
  
 
  let test=''
  window.fetch('https://api.openweathermap.org/data/2.5/weather?q=Avranches,fr&lang=fr&units=metric&appid=400e81dce4ed66dfcdb4c54bd2348c76')
  .then(res=>res.json())
  .then(resJson =>{ document.querySelector('.temp').innerHTML = JSON.stringify(resJson.main.temp);
   document.querySelector('.value').innerHTML = JSON.stringify(resJson.weather[0].description);
} )

  