document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear; 
    const lastModified = document.lastModified;
    document.getElementById("lastmodified").textContent = "Last Modified: " + lastModified;
});

const nav = document.querySelector('#nav-container')
const menuBtn = document.querySelector('#menu-button')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('show')
    nav.classList.toggle('show')
})
