let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let travel = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
// travel.pause();

travel.fromTo(
  ".map",
  { scale: 0, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    ease: Bounce.easeOut,
    transformOrigin: "center center",
  }
);

travel.fromTo(".landscape_full", { left: -320 }, { left: 0 });

travel.fromTo(".plane", { left: -320 }, { left: 10 });

travel.fromTo(".bon_voyage", { opacity: 0 }, { opacity: 1 });

travel.fromTo(".landscape_light", { top: -300 }, { top: 0 });

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

travel.to(".plane", { opacity: 0 }, "<");

travel.to(".bon_voyage", { opacity: 0 }, "<");

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

pause.addEventListener("click", () => {
  travel.paused(!travel.paused());
  if (travel.progress() == 1) {
    travel.restart();
  }
  pause.innerHTML = travel.paused() ? "Play" : "Pause";
});
