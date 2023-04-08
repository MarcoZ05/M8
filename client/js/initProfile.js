export default function initProfile() {
  const profileContainer = document.getElementById("profileContainer");

  const logoutBtn = document.getElementById("logoutProfile");
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.reload();
  });
  const deleteBtn = document.getElementById("deleteProfile");
  deleteBtn.addEventListener("click", () => {
    const confirm = window.confirm(
      "Are you sure you want to delete your account? All your data will be lost."
    );

    if (!confirm) return;

    const user = JSON.parse(localStorage.getItem("user"));
    localStorage.removeItem("user");

    fetch("/deleteUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: user.name }),
    });

    window.location.reload();
  });
}
