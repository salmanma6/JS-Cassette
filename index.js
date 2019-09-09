var current=0,prevmusic,prevmusicelement;
var tapechange=document.querySelector('#tapechange');
window.addEventListener('keydown',somefunction);
function somefunction(e){
    var music=document.querySelector(`#mus${e.keyCode}`);
    var element=document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(current==0)
    {
      element.classList.add('soundclick');
      music.play();
      current=1;
      prevmusic=music;
      prevmusicelement=element;
    }
    else{
    
        prevmusicelement.classList.remove('soundclick');
        element.classList.add('soundclick');
        prevmusic.pause();
        prevmusic.currentTime = 0;
        prevmusic=music;
        prevmusicelement=element;
        tapechange.play();
        setTimeout(function()
        {
            tapechange.pause();
            tapechange.currentTime=0;
            music.play();
        },1500);
       
    }
}

