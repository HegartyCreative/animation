let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Intro

master.to(".start", {
  opacity: 0,
});

master.from("#Moon", {
  x: -140,
  ease: "none",
  duration: 2,
});

master.from(
  "#pumpkin1, #pumpkin2",
  {
    y: 70,
    ease: "back.out(1.7)",
    duration: 0.75,
    stagger: 0.25,
  },
  "<"
);

master.to(
  ".web",
  {
    x: -20,
    y: 20,
    ease: "back.out(1.7)",
    duration: 0.25,
    scale: 1.3,
  },
  "<"
);

master.to(
  ".spider",
  {
    x: -30,
    y: 30,
    ease: "back.out(1.7)",
    duration: 3,
  },
  ">"
);

master.to(
  ".witch",
  {
    x: 270,
    y: -170,
    ease: "none",
    duration: 5,
  },
  "<"
);

master.from(
  "#happy",
  {
    x: 150,
    ease: "back.out(1.7)",
  },
  "<"
);

master.from(
  "#halloween",
  {
    x: 150,
    ease: "back.out(1.7)",
  },
  ">"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
