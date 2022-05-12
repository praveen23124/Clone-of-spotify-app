
var songIndex = 0;
var audio = new Audio("songs/1.mp3");
var masterPlay = document.getElementById("masterPlay");
var myProgressBar = document.getElementById("myProgressBar");
var gif = document.getElementById("gif");
masterSongName = document.getElementById('masterSongName');
var songItems = Array.from(document.getElementsByClassName('songItem'));
var checking = "fa-circle-play";


var songs = [
  {songName: "natu natu from rrr",filePath: "songs/1.mp3",coverpath: "covers/1.jpg"},
  {songName: "Rangasthalam",filePath: "songs/2.mp3",coverpath: "covers/2.jpg"},
  {songName: "Samajavaragamana",filePath: "songs/3.mp3",coverpath: "covers/3.jpg"},
  {songName: "MaateVinadhuga",filePath: "songs/4.mp3",coverpath: "covers/4.jpg"},
  {songName: "Nuvvunte naa jathaga",filePath: "songs/5.mp3",coverpath: "covers/5.jpg"},
  {songName: "vachindamma",filePath: "songs/6.mp3",coverpath: "covers/6.jpg"},
  {songName: "undiporadhey",filePath: "songs/7.mp3",coverpath: "covers/7.jpg"},
  {songName: "EmaiPoyave",filePath: "songs/8.mp3",coverpath: "covers/8.jpg"},
  {songName: "Emo Emo Emoo",filePath: "songs/9.mp3",coverpath: "covers/9.jpg"},
  {songName: "Vellipomake",filePath: "songs/10.mp3",coverpath: "covers/10.jpg"},
]

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener("click", ()=>{
  if(audio.paused || audio.currentTime<=0){
    audio.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity=1;
  }
  else {
    audio.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity=0;
  }
});

audio.addEventListener("timeupdate", ()=> {
  var progress = parseInt((audio.currentTime/audio.duration)*100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change",()=> {
  audio.currentTime = myProgressBar.value*audio.duration/100;
})
// we can also write below code as
// function makeAllPlays(){
//   code
// }
const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
  element.addEventListener("click",(e)=>{
  songIndex = parseInt(e.target.id);
    if(audio.paused || audio.currentTime<=0){
    makeAllPlays();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audio.src = 'songs/'+(songIndex+1)+'.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audio.currentTime = 0;
    audio.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
  }
  else {
    audio.pause();
      e.target.classList.remove('fa-circle-pause');
      e.target.classList.add('fa-circle-play');
      masterPlay.classList.remove("fa-pause-circle");
      masterPlay.classList.add("fa-circle-play");
  }
  })
})

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=9) {
    songIndex = 0;
  }
  else {
    songIndex+=1;
  }
  audio.src = 'songs/'+(songIndex+1)+'.mp3';
  masterSongName.innerText = songs[songIndex].songName;
  audio.currentTime = 0;
  audio.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0) {
    songIndex = 9;
  }
  else {
    songIndex-=1;
  }
  audio.src = 'songs/'+(songIndex+1)+'.mp3';
  masterSongName.innerText = songs[songIndex].songName;
  audio.currentTime = 0;
  audio.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})
