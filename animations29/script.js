let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
// master.pause();

// Intro

master.set(".star", {
  transformOrigin: "bottom center",
  autoAlpha: 0,
  scale: 0,
});

master.to(".star", {
  autoAlpha: 1,
  duration: 5,
  scale: 1,
  stagger: {
    // wrap advanced options in an object
    each: 0.05,
    from: "random",
    ease: "power4.inOut",
    // repeat: -1, // Repeats immediately, not waiting for the other staggered animations to finish
    // yoyo: true,
  },
});

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
