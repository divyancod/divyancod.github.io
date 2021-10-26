var myNav = document.getElementById('navbartext');
window.onscroll = function () {
    "use strict";
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop >= 725 && document.documentElement.scrollTop <= 1490) {
        myNav.classList.add("text-color-blue");
        myNav.classList.remove("text-color-white");
    }
    else {
        myNav.classList.add("text-color-white");
        myNav.classList.remove("text-color-blue");
    }
};