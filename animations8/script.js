let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let animation = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
animation.pause();

animation.to(".start", { opacity: 0, duration: 0 });

animation.fromTo(
  ".sky",
  { scale: 1 },
  { scale: 1.2, duration: 6, ease: "power1.out", transformOrigin: "0% 100%" }
);

animation.fromTo(
  ".grass",
  { scale: 1 },
  {
    scale: 1.3,
    duration: 6,
    ease: "power1.out",
    transformOrigin: "50% 50%",
  },
  "<"
);

animation.fromTo(
  ".woman",
  { scale: 1, x: 0, y: 220 },
  {
    scale: 1.05,
    x: 0,
    y: -45,
    duration: 0.75,
    ease: "back.out(2)",
    transformOrigin: "50% 50%",
  },
  "=-4"
);

animation.fromTo(
  ".woman",
  { scale: 1 },
  {
    scale: 1.03,
    repeat: 5,
    yoyo: true,
    ease: "power1.out",
  },
  "<"
);

animation.from(
  ".background_h1",
  {
    x: -155,
    ease: "back.out(1.5)",
    duration: 0.25,
  },
  "=-5"
);

animation.fromTo(
  "h1",
  { x: -155, opacity: 0 },
  { x: 0, opacity: 1, duration: 0.25, ease: "back.out(1.5)" },
  "=-4.75"
);

animation.fromTo(
  "h2",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.25, ease: "back.out(1.5)" },
  "=-4.5"
);

animation.fromTo(
  "p",
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.25, ease: "back.out(1.5)" },
  "=-4.25"
);

// Button code

pause.addEventListener("click", () => {
  animation.paused(!animation.paused());
  if (animation.progress() == 1) {
    animation.restart();
  }
  pause.innerHTML = animation.paused() ? "Play" : "Pause";
});
