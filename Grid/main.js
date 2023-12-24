document.addEventListener("DOMContentLoaded", function () {
    const galleryPictures = document.querySelectorAll(".gallery__picture");
    galleryPictures.forEach(function (picture) {
        picture.addEventListener("click", function () {
            console.log("Image clicked:", picture);
        });
    });
});
