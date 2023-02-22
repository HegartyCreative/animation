let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

gsap.set(".container", { autoAlpha: 1 });

master.to(
  "h1",
  {
    x: -290,
    ease: "back.in(1)",
    duration: 0.45,
  },
  "=+0.5"
);

master.to(
  ".background",
  {
    x: -1000,
    duration: 9,
    ease: "none",
  },
  "=-0.25"
);

master.to(
  ".grass",
  {
    x: -1000,
    duration: 9,
    ease: "none",
  },
  "<"
);

master.to(
  ".flowers",
  {
    x: -1100,
    duration: 9,
    ease: "none",
  },
  "<"
);

master.to(
  ".bunny",
  {
    x: -1020,
    duration: 9,
    ease: "none",
  },
  "<"
);

master.from(
  ".one",
  {
    y: 130,
    duration: 0.8,
    ease: "back.out(1.7)",
  },
  "<"
);

master.from(
  ".two",
  {
    y: 160,
    duration: 0.8,
    ease: "back.out(1.7)",
  },
  ">"
);

master.to(
  ".quote1",
  {
    opacity: 1,
  },
  ">-=0.5"
);

master.from(
  ".three",
  {
    y: 175,
    duration: 0.8,
    ease: "back.out(1.7)",
  },
  ">"
);

master.from(
  ".four",
  {
    y: 175,
    duration: 0.8,
    ease: "back.out(1.7)",
  },
  ">"
);

master.to(
  ".quote1",
  {
    opacity: 0,
  },
  ">-=0.5"
);

master.from(
  ".five",
  {
    y: 205,
    duration: 0.8,
    ease: "back.out(1.7)",
  },
  ">"
);

master.to(
  ".quote2",
  {
    opacity: 1,
  },
  ">-=0.5"
);

master.from(
  ".six",
  {
    y: 175,
    duration: 0.8,
    ease: "back.out(1.7)",
  },
  ">"
);

master.from(
  ".seven",
  {
    y: 175,
    duration: 0.8,
    ease: "back.out(1.7)",
  },
  ">"
);

master.to(
  ".quote2",
  {
    opacity: 0,
  },
  ">-=0.5"
);

master.from(
  ".eight",
  {
    y: 225,
    duration: 0.8,
    ease: "back.out(1.7)",
  },
  ">"
);

master.to(
  ".quote3",
  {
    opacity: 1,
  },
  ">-=0.5"
);

master.from(
  ".nine",
  {
    y: 145,
    duration: 0.8,
    ease: "back.out(1.7)",
  },
  ">"
);

master.from(
  ".ten",
  {
    y: 155,
    duration: 0.8,
    ease: "back.out(1.7)",
  },
  ">"
);

master.to(
  ".quote3",
  {
    opacity: 0,
  },
  ">-=0.5"
);

master.from(
  ".eleven",
  {
    y: 175,
    duration: 0.8,
    ease: "back.out(1.7)",
  },
  ">"
);

master.to(
  ".quote4",
  {
    opacity: 1,
  },
  ">-=0.5"
);

master.from(
  ".twelve",
  {
    y: 175,
    duration: 0.8,
    ease: "back.out(1.7)",
  },
  ">"
);

master.to(".bunny, .background, .quote4", {
  opacity: 0,
});

master.to(
  ".end_background",
  {
    opacity: 1,
  },
  "<"
);

master.to(
  ".end",
  {
    opacity: 1,
  },
  "=+0.25"
);

master.to(
  "h2",
  {
    opacity: 1,
  },
  "=-0.25"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
