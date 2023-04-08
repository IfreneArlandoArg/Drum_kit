var ltgBtn = document.querySelectorAll("button").length;

for ( var i = 0 ; i< ltgBtn ; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",eventClick);
}

function eventClick (){
    
    buttonAnimation(this.innerHTML);
    //Play an audio on a webPage...
    if(this.innerHTML === "w"  ){
        var audio = new Audio("sounds/tom-1.mp3");
    }
    if(this.innerHTML === "a"){
        var audio = new Audio("sounds/tom-2.mp3");
    }
    if(this.innerHTML === "s"){
        var audio = new Audio("sounds/tom-3.mp3");
    }
    if(this.innerHTML === "d"){
        var audio = new Audio("sounds/tom-4.mp3");
    }
    if(this.innerHTML === "j"){
        var audio = new Audio("sounds/snare.mp3");
    }
    if(this.innerHTML === "k"){
        var audio = new Audio("sounds/crash.mp3");
    }
    if(this.innerHTML === "l"){
        var audio = new Audio("sounds/kick-bass.mp3");
    }
        
    audio.play();
}



//Playing an audio

 document.addEventListener("keydown",(e) => {
 
    buttonAnimation(e.key);

    if(e.key === "w"  ){
        var audio = new Audio("sounds/tom-1.mp3");
    }
    if(e.key === "a"){
        var audio = new Audio("sounds/tom-2.mp3");
    }
    if(e.key === "s"){
        var audio = new Audio("sounds/tom-3.mp3");
    }
    if(e.key === "d"){
        var audio = new Audio("sounds/tom-4.mp3");
    }
    if(e.key === "j"){
        var audio = new Audio("sounds/snare.mp3");
    }
    if(e.key === "k"){
        var audio = new Audio("sounds/crash.mp3");
    }
    if(e.key === "l"){
        var audio = new Audio("sounds/kick-bass.mp3");
    }
        
    audio.play();
 });
 
function buttonAnimation(pEvent){
    document.querySelector("." + pEvent).classList.add("pressed");

    setTimeout(() => document.querySelector("." + pEvent).classList.remove("pressed") , 100);
}