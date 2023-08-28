console.log("this is the 1st project");

//get the variables
let songindx=1;
let play_btn=document.getElementById('play_btn');
let song_progress=document.getElementById('song_progress');
let gif=document.getElementById('gif');
let audioelement=new Audio(`song/${songindx}.mp3`);
let song=Array.from(document.getElementsByClassName('song'));

let songitem=[
    {songname:"Night Changes",filepath:"song/1.mp3"},
    {songname:"Aye Khuda",filepath:"song/2.mp3"},
    {songname:"Pyaar Hota Kai Baar",filepath:"song/3.mp3"},
    {songname:"Raabta",filepath:"song/4.mp3"},
    {songname:"A1",filepath:"song/5.mp3"},
    {songname:"P1",filepath:"song/6.mp3"}
]


song.forEach((element,i) => {
    element.getElementsByClassName('name')[0].innerHTML=songitem[i].songname;
    
});



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

//play song
const makeAllbtnPlay= ()=>{
    Array.from(document.getElementsByClassName('song_play')).forEach((element)=>{
               element.classList.remove('fa-circle-pause');
               element.classList.add('fa-circle-play');
               
        })
}

const playcontrol=()=>{
    if(audioelement.paused || audioelement.currentTime==0){audioelement.play();
                                              console.log(audioelement.duration);
                                              document.getElementById(`${songindx}`).classList.remove('fa-circle-play');
                                              document.getElementById(`${songindx}`).classList.add('fa-circle-pause');
                                              
                                              gif.style.opacity=1;    
                                              play_btn.classList.remove('fa-circle-play');
                                              play_btn.classList.add('fa-circle-pause');

    }
    else{
        audioelement.pause();
        makeAllbtnPlay();
        gif.style.opacity=0;    
        play_btn.classList.remove('fa-circle-pause');
        play_btn.classList.add('fa-circle-play');
    }
}

//controlling the Play btn
play_btn.addEventListener('click',playcontrol);

Array.from(document.getElementsByClassName('song_play')).forEach((element)=>{
element.addEventListener('click',(e)=>{

       songindx=parseInt(e.target.id);
       
       makeAllbtnPlay();
       console.log(audioelement.src);
       if(audioelement.src==`http://127.0.0.1:5500/Music_Project/song/${songindx}.mp3`){
        
             playcontrol();
       }
       
       else{
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       
       document.getElementById("song_play_name").innerHTML=songitem[songindx-1].songname;
       audioelement.src=`song/${songindx}.mp3`;
       audioelement.currentTime=0;
       audioelement.play();

       gif.style.opacity=1;    
       play_btn.classList.remove('fa-circle-play');
       play_btn.classList.add('fa-circle-pause');}
})})

//Previous Btn control
document.getElementById('prev').addEventListener('click',()=>{
    songindx=(songindx-1);
    if(songindx==0){
         songindx=1;
    }
    makeAllbtnPlay();
    document.getElementById(`${songindx}`).classList.remove('fa-circle-play');
    document.getElementById(`${songindx}`).classList.add('fa-circle-pause');

    gif.style.opacity=1;    
    play_btn.classList.remove('fa-circle-play');
    play_btn.classList.add('fa-circle-pause');

    audioelement.src=`song/${songindx}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
})

//Next btn control
document.getElementById('next').addEventListener('click',()=>{
    songindx=(songindx+1);
    if(songindx==7){
         songindx=6;
    }
    makeAllbtnPlay();

    document.getElementById(`${songindx}`).classList.remove('fa-circle-play');
    document.getElementById(`${songindx}`).classList.add('fa-circle-pause');

    gif.style.opacity=1;    
    play_btn.classList.remove('fa-circle-play');
    play_btn.classList.add('fa-circle-pause');

    audioelement.src=`song/${songindx}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
})