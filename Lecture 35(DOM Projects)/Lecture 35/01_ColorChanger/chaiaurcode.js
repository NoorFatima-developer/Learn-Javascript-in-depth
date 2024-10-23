const body = document.querySelector('body');
console.log(body);

const buttons = document.querySelectorAll('.button');
console.log(buttons);

// Nodelist k oper hum foreach(arrays k opr laga skty hain and Nodelist array ki trhan behave krta hai isley laga skty hain) 
//laga skty hain,, lkin html collection ko pehly Nodelist mm krna hota and then hum ospr Foreach laga
// skty hain...

// ab foreach k andr hum  function laga skty hain and funciton arrow b hoskta hai or simple b it depends on me:


buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        body.style.backgroundColor = e.target.id;
        // console.log(e);
        // console.log(e.target);
        
})

})