var word;

document.getElementById("searchButton").addEventListener("click", function () {
  word = document.getElementById("search").value;
  hide();
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => res.json())
    .then((res) =>
      res[0].meanings.forEach(function (el, i) {
        const listItem = document.getElementById(`def${i}`);
        listItem.textContent = el.definitions[0].definition;
        listItem.classList.remove("hidden");
      })
    )
    .catch((err) => {
      document.getElementById("definition").textContent =
        "Definition not found";
      console.log(err);
    });
});

function hide() {
  const items = document.querySelectorAll("li");
  items.forEach((item) => {
    item.classList.add("hidden");
  });
}
