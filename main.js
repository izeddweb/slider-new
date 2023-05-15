//           Setup Variable
const body = document.body;
const slide = document.querySelector(".slide");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const containBulls = document.querySelector(".bulls");

images = ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.JPG"];

let liItem;
const ul = document.createElement("ul");
for (const image of images) {
  let index;
  index = images.indexOf(image) + 1;
  const li = document.createElement("li");
  const numberNode = document.createTextNode(` ${index}`);
  li.setAttribute("data-number", `${index}`);
  li.appendChild(numberNode);
  ul.appendChild(li);
  ul.style.cssText = "display:flex;";
}
containBulls.appendChild(ul);
//    li item
liItem = Array.from(document.querySelectorAll("[data-number]"));

//  set up btn prev & next
let counterImg = 1;
btnPrev.addEventListener("click", decrem);

let li;
function decrem() {
  liItem.map(function (ele) {
    parseInt(ele.getAttribute("data-number")) === counterImg
      ? ele.classList.add("active")
      : ele.classList.remove("active");
  });

  //
  if (counterImg === 1) counterImg = images.length;
  else counterImg--;
  return (slide.style.background = `url(/images/${counterImg}.JPG)center center`);
}

btnNext.addEventListener("click", crem);

function crem() {
  console.log(counterImg);
  if (counterImg === images.length) counterImg = 1;
  else counterImg++;
  console.log(counterImg);
  return (slide.style.background = `url(/images/${counterImg}.JPG)center center`);
}

// create bulls item from images

for (const item of liItem) {
  let counterImg = item.getAttribute("data-number");
  item.addEventListener("click", () => {
    for (const item of liItem) {
      item.classList.remove("active");
    }
    item.classList.add("active");
    return (slide.style.background = `url(/images/${counterImg}.JPG)center center`);
  });
}

//   setup aside bar

const asideIcon = document.querySelector(".icon-span");
const icon = document.querySelector(".fa-gear");
const aside = document.querySelector(".aside");
let spans = document.querySelectorAll(".content-aside span");
const colorSpan = document.querySelector("[data-color]");

//set aside function
asideIcon.addEventListener("click", hideMe);
function hideMe() {
  aside.classList.toggle("show-me-aside");
  icon.classList.toggle("fa-spin");
}

//set color main change function
Array.from(spans).forEach((ele) => {
  ele.onclick = function () {
    let color = ele.getAttribute("data-color");
    document.documentElement.style.setProperty("--main-color", color);
  };
});

//  important   a retenir
// console.log(document.documentElement.style.setProperty('--black-color','yellow')
// );

//    setup theme
const themeContent = document.querySelector(".content-theme");
const btnTheme = document.querySelector(".btn-theme");

btnTheme.addEventListener("click", changeTheme);

function changeTheme() {
  btnTheme.classList.toggle("float-r");
  body.classList.toggle("darkTheme");
}

//    when scrooling header change BGC to black
const header = document.querySelector("header");
window.addEventListener("scroll", changeBGC);

function changeBGC() {
  if (document.documentElement.scrollTop > 150) header.style.background = "var(--black-color)";
  else header.style.background = "transparent";
}
