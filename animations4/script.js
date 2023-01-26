let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let travel = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
travel.pause();
travel.to(".child1", {
  scale: 1.1,
  duration: 7,
  transformOrigin: "50% 100%",
  ease: "none",
});
travel.fromTo(".quote1", { opacity: 0 }, { opacity: 1 }, "=-6");
travel.fromTo(".source1", { opacity: 0 }, { opacity: 1 }, "=-5");
travel.to("child1, .quote1, .source1", { opacity: 0, duration: 0 });

travel.fromTo(
  ".child2",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.25,
  }
);
travel.fromTo(
  ".child2",
  { scale: 1 },
  { scale: 1.1, duration: 8, transformOrigin: "50% 100%", ease: "none" },
  "=-1"
);
travel.fromTo(".quote2", { opacity: 0 }, { opacity: 1 }, "=-6");
travel.fromTo(".source2", { opacity: 0 }, { opacity: 1 }, "=-5");
travel.to("child2, .quote2, .source2", { opacity: 0, duration: 0 });

travel.fromTo(
  ".child3",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.25,
  }
);
travel.fromTo(
  ".child3",
  { scale: 1 },
  { scale: 1.1, duration: 8, transformOrigin: "50% 100%", ease: "none" },
  "=-1"
);
travel.fromTo(".quote3", { opacity: 0 }, { opacity: 1 }, "=-6");
travel.fromTo(".source3", { opacity: 0 }, { opacity: 1 }, "=-5");
travel.to(".parent1, .parent2, .parent3", { opacity: 0 });

travel.to(".end", { opacity: 1 });

pause.addEventListener("click", () => {
  travel.paused(!travel.paused());
  if (travel.progress() == 1) {
    travel.restart();
  }
  pause.innerHTML = travel.paused() ? "Play" : "Pause";
});
