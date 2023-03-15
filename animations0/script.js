let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let movie = document.getElementById("theVideo");

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

gsap.set(".container", { autoAlpha: 1 });

master.to(
  ".wrapper",
  {
    y: 250,
    ease: "back.in(1)",
    duration: 0.75,
  },
  "=+0.5"
);

master.to(
  ".introText",
  {
    scale: 0.8,
    ease: "back.out(3)",
  },
  "=-0.15"
);

master.fromTo(
  ".transition1",
  {
    rotation: 0,
  },
  {
    rotation: -90,
    transformOrigin: "bottom left",
  },
  "=+2.5"
);

master.to(
  ".introText",
  {
    opacity: 0,
  },
  "<"
);

master.from(".firstLine", {
  x: -260,
  ease: "back.out(1.7)",
});

master.to(
  ".background, .mac, .screen",
  {
    opacity: 1,
  },
  ">"
);

master.to(
  ".cogs",
  {
    opacity: 1,
    stagger: 0.25,
  },
  "=+0.15"
);

master.to(
  ".laptop",
  {
    opacity: 1,
  },
  "=-0.15"
);

master.to(
  ".folder",
  {
    opacity: 1,
  },
  "=-0.25"
);

master.fromTo(
  ".bar",
  {
    y: 110,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    ease: "back.out(1.5)",
    stagger: 0.25,
  },
  "=-1.5"
);

master.to(
  ".bar",
  {
    x: -250,
  },
  "=+0.75"
);

master.fromTo(
  ".stats",
  {
    x: 250,
  },
  {
    x: 0,
    ease: "back.out(1.5)",
    stagger: 0.25,
  },
  "=+0.25"
);

master.to(
  ".stats",
  {
    x: -280,
    ease: "back.out(1.5)",
    stagger: 0.25,
    duration: 1,
  },
  "=+0.75"
);

master.to(
  ".background, .screen, .mac",
  {
    opacity: 0,
    duration: 0.1,
  },
  "=-0.5"
);

master.to(
  ".firstLine",
  {
    y: 100,
    ease: "back.out(1.7)",
  },
  "<"
);

master.to(
  ".firstLine",
  {
    y: 60,
    ease: "back.out(1.7)",
  },
  "=+0.25"
);

master.to(
  "#clock",
  {
    opacity: 1,
  },
  "-=1"
);

master.fromTo(
  "#clock",
  {
    scale: 0.8,
  },
  {
    scale: 0.6,
    duration: 1,
    ease: "back.inOut(1.7)",
    y: -20,
  },
  "-=1"
);

master.to(
  "#hour",
  {
    rotation: 360,
    transformOrigin: "bottom bottom",
    duration: 2,
    ease: "none",
    repeat: 2,
  },
  "-=1"
);

master.to(
  "#minute",
  {
    rotation: 720,
    transformOrigin: "top left",
    duration: 2,
    ease: "none",
    repeat: 2,
  },
  "<"
);

master.to(
  "#second",
  {
    rotation: 1080,
    transformOrigin: "top right",
    duration: 2,
    ease: "none",
    repeat: 2,
  },
  "<"
);

master.from(
  ".secondLine",
  {
    x: -290,
    ease: "back.out(1.7)",
  },
  "-=6"
);

master.to(
  ".secondLine",
  {
    y: 60,
    ease: "back.out(1.7)",
  },
  "-=3"
);

master.to(
  "#clock",
  {
    opacity: 0,
  },
  "<"
);

master.to(
  ".client",
  {
    opacity: 1,
    y: -20,
    stagger: 0.15,
  },
  "-=3"
);

master.from(
  ".thirdLine",
  {
    x: -260,
    ease: "back.out(1.7)",
  },
  "-=1.5"
);

master.to(
  ".thirdLine",
  {
    y: 100,
    ease: "back.out(1.7)",
  },
  "=+0.25"
);

master.to(
  ".client",
  {
    opacity: 0,
  },
  "<"
);

master.from(
  ".fourthLine",
  {
    x: -260,
    ease: "back.out(1.7)",
  },
  "-=0.2"
);

master.to(
  ".fourthLine",
  {
    opacity: 0,
  },
  "=+1.5"
);

master.to(".fifthLine", {
  opacity: 1,
});

master.to(".sixthLine", {
  opacity: 1,
});

master.to(".seventhLine", {
  opacity: 1,
});

// Button code

pause.addEventListener("click", () => {
  movie.play();
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
