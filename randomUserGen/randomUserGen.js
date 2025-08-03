fetch("https://randomuser.me/api/")
  .then((resolve) => resolve.json())
  .then((data) => {
    const user = data.results[0];
    document.getElementById("name").textContent = user.name.first;
    document.getElementById("city").textContent = user.location.city;
    document.getElementById("avatar").src = user.picture.large;
    console.log("yeah its kinda working gng");
  })
  .catch((error) => console.log("failed to fetch: ", error));

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
