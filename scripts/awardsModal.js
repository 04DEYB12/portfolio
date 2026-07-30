const awardModal = document.getElementById("awardModal");
const awardImage = document.getElementById("awardImage");
const awardDescription = document.getElementById("awardDescription");
const closeAwardModal = document.getElementById("closeAwardModal");

function openAward(src, description) {
    awardImage.src = src;
    awardDescription.textContent = description;
    awardModal.classList.remove("hidden");
    awardModal.classList.add("flex");
}

function closeAward() {
    awardModal.classList.remove("flex");
    awardModal.classList.add("hidden");
}

closeAwardModal.addEventListener("click", closeAward);

// Close when clicking outside the image
awardModal.addEventListener("click", (e) => {
    if (e.target === awardModal) {
        closeAward();
    }
});

// Close with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeAward();
    }
});