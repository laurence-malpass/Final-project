const mask = document.getElementById("mask-1");
mask.addEventListener("click", closePopup);

function openPopup(serviceId, popupId) {
    let service = document.getElementById(serviceId);
    let popup = document.getElementById(popupId);

    service.addEventListener("click", function () {
        popup.style.display = "block";
        mask.style.display = "block";
    });
};

openPopup("strategy", "strategy-popup");
openPopup("copywriting", "copywriting-popup");
openPopup("digital", "digital-popup");
openPopup("websites", "website-popup");
openPopup("presentations", "presentation-popup");
openPopup("marketing", "full-stack-popup");

function closePopup() {

    mask.style.display = "none";

    document.querySelectorAll(".service-popup").forEach(function (popup) {
        popup.style.display = "none";

    });
};