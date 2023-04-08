import { RANKS } from "./utils.js";
import initRankSlider from "./initRankSlider.js";
import initSideBar from "./initSideBar.js";
import initThread from "./initThread.js";
import newThreat from "./newThreat.js";
import initAuth from "./initAuth.js";
import initFilter from "./initFilter.js";
import login from "./login.js";
import initProfile from "./initProfile.js";
import loggedIn from "./loggedIn.js";
import initWhitemode from "./initWhitemode.js";

const threatView = document.getElementById("threatView");
const reportBtn = document.getElementById("report");
// [ ] report threat
const bugBtn = document.getElementById("bug");
// [ ] report bug

// [ ] better structure for the code

let user = JSON.parse(localStorage.getItem("user"));

if (user) {
  await login(user.name, user.password).then((res) => {
    res.text().then((text) => {
      const { error } = JSON.parse(text);

      if (error) {
        localStorage.removeItem("user");
        user = null;
      }
    });
  });
}

if (user) {
  document.getElementById("loginContainer").remove();
  document.getElementById("profileContainer").classList.remove("hidden");
  initSideBar();
  initFilter();
  initProfile();
  newThreat(threatView);
  initThread(threatView);
} else {
  initAuth();
}

initWhitemode()

initRankSlider(document.getElementById("rankSlider"), RANKS);
