(function () {
  var button = document.querySelector(".theme-toggle");
  if (!button) return;

  function apply(theme) {
    document.documentElement.dataset.theme = theme;
    button.setAttribute("title", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  apply(document.documentElement.dataset.theme || "light");

  button.addEventListener("click", function () {
    var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    apply(next);
  });
})();
