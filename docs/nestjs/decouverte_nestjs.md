_Nest JS agit comme une abstraction envers les bibliothèques de serveur. Grâce a Nest JS je n’ai plus besoin de créer et paramétrer mon serveur express. Le framework utilise une architecture précise et volontairement rigide à suivre pour assurer les qualités de mon application mais également une uniformité dans la construction de cette dernière entre les différents développeurs impliqués._

_L’architecture de Nest JS est construite autour de 3 blocs principaux : Les modules, les services et les contrôleurs._

- _Le module agit comme le conteneur de l’ensemble de la logique définie par les autres blocs. Mon application dispose d’un module App agissant comme module racine pour définir les informations de connexion à la base de données Postgres mais également de modules spécifiques aux besoin de mon projet tel que le module CityModule._
- _Les contrôleurs agissent eux de la même manière qu’au sein d’une architecture MVC traditionnelle. Il est l’intermédiaire entre la requête HTTP et la logique décrite dans les services. C’est lui qui va déterminer la méthode au sein du service correspondant à la requête récéptionnée._
- _Les services sont les blocs qui contiennent les logiques qui s’enclenche suivant les requêtes reçues._
