let click = document.querySelector("#clickAfter");
let clickAgain = document.querySelector("#clickBefore");
let Image = document.querySelector(".dogImage");
let i = 0;
const srcContainer = [
  "dogImage/dog1.jpeg",
  "dogImage/dog2.jpeg",
  "dogImage/dog3.jpeg",
  "dogImage/dog4.jpeg",
  "dogImage/dog5.jpeg",
];
click.addEventListener("click", () => {
  i++;
  if (i > 4) i = 0;
  Image.setAttribute("src", srcContainer[i]);
});
clickAgain.addEventListener("click", () => {
  i--;
  if (i < 0) i = 4;
  Image.setAttribute("src", srcContainer[i]);
});

let checkBox = document.querySelector("#autoplay");

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    autoplay = setInterval(function () {
      i++;
      if (i > 4) i = 0;
      Image.setAttribute("src", srcContainer[i]);
    }, 1000);
  } else {
    clearInterval(autoplay);
  }
});