var myNav = document.getElementById('navbartext');
window.onscroll = function () {
    "use strict";
    if ((document.documentElement.scrollTop >= 730 && document.documentElement.scrollTop<=1450)) {
        //myNav.classList.remove("nav-transparent");
        myNav.classList.add("color-blue-mynav");
        myNav.classList.remove("color-white-mynav");
    }
    else {
        myNav.classList.remove("color-blue-mynav");
        myNav.classList.add("color-white-mynav");
    }
};
