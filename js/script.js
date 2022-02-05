let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

new TypeIt("#username", {
  waitUntilVisible: true,
  speed: 190,
  loop: true,
  cursor: false,
})
  .type("Simranpreet Singh")
  .exec(async () => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve();
      }, 2500);
    });
  })
  .go();