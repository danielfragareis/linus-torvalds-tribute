 document.querySelector("button#theme");
 let itsDark = false;

 document.getElementById("theme").addEventListener('click', () => {
    itsDark = (itsDark) ? false : true;
    change_theme()
  })

function change_theme() {
    return (itsDark) ? darkModeOn() : darkModeOff();
};

const darkModeOn = () => {
    document.documentElement.style.setProperty("background-color", "black");
    document.documentElement.style.setProperty("color", "white");
};

const darkModeOff = () => {
    document.documentElement.style.setProperty("background-color", "white");
    document.documentElement.style.setProperty("color", "black");
};