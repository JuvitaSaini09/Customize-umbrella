const umbrella_img = document.querySelector(".umbrella-img");
const colors_btn = document.querySelectorAll(".colors-btn");
const upload_file = document.querySelector("#upload_file");
const upload_logo_text = document.querySelector(".upload-logo-text");
const fa_times = document.querySelector(".fa-times");
const upload_file_container = document.querySelector(".upload-file-container");
const brand_logo=document.querySelector(".brandLogo");

const allImagesDatabase = [
  {
    id: 0,
    src: "/asset/Pink umbrella.png",
    color: "pink",
    borderColor: "#FF002B",
    backgroundColor: "#FDE0E5",
  },
  {
    id: 1,
    src: "/asset/Blue umbrella.png",
    color: "blue",
    borderColor: "blue",
    backgroundColor: "#D9ECF8",
  },
  {
    id: 2,
    src: "/asset/Yello umbrella.png",
    color: "yellow",
    borderColor: "brown",
    backgroundColor: "#FFFFBE",
  },
];

let currentUmbrella = {
  color: "blue",
  src: "/asset/Blue umbrella.png",
};

colors_btn[1].style.border = `4px solid ${allImagesDatabase[1].borderColor}`;
umbrella_img.src = currentUmbrella.src;

function updateUmbrellaColor(indexOfSelectedColor) {
  currentUmbrella.color = allImagesDatabase[indexOfSelectedColor].color;
  currentUmbrella.src = allImagesDatabase[indexOfSelectedColor].src;

  for (const img in allImagesDatabase) {
    // umbrella_img.style.opacity="0"
    if (allImagesDatabase[img].color === currentUmbrella.color) {
      colors_btn[
        img
      ].style.border = `4px solid ${allImagesDatabase[img].borderColor}`;
      document.body.style.backgroundColor =
        allImagesDatabase[img].backgroundColor;
      upload_file_container.style.backgroundColor =
        allImagesDatabase[img].borderColor;
    } else {
      colors_btn[img].style.border = "none";
    }
  }
  umbrella_img.src = currentUmbrella.src;

  // umbrella_img.style.transition="opacity 1s linear"
  // umbrella_img.style.opacity="1"
}

for (let i = 0; i < colors_btn.length; i++) {
  colors_btn[i].addEventListener("click", () => updateUmbrellaColor(i));
}

fa_times.addEventListener("click", () => {
  //set the default option

  brand_logo.
});
