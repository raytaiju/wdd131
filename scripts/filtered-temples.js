document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear; 
    const lastModified = document.lastModified;
    document.getElementById("lastmodified").textContent = "Last Modified: " + lastModified;
})

const nav = document.querySelector('#nav-container')
const menuBtn = document.querySelector('#menu-button')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('show')
    nav.classList.toggle('show')
})

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bentonville Arkansas Temple",
    location: "Bentonville, Arkansas, United States",
    dedicated: "2023, September, 17",
    area: 28472,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bentonville-arkansas-temple/bentonville-arkansas-temple-55568-main.jpg"
   },
   {
    templeName: "Bahia Blanca Argentina Temple",
    location: "Bahia Blanca, Argentina",
    dedicated: "2025, November, 23",
    area: 23400,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-65191-main.jpg"
   },
   {
    templeName: "Caracas Venezuela Temple",
    location: "Caracas, Venezuela",
    dedicated: "2020, August, 20",
    area: 15332,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg"
   }
];

function createTempleCards(filteredTemples) {
    document.querySelector("section").innerHTML = "";
    for (const temple of filteredTemples) {
        const card = document.createElement("div");
        card.classList.add("temple-card");
        const templeName = document.createElement("h2");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        templeName.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.templeName);
        image.setAttribute("loading", "lazy");
        card.appendChild(templeName);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);
        document.querySelector("section").appendChild(card);
    }
}

const home = document.getElementById("home");
home.addEventListener("click", function() {
    createTempleCards(temples);
});

const old = document.getElementById("old");
old.addEventListener("click", function() {
    const oldTemples = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) < 1900);
    createTempleCards(oldTemples);
});

const newTemples = document.getElementById("new");
newTemples.addEventListener("click", function() {
    const newTemples = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) >= 2000);
    createTempleCards(newTemples);
});

const large = document.getElementById("large");
large.addEventListener("click", function() {
    const largeTemples = temples.filter(temple => parseInt(temple.area) > 90000);
    createTempleCards(largeTemples);
});

const small = document.getElementById("small");
small.addEventListener("click", function() {
    const smallTemples = temples.filter(temple => parseInt(temple.area) < 10000);
    createTempleCards(smallTemples);
});