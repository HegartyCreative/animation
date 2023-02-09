let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let animation = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
animation.pause();

// First Animation

animation.fromTo(
  ".start",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 0.01,
  }
);

animation.to(".food", {
  scale: 2,
  ease: "none",
  duration: 3,
  rotation: "-15",
});

animation.fromTo(
  ".logo",
  { x: -90 },
  { x: 0, ease: "power4.out", duration: 1.5 },
  "=-2"
);

animation.fromTo(
  ".pasta",
  { y: 0 },
  {
    y: -115,
    ease: "power4.out",
    duration: 1.5,
    rotation: "45",
    repeat: 1,
    yoyo: true,
  },
  "=-1"
);

animation.fromTo(
  ".pasta_sauce",
  { x: 280, y: 0 },
  {
    x: 180,
    ease: "power4.out",
    duration: 1.5,
    rotation: "22.5",
    transformOrigin: "top top",
    repeat: 1,
    yoyo: true,
  },
  "<"
);

// Second Animation

animation.from(
  ".text1",
  {
    ease: "power4.out",
    duration: 1,
    opacity: 0,
  },
  "=+0.25"
);

animation.to(
  ".text1",
  {
    opacity: 0,
    duration: 1,
  },
  "=+0.5"
);

animation.to(
  ".food",
  {
    top: 0,
    left: 30,
    ease: "none",
    duration: 2,
    scale: 1.4,
    rotation: "15",
  },
  "<"
);

animation.fromTo(
  ".soup",
  { y: 0 },
  {
    y: 120,
    ease: "power4.out",
    duration: 1.5,
    rotation: "-45",
    repeat: 1,
    yoyo: true,
  },
  "=-1"
);

animation.fromTo(
  ".soup_sauce",
  { x: -40, y: 255 },
  {
    y: 120,
    ease: "power4.out",
    duration: 1.5,
    rotation: "-22.5",
    transformOrigin: "top top",
    repeat: 1,
    yoyo: true,
  },
  "<"
);

animation.from(
  ".text2",
  {
    ease: "power4.out",
    duration: 1,
    opacity: 0,
  },
  "=+0.25"
);

// Button code

pause.addEventListener("click", () => {
  animation.paused(!animation.paused());
  if (animation.progress() == 1) {
    animation.restart();
  }
  pause.innerHTML = animation.paused() ? "Play" : "Pause";
});
