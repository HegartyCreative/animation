let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

master.to(".paris", {
  scale: 1.03,
  transformOrigin: "0% 100%",
  duration: 3,
});

master.to(
  ".first",
  {
    duration: 0.05,
    transformOrigin: "0% 100%",
    scaleY: 0,
    ease: "power1.inOut",
    stagger: {
      amount: 0.75,
    },
  },
  "=+1"
);

master.to(
  ".second",
  {
    duration: 0.05,
    transformOrigin: "0% 100%",
    scaleY: 0,
    ease: "power1.inOut",
    stagger: {
      amount: 0.75,
    },
  },
  "=-0.75"
);

master.to(
  ".third",
  {
    duration: 0.05,
    transformOrigin: "0% 100%",
    scaleY: 0,
    ease: "power1.inOut",
    stagger: {
      amount: 0.75,
    },
  },
  "=-0.75"
);

master.to(
  ".fourth",
  {
    duration: 0.05,
    transformOrigin: "0% 100%",
    scaleY: 0,
    ease: "power1.inOut",
    stagger: {
      amount: 0.75,
    },
  },
  "=-0.75"
);

master.to(
  ".fifth",
  {
    duration: 0.05,
    transformOrigin: "0% 100%",
    scaleY: 0,
    ease: "power1.inOut",
    stagger: {
      amount: 0.75,
    },
  },
  "=-0.75"
);

master.to(
  ".sixth",
  {
    duration: 0.05,
    transformOrigin: "0% 100%",
    scaleY: 0,
    ease: "power1.inOut",
    stagger: {
      amount: 0.75,
    },
  },
  "=-0.75"
);

master.to(
  ".seventh",
  {
    duration: 0.05,
    transformOrigin: "0% 100%",
    scaleY: 0,
    ease: "power1.inOut",
    stagger: {
      amount: 0.75,
    },
  },
  "=-0.75"
);

master.to(
  ".eight",
  {
    duration: 0.05,
    transformOrigin: "0% 100%",
    scaleY: 0,
    ease: "power1.inOut",
    stagger: {
      amount: 0.75,
    },
  },
  "=-0.75"
);

master.to(
  ".nineth",
  {
    duration: 0.05,
    transformOrigin: "0% 100%",
    scaleY: 0,
    ease: "power1.inOut",
    stagger: {
      amount: 0.75,
    },
  },
  "=-0.75"
);

master.to(
  ".hundredth",
  {
    duration: 0.05,
    transformOrigin: "0% 100%",
    scaleY: 0,
    ease: "power1.inOut",
    stagger: {
      amount: 0.75,
    },
  },
  "=-0.75"
);
master.to(
  ".hundredth10",
  {
    duration: 0.05,
    transformOrigin: "0% 100%",
    scaleY: 0,
    ease: "power1.inOut",
    stagger: {
      amount: 0.75,
    },
  },
  "=-0.75"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
