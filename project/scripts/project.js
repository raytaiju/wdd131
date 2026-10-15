const menuBtn = document.getElementById("menuBtn");
const sideBar = document.querySelector(".sidebar");
const close = document.getElementById("close")
menuBtn.addEventListener(`click`, () => {
    sideBar.classList.add("show")
})
close.addEventListener(`click`, () => {
    sideBar.classList.remove("show")
})