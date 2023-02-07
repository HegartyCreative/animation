let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

master.to(".start", {
  opacity: 0,
});

// Bubble Text animation

const moveAnimation1 = () => {
  const tl = gsap.timeline();
  master.from(
    ".b1, .u1, .b2, .b3, .l, .e, .greenShadow, .redShadow, .green1, .green2, .green3, .cream, .red",
    {
      opacity: 0,
      scale: 0,
      ease: "bounce",
      stagger: 0.15,
    }
  );
  return tl;
};

const moveAnimation2 = () => {
  const tl = gsap.timeline();
  master.from(
    ".g, .u2, .m",
    {
      opacity: 0,
      scale: 0,
      ease: "bounce",
      stagger: 0.15,
    },
    "=-1.25"
  );
  return tl;
};

// BUBBLE TEXT

master.add(moveAnimation1());

master.from(
  ".innerShadow1",
  {
    opacity: 0,
  },
  "=-0.25"
);

master.add(moveAnimation2());

master.from(
  ".innerShadow2",
  {
    opacity: 0,
  },
  "=-0.25"
);

master.from(
  ".circle1",
  {
    opacity: 0,
    scale: 1,
  },
  "=-0.25"
);

master.from(
  ".circle2",
  {
    opacity: 0,
    scale: 1,
  },
  "=-0.25"
);

master.from(
  ".swirl",
  {
    opacity: 0,
    scale: 1,
    duration: 4,
    ease: "back.out(1.7)",
  },
  "=-0.25"
);

master.fromTo(
  ".star",
  {
    opacity: 0,
    scale: 0,
  },
  {
    opacity: 1,
    scale: 1,
    duration: 0.25,
    ease: "back.out(1.7)",
  },
  "=-5"
);

master.fromTo(
  ".moneyHolder",
  {
    opacity: 0,
    scale: 0,
  },
  {
    opacity: 1,
    scale: 1,
    duration: 0.25,
    ease: "back.out(1.7)",
  },
  ">"
);

master.fromTo(
  ".cash",
  {
    opacity: 0,
    scale: 0,
  },
  {
    opacity: 1,
    scale: 1.2,
    duration: 0.15,
    ease: "back.out(2)",
    stagger: 0.15,
  },
  ">"
);

master.fromTo(
  ".text",
  {
    opacity: 0,
    scale: 0,
  },
  {
    opacity: 1,
    scale: 2,
    duration: 0.25,
    ease: "back.out(1.7)",
  },
  ">"
);

master.fromTo(
  ".redCircles",
  {
    opacity: 0,
    scale: 0,
  },
  {
    opacity: 1,
    scale: 2,
    duration: 0.25,
    ease: "back.out(1.7)",
  },
  ">"
);

master.fromTo(
  ".creamCircles",
  {
    opacity: 0,
    scale: 0,
  },
  {
    opacity: 1,
    scale: 2,
    duration: 0.25,
    ease: "back.out(1.7)",
  },
  ">"
);

// SHADOWS

master.from;

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
