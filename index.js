const learningJournal = document.getElementById("learning-journal");
const aboutMe = document.getElementById("about-me");
const firstDiv = document.getElementById("first-div");
const home = document.getElementById("home");
const aboutMyself = document.getElementById("about-myself");
const myJournal = document.getElementById("my-journal");
const viewMore = document.getElementById("view-more");
const blogFour = document.getElementById("blog-four");
const blogFive = document.getElementById("blog-five");
const blogSix = document.getElementById("blog-six");

learningJournal.addEventListener("click", function () {
  firstDiv.classList.add("hidden");
  myJournal.classList.remove("hidden");
  aboutMyself.classList.add("hidden");
});

home.addEventListener("click", function () {
  firstDiv.classList.remove("hidden");
  aboutMyself.classList.add("hidden");
  myJournal.classList.add("hidden");
});

aboutMe.addEventListener("click", function () {
  firstDiv.classList.add("hidden");
  aboutMyself.classList.remove("hidden");
  myJournal.classList.add("hidden");
});

viewMore.addEventListener("click", function () {
  blogFour.classList.remove("hidden-blog");
  blogFive.classList.remove("hidden-blog");
  blogSix.classList.remove("hidden-blog");
  viewMore.classList.add("hidden");
});
