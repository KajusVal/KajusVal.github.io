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

// Funkcija, kuri gauna dabartinį laiką ir jį paverčia į formatą
function showTime() {
    const now = new Date(); // Dabartinis laikas
    const hours = String(now.getHours()).padStart(2, '0'); // Valandos
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Minutės
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Sekundės

    // Laiko formatas (HH:MM:SS)
    const time = `${hours}:${minutes}:${seconds}`;

    // Laikrodžio elemento atnaujinimas
    document.getElementById('clock').textContent = time;
}

// Paleisti laiką iš karto ir atnaujinti kas sekundę
setInterval(showTime, 1000);
showTime(); // Parodo laiką iš karto nebelaukiant pirmos sekundės

function saveData() {
    const formData = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        ratings: [
            parseInt(document.getElementById('q1').value),
            parseInt(document.getElementById('q2').value),
            parseInt(document.getElementById('q3').value),
            parseInt(document.getElementById('q4').value),
            parseInt(document.getElementById('q5').value),
        ],
    };

    console.log(formData); // Rezultatas konsolėje

    displayData(formData);
}
function displayData(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Name (email): ${data.name} ${data.surname} (${data.email})</p>
        <p>Phone Number: ${data.phone}</p>
        <p>Address: ${data.address}</p>
    `;

    const average = data.ratings.reduce((sum, r) => sum + r, 0) / data.ratings.length;

    let avgClass = '';
    if (average <= 4) {
        avgClass = 'red';
    } else if (average <= 7) {
        avgClass = 'orange';
    } else {
        avgClass = 'green';
    }

    resultDiv.innerHTML += `
        <p>Average: <span class="rating ${avgClass}">${average.toFixed(2)}</span></p>`;
}
