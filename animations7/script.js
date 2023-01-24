let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let retail = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
retail.pause();
retail.to(".logo1, .background", { opacity: 1 }, "=+1");
// Image One
retail.fromTo(".One", { x: -302 }, { x: 0 });
retail.to(".one_text_full", { opacity: 1 }, "=+0.5");
retail.to(".logo1, .background", { opacity: 0 });
retail.to(".line1", { opacity: 1, duration: 0.25 }, "=+1");
retail.to(".one_text_full, .line1", {
  y: 55,
  ease: "back.in(1.7)",
});
retail.to(".line1", { backgroundColor: "grey", duration: "0.25" }, "=-0.5");
retail.to(".one_text_full", { color: "grey" }, "<");
retail.to(".one_text_discount", { opacity: 1 }, "=-0.25");
retail.to(".One, .one_text_discount", { opacity: 0 });

// Image Two
retail.fromTo(".Two", { x: -302 }, { x: 0 });
retail.to(".two_text_full", { opacity: 1 }, "=+0.5");
retail.to(".line2", { opacity: 1, duration: 0.25 }, "=+1");
retail.to(".two_text_full, .line2", {
  y: 55,
  ease: "back.in(1.7)",
});
retail.to(".line2", { backgroundColor: "grey", duration: "0.25" }, "=-0.5");
retail.to(".two_text_full", { color: "grey" }, "<");
retail.to(".two_text_discount", { opacity: 1 }, "=-0.25");
retail.to(".Two, .two_text_discount", { opacity: 0 }, "=+1");

// Image Three
retail.fromTo(".Three", { x: -302 }, { x: 0 });
retail.to(".three_text_full", { opacity: 1 }, "=+0.5");
retail.to(".line3", { opacity: 1, duration: 0.25 }, "=+1");
retail.to(".three_text_full, .line3", {
  y: 55,
  ease: "back.in(1.7)",
});
retail.to(".line3", { backgroundColor: "grey", duration: "0.25" }, "=-0.5");
retail.to(".three_text_full", { color: "grey" }, "<");
retail.to(".three_text_discount", { opacity: 1 }, "=-0.25");
retail.to(".Three, .three_text_discount", { opacity: 0 }, "=+1");

// Image Four
retail.fromTo(".Four", { x: -302 }, { x: 0 });
retail.to(".four_text_full", { opacity: 1 }, "=+0.5");
retail.to(".line4", { opacity: 1, duration: 0.25 }, "=+1");
retail.to(".four_text_full, .line4", {
  y: 55,
  ease: "back.in(1.7)",
});
retail.to(".line4", { backgroundColor: "grey", duration: "0.25" }, "=-0.5");
retail.to(".four_text_full", { color: "grey" }, "<");
retail.to(".four_text_discount", { opacity: 1 }, "=-0.25");
retail.to(".Four, .four_text_discount", { opacity: 0 });

// End

retail.to(".background", { opacity: 1, duration: 0.25 }, "<");
retail.to(".logo2", { opacity: 1, duration: 0.25 });
retail.fromTo(
  ".cta",
  { scale: 0, opacity: 0, rotation: 0 },
  {
    scale: 0.75,
    ease: "back.out(3)",
    opacity: 1,
    rotation: 360,
    transformOrigin: "50% 50%",
    duration: 0.25,
  },
  "=+0.5"
);

// Button code

pause.addEventListener("click", () => {
  retail.paused(!retail.paused());
  if (retail.progress() == 1) {
    retail.restart();
  }
  pause.innerHTML = retail.paused() ? "Play" : "Pause";
});
