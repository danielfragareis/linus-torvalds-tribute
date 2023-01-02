 document.querySelector("button#theme");
 let itsDark = false, 
 body = document.getElementsByTagName("body"),
 header = document.getElementsByTagName("header"), 
 style = document.documentElement.style,
 menu = document.getElementsByClassName("menu"),
 strong = document.getElementsByTagName("strong");

 document.getElementById("theme").addEventListener('click', () => {
    itsDark = (itsDark) ? false : true;
    change_theme()
  })

function change_theme() {
    return (itsDark) ? darkModeOn() : darkModeOff();
};

const darkModeOn = () => {
    var i;

    body[0].classList.add("dark");
    header[0].classList.add("dark");
    menu[0].classList.add("dark");
    for (i = 0; i < strong.length; i++) {
        strong[i].classList.add("dark");
    }
};

const darkModeOff = () => {
    body[0].classList.remove("dark");
    header[0].classList.remove("dark");
    menu[0].classList.remove("dark");
    for (i = 0; i < strong.length; i++) {
        strong[i].classList.remove("dark");
    }
};