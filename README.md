<video width="100%" controls>
  <source src="./img/Api.mov" type="video/mov">
  Votre navigateur ne supporte pas la vidéo.
</video>

# RandomUser API

Ce projet fournit une API qui génère des utilisateurs aléatoires avec des informations de base telles que leur nom, âge, email, téléphone, et localisation. L'API renvoie ces informations sous forme de données JSON, et peut être utilisée dans des applications frontend pour afficher un utilisateur au hasard.

## Fonctionnalités

- **Affichage d'un utilisateur aléatoire** : Chaque fois que l'endpoint `/users` est appelé, un utilisateur au hasard est retourné avec des informations comme le nom, l'âge, l'email, le téléphone, l'image et la localisation.
- **Support des images locales et externes** : L'API fournit des images d'utilisateurs en utilisant des liens externes, mais aussi des images locales accessibles via l'endpoint.

## Endpoints disponibles

### `GET /`
Renvoie un message de bienvenue à l'utilisateur de l'API.

### `GET /users`
Retourne un tableau d'utilisateurs sous forme de JSON avec les informations suivantes :
- **name** : Le nom de l'utilisateur
- **age** : L'âge de l'utilisateur
- **email** : L'email de l'utilisateur
- **phone** : Le numéro de téléphone de l'utilisateur
- **img** : URL d'une image de l'utilisateur (peut être une image locale ou externe)
- **locate** : La localisation de l'utilisateur

Exemple de réponse :

```json
[
  {
    "name": "Noelson Levis",
    "age": 34,
    "email": "noelson@yahoo.com",
    "phone": "+33 6 12 34 56 78",
    "img": "https://randomuser.me/api/portraits/men/32.jpg",
    "locate": "france"
  },
  {
    "name": "Trules Doniphane",
    "age": 24,
    "email": "trulesdoniphane98@gmail.com",
    "phone": "+33 6 98 76 54 32",
    "img": "/img/2.jpg",
    "locate": "Reunion"
  }
]
