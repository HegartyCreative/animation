let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);
let widthOuter = window.outerWidth;
let heightInner = window.innerHeight;

let pause = select("#pause");

let animation = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
animation.pause();

animation.to(".start", {
  opacity: 0,
  duration: 0,
});

// First Animation

animation.fromTo(
  ".logo",
  {
    x: 305,
    y: 20,
  },
  {
    x: 180,
    duration: 0.25,
  }
);

animation.fromTo(
  ".intro",
  {
    y: -58,
    x: 72,
    opacity: 0,
    ease: "power4.out",
  },
  {
    y: 80,
    opacity: 1,
  }
);

animation.to(".intro", {
  x: widthOuter,
  ease: "back.in(1)",
  delay: 2,
});

animation.fromTo(
  ".car",
  {
    x: -280,
    y: 30,
    ease: "back.in(1)",
  },
  {
    x: 12,
  }
);

animation.from(
  ".tagLine",
  {
    x: -150,
    ease: "back.in(1)",
  },
  "<"
);

animation.fromTo(
  ".left_wheel",
  {
    x: -257,
    y: 128,
    ease: "back.in(1)",
  },
  {
    x: 36,
  },
  "<"
);

animation.fromTo(
  ".right_wheel",
  {
    x: -93,
    y: 127,
    ease: "back.in(1)",
  },
  {
    x: 200,
  },
  "<"
);

animation.to(
  ".left_wheel, .right_wheel",
  {
    rotation: 360,
  },
  "<"
);

animation.from(
  ".ready",
  {
    scale: 0,
    transformOrigin: "50% 100%",
    ease: "back.out(2.5)",
  },
  "=+0.25"
);

animation.to(
  ".cta",
  {
    opacity: 1,
  },
  "=+1.5"
);

animation.to(
  ".ready",
  {
    x: 265,
  },
  "=-1"
);

animation.to(
  ".car",
  {
    x: 300,
    ease: "back.in(1)",
  },
  "=+2"
);

animation.to(
  ".left_wheel",
  {
    x: 324,
    ease: "back.in(1)",
  },
  "<"
);

animation.to(
  ".right_wheel",
  {
    x: 488,
    ease: "back.in(1)",
  },
  "<"
);

animation.fromTo(
  ".left_wheel, .right_wheel",
  {
    rotation: 0,
  },
  {
    rotation: 360,
    ease: "back.in(1)",
  },
  "<"
);

animation.to(
  ".cta",
  {
    y: 100,
    ease: "back.in(1)",
  },
  "<"
);

animation.to(
  ".tagLine",
  {
    x: -150,
    ease: "back.in(1)",
  },
  "<"
);

animation.from(
  ".website",
  {
    y: -35,
    ease: "power4.out",
    duration: 0.25,
  },
  "=+0.15"
);

animation.to(
  ".details",
  {
    opacity: 1,
  },
  "=+0.15"
);

// Button code

pause.addEventListener("click", () => {
  animation.paused(!animation.paused());
  if (animation.progress() == 1) {
    animation.restart();
  }
  pause.innerHTML = animation.paused() ? "Play" : "Pause";
});
