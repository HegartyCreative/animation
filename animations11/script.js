let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

master.to(".logo", {
  opacity: 0,
});

master.fromTo(
  ".year_background",
  {
    x: -300,
  },
  {
    x: 0,
    ease: "power4.out",
  },
  "=+0.05"
);

master.to(".year", {
  opacity: 1,
  duration: 0.75,
});

master.to(
  ".year_background",
  {
    x: 300,
    ease: "power4.out",
  },
  "=+0.05"
);

master.to(
  ".year",
  {
    x: 300,
    ease: "power4.out",
  },
  "=-0.05"
);

// RIDERS

master.to("#riders", {
  opacity: 1,
  innerText: 176,
  snap: {
    innerText: 1,
    duration: 2,
  },
});

master.fromTo(
  ".riders",
  {
    x: -90,
    y: 155,
  },
  {
    x: 50,
  },
  "=-0.5"
);

master.from(".cyclists", {
  x: -290,
  ease: "back.out(2)",
});

// TEAMS

master.to(
  ".riders, #riders",
  {
    x: 300,
    ease: "back.in(1.7)",
  },
  "=+3"
);

master.to("#teams", {
  opacity: 1,
  innerText: 22,
  snap: {
    innerText: 1,
    duration: 2,
  },
});

master.fromTo(
  ".teams",
  {
    x: -90,
    y: 155,
  },
  {
    x: 37,
    opacity: 1,
  },
  "=-0.5"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
