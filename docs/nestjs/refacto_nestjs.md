![refacto nestjs](./../ressources/architecture%20nestjs.png)

### ARCHITECTURE DE BASE

_Le fichier main.ts va se charger de créer une instance de serveur fonctionnelle en définissant le port sur lequel il sera à l’écoute des différentes requêtes entrantes. Au sein de cette création, on lui inclut également la possibilité de partage avec des origines extérieures, ici le port 3000 de localhost sur lequel la partie client du projet est paramétré. De plus, on lui inclut également les données définit dans le fichier app.module.ts. Ce dernier va se charger de renvoyer les données de connexion à ma base de données Postgres affilié au projet ainsi que les logiques des autres modules nécéssaire projet._

### ARCHITECTURE DE RECUPERATION DES VILLES

_Le module city va lui se charger d'appeler l'ensemble des éléments nécessaire à la construction de la logique d'interaction et de récupération au sein de la base de données._

- _city.service_
- _city.module_
- _city.model_

_Tandis que l'on va définir les infos de chaque donnée à récupérer dans le modèle, c'est dans le controller que l'on définit la route au seil de laquelle les données seront accessibles. Le service, lui, va se charger de réaliser l'action associée à la requête, ici la méthode findAll de Sequelize_
