let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

// Nothing

master.to(".audrey", {
  opacity: 0,
  duration: 0,
  delay: 1,
});

master.to(".nothing, .elephant", {
  opacity: 1,
  duration: 0,
});

// Is

master.to(
  ".is, .dancing",
  {
    opacity: 1,
    duration: 0.3,
  },
  "=+0.6"
);

master.to(
  ".nothing, .elephant",
  {
    opacity: 0,
    duration: 0,
  },
  "<"
);

// Impossible

master.to(
  ".impossible, .lying",
  {
    opacity: 1,
    duration: 0.3,
  },
  "=+0.6"
);

master.to(
  ".is, .dancing",
  {
    opacity: 0,
    duration: 0,
  },
  "<"
);

// The

master.to(
  ".thee, .hands",
  {
    opacity: 1,
    duration: 0.3,
  },
  "=+0.6"
);

master.to(
  ".impossible, .lying",
  {
    opacity: 0,
    duration: 0,
  },
  "<"
);

// Word,

master.to(
  ".word, .lightening",
  {
    opacity: 1,
    duration: 0.3,
  },
  "=+0.6"
);

master.to(
  ".thee, .hands",
  {
    opacity: 0,
    duration: 0,
  },
  "<"
);

// Itself,

master.to(
  ".itself, .flame",
  {
    opacity: 1,
    duration: 0.3,
  },
  "=+0.6"
);

master.to(
  ".word, .lightening",
  {
    opacity: 0,
    duration: 0,
  },
  "<"
);

// Says,

master.to(
  ".says, .coffee",
  {
    opacity: 1,
    duration: 0.3,
  },
  "=+0.6"
);

master.to(
  ".itself, .flame",
  {
    opacity: 0,
    duration: 0,
  },
  "<"
);

// Im possible,

master.to(
  ".possible, .tennis",
  {
    opacity: 1,
    duration: 0.3,
  },
  "=+0.6"
);

master.to(
  ".says, .coffee",
  {
    opacity: 0,
    duration: 0,
  },
  "<"
);

master.to(
  ".possible, .tennis",
  {
    opacity: 0,
    duration: 0.3,
  },
  "=+0.6"
);

master.to(".name, .date", {
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
