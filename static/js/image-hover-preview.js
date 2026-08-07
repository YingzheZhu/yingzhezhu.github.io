(function () {
  if (!window.matchMedia("(hover: hover)").matches) return;

  var images = document.querySelectorAll(".research-figures img");
  if (!images.length) return;

  var preview = document.createElement("div");
  preview.className = "image-hover-preview";
  preview.setAttribute("aria-hidden", "true");

  var previewImage = document.createElement("img");
  preview.appendChild(previewImage);
  document.body.appendChild(preview);

  function show(image) {
    previewImage.src = image.currentSrc || image.src;
    previewImage.alt = image.alt || "";
    preview.classList.add("is-visible");
  }

  function hide() {
    preview.classList.remove("is-visible");
  }

  images.forEach(function (image) {
    image.addEventListener("mouseenter", function () {
      show(image);
    });
    image.addEventListener("mouseleave", hide);
  });
})();
