let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const video = select(".video");

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

// Intro
var tl = gsap.timeline({
  paused: true,
  onComplete: () => (pause.innerHTML = "Play"),
});

tl.to(".start_background", 1, { opacity: 0 }, "+=1")
  .add(() => {
    video.play();
  }, 0)
  .to(".start", { opacity: 0 }, "<")
  .to(".logo", { opacity: 1 }, ">")
  .to(".section", { opacity: 1 }, video.duration);

// Button code

pause.addEventListener("click", () => {
  if (tl.paused()) {
    tl.paused(false);
    video.play();
  } else {
    tl.paused(true);
    video.pause();
  }

  if (tl.progress() == 1) {
    tl.restart();
    video.play();
  }
  pause.innerHTML = tl.paused() ? "Play" : "Pause";
});
