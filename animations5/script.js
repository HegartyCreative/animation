let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

// Button code

master.to(".logo", {
  opacity: 0,
});

master.from(".one", {
  x: -100,
  ease: "power4.out",
  duration: 0.75,
});

master.to(
  ".text1",
  {
    opacity: 1,
    duration: 0.25,
    x: 10,
  },
  "=-0.25"
);

master.to(
  ".two",
  {
    opacity: 1,
    ease: "power4.out",
  },
  ">"
);

master.from(".two", {
  x: -100,
  ease: "power4.out",
  duration: 0.75,
});

master.to(
  ".text2",
  {
    opacity: 1,
    duration: 0.25,
    x: 10,
  },
  "=-0.25"
);

master.to(
  ".three",
  {
    opacity: 1,
    ease: "power4.out",
  },
  ">"
);

master.from(".three", {
  x: -200,
  ease: "power4.out",
  duration: 0.75,
});

master.to(
  ".text3",
  {
    opacity: 1,
    duration: 0.25,
    x: 10,
  },
  "=-0.25"
);

master.to(
  ".generic",
  {
    opacity: 0,
  },
  "=+2"
);

master.to(".logo", {
  opacity: 1,
  y: -20,
});

master.to(
  ".address",
  {
    opacity: 1,
    y: -10,
  },
  "=-0.25"
);

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
