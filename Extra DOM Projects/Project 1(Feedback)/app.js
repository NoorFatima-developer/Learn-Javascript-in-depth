const ratings = document.querySelectorAll(".ratings");
const ratingsContainer = document.querySelector(".ratings-container");
const panel = document.querySelector("#panel");
const sendBtn = document.querySelector("#send");


const selectedRating = "Satisfied";


ratingsContainer.addEventListener("click", (e) => {
  if(e.target.parentNode.classList.contains("rating")) {

    removeActive();

    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
})


sendBtn.addEventListener("click", (e)=> {
  panel.innerHTML = `
  <p class = "heart">❤️</p>
  <strong>Thank You!</strong>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  `
})


function removeActive() {
  for(let i = 0; i <ratings.length; i++){
    ratings[i].classList.remove("active")
  }
}