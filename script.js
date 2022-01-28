console.log("Welcome to spotify")

let songIndex=1;
let audioElement =new Audio('1.mp3');
console.log(audioElement.duration)
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let masterSongName=document.getElementById('masterSongName')
let gif=document.getElementById('gif')
let songItem=Array.from(document.getElementsByClassName('songitem'))
let songs=[
    {songName:"Blinding Lights",filePath:"1.mp3",coverPath:"1.jpg"},
    {songName:"Save Your Tears",filePath:"2.mp3",coverPath:"2.jpg"},
    {songName:"Willow",filePath:"3.mp3",coverPath:"3.jpg"},   
    {songName:"Attack on Titan",filePath:"4.mp3",coverPath:"4.jpg"},  
    {songName:"Despacito",filePath:"5.mp3",coverPath:"5.jpg"},
    {songName:"Zingaat",filePath:"6.mp3",coverPath:"6.jpg"},
    {songName:"Gangam Style",filePath:"7.mp3",coverPath:"7.jpg"},
    {songName:"Param Sundari",filePath:"8.mp3",coverPath:"8.jpg"},
    {songName:"Dhinka chika",filePath:"9.mp3",coverPath:"9.jpg"}
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
        document.getElementById(songIndex).classList.add('fa-pause-circle')
        document.getElementById(songIndex).classList.remove('fa-play-circle')
        audioElement.play();
        gif.style.opacity=100
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    }
    else{
        document.getElementById(songIndex).classList.add('fa-play-circle')
        document.getElementById(songIndex).classList.remove('fa-pause-circle')
        audioElement.pause();
        gif.style.opacity=0
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
    }

})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle')
        element.classList.remove('fa-pause-circle')  
    })
}

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
 element.addEventListener('click',(e)=>{
   
    songIndex=parseInt(e.target.id)

   if(document.getElementById(songIndex).classList[2]=='fa-pause-circle'){
    gif.style.opacity=0
    audioElement.pause();
    document.getElementById(songIndex).classList.add('fa-play-circle')
    document.getElementById(songIndex).classList.remove('fa-pause-circle')

   }
   else{
gif.style.opacity=100
   makeAllPlay()
   songIndex=parseInt(e.target.id)
   masterSongName.innerText=songs[songIndex-1].songName
   e.target.classList.remove('fa-play-circle')
   e.target.classList.add('fa-pause-circle')
   audioElement.src=`${songIndex}.mp3`
   audioElement.play()
   audioElement.currentTime=0
   masterPlay.classList.add('fa-pause-circle')
   masterPlay.classList.remove('fa-play-circle')
   }
 })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex==9){
        songIndex=1
        document.getElementById(songIndex).classList.add('fa-pause-circle')
    document.getElementById(songIndex).classList.remove('fa-play-circle')
    document.getElementById('9').classList.add('fa-play-circle')
    document.getElementById('9').classList.remove('fa-pause-circle')
    }
    else{
        songIndex+=1;
        document.getElementById(songIndex).classList.add('fa-pause-circle')
        document.getElementById(songIndex).classList.remove('fa-play-circle')
        document.getElementById(songIndex-1).classList.add('fa-play-circle')
        document.getElementById(songIndex-1).classList.remove('fa-pause-circle')
    }

    audioElement.src=`${songIndex}.mp3`
    masterSongName.innerText=songs[songIndex-1].songName
   audioElement.play()
    audioElement.currentTime=0
   masterPlay.classList.add('fa-pause-circle')
   masterPlay.classList.remove('fa-play-circle')
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex==1){
        songIndex=9
        document.getElementById(songIndex).classList.add('fa-pause-circle')
        document.getElementById(songIndex).classList.remove('fa-play-circle')
        document.getElementById('1').classList.add('fa-play-circle')
        document.getElementById('1').classList.remove('fa-pause-circle')
    }
    else{
        songIndex-=1;
        document.getElementById(songIndex).classList.add('fa-pause-circle')
        document.getElementById(songIndex).classList.remove('fa-play-circle')
        document.getElementById(songIndex+1).classList.add('fa-play-circle')
        document.getElementById(songIndex-1).classList.remove('fa-pause-circle')
    }

    audioElement.src=`${songIndex}.mp3`
    masterSongName.innerText=songs[songIndex-1].songName
   audioElement.play()
    audioElement.currentTime=0
   masterPlay.classList.add('fa-pause-circle')
   masterPlay.classList.remove('fa-play-circle')
})

window.setInterval(nextSongPlay,1000)
function nextSongPlay(){
    
    if(audioElement.currentTime==audioElement.duration){
   
    if(songIndex==9){
        songIndex=1
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`${songIndex}.mp3`
    masterSongName.innerText=songs[songIndex-1].songName
   audioElement.play()

}
}
