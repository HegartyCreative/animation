let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

master.to(".start", {
  opacity: 0,
  delay: 2,
});

// Barcelona

master.to(".barcelona", {
  scale: 1.1,
  ease: "none",
  transformOrigin: "center center",
  duration: 5,
});

master.to(
  ".start_text",
  {
    opacity: 0,
  },
  "=-6"
);

master.to(
  ".barcelona_text1, .barcelona_text2",
  {
    opacity: 1,
  },
  "<"
);

master.to(
  ".barcelona, .barcelona_text1, .barcelona_text2",
  {
    x: 320,
    ease: "none",
    duration: 0.25,
  },
  "=+0.25"
);

master.fromTo(
  ".box1",
  {
    x: -300,
  },
  {
    x: 300,
    ease: "none",
    duration: 0.25,
  },
  "=-0.25"
);

master.to(
  ".venice, .venice_text1, .venice_text2",
  {
    scale: 1.05,
    ease: "none",
    transformOrigin: "center center",
    duration: 5,
    stagger: 0.5,
  },
  "=-0.5"
);

master.to(
  ".venice_text1, .venice_text2",
  {
    opacity: 1,
  },
  "=-5"
);

// Rome

master.to(
  ".venice, .venice_text1, .venice_text2",
  {
    x: 320,
    ease: "none",
    duration: 0.25,
  },
  "=+0.25"
);

master.fromTo(
  ".box1",
  {
    x: -300,
  },
  {
    x: 300,
    ease: "none",
    duration: 0.25,
  },
  "=-0.25"
);

master.to(
  ".rome, .rome_text1, .rome_text2",
  {
    scale: 1.05,
    ease: "none",
    transformOrigin: "center center",
    duration: 5,
    stagger: 0.5,
  },
  "=-0.5"
);

master.to(
  ".rome_text1, .rome_text2",
  {
    opacity: 1,
  },
  "=-5"
);

// Monte Carlo

master.to(
  ".rome, .rome_text1, .rome_text2",
  {
    x: 320,
    ease: "none",
    duration: 0.25,
  },
  "=+0.25"
);

master.fromTo(
  ".box1",
  {
    x: -300,
  },
  {
    x: 300,
    ease: "none",
    duration: 0.25,
  },
  "=-0.25"
);

master.to(
  ".berlin, .berlin_text1, .berlin_text2",
  {
    scale: 1.05,
    ease: "none",
    transformOrigin: "center center",
    duration: 5,
    stagger: 0.5,
  },
  "=-0.5"
);

master.to(
  ".berlin_text1, .berlin_text2",
  {
    opacity: 1,
  },
  "=-5"
);

// Amsterdam

master.to(
  ".berlin, .berlin_text1, .berlin_text2",
  {
    x: 320,
    ease: "none",
    duration: 0.25,
  },
  "=+0.25"
);

master.fromTo(
  ".box1",
  {
    x: -300,
  },
  {
    x: 300,
    ease: "none",
    duration: 0.25,
  },
  "=-0.25"
);

master.to(
  ".montpelier, .montpelier_text1, .montpelier_text2",
  {
    scale: 1.05,
    ease: "none",
    transformOrigin: "center center",
    duration: 5,
    stagger: 0.5,
  },
  "=-0.5"
);

master.to(
  ".montpelier_text1, .montpelier_text2",
  {
    opacity: 1,
  },
  "=-5"
);

master.to(".end", {
  opacity: 1,
});

master.to(".end_text", {
  opacity: 1,
});

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
