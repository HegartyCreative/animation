let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

master.to(".title", {
  x: -60,
  y: -138,
  rotation: -90,
  delay: 1,
});

master.fromTo(
  ".isAn",
  {
    x: -13,
    y: 130,
    rotation: -90,
    duration: 1,
    scale: 1,
    transformOriginX: "50% 50%",
    opacity: 0,
  },
  {
    scale: 1.2,
    transformOriginX: "bottom bottom",
    y: 120,
    x: 10,
    rotation: -60,
    opacity: 1,
  },
  ">"
);
master.to(
  ".title",
  {
    opacity: 0,
  },
  "<"
);

master.to(".isAn", {
  rotate: -90,
  x: -40,
  y: 100,
});

master.fromTo(
  ".invisible",
  {
    x: 170,
    y: 320,
    scale: 3,
    rotate: -45,
  },
  {
    x: 55,
    y: 42,
    scale: 1,
    rotate: 0,
  }
);

master.to(
  ".foe",
  {
    opacity: 1,
  },
  ">"
);

master.from(".invisible_img", {
  y: 200,
});

master.to(
  ".isAn, .invisible, .foe",
  {
    x: -220,
    ease: "back.in(0.25)",
    stagger: 0.2,
  },
  "=+2"
);

master.to(
  ".invisible_img",
  {
    x: 200,
    ease: "back.in(0.25)",
  },
  ">"
);

master.to(".living, .inLiberia", {
  opacity: 1,
});

master.to(".living", {
  y: -10,
  scale: 0.9,
  transformOrigin: "0% 100%",
});

master.to(
  ".inLiberia",
  {
    y: -20,
    scale: 0.8,
    transformOrigin: "0% 100%",
  },
  "<"
);

master.fromTo(
  ".africa1",
  {
    opacity: 0,
    scale: 1.1,
    x: 0,
    y: 0,
  },
  {
    scale: 0.85,
    x: 145,
    y: -40,
    opacity: 1,
    duration: 1,
  },
  "<"
);

master.to(
  ".africa2",
  {
    opacity: 1,
  },
  ">"
);

master.fromTo(
  ".right, .now, .is",
  {
    y: 0,
    x: 0,
    opacity: 0,
  },
  {
    opacity: 1,
    y: -10,
    x: 10,
    stagger: 0.25,
  },
  ">"
);

master.fromTo(
  ".living",
  {
    scale: 1,
  },
  {
    scale: 0.5,
    rotate: -90,
    x: 30,
    y: 45,
  },
  "=+1"
);

master.fromTo(
  ".inLiberia",
  {
    scale: 1,
  },
  {
    scale: 0.5,
    rotate: -90,
    x: 52,
    y: 0,
  },
  "=-0.2"
);

master.fromTo(
  ".right",
  {
    scale: 1,
  },
  {
    scale: 0.5,
    rotate: -90,
    x: -51,
    y: -64,
  },
  "=-0.2"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
