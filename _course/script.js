let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// let pause = select("#pause");

let master = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: "power1.out",
  },
});

master.fromTo(
  ".cookie_container",
  {
    scale: 0,
  },
  {
    scale: 1,
    ease: "elastic.out(1, 0.4)",
    duration: 1.5,
  }
);

master.fromTo(
  ".cookie",
  {
    x: -50,
    rotation: "-45deg",
  },
  {
    opacity: 1,
    x: 0,
    rotation: "0deg",
  },
  "<50%"
);

master.fromTo(
  ".text",
  {
    x: 20,
    opacity: 0,
  },
  {
    opacity: 1,
    x: 0,
  },
  "<"
);

master.fromTo(
  ".cookie",
  {
    y: 0,
    x: 0,
    rotation: "0deg",
  },
  {
    y: -5,
    x: 5,
    rotation: "5deg",
    repeat: -1,
    yoyo: true,
  }
);

master.fromTo(
  ".crumb",
  {
    y: 0,
    x: 0,
    rotation: "0deg",
  },
  {
    y: -10,
    x: 10,
    rotation: "9deg",
  },
  "<"
);

const button = document.querySelector("button");

button.addEventListener("click", () => {
  gsap.to(".cookie_container", {
    opacity: 0,
    y: 10,
  });
});

// master.pause();
