import { RANKS } from "./utils.js";

export default function initRankSlider() {
  const container = document.getElementById("rankSlider");
  container.setAttribute("data-ranks", RANKS.length);
  container.setAttribute("data-start", 0);
  container.setAttribute("data-end", RANKS.length - 1);

  const track = document.createElement("div");
  track.id = "rankSlider_track";
  container.appendChild(track);
  const path = document.createElement("div");
  path.id = "rankSlider_path";
  container.appendChild(path);
  const startRank = document.createElement("div");
  startRank.id = "rankSlider_startRank";
  startRank.innerText = RANKS[0];
  container.appendChild(startRank);
  const endRank = document.createElement("div");
  endRank.id = "rankSlider_endRank";
  endRank.innerText = RANKS[RANKS.length - 1];
  container.appendChild(endRank);

  path.addEventListener("mousemove", (e) =>
    pathSlide(e, { track, path, startRank, endRank }, false)
  );
  path.addEventListener("click", (e) =>
    pathSlide(e, { track, path, startRank, endRank }, true)
  );
  track.addEventListener("mousemove", (e) =>
    trackSlide(e, { track, path, startRank, endRank }, false)
  );
  track.addEventListener("click", (e) =>
    trackSlide(e, { track, path, startRank, endRank }, true)
  );
}

function pathSlide(e, { track, path, startRank, endRank }, mouseOver = false) {
  if (e.buttons !== 1 && !mouseOver) return;

  const trackWidth = track.getBoundingClientRect().width;
  const clickPosition = e.clientX - path.getBoundingClientRect().left;
  const trackLeft =
    track.getBoundingClientRect().left - path.getBoundingClientRect().left;
  // diff between click and left track edge
  const diffLeft = clickPosition - trackLeft;
  // diff between click and right track edge
  const diffRight = trackWidth - diffLeft;

  if (diffLeft < 0) {
    track.style.left = clickPosition + "px";
    track.style.width = trackWidth - diffLeft + "px";
    const left =
      track.getBoundingClientRect().left - path.getBoundingClientRect().left;
    const total = path.getBoundingClientRect().width;
    startRank.innerText = RANKS[Math.floor((left / total) * RANKS.length)];
  } else if (diffRight < 0) {
    track.style.width = trackWidth - diffRight + "px";
    const right =
      track.getBoundingClientRect().right - path.getBoundingClientRect().left;
    const total = path.getBoundingClientRect().width;
    endRank.innerText = RANKS[Math.floor((right / total) * RANKS.length)];
  }
  
  window.getSelection().removeAllRanges();
}

function trackSlide(e, { track, path, startRank, endRank }, mouseOver = false) {
  if (e.buttons !== 1 && !mouseOver) return;

  const trackWidth = track.getBoundingClientRect().width;
  const clickPosition = e.clientX - path.getBoundingClientRect().left;
  const trackLeft =
    track.getBoundingClientRect().left - path.getBoundingClientRect().left;
  // diff between click and left track edge
  const diffLeft = clickPosition - trackLeft;
  // diff between click and right track edge
  const diffRight = trackWidth - diffLeft;

  if (diffLeft < diffRight) {
    track.style.left = clickPosition + "px";
    track.style.width = trackWidth - diffLeft + "px";
    const left =
      track.getBoundingClientRect().left - path.getBoundingClientRect().left;
    const total = path.getBoundingClientRect().width;
    startRank.innerText = RANKS[Math.floor((left / total) * RANKS.length)];
  } else {
    track.style.width = trackWidth - diffRight + "px";
    const right =
      track.getBoundingClientRect().right - path.getBoundingClientRect().left;
    const total = path.getBoundingClientRect().width;
    endRank.innerText = RANKS[Math.floor((right / total) * RANKS.length)];
  }

  window.getSelection().removeAllRanges();
}
