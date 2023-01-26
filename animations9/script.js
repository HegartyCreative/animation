let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let animation = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
animation.pause();

// First Animation

animation.to(".food", 3, {
  scale: 4,
  ease: "none",
});

animation.to(".food", 3, {
  top: -200,
  left: 100,
});

// animation.fromTo(
//   ".logo",
//   { x: -90 },
//   { x: 0, ease: "power4.out", duration: 1.5 },
//   "=-3"
// );

// animation.fromTo(
//   ".pasta",
//   { y: 0 },
//   { y: -100, ease: "power4.out", duration: 2, repeat: 1, yoyo: true },
//   "=-2.5"
// );

// animation.fromTo(
//   ".pasta_sauce",
//   { x: 280, y: 20 },
//   {
//     x: 200,
//     ease: "power4.out",
//     duration: 2,
//     rotation: "22.5",
//     transformOrigin: "left top",
//     repeat: 1,
//     yoyo: true,
//   },
//   "<"
// );

// Second Animation

// Button code

pause.addEventListener("click", () => {
  animation.paused(!animation.paused());
  if (animation.progress() == 1) {
    animation.restart();
  }
  pause.innerHTML = animation.paused() ? "Play" : "Pause";
});
