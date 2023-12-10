"use strict";
window.addEventListener("load", () => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    window.location.href = "signIn.html";
  }
});
const listIcon = document.querySelector(".listIcon");
const menuBg = document.querySelector(".menuBg");
const bgTogle = document.querySelector(".bgTogle");

listIcon.addEventListener("click", () => {
  menuBg.classList.add("menuBgg");
});

bgTogle.addEventListener("click", () => {
  menuBg.classList.remove("menuBgg");
});
