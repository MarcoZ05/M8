import { PLATFORMS, RANKS } from "./utils.js";

export default function initFilterSelection() {
  const rankedBtn = document.getElementById("ranked");
  const unrankedBtn = document.getElementById("unranked");
  const customBtn = document.getElementById("custom");

  [rankedBtn, unrankedBtn, customBtn].forEach((btn) => {
    btn.addEventListener("click", (btn) => {
      btn.target.classList.toggle("selected");
    });
  });

  const vcSelection = document.getElementById("vcSelection");

  PLATFORMS.forEach((platform) => {
    const platformBtn = document.createElement("button");
    platformBtn.id = platform.toLowerCase().trim();
    platformBtn.innerText = platform;

    platformBtn.addEventListener("click", (btn) => {
      btn.target.classList.toggle("selected");
    });

    vcSelection.appendChild(platformBtn);
  });

  const rankSelection = document.getElementById("rankSelection");

  RANKS.forEach((rank) => {
    const rankBtn = document.createElement("button");
    rankBtn.id = rank.toLowerCase().trim();
    rankBtn.innerText = rank;

    rankBtn.addEventListener("click", (btn) => {
      btn.target.classList.toggle("selected");
    });

    rankSelection.appendChild(rankBtn);
  });

}
