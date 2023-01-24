let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let nfl = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
nfl.pause();

nfl.to(".background_full", { opacity: 1 });
nfl.to(
  ".background_right",
  { x: -260, ease: "bounce.out", duration: 0.25 },
  "=+1"
);
nfl.to(".mask1, .mask2, .mask3", { opacity: 1 }, "<");
nfl.to("h1, h2", { opacity: 1 });
nfl.to(".team1, .team2, .team3", { opacity: 1 });

nfl.fromTo(
  ".logo",
  { scale: 0, opacity: 0 },
  { scale: 1, ease: "bounce.out", opacity: 1 },
  "=-0.5"
);

nfl.from(".bills", { x: -90, ease: "Power.out", duration: 0.25 });
nfl.to(".ground1", { opacity: 1 });
nfl.to(".line1", { duration: 0.25, opacity: 1 }, "=-0.25");
nfl.from(".team1", { y: -18, ease: "bounce.out" }, "=+0.0.5");

nfl.from(".titans", { x: -90, ease: "Power.out", duration: 0.25 });
nfl.to(".ground_1", { opacity: 1 });
nfl.to(".line2", { duration: 0.25, opacity: 1 }, "=-0.25");
nfl.from(".team2", { y: -18, ease: "bounce.out" }, "=+0.0.5");

nfl.from(".jags", { x: -90, ease: "Power.out", duration: 0.25 });
nfl.to(".ground2", { opacity: 1 });
nfl.to(".line3", { duration: 0.25, opacity: 1 }, "=-0.25");
nfl.from(".team3", { y: -18, ease: "bounce.out" }, "=+0.0.5");

pause.addEventListener("click", () => {
  nfl.paused(!nfl.paused());
  if (nfl.progress() == 1) {
    nfl.restart();
  }
  pause.innerHTML = nfl.paused() ? "Play" : "Pause";
});
