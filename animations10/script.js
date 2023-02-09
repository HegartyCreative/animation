let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

master.to(
  ".start_group",
  {
    opacity: 0,
  },
  "=+1"
);

// apples
master.from(
  ".apples_image",
  { y: 250, duration: 0.5, ease: "back.out(2)" },
  "=+0.75"
);

master.fromTo(
  ".apples_text",
  { x: 80, y: 80, opacity: 0 },
  { y: 120, ease: "back.out(2)", opacity: 1, duration: 0.35 }
);

master.to(
  ".apples",
  {
    opacity: 0,
  },
  "=+1"
);

// grapes
master.from(
  ".grapes_image",
  { y: 250, duration: 0.5, ease: "back.out(2)" },
  "=-0.25"
);
master.fromTo(
  ".grapes_text",
  { x: 65, y: 80, opacity: 0 },
  { y: 120, ease: "back.out(2)", opacity: 1, duration: 0.35 }
);

master.to(
  ".grapes",
  {
    opacity: 0,
  },
  "=+1"
);

// bananas
master.from(
  ".bananas_image",
  { y: 250, duration: 0.5, ease: "back.out(2)" },
  "=-0.25"
);
master.fromTo(
  ".bananas_text",
  { x: 81, y: 80, opacity: 0 },
  { y: 120, ease: "back.out(2)", opacity: 1, duration: 0.35 }
);

master.to(
  ".bananas",
  {
    opacity: 0,
  },
  "=+1"
);

// peppers
master.from(
  ".peppers_image",
  { y: 250, duration: 0.5, ease: "back.out(2)" },
  "=-0.25"
);
master.fromTo(
  ".peppers_text",
  { x: 100, y: 80, opacity: 0 },
  { y: 120, ease: "back.out(2)", opacity: 1, duration: 0.35 }
);

master.to(
  ".peppers",
  {
    opacity: 0,
  },
  "=+1"
);

// tomatoes
master.from(
  ".tomatoes_image",
  { y: 250, duration: 0.5, ease: "back.out(2)" },
  "=-0.25"
);
master.fromTo(
  ".tomatoes_text",
  { x: 98, y: 80, opacity: 0 },
  { y: 120, ease: "back.out(2)", opacity: 1, duration: 0.35 }
);

master.to(
  ".tomatoes",
  {
    opacity: 0,
  },
  "=+1"
);

// cucumbers
master.from(
  ".cucumbers_image",
  { y: 250, duration: 0.5, ease: "back.out(2)" },
  "=-0.25"
);
master.fromTo(
  ".cucumbers_text",
  { x: 64, y: 80, opacity: 0 },
  { y: 120, ease: "back.out(2)", opacity: 1, duration: 0.35 }
);

master.to(
  ".cucumbers",
  {
    opacity: 0,
  },
  "=+1"
);

// corn
master.from(
  ".corn_image",
  { y: 250, duration: 0.5, ease: "back.out(2)" },
  "=-0.25"
);
master.fromTo(
  ".corn_text",
  { x: 70, y: 80, opacity: 0 },
  { y: 120, ease: "back.out(2)", opacity: 1, duration: 0.35 }
);

master.to(
  ".corn",
  {
    opacity: 0,
  },
  "=+1"
);

// carrots
master.from(
  ".carrots_image",
  { y: 250, duration: 0.5, ease: "back.out(2)" },
  "=-0.25"
);
master.fromTo(
  ".carrots_text",
  { x: 96, y: 80, opacity: 0 },
  { y: 120, ease: "back.out(2)", opacity: 1, duration: 0.35 }
);

master.to(
  ".carrots",
  {
    opacity: 0,
  },
  "=+1"
);

master.to(
  ".end",
  {
    opacity: 1,
  },
  "=-0.1"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
