// =========================
// MOBILE MENU
// =========================

const nav = document.querySelector(".nav-links");
const navButton = document.querySelector(".nav-button");

if (nav) {

    const menuToggle = document.createElement("button");

    menuToggle.innerHTML = "☰";
    menuToggle.classList.add("menu-toggle");

    document.querySelector(".nav-content").prepend(menuToggle);

    menuToggle.addEventListener("click", function () {

        nav.classList.toggle("show");

    });

}


// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Thank you! Your message has been received."
        );

        contactForm.reset();

    });

}


// =========================
// GALLERY LIGHTBOX
// =========================

const galleryImages = document.querySelectorAll(".gallery-item img");

if (galleryImages.length > 0) {

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            const lightbox = document.createElement("div");

            lightbox.classList.add("lightbox");

            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${image.src}" alt="${image.alt}">
                    <button class="lightbox-close">×</button>
                </div>
            `;

            document.body.appendChild(lightbox);


            const closeButton =
                lightbox.querySelector(".lightbox-close");


            closeButton.addEventListener("click", function () {

                lightbox.remove();

            });


            lightbox.addEventListener("click", function (event) {

                if (event.target === lightbox) {

                    lightbox.remove();

                }

            });

        });

    });

}


// =========================
// BACK TO TOP BUTTON
// =========================

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.classList.add("back-to-top");

document.body.appendChild(backToTop);


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});