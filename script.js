const umbrella_img = document.querySelector(".umbrella-img");
const colors_btn = document.querySelectorAll(".colors-btn");
const upload_file_input = document.querySelector("#upload-file-input");
const upload_logo_text = document.querySelector(".upload-logo-text");
const fa_times = document.querySelector(".fa-times");
const upload_file_container = document.querySelector(".upload-file-container");
const brand_logo = document.querySelector("#brand-logo");

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

var uploaded_image = "";

colors_btn[1].style.border = `4px solid ${allImagesDatabase[1].borderColor}`;
fa_times.style.display = "none";
brand_logo.style.display = "none";
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

upload_file_input.addEventListener("change", (e) => {
  if(brand_logo.src!=="")
 {
  fa_times.style.display = "block";
  brand_logo.style.display = "block";
 }
  brand_logo.src = URL.createObjectURL(e.target.files[0]);
});

fa_times.addEventListener("click", () => {
  fa_times.style.display = "none";
  brand_logo.style.display = "none";
  brand_logo.src = "";
});
