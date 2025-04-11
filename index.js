const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

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
            img: '/img/2.jpg',
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

    ];

    res.json(users);
});

app.listen(port, () => {
    console.log(`API démarrée sur http://localhost:${port}`);
});
