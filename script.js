"use strict";

import { animate } from "https://cdn.skypack.dev/motion";

const blob = document.querySelector(".speckle");

animate(blob, { transform: "translateX(-400px) translateY(100px) scale(1.5)" }, { duration: 10, repeat: Infinity, direction: "alternate" });
