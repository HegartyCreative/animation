let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let travel = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
travel.pause();
travel.to(".start", { opacity: 1 });

travel.to(".landscape_full", { opacity: 1 });
travel.to(".start", { opacity: 0 }), "<";

travel.fromTo(
  ".clouds_blue",
  { scale: 0, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    ease: Bounce.easeOut,
    transformOrigin: "center center",
  }
);

travel.fromTo(
  ".clouds_white",
  { scale: 0, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    ease: Bounce.easeOut,
    transformOrigin: "center center",
  },
  "=-0.25"
);

travel.fromTo(
  ".clouds_text",
  { opacity: 0 },
  {
    opacity: 1,
    ease: Power4.easeOut,
    transformOrigin: "center center",
  }
);

travel.to(
  ".clouds_text, .clouds_blue, .clouds_white, .landscape_full",
  {
    opacity: 0,
  },
  "=+1"
);

travel.fromTo(
  ".map",
  { scale: 0, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    ease: Power4.easeOut,
    transformOrigin: "center center",
  }
);

travel.fromTo(
  ".london",
  { scale: 0, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    ease: Bounce.easeOut,
    transformOrigin: "center center",
  },
  "=+0.05"
);

travel.fromTo(
  ".dubai",
  { scale: 0, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    ease: Bounce.easeOut,
    transformOrigin: "center center",
  },
  "=+0.05"
);

travel.fromTo(
  ".singapore",
  { scale: 0, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    ease: Bounce.easeOut,
    transformOrigin: "center center",
  },
  "=+0.05"
);

travel.fromTo(
  ".perth",
  { scale: 0, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    ease: Bounce.easeOut,
    transformOrigin: "center center",
  },
  "=+0.05"
);

travel.fromTo(
  ".buenos_aires",
  { scale: 0, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    ease: Bounce.easeOut,
    transformOrigin: "center center",
  },
  "=+0.05"
);

travel.fromTo(
  ".new_york",
  { scale: 0, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    ease: Bounce.easeOut,
    transformOrigin: "center center",
  },
  "=+0.05"
);

travel.to(
  ".london, .dubai, .singapore, .perth, .buenos_aires, .new_york, .map",
  { opacity: 0, delay: 2 },
  "=+1"
);

travel.fromTo(".landscape_light", { opacity: 0 }, { opacity: 1 }, "<");

travel.fromTo(
  ".circle0",
  { scale: 0, transformOrigin: "bottom bottom" },
  { scale: 1, duration: 0.25 }
);
travel.fromTo(
  ".people",
  { scale: 0 },
  { scale: 1, ease: Bounce.easeOut, transformOrigin: "bottom center" },
  "-=0.25"
);

travel.fromTo(
  ".circle1",
  { scale: 0, transformOrigin: "bottom center" },
  { scale: 1, duration: 0.25 }
);
travel.fromTo(
  ".suitcase",
  { scale: 0 },
  { scale: 1, ease: Bounce.easeOut, transformOrigin: "bottom center" },
  "-=0.25"
);

travel.fromTo(
  ".circle2",
  { scale: 0, transformOrigin: "center center" },
  { scale: 1, duration: 0.25 }
);
travel.fromTo(
  ".tickets",
  { scale: 0 },
  { scale: 1, ease: Bounce.easeOut, transformOrigin: "center center" },
  "-=0.25"
);

travel.fromTo(
  ".circle3",
  { scale: 0, transformOrigin: "center center" },
  { scale: 1, duration: 0.25 }
);
travel.fromTo(
  ".camera",
  { scale: 0 },
  { scale: 1, ease: Bounce.easeOut, transformOrigin: "center center" },
  "-=0.25"
);

travel.fromTo(
  ".circle4",
  { scale: 0, transformOrigin: "center center" },
  { scale: 1, duration: 0.25 }
);
travel.fromTo(
  ".passport",
  { scale: 0 },
  { scale: 1, ease: Bounce.easeOut, transformOrigin: "center center" },
  "-=0.25"
);

travel.fromTo(
  ".circle5",
  { scale: 0, transformOrigin: "center center" },
  { scale: 1, duration: 0.25 }
);
travel.fromTo(
  ".money",
  { scale: 0 },
  { scale: 1, ease: Bounce.easeOut, transformOrigin: "bottom center" },
  "-=0.25"
);

travel.to(
  ".circle1, .suitcase, .circle2, .tickets, .circle3, .camera, .circle4, .passport, .circle5, .money",
  { opacity: 0 },
  "=+1"
);

travel.fromTo(".plane", { left: -320 }, { left: 10 });

travel.fromTo(".bon_voyage", { opacity: 0 }, { opacity: 1 });

pause.addEventListener("click", () => {
  travel.paused(!travel.paused());
  if (travel.progress() == 1) {
    travel.restart();
  }
  pause.innerHTML = travel.paused() ? "Play" : "Pause";
});
