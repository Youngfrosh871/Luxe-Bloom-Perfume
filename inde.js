const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let index = 0;

document.querySelector(".next").onclick = () =>{
index++;
if(index >= images.length){
index = 0;
}
slides.style.transform = `translateX(${-index * 400}px)`;
}

document.querySelector(".prev").onclick = () =>{
index--;
if(index < 0){
index = images.length - 1;
}
slides.style.transform = `translateX(${-index * 400}px)`;
}



