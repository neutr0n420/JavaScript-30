//windows is the object that selects the current working window
window.addEventListener("keydown", function(a){
    // here the audio[data-key = 65] is the attribute selector in js
    const audio = document.querySelector(`audio[data-key="${a.keyCode}"]`);
    const key = document.querySelector(`div[data-key = "${a.keyCode}"]`);
    key.classList.add("playing")
    setTimeout(()=>{
      key.classList.remove("playing")
    },700)
    
    if(!audio) return
    audio.currentTime = 0 //rewind  to the start
    audio.play()
  })
