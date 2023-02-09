let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({});

function box() {
  const tl = gsap.timeline();
  tl.to(".box", {
    x: 200,
  });
}

function circle() {
  const tl = gsap.timeline();
  tl.to(".circle", {
    x: 100,
  });
}

//

master.add(box());
master.add(circle());
master.onComplete({
  onComplete: () => (pause.innerHTML = "Play"),
});

// Add even more timelines!

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
