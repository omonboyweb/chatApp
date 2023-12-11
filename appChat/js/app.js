"use strict";
window.addEventListener("load", () => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    window.location.href = "signIn.html";
  } else {
    myName.innerHTML = user.fullName;
    myUsername.innerHTML = user.username;
    userImage.setAttribute("src", user.img);
  }
});
const userImage = document.querySelector(".userImage");
const myName = document.querySelector(".myName");
const myUsername = document.querySelector(".myUsername");
const logOut = document.querySelector(".logOut");
const listIcon = document.querySelector(".listIcon");
const menuBg = document.querySelector(".menuBg");
const bgTogle = document.querySelector(".bgTogle");
const upload = document.querySelector(".upload");

listIcon.addEventListener("click", () => {
  menuBg.classList.add("menuBgg");
});

bgTogle.addEventListener("click", () => {
  menuBg.classList.remove("menuBgg");
});

logOut.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "signIn.html";
});

upload.addEventListener("change", () => {
  const selectedFile = upload.files[0];
  console.log(selectedFile);
});
