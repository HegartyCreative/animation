let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Intro

master.from(".logo", {
  scale: 3,
  x: 105,
  y: 100,
  ease: "none",
});

master.from("h1", {
  x: -140,
  ease: "back.out(1.7)",
});

master.from(
  "h2",
  {
    x: -170,
    ease: "back.out(1.7)",
  },
  "-=0.25"
);

master.to("p", {
  opacity: 1,
});

master.to(
  ".myButton",
  {
    opacity: 1,
  },
  "<"
);

master.from(
  ".one",
  {
    y: -90,
    x: 90,
    ease: "back.out(1.7)",
    duration: 0.75,
  },
  "-=0.5"
);

master.from(
  ".two",
  {
    y: -140,
    x: 120,
    ease: "back.out(1.7)",
    duration: 0.75,
  },
  "-=0.25"
);

master.from(
  ".three",
  {
    y: -160,
    x: 130,
    ease: "back.out(1.7)",
    duration: 0.75,
  },
  "-=0.25"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
