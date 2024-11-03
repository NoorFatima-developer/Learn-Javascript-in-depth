// const updatedcontainer = document.querySelector('.container')
// const ratingcontainer = document.querySelector('.ratingcontainer')
// // const panel = document.querySelector('#panel');
// const rating = document.querySelectorAll('.rating');
// const button = document.querySelector('.btn')

// const selectedRating = "Satisfied";

// ratingcontainer.addEventListener("click", (e) => {
//   if(e.target.parentNode.classList.contains("rating")) {

//     removeActive();

//     e.target.parentNode.classList.add("active");
//     selectedRating = e.target.nextElementSibling.innerHTML;
//   }
// })

// button.addEventListener('click', function (e) {
//   updatedcontainer.innerHTML = `
//   <p class = "heart">❤️</p>
//   <strong>Thank You!</strong>
//   <br />
//   <strong>Feedback: ${selectedRating}</strong>`
// })

// function removeActive(){
//   for(let i = 0; i<rating.length; i++){
//     rating[i].classList.remove('active');
//   }
// }







const rating = document.querySelector('.rating');
const icon = document.querySelector('.icon');
const btn = document.querySelector('.btn');
const updatedcontainer = document.querySelector('.container');

const ratingcontainer = document.querySelector('.ratingcontainer');

const selectedRating = "Satisfied"


ratingcontainer.addEventListener('click', (e) => {
  if(e.target.parentNode.classList.contains('rating'));

  removeActive();   //iska mtlb ye h k bs oss class ko active kro jo user select kry bakio ko remove krdo

  e.target.parentNode.classList.add('active');
  selectedRating = e.target.nextElementSibling.innerHTML;
  
});


btn.addEventListener('click', () => {
  updatedcontainer.innerHTML = `
  <p class="heart">❤️</p>
  <strong>Thank You!</strong>
  <br />
  <strong>Feedback: ${selectedRating}</strong>`
});


function removeActive() {
  for(i = 0; i <rating.length; i++) {
    rating[i].classList.remove('active');
  }
}