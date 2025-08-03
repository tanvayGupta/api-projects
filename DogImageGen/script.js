fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((res) => (document.getElementById("image").src = res.message));

document.getElementById("btn").addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) => (document.getElementById("image").src = res.message));
});
