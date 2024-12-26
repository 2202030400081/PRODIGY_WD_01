// Get the navbar element
const navbar = document.getElementById("navbar");

// Function to handle the scroll effect
function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

// Add an event listener for scroll event
window.addEventListener("scroll", handleScroll);
