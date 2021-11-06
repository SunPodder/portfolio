const body = document.querySelector("body"),
 superCenter = document.querySelectorAll(".super-center"),
  urls = [
    "https://sunpodder.github.io/todo-app-scratch", 
    "https://weather.sunpodder.repl.co",
    "https://salon-template.sunpodder.repl.co"
  ],
  iframes = document.querySelectorAll("iframe")

body.onload = () => {
  if(window.innerWidth < 600){
    body.style.backgroundImage = "url(portrait.bg.jpeg)"
  }else{
    body.style.backgroundImage = "url(landscape.bg.jpg)"
  }
  document.querySelector("img").src = "profile.jpeg"
  for(i=0; i< iframes.length; i++){
    iframes[i].src = urls[i]
  }
}
