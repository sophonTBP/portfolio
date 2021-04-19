const themeMap = {
    
    dark: "light",
    light: "solar",
    solar: "dark"
};

if (localStorage.theme) {
    const theme = localStorage.getItem("theme");
    const bodyClass = document.body.classList;
    theme && bodyClass.add(theme);
    function toggleTheme() {
        const current = localStorage.getItem("theme");
        const next = themeMap[current];

        bodyClass.replace(current, next);
        localStorage.setItem("theme", next);
    }
} else {
    localStorage.setItem("theme", "light");
}

document.getElementById("themeButton").onclick = toggleTheme; 