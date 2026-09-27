document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear; 
    const lastModified = document.lastModified;
    document.getElementById("lastmodified").textContent = "Last Modified: " + lastModified;
})

let windchillfactor = document.getElementById("windchill")

function calculateWindChill(temp,windSpeed) {
    return 13.12 + (0.6215*temp) - (11.37*(windSpeed**0.16)) + (0.3965*temp*(windSpeed**0.16))
}

const temp = 28
const windSpeed = 10

if (temp <= 10 && windSpeed > 4.8) {
    windchillfactor.textContent = calculateWindChill(temp, windSpeed)
}
else {
    windchillfactor.textContent = "N/A"
}