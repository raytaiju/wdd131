document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear; 
    const lastModified = document.lastModified;
    document.getElementById("lastmodified").textContent = "Last Modified: " + lastModified;
});

const menuBtn = document.getElementById("menuBtn");
const sideBar = document.querySelector(".sidebar");
const close = document.getElementById("close")
menuBtn.addEventListener(`click`, () => {
    sideBar.classList.add("show")
})
close.addEventListener(`click`, () => {
    sideBar.classList.remove("show")
})

const easeChoice = document.getElementById("easeChoice");
const eased = document.getElementById("eased")
const uneased = document.getElementById("uneased")

function updateEase() {
    uneased.classList.remove("appear");
    eased.classList.remove("appear");

    if (easeChoice.value == "noEase"){
        uneased.classList.add("appear")
    } else {
        eased.classList.add("appear")
    }
}


updateEase();

easeChoice.addEventListener(`change`, updateEase)
