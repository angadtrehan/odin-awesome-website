console.log("Hello world!");

const ctaButton = document.querySelector("button");
ctaButton.addEventListener("click", () => {
    const name = prompt("What is your name?");
    const header = document.getElementById("header-logo");
    const ctaText = document.getElementById("cta-text-title");
    header.textContent =`Welcome, ${name}`;
    ctaText.innerText = `Call to action! It's time, ${name}!`;
});