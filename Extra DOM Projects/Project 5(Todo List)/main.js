const form = document.querySelector('.form');
const input = document.querySelector('.input');
const addtodos = document.querySelector('.todos');


function gettodo(value){
  const textEl = document.createElement("span");
  textEl.innerHTML = value;
  const todo = document.createElement("div");
  todo.appendChild(textEl);

  const deletetodo = document.createElement("div");
  deletetodo.innerHTML = "&times";
  deletetodo.classList.add('delete');

  deletetodo.addEventListener("click", function(e) {
    addtodos.removeChild(todo);
  })

  todo.appendChild(deletetodo);
  todo.classList.add("todo");
  return todo;

}

form.addEventListener("submit", function(e){
  e.preventDefault();
  let value = input.value;
  if(!value.trim()) return
  addtodos.appendChild(gettodo(value))
  input.value = "";
})