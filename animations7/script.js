let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let animation = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
animation.pause();

animation

  .fromTo(
    ".logo",
    { opacity: 1 },
    { opacity: 0, duration: 1, ease: "power2.out" },
    "+=1"
  )
  .fromTo(
    ".model",
    { x: 80, opacity: 0, scale: 0.6 },
    { x: 0, opacity: 1, duration: 1.5, scale: 1, ease: "power2.out" }
  )
  .fromTo(
    ".one",
    { x: 35, opacity: 0 },
    { x: 0, opacity: 1, duration: 2, ease: "power4.out" },
    "-=1"
  )
  .fromTo(
    ".four",
    { x: -29, opacity: 0 },
    { x: 0, opacity: 1, duration: 2, ease: "power4.out" },
    "<"
  )
  .fromTo(
    ".two",
    { y: -29, opacity: 0 },
    { y: 0, opacity: 1, duration: 2, ease: "power4.out" },
    "<"
  )
  .fromTo(
    ".three",
    { y: 29, opacity: 0 },
    { y: 0, opacity: 1, duration: 2, ease: "power4.out" },
    "<"
  )

  .fromTo(
    ".everywhere",
    { y: -15, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
    "-=1.5"
  )

  .fromTo(
    ".brand",
    { y: -15, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
    "-=0.75"
  )

  .fromTo(
    ".show",
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power4.out" },
    "-=0.5"
  )

  .fromTo(
    ".logo2",
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: "power4.out" }
  );

pause.addEventListener("click", () => {
  animation.paused(!animation.paused());
  if (animation.progress() == 1) {
    animation.restart();
  }
  pause.innerHTML = animation.paused() ? "Play" : "Pause";
});
