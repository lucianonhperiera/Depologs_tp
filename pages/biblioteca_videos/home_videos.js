var imageCarousel = document.getElementById("imageCarousel");
var images = imageCarousel.querySelectorAll("img");

var currentIndex = 0;
var intervalId;

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function updateCarousel() {
    images.forEach(function (image, index) {
        var isCentered = index === currentIndex;
        var isLeft = index < currentIndex && index < currentIndex - 2;
        var isRight = index > currentIndex && index > currentIndex + 2;

        var transform = isCentered ? "translateX(0%)" : isLeft ? "translateX(-40%)" : "translateX(40%)";
        var className = isCentered ? "centered" : isLeft ? "left-image" : isRight ? "right-image" : "";
        
        image.style.transform = transform;
        image.className = className;
    });
}

function startAutoPlay() {
    intervalId = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
    clearInterval(intervalId);
}

images.forEach(function (image, index) {
    image.addEventListener("mouseenter", function () {
        currentIndex = index;
        updateCarousel();
        stopAutoPlay();
    });

    image.addEventListener("mouseleave", function () {
        startAutoPlay();
    });
});

startAutoPlay();
