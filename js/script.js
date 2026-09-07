// ===============================
// Photos
// ===============================

const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg",
    "photo8.jpg",
    "photo9.jpg",
    "photo10.jpg",
    "photo11.jpg",
    "photo12.jpg",
    "photo13.jpg",
    "photo14.jpg",
    "photo15.jpg",
    "photo16.jpg",
    "photo17.jpg",
    "photo18.jpg",
    "photo19.jpg",
    "photo20.jpg",
    "photo21.jpg",
    "photo22.jpg",
    "photo23.jpg",
    "photo24.jpg",
    "photo25.jpg",
    "photo26.jpg",
    "photo27.jpg",
    "photo28.jpg",
    "photo29.jpg",
    

];

const gallery = document.getElementById("gallery");

let currentImage = 0;


// Create Gallery

photos.forEach((photo, index) => {

    const card = document.createElement("div");

    card.className = "photo-card";

    card.innerHTML = `
        <img
            src="images/${photo}"
            alt="Memory"
            onclick="openImage(${index})"
        >
    `;

    gallery.appendChild(card);

});


// ===============================
// Image Viewer
// ===============================

function openImage(index) {

    currentImage = index;

    const viewer = document.getElementById("imageViewer");
    const image = document.getElementById("viewerImage");

    image.src = "images/" + photos[currentImage];

    viewer.classList.add("active");
}


function closeImage() {

    document
        .getElementById("imageViewer")
        .classList.remove("active");

}


function nextImage() {

    currentImage++;

    if (currentImage >= photos.length) {
        currentImage = 0;
    }

    openImage(currentImage);
}


function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = photos.length - 1;
    }

    openImage(currentImage);
}


// Keyboard Controls

document.addEventListener("keydown", function(event) {

    const viewer = document.getElementById("imageViewer");

    if (!viewer.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeImage();
    }

    if (event.key === "ArrowRight") {
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        previousImage();
    }

});


// Close viewer when clicking outside image

document
    .getElementById("imageViewer")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeImage();
        }

    });




// ===============================
// Background Music
// ===============================

const music = document.getElementById("backgroundMusic");

let musicPlaying = false;


// Open Gift + Start Music
function openGift() {

    music.volume = 0.35;

    music.play();

    document.getElementById("memories").scrollIntoView({
        behavior: "smooth"
    });

}


// Music Toggle
function toggleMusic() {

    if (music.paused) {

        music.volume = 0.35;

        music.play()
            .then(() => {

                musicPlaying = true;
                updateMusicButton();

            })
            .catch(() => {

                console.log("Music was blocked by the browser.");

            });

    } else {

        music.pause();

        musicPlaying = false;

        updateMusicButton();

    }

}


// Update Button
function updateMusicButton() {

    const button = document.getElementById("musicButton");

    if (music.paused) {
        button.innerHTML = "🔇";
        musicPlaying = false;
    } else {
        button.innerHTML = "🔊";
        musicPlaying = true;
    }

}


// Detect changes in music state

music.addEventListener("play", function() {

    musicPlaying = true;
    updateMusicButton();

});


music.addEventListener("pause", function() {

    musicPlaying = false;
    updateMusicButton();

});


music.addEventListener("ended", function() {

    musicPlaying = false;
    updateMusicButton();

});


// ===============================
// Letters
// ===============================

function openLetter(number) {

    const modal = document.getElementById("letterModal");
    const message = document.getElementById("letterMessage");

    if (number === 1) {

        message.innerHTML = `
            You are the most beautiful part
            of my life. ❤️
        `;

    }

    if (number === 2) {

        message.innerHTML = `
            Can't wait to see you playing with مريومة.<br>
            LOVE YOU BOTH❤️❤️
            
        `;

    }

    if (number === 3) {

        message.innerHTML =
            "I will never forget the first day I started talking to you.<br>" +
            "I didn't know that I would love you that much.<br>" +
            "LOVE YOU WITH ALL MY HEART ❤️";

    }

    modal.classList.add("active");

}


function closeLetter() {

    document
        .getElementById("letterModal")
        .classList.remove("active");

}


// Close modal by clicking outside

document
    .getElementById("letterModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeLetter();
        }

    });


// ESC closes letter

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeLetter();
    }

});
