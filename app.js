 document.querySelector("button#theme");
 let itsDark = false, 
 header = document.getElementsByTagName("header"), 
 style = document.documentElement.style,
 menu = document.getElementsByClassName("menu");

 document.getElementById("theme").addEventListener('click', () => {
    itsDark = (itsDark) ? false : true;
    change_theme()
  })

function change_theme() {
    return (itsDark) ? darkModeOn() : darkModeOff();
};

const darkModeOn = () => {
    style.setProperty("background-color", "black");
    style.setProperty("color", "white");
    header[0].style.backgroundImage = "linear-gradient(to bottom, rgb(166, 166, 165) , rgb(117, 117, 117), rgb(3, 3, 2))";
    menu[0].style.backgroundColor = "rgb(166, 166, 165)";
    menu[0].style.border = ("1px solid rgba(250, 250, 250, 0.5)");
};

const darkModeOff = () => {
    document.documentElement.style.setProperty("background-color", "white");
    document.documentElement.style.setProperty("color", "black");
    header[0].style.backgroundImage = "linear-gradient(to bottom, rgb(200, 200, 200), red, transparent)";
};