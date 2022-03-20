var myNavbar = document.createElement("nav");
var anchorTag1 = document.createElement("a");
var anchorTag2 = document.createElement("a");
var anchorTag3 = document.createElement("a");
var anchorTag4 = document.createElement("a");
var navH1 = document.createElement("h1");
var navSpan1 = document.createElement("span");
var navSpan2 = document.createElement("span");
var navSpan3 = document.createElement("span");
var uList = document.createElement("ul");
var addList1 = document.createElement("li");
var addList2 = document.createElement("li");
var addList3 = document.createElement("li");

var mySection = document.createElement("section");
var myDiv = document.createElement("div");
var sectionH1 = document.createElement("h1");
var myFrame = document.createElement("iframe");

// add navbar
anchorTag4.classList.add("logo");
navSpan1.classList.add("jab");
navSpan2.classList.add("tv");
navSpan3.classList.add("fist");
navSpan1.innerText = "NBA";
navSpan2.innerText = "TV";
navSpan3.innerHTML = "&#127936;";
navH1.appendChild(navSpan1);
navH1.appendChild(navSpan2);
navH1.appendChild(navSpan3);
anchorTag4.appendChild(navH1);
myNavbar.appendChild(anchorTag4);
myNavbar.appendChild(uList);

document.body.appendChild(myNavbar);

// add unordered list

var about = document.createTextNode("about");
var artist = document.createTextNode("standings");
var label = document.createTextNode("stats");
anchorTag1.appendChild(about);
anchorTag2.appendChild(artist);
anchorTag3.appendChild(label);
anchorTag1.setAttribute("id", "nav-link");
anchorTag2.setAttribute("id", "nav-link");
anchorTag3.setAttribute("id", "nav-link");
addList1.appendChild(anchorTag1);
addList2.appendChild(anchorTag2);
addList3.appendChild(anchorTag3);
uList.appendChild(addList1);
uList.appendChild(addList2);
uList.appendChild(addList3);
addList1.classList.add("nav-item");
addList2.classList.add("nav-item");
addList3.classList.add("nav-item");
anchorTag1.classList.add("nav-link");
anchorTag2.classList.add("nav-link");
anchorTag3.classList.add("nav-link");

// hamburger bar
var myHamburger = document.createElement("div");
var hamSpan1 = document.createElement("span");
var hamSpan2 = document.createElement("span");
var hamSpan3 = document.createElement("span");
myHamburger.classList.add("hamburger");
myHamburger.setAttribute("id", "hamburger");
hamSpan1.classList.add("bar");
hamSpan2.classList.add("bar");
hamSpan3.classList.add("bar");
myHamburger.appendChild(hamSpan1);
myHamburger.appendChild(hamSpan2);
myHamburger.appendChild(hamSpan3);
myNavbar.appendChild(myHamburger);

// add header banner image

const openHamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navLink = document.querySelector("#nav-link");

openHamburger.addEventListener("click", openMenu);

function openMenu() {
  openHamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  openHamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
