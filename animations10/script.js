let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let animation = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
animation.pause();

// First Animation

animation.to(".start", {
  opacity: 0,
  duration: 0,
});

animation.fromTo(
  ".logo_horizontal",
  {
    opacity: 0,
  },
  {
    opacity: 1,
  },
  "=+0.5"
);

// First animation

// Enter stage

animation.fromTo(
  ".main_heading_background1",
  {
    x: -200,
  },
  {
    x: -40,
    ease: "back.out(2)",
  }
);

animation.fromTo(
  ".main_heading1",
  {
    x: -160,
  },
  {
    x: 0,
    ease: "back.out(1.7)",
  },
  "=-0.25"
);

animation.fromTo(
  ".sub_heading_background1",
  {
    x: -220,
  },
  {
    x: -40,
    ease: "back.out(2)",
  }
);

animation.fromTo(
  ".sub_heading1",
  {
    x: -180,
  },
  {
    x: 0,
    ease: "back.out(1.7)",
  },
  "=-0.25"
);

// Leave stage

animation.to(".main_heading_background1, .main_heading1", {
  x: -210,
  delay: 2,
  ease: "back.in(2)",
});

animation.to(".sub_heading_background1, .sub_heading1", {
  x: -230,
  ease: "back.in(2)",
});

// Second animation

animation.to(".background2", {
  opacity: 1,
  duration: 0.25,
});

// Enter stage

animation.fromTo(
  ".main_heading_background2",
  {
    x: -200,
  },
  {
    x: -40,
    ease: "back.out(2)",
  },
  "=+2"
);

animation.fromTo(
  ".main_heading2",
  {
    x: -160,
  },
  {
    x: 0,
    ease: "back.out(1.7)",
  },
  "=-0.25"
);

animation.fromTo(
  ".sub_heading_background2",
  {
    x: -240,
  },
  {
    x: -40,
    ease: "back.out(2)",
  }
);

animation.fromTo(
  ".sub_heading2",
  {
    x: -195,
  },
  {
    x: 0,
    ease: "back.out(1.7)",
  },
  "=-0.25"
);

// Leave stage

animation.to(".main_heading_background2, .main_heading2", {
  x: -210,
  delay: 2,
  ease: "back.in(2)",
});

animation.to(".sub_heading_background2, .sub_heading2", {
  x: -240,
  ease: "back.in(2)",
});

// Button code

pause.addEventListener("click", () => {
  animation.paused(!animation.paused());
  if (animation.progress() == 1) {
    animation.restart();
  }
  pause.innerHTML = animation.paused() ? "Play" : "Pause";
});
