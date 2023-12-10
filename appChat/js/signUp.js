"use strict";
const form = document.querySelector(".form");
const fullName = document.querySelector(".fullName");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const add = document.querySelector(".newAccount");

add.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = {};
  user.fullName == fullName.value;
  user.username == username.value;
  user.password == password.value;
  user.img = "";
  user.id = null;
});
