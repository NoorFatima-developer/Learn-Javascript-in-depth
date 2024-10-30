const result = document.querySelector('.result')
const sbtbtn = document.querySelector('.submit')

sbtbtn.addEventListener('click', (e) => {
e.preventDefault()
const selecopt = document.querySelector('.selecopt').value;
const num1 = document.querySelector('.num1').value;
const num2 = document.querySelector('.num2').value;

  switch(selecopt){

    case "plus":
      result.innerHTML = Number(num1) +  Number(num2);
      break;
    
    case "minus":
      result.innerHTML = Number(num1) -  Number(num2);
      break;

    case "multiply":
      result.innerHTML = Number(num1) *  Number(num2);
      break;
    
    case "divide":
      if(Number2(num2) === 0){
        result.innerHTML = "Error: Division by zero";
      } else {
        result.innerHTML = Number1(num1) / Number2(num2);
      }
 
  }
})