const API_URL = 'http://localhost:3000/users';
const loader = document.getElementById('loader');
const card = document.getElementById('user-card');

async function fetchRandomUser() {
    try {
        const res = await fetch(API_URL);
        const users = await res.json();

        const randomUser = users[Math.floor(Math.random() * users.length)];

        document.getElementById('user-img').src = randomUser.img;
        document.getElementById('user-name').textContent = randomUser.name;
        document.getElementById('user-age').textContent = randomUser.age;
        document.getElementById('user-email').textContent = randomUser.email;
        document.getElementById('user-phone').textContent = randomUser.phone;
        document.getElementById('user-locate').textContent = randomUser.locate;

        loader.style.display = 'none';
        card.style.display = 'block';
    } catch (error) {
        loader.textContent = "Erreur lors du chargement depuis l'API.";
        console.error(error);
    }
}

fetchRandomUser();
