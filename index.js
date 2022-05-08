"use strict";
// let count = 0;
// const counter = document.querySelector(".counter");

// setTimeout(() => {
//   counter.textContent = count;
// }, 1000);
// setTimeout();
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-1000px";
  }
  prevScrollpos = currentScrollPos;
};
