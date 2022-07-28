const prevBtn = document.querySelector(".btn-prev-desktop");
const nextBtn = document.querySelector(".btn-next-desktop");
const leftTopCornerBackground = document.querySelector(".left-side-top");

const pageHeader = document.querySelector(".header");
const textAfterHeader = document.querySelector(".text-right-side-top");

const topMenu = document.querySelector('.top-menu')
const closeBtn = document.querySelector('.close-top-menu-btn');

closeBtn.addEventListener('click', hamburgerMenu)

function hamburgerMenu() {
  setTimeout(() => {
    document.body.classList.toggle('dim')
    topMenu.classList.toggle('hidden')
  }, 300);
    
    console.log('working')
}

const imgsArr = [
    ["url(./images/desktop-image-hero-0.jpg)"],
    ["url(./images/desktop-image-hero-1.jpg)"],
    ["url(./images/desktop-image-hero-2.jpg)"]
]
// console.log(imgsArr[0].)

const headerArr = [
    ["Discover innovative ways to decorate"],
    ["We are available all across the globe"],
    ["Manufactured with the best materials"]
];
const textArr = [
    ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."],
    ["With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we\'re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today."],
    ["Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]
]
let counter = 0;

function nextTextAndImg() {
    counter++;
        if (counter == 3) {
        counter = 0
    }
    pageHeader.innerHTML = headerArr[counter]
    textAfterHeader.innerHTML = textArr[counter]
    leftTopCornerBackground.style.backgroundImage = imgsArr[counter];
    // console.log(leftTopCornerBackground.style.backgroundImage)
    }
    
function prevTextAndImg() {
        counter--;
        if (counter === -1) {
            counter = 2;
        }
        pageHeader.innerHTML = headerArr[counter]
        textAfterHeader.innerHTML = textArr[counter]
        leftTopCornerBackground.style.backgroundImage = imgsArr[counter];
        console.log(counter)
        }

prevBtn.addEventListener('click', prevTextAndImg);
nextBtn.addEventListener('click', nextTextAndImg);


function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
