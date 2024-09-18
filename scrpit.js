

let body = document.querySelector("body");
let detailscontainer=document.getElementsByClassName('details-container'); 


body.style.transition = "1s";
let tags=document.getElementsByClassName('for-darkmode')

function Change() {
  if (body.style.backgroundColor !== "black") {
    body.style.backgroundColor = "black";
    detailscontainer.style.background = 'transparent';
    
    
    
   
    
  } else {
    body.style.backgroundColor = "white";
    document.querySelectorAll("*").forEach((el) => (el.style.color = "black"));
  }
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
