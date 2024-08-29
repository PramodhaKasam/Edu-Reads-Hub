const navbar = document.querySelector(".top");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos === 0) {
        navbar.style.top = "5px";
    } else {
        navbar.style.top = "-60px";
    }
}
