let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let nfl = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
// nfl.pause();

nfl.from(".bills", { x: -90, ease: "Power.out(4)" });
nfl.to(".ground1", { opacity: 1 });
nfl.fromTo(
  ".line1",
  { width: "0px" },
  { width: "82px", duration: 0.25 },
  "=-0.25"
);
nfl.from(".team1", { y: -18, ease: "bounce.out" }, "=+0.2");

pause.addEventListener("click", () => {
  nfl.paused(!nfl.paused());
  if (nfl.progress() == 1) {
    nfl.restart();
  }
  pause.innerHTML = nfl.paused() ? "Play" : "Pause";
});
