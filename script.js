console.log("this is the 1st project");

//get the variables
let play_btn=document.getElementById('play_btn');
let song_progress=document.getElementById('song_progress');
let gif=document.getElementById('gif');
let audioelement=new Audio('song/1.mp3');
let song=Array.from(document.getElementsByClassName('song'));
let songs=[
    {songname:"NightChanges",filepath:"song/1.mp3"},
    {songname:"Aye Khuda",filepath:"song/2.mp3"},
    {songname:"Pyaar Hota Kai Baar",filepath:"song/3.mp3"},
    {songname:"Raabta",filepath:"song/4.mp3"},
    {songname:"A1",filepath:"song/5.mp3"},
    {songname:"P1",filepath:"song/6.mp3"}
]

song.forEach((element,i) => {
    element.getElementsByClassName('name')[0].innerHTML=songs[i].songname;
    
});

//play song
play_btn.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime==0){audioelement.play();
                                              gif.style.opacity=1;    
                                              play_btn.classList.remove('fa-circle-play');
                                              play_btn.classList.add('fa-circle-pause');

    }
    else{
        audioelement.pause();
        gif.style.opacity=0;    
        play_btn.classList.remove('fa-circle-pause');
        play_btn.classList.add('fa-circle-play');
    }
})

//update Song Progress
audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(progress);
    song_progress.value=progress;
})

//Update Current time on changing song_progress

song_progress.addEventListener('change',()=>{
    audioelement.currentTime=song_progress.value*audioelement.duration/100;
})