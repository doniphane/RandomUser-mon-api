const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Bienvenue sur mon propre randomuser api');
});

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'Noelson Levis',
            age: 34,
            email: 'noelson@yahoo.com',
            phone: '+33 6 12 34 56 78',
            img: 'https://randomuser.me/api/portraits/men/32.jpg',
            locate: 'france'
        },
        {
            name: 'Trules Doniphane',
            age: 24,
            email: 'trulesdoniphane98@gmail.com',
            phone: '+33 6 98 76 54 32',
            img: './img/2.jpg',
            locate: 'Reunion'
        },
        {
            name: 'Black Darkrai',
            age: 20,
            email: 'black@gail.com',
            phone: '+33 7 88 77 66 55',
            img: 'https://randomuser.me/api/portraits/men/70.jpg',
            locate: 'Portugal'
        },
        {
            name: 'Sakura Yamamoto',
            age: 29,
            email: 'sakura.yama@example.com',
            phone: '+81 90 1234 5678',
            img: 'https://randomuser.me/api/portraits/women/21.jpg',
            locate: 'Los Angeles'
        },
        {
            name: 'Ethan Carter',
            age: 31,
            email: 'ethan.carter@mail.com',
            phone: '+44 7911 123456',
            img: 'https://randomuser.me/api/portraits/men/64.jpg',
            locate: 'amerique Latine '
        },
        {
            name: 'Lucie Dubois',
            age: 26,
            email: 'lucie.dubois@laposte.net',
            phone: '+33 6 78 54 32 10',
            img: 'https://randomuser.me/api/portraits/women/52.jpg',
            locate: 'Australie'
        },
        {
            name: 'Mohamed El Amrani',
            age: 38,
            email: 'mohamed.elamrani@gmail.com',
            phone: '+212 6 45 23 87 90',
            img: 'https://randomuser.me/api/portraits/men/90.jpg',
            locate: 'Maurice'
        },
        {
            name: 'Emily Johnson',
            age: 22,
            email: 'emily.johnson@example.com',
            phone: '+1 202-555-0174',
            img: 'https://randomuser.me/api/portraits/women/10.jpg',
            locate: 'Italie'
        },
        {
            name: 'Ivan Petrov',
            age: 35,
            email: 'ivan.petrov@rambler.ru',
            phone: '+7 495 123 4567',
            img: 'https://randomuser.me/api/portraits/men/88.jpg',
            locate: 'Balie'
        }

    ];

    res.json(users);
});

app.listen(port, () => {
    console.log(`API démarrée sur http://localhost:${port}`);
});
