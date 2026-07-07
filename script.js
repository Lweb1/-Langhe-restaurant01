const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// const button=document.getElementById("bc");
// const content=document.getElementById("contact-us");

// button.addEventListener('click', ()=>{
//     content.classList.toggle("contactusno");

// });


const button=document.getElementById("bc");
const content=document.getElementById("contact-us");
const back=document.getElementById("back");
button.addEventListener("click",()=>{
    content.classList.toggle("n");

});
back.addEventListener("click",()=>{
    content.classList.toggle("n");

});

const button1=document.getElementById("ba");
const content1=document.getElementById("ab");
const back1=document.getElementById("btnb");
button1.addEventListener("click",()=>{
    content1.classList.toggle("aboutusno");

});
back1.addEventListener("click",()=>{
    content1.classList.toggle("aboutusno");

});