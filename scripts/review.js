let count = parseInt(localStorage.getItem("count")) || 0;
count++;
localStorage.setItem("count", count);
console.log(`This page has been visited ${count} times.`);