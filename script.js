const playbtn = document.getElementById("play-icon");
const prevbtn = document.getElementById("prev-icon");
const nextbtn = document.getElementById("next-icon");
const mysong = document.getElementById("song");
const cdicon = document.getElementById("cd");
const bar = document.getElementById("progressbar");

playbtn.addEventListener("click", function () {
  if (mysong.paused) {
    mysong.play();
    playbtn.src = "pause.png";
    cdicon.classList.add("cd1");
  } else {
    mysong.pause();
    playbtn.src = "play.png";
    cdicon.classList.remove("cd1");
  }
});

mysong.ontimeupdate = function (e) {
  console.log("playing",100*mysong.currentTime/mysong.duration);
  
};

mysong.onloadeddata = function () {
  bar.max = mysong.duration;
  bar.value = mysong.currentTime;
};
if (mysong.play()) {
  setInterval(() => {
    bar.value = mysong.currentTime;
  }, 500);
}
