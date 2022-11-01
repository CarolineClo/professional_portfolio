"use strict";

import { animate } from "https://cdn.skypack.dev/motion";

const blob = document.querySelector(".speckle");

animate(blob, { transform: "translateX(-400px) translateY(100px) scale(1.5)" }, { duration: 8, repeat: Infinity, direction: "alternate" });

const burger = document.querySelector("#burger");
burger.addEventListener("click", showMenu);

function showMenu() {
  const menu = document.querySelector(".nav_drop");
  const line1 = document.querySelector("#burger .line-1");
  const line2 = document.querySelector("#burger .line-2");
  menu.classList.toggle("show");
  line2.classList.toggle("close");
  line1.classList.toggle("close");
}
