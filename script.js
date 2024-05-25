document.addEventListener("DOMContentLoaded", (event) => {
  console.log("Page fully loaded");
  const images = document.querySelectorAll(".gallery img");

  images.forEach((img, index) => {
    img.addEventListener("mouseover", () => {
      console.log(`Mouse over on image ${index + 1}`);
      img.style.transform = "scale(1.1)";
    });

    img.addEventListener("mouseleave", () => {
      console.log(`Mouse leave on image ${index + 1}`);
      img.style.transform = "scale(1)";
    });

    img.addEventListener("focus", () => {
      console.log(`Focus on image ${index + 1}`);
      img.style.outline = "2px solid blue";
    });

    img.addEventListener("blur", () => {
      console.log(`Blur on image ${index + 1}`);
      img.style.outline = "none";
    });

    img.setAttribute("tabindex", "0");
  });
});
