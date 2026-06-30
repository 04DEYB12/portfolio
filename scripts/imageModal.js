const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

function openImage(src) {
    modalImage.src = src;
    imageModal.classList.remove("hidden");
    imageModal.classList.add("flex");
}

function closeImage() {
    imageModal.classList.remove("flex");
    imageModal.classList.add("hidden");
}

closeModal.addEventListener("click", closeImage);

// Close when clicking outside the image
imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
        closeImage();
    }
});

// Close with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeImage();
    }
});