const closeBtn = document.querySelector(".close-nav");
const openBtn = document.querySelector(".open-nav");
const nav = document.querySelector(".nav");
const showLessBtn = document.querySelector("#show-less");
const showMoreBtn = document.querySelector("#show-more");
const extra = document.querySelectorAll(".extra");

closeBtn.addEventListener("click", () => {
  nav.classList.remove("navigation-open");
  openBtn.classList.remove("transparent");
});

openBtn.addEventListener("click", () => {
  nav.classList.add("navigation-open");
  openBtn.classList.add("transparent");
});

showLessBtn.addEventListener("click", () => {
  extra.forEach((blog) => {
    blog.classList.add("hidden");
  });
  showMoreBtn.classList.remove("hidden");
  showLessBtn.classList.add("hidden");
});

showMoreBtn.addEventListener("click", () => {
  extra.forEach((blog) => {
    blog.classList.remove("hidden");
  });
  showMoreBtn.classList.add("hidden");
  showLessBtn.classList.remove("hidden");
});
