const body = document.querySelector("body"),
 superCenter = document.querySelectorAll(".super-center")

body.onload = () => {
  if(window.innerWidth < 600){
    body.style.backgroundImage = "url(portrait.bg.jpeg)"
  }else{
    body.style.backgroundImage = "url(landscape.bg.jpg)"
  }
}