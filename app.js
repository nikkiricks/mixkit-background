const body = document.querySelector('body');

function randomImage(){
  var randomImageId = Math.floor(Math.random() * 560);

  randomUrl = `https://mixkit.imgix.net/art/${randomImageId}/${randomImageId}-desktop-wallpaper.png?auto=format&fm=jpg&q=80&h=1500`
  
  body.style["background-image"] = "url("+ randomUrl + ")";
}

document.addEventListener("DOMContentLoaded", randomImage);

