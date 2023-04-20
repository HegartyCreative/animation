let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const chars = gsap.utils.toArray("#clip-0 ellipse");
const chars1 = gsap.utils.toArray("#clip-1 ellipse");

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

master
  .to(".starter", {
    opacity: 0,
  })

  // Turkey

  .to("#turkey", {
    opacity: 1,
  })

  .fromTo(
    chars,
    { opacity: 0, scale: 0 },
    {
      opacity: 1,
      scale: 4,
      duration: 4,
      transformOrigin: "50% 50%",
      stagger: 0.1,
    },
    "<"
  )

  .fromTo(
    "h1.turkey_text",
    {
      x: -15,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.75,
      ease: "power4.out",
    },
    "-=1"
  )

  .to(".turkey", {
    opacity: 0,
  })

  .to(
    "h1.turkey_text",
    {
      opacity: 0,
    },
    "<"
  )

  // Paris

  .to("#paris", {
    opacity: 1,
  })

  .fromTo(
    chars1,
    { opacity: 0, scale: 0 },
    {
      opacity: 1,
      scale: 4,
      duration: 4,
      transformOrigin: "50% 50%",
      stagger: 0.1,
    },
    "<"
  )

  .fromTo(
    "h1.paris_text",
    {
      x: -15,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.75,
      ease: "power4.out",
    },
    "-=1"
  );

// .to(".paris", {
//   opacity: 0,
// })

// .to(
//   "h1.paris_text",
//   {
//     opacity: 0,
//   },
//   "<"
// );

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
