function toggleExplore() {
    var section = document.getElementById("exploreSection");
    section.style.display = section.style.display === "block" ? "none" : "block";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
