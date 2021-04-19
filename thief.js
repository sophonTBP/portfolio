const jstoggle = document.getElementById('js-toggle');
  jstoggle.addEventListener('click', () => {
    const animations = document.querySelectorAll('[data-animation');
    animations.forEach(animation => {
      const running = animation.style.animationPlayState || 'running';
      animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
    })
  });

  let test=''
  window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Avranches,fr&lang=fr&units=metric&appid=400e81dce4ed66dfcdb4c54bd2348c76')
  .then(res=>res.json())
  .then(resJson => { document.querySelector('.results').innerHTML = JSON.stringify(resJson.weather[0].description);} );

 

 
  


  
  