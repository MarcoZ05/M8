import { ANIMATION_DURATION } from "./utils.js";
import newThreat from "./newThreat.js";

export default function initThread(threatView) {
  const acceptThreat = document.getElementById("acceptThreat");
  const declineThreat = document.getElementById("declineThreat");
  acceptThreat.addEventListener("click", () => {
    threatView.firstChild.classList.add("accepted");
    setTimeout(() => {
      threatView.removeChild(threatView.firstChild);
      newThreat();
    }, ANIMATION_DURATION);
  });
  declineThreat.addEventListener("click", () => {
    threatView.firstChild.classList.add("declined");
    setTimeout(() => {
      threatView.removeChild(threatView.firstChild);
      newThreat();
    }, ANIMATION_DURATION);
  });
}
