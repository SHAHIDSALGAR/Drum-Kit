const document1=document.querySelectorAll(".drum").length
for(let i=0;i<document1;i++){document.querySelectorAll(".drum")[i].addEventListener("click",function(){let keyvalue=this.innerHTML;playsound(keyvalue)
button(keyvalue)})}
document.addEventListener("keydown",function(event){let nodevalue=event.key;playsound(nodevalue)
button(nodevalue)})
function playsound(soundnode){switch(soundnode){case "w":var audio=new Audio('sounds/tom-1.mp3');audio.play();break;case "a":var audio=new Audio('sounds/tom-2.mp3');audio.play();break;case "s":var audio=new Audio('sounds/tom-3.mp3');audio.play();break;case "d":var audio=new Audio('sounds/tom-4.mp3');audio.play();break;case "j":var audio=new Audio('sounds/snare.mp3');audio.play();break;case "k":var audio=new Audio('sounds/crash.mp3');audio.play();break;case "l":var audio=new Audio('sounds/kick-bass.mp3');audio.play();break;default:break}}
function button(add1){var activebutton=document.querySelector("."+add1)
console.log(activebutton);activebutton.classList.add("pressed")
setTimeout(function(){activebutton.classList.remove("pressed")},100)} 