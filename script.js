const umbrella_img = document.querySelector(".umbrella-img");
const colors_btn = document.querySelectorAll(".colors-btn");
const upload_file_input = document.querySelector("#upload-file-input");
const upload_logo_text = document.querySelector(".upload-logo-text");
const fa_times = document.querySelector(".fa-times");
const upload_file_container = document.querySelector(".upload-file-container");
const brand_logo = document.querySelector("#brand-logo");
const loader = document.querySelector(".loader");

const allImagesDatabase = [
  {
    id: 0,
    src: "/asset/Pink umbrella.png",
    color: "pink",
    borderColor: "MediumVioletRed",
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
    borderColor: "#FEBE10",
    backgroundColor: "#FFFFBE",
  },
];

let currentUmbrella = {
  color: "blue",
  src: "/asset/Blue umbrella.png",
};

umbrella_img.src = currentUmbrella.src;
var uploaded_image = "";

colors_btn[1].style.border = `4px solid ${allImagesDatabase[1].borderColor}`;
fa_times.style.display = "none";
brand_logo.style.display = "none";
loader.style.display = "none";

function updateUmbrellaColor(indexOfSelectedColor) {
  currentUmbrella.color = allImagesDatabase[indexOfSelectedColor].color;
  currentUmbrella.src = allImagesDatabase[indexOfSelectedColor].src;

  for (const img in allImagesDatabase) {
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
  umbrella_img.classList.add("fade");
  brand_logo.classList.add("fade");

  setTimeout(() => {
    loader.classList.add("rotate");
    loader.style.display = "block";
  }, 500);

  setTimeout(() => {
    loader.classList.remove("rotate");
    umbrella_img.classList.remove("fade");
    brand_logo.classList.remove("fade");
    loader.style.display = "none";
  }, 4000);
}

//Event listeners
for (let i = 0; i < colors_btn.length; i++) {
  colors_btn[i].addEventListener("click", () => updateUmbrellaColor(i));
}

upload_file_input.addEventListener("change", (e) => {
  if (brand_logo.src !== "") {
    fa_times.style.display = "block";
    brand_logo.style.display = "block";
    upload_logo_text.innerText = e.target.files[0].name;
    upload_logo_text.style.fontSize = "18px";
  }
  brand_logo.src = URL.createObjectURL(e.target.files[0]);
});

fa_times.addEventListener("click", () => {
  brand_logo.src = "";
  fa_times.style.display = "none";
  brand_logo.style.display = "none";
  upload_logo_text.innerText = "UPLOAD LOGO";
  upload_logo_text.style.fontSize = "24px";
  console.log("hello");
});
