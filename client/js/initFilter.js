import initFlags from "./initFlags.js";
import initFilterSelection from "./initFilterSelection.js";
import { PLATFORMS, RANKS } from "./utils.js";

export default function initFilter() {
  initFlags();
  initFilterSelection();

  const filterButton = document.getElementById("filterButton");
  const resetButton = document.getElementById("resetButton");

  const rankStart = document.getElementById("rankStart");
  const rankEnd = document.getElementById("rankEnd");
  const flags = document.getElementById("languageFlags").children;

  filterButton.addEventListener("click", () => {
    // [ ] filter threats
  });

  resetButton.addEventListener("click", () => {
    for (const flag of flags) {
      flag.classList.remove("selected");
    }

    ["ranked", "unranked", "custom", ...PLATFORMS, ...RANKS].forEach((id) => {
      id = id.toLowerCase();
      id = id.trim();
      document.getElementById(id).classList.remove("selected");
    });

    // [ ] reset filter
  });
}
