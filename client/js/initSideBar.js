export default function initSideBar() {
    const profile = {
      selectionBar: document.getElementById("selectionBar_profile"),
      sideContainer: document.getElementById("profileContainer"),
    };
    const filter = {
      selectionBar: document.getElementById("selectionBar_filter"),
      sideContainer: document.getElementById("filterContainer"),
    };
    const chat = {
      selectionBar: document.getElementById("selectionBar_chat"),
      sideContainer: document.getElementById("chatContainer"),
    };
    const create = {
      selectionBar: document.getElementById("selectionBar_create"),
      sideContainer: document.getElementById("createContainer"),
    };
    [profile, filter, chat, create].forEach((side) => {
      side.selectionBar.addEventListener("click", () => {
        [profile, filter, chat, create].forEach((side) => {
          side.selectionBar.classList.remove("selected");
          side.sideContainer.classList.add("hidden");
        });
        side.selectionBar.classList.add("selected");
        side.sideContainer.classList.remove("hidden");
      });
    });
  }
  