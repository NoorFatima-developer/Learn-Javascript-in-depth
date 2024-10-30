
//Getting elements from the DOM:
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let todos = document.querySelector(".todos");

function getTodo(value) {


  // Creating elements

const textEl = document.createElement("span");
const todo = document.createElement("div");

  //Setting values and styles:

  textEl.innerHTML = value;
  
  todo.appendChild(textEl); 

  let closeEl = document.createElement("span")
  closeEl.innerHTML = "&times";
  closeEl.classList.add('delete');


  //Attach events

  closeEl.addEventListener("click", (e) => {
    todos.removeChild(todo);

  })

  todo.appendChild(closeEl);
  todo.classList.add("todo");
  return todo;
}


form.addEventListener("submit", (e) => {

  e.preventDefault();

  let value = input.value;
  if(!value.trim())return;
  todos.appendChild(getTodo(value));
  input.value = "";
});
