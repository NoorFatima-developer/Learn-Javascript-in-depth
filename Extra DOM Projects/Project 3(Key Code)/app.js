const updatecontainer = document.querySelector('.container');

window.addEventListener('keydown', (event) => {

  // event.preventDefault();
  updatecontainer.innerHTML = `
  <div class = "key">
  ${event.key === "" ? Space : event.key}
  <small>Event.key</small>
  </div>
  
 
  <div class = "key">
  ${event.keyCode}
  <small>Event.keyCode</small>
  </div>
  
  <div class = "key">
  ${event.code}
  <small>Event.code</small>
  </div>`
})