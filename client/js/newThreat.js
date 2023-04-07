import Threat from "./Threat.js";
import { RANKS, LANGUAGES } from "./utils.js";

// const langs = Object.keys(LANGUAGES).map((key) => key);
const langs = ["English", "German", "French"]

// const  ranks = RANKS;
const ranks = ["Bronze", "Silver", "Gold"];

export default function newThreat() {
  threatView.innerHTML = "";

  // TODO: test
  const threat = new Threat(
    "FruitDude#1981",
    "https://imgs.search.brave.com/sOtNfWZV2Y6aEprRUiiFcxYxbuxNGc6tcjNNOIwa_T0/rs:fit:555:640:1/g:ce/aHR0cHM6Ly9pLnNj/ZG4uY28vaW1hZ2Uv/Y2VhOGIzNzYxZmYx/ODkzODFmNTkwYjA5/MzM1M2VhNmYyNDEx/NWY0OA",
    new Date(),
    ranks,
    "ranked",
    langs,
    "Discord",
    ["Looking for a team", "Looking for a coach"]
  );

  threatView.appendChild(threat);
}
