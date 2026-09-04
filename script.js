/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* Close menu after clicking link */

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                const icon =
                    menuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

}


/* =========================================================
   SCROLL TO TOP
========================================================= */

const scrollTopBtn =
    document.getElementById("scrollTopBtn");

if (scrollTopBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTopBtn.style.display = "flex";

        } else {

            scrollTopBtn.style.display = "none";

        }

    });


    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const header =
    document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(0,0,0,0.90)";

    } else {

        header.style.background =
            "rgba(0,0,0,0.75)";

    }

});