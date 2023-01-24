let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let movie = document.getElementById("theVideo");

let pause = select("#pause");

let animation = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
animation.pause();

animation.to(".start", { opacity: 0, duration: 0 });

animation.fromTo(
  ".web1",
  {
    y: -10,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "back.out(2)",
  },
  "=+1"
);

animation.fromTo(
  ".web2",
  {
    y: -10,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "back.out(2)",
  },
  "=-0.25"
);

animation.to(".web", { opacity: 0, duration: 0.25 }, "=+0.5");

animation.to(
  ".bars",
  {
    y: 250,
    duration: 0.5,
    stagger: 0.2,
    ease: "power4.out",
  },
  "=+0.02"
);

animation.from(".name", { x: -180, ease: "back.out(0.5)", duration: 0.75 });
animation.to(".telephone", { opacity: 1 }, "=+0.5");
animation.to(".portfolio", { opacity: 1 }, "=+0.5");
animation.to(".anim", { opacity: 1 }, "=+0.5");

animation.to(
  ".bars",
  {
    y: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "power4.out",
  },
  "=+1.5"
);

animation.to(".name", { opacity: 1, color: "black" });
animation.to(".telephone", { opacity: 1, color: "black" }, "<");
animation.to(".portfolio", { opacity: 1, color: "black" }, "<");
animation.to(".anim", { opacity: 1, color: "black" }, "<");

// Button code

pause.addEventListener("click", () => {
  movie.play();
  animation.paused(!animation.paused());
  if (animation.progress() == 1) {
    animation.restart();
  }
  pause.innerHTML = animation.paused() ? "Play" : "Pause";
});
