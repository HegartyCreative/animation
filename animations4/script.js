let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let retail = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
retail.pause();

// Intro

retail.set(".startingShape, .saleText", {
  opacity: 0,
});

retail.from(
  ".introText",
  {
    x: -140,
    ease: "back.out(1.7)",
  },
  ">"
);

retail.from(
  ".cta",
  {
    x: -109,
    ease: "back.out(1.7)",
  },
  "-=0.25"
);

retail.from(
  ".shape2",
  {
    x: -25,
    ease: "back.out(1.7)",
  },
  "-=0.25"
);

retail.from(
  ".shape1",
  {
    x: 95,
    ease: "back.out(1.7)",
  },
  "<"
);

// One
retail.to(".one", { opacity: 1, duration: 0.2 }, "=+0.15");

retail.to(".one_text_full", { opacity: 1 }, "=-0.25");
retail.to(".line1", { opacity: 1, duration: 0.25 }, "=+2");
retail.to(".one_text_full, .line1", {
  y: 110,
  ease: "back.in(1.7)",
});
retail.to(".line1", { backgroundColor: "white", duration: "0" }, "=-0.5");
retail.to(".one_text_full", { color: "white" }, "<");
retail.to(".one_text_discount", { opacity: 1, duration: 0.25 }, "=-0.25");
retail.to(".one, .one_text_discount", { opacity: 0, duration: 0 }, "=+2");

// Two
retail.to(".two", { opacity: 1, duration: 0.2 }, "-=0.25");
retail.to(".two_text_full", { opacity: 1 }, "=+0.25");
retail.to(".line2", { opacity: 1, duration: 0.25 }, "=+2");
retail.to(".two_text_full, .line2", {
  y: 110,
  ease: "back.in(1.7)",
});
retail.to(".line2", { backgroundColor: "white", duration: "0.25" }, "=-0.5");
retail.to(".two_text_full", { color: "white" }, "<");
retail.to(".two_text_discount", { opacity: 1, duration: 0.25 }, "=-0.25");
retail.to(".two, .two_text_discount", { opacity: 0, duration: 0 }, "=+2");

// Three
retail.to(".three", { opacity: 1, duration: 0.2 }, "-=0.25");
retail.to(".three_text_full", { opacity: 1 }, "=+0.25");
retail.to(".line3", { opacity: 1, duration: 0.25 }, "=+2");
retail.to(".three_text_full, .line3", {
  y: 110,
  ease: "back.in(1.7)",
});
retail.to(".line3", { backgroundColor: "white", duration: "0.25" }, "=-0.5");
retail.to(".three_text_full", { color: "white" }, "<");
retail.to(".three_text_discount", { opacity: 1, duration: 0.25 }, "=-0.25");
retail.to(".three, .three_text_discount", { opacity: 0, duration: 0 }, "=+2");

// Four
retail.to(".four", { opacity: 1, duration: 0.2 }, "-=0.25");
retail.to(".four_text_full", { opacity: 1 }, "=+0.25");
retail.to(".line4", { opacity: 1, duration: 0.25 }, "=+2");
retail.to(".four_text_full, .line4", {
  y: 110,
  ease: "back.in(1.7)",
});
retail.to(".line4", { backgroundColor: "white", duration: "0.25" }, "=-0.5");
retail.to(".four_text_full", { color: "white" }, "<");
retail.to(".four_text_discount", { opacity: 1, duration: 0.25 }, "=-0.25");

// Button code

pause.addEventListener("click", () => {
  retail.paused(!retail.paused());
  if (retail.progress() == 1) {
    retail.restart();
  }
  pause.innerHTML = retail.paused() ? "Play" : "Pause";
});
