const body = document.body;
const btn = document.getElementById("theme-toggle");
const theme = localStorage.getItem("theme") || "dark-mode";
body.className = theme;
btn.textContent = theme === "dark-mode" ? "Switch to Light Mode" : "Switch to Dark Mode";
btn.onclick = () => {
    const isDark = body.classList.toggle("dark-mode");
    body.className = isDark ? "dark-mode" : "light-mode";
    btn.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
    localStorage.setItem("theme", isDark ? "dark-mode" : "light-mode");
};

const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Mygtukas pasirodo nuslinkus daugiau nei 300px
        scrollToTopButton.classList.add('show');
        scrollToTopButton.classList.remove('hide');
    } else {
        scrollToTopButton.classList.add('hide');
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Sklandus grįžimas
    });
});
