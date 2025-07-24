// Simple form submission handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formResponse").textContent = "Terima kasih! Pesan Anda telah dikirim.";
    this.reset();
});