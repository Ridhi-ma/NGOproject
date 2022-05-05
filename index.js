"use strict";
const nav = document.querySelector(".topnav");
window.onscroll = () => {
  const scrolled = window.scrollY;
  if (scrolled) {
    nav.documentElement.style.setProperty("orange");
  }
};
