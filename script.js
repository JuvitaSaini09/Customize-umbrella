const umbrella_img = document.querySelector(".umbrella-img");
const colors_btn = document.querySelectorAll(".colors-btn");
const upload_file = document.querySelector("#upload_file");
const upload_logo_text = document.querySelector(".upload-logo-text");
const fa_times = document.querySelector(".fa-times");

const allImagesDatabase = [
  {
    id: 0,
    src: "/asset/Pink umbrella.png",
    color: "pink",
    borderColor: "#FF002B",
  },
  {
    id: 1,
    src: "/asset/Blue umbrella.png",
    color: "blue",
    borderColor: "blue",
  },
  {
    id: 2,
    src: "/asset/Yello umbrella.png",
    color: "yellow",
    borderColor: "brown",
  },
];

let currentUmbrella = {
  color: "blue",
  src: "/asset/Blue umbrella.png",
};

function updateUmbrellaColor(indexOfSelectedColor) {
  currentUmbrella.color = allImagesDatabase[indexOfSelectedColor].color;
  currentUmbrella.src = allImagesDatabase[indexOfSelectedColor].src;

  for (const img in allImagesDatabase) {
    if (allImagesDatabase[img].color === currentUmbrella.color) {
      colors_btn[
        img
      ].style.border = `4px solid ${allImagesDatabase[img].borderColor}`;
    } else {
      colors_btn[img].style.border = "none";
    }
  }
}

for (const img in allImagesDatabase) {
  if (allImagesDatabase[img].color === currentUmbrella.color) {
    colors_btn[
      img
    ].style.border = `4px solid ${allImagesDatabase[img].borderColor}`;
  } else {
    colors_btn[img].style.border = "none";
  }
}

for (let i = 0; i < colors_btn.length; i++) {
  colors_btn[i].addEventListener("click", () => updateUmbrellaColor(i));
}

fa_times.addEventListener("click", () => {
  //set the default options
});
