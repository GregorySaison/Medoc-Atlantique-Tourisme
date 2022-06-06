# **MEDOC ATLANTIQUE TOURISME**

![rendu](./docs/ressources/rendu.gif)

## **Sommaire**

- **[Introduction](#introduction)**
- **[Guide d'utilisation](#guide)**
  - [Clonage du repo Git](#git)
  - [Installation des dépendances](#installation)
  - [Mise en place base de données](#bdd)
  - [Lancement de l'application](#lancement)
  - [Modification taux de pollution Lacanau](#lacanau)
  - [Modification villes alentours](#alentours)
- **[Etudes](#etudes)**
  - [Analyses préliminaires](#preliminaire)
    - [Enoncé](#enoncé)
    - [Scénario](#scénario)
    - [Reflexions initiales](#reflexion)
  - [Architecture générale](#generale)
  - [Décomposition front-end React](#front)
- **[Remarques](#remarques)**

---

## **Introduction** <a class="anchor" id="introduction"></a>

_Dans le cadre d'un processus d'embauche en cours avec l'entreprise Apizr, j'ai été invité à réaliser un test technique autour d'un sujet gravitant dans le domaine des API, coeur de métier de la dite entreprise._

_Ainsi, je pouvais alors mettre en avant mes compétences à la fois technique dans l'élaboration d'api ou encore des technos telles que React ou Node, mais aussi et surtout mes capacités de recherche, d'apprentissage autonome ou encore ma logique de refléxion et ma philosophie d'écriture d'un projet et de son architecture._

---

## **Guide d'utilisation** <a class="anchor" id="guide"></a>

### **Clonage du repo Git** <a class="anchor" id="git"></a>

Ouvrez un terminal sur votre poste de travail et placez le à l'endroit voulu. Entrez alors la commande suivante :

```
$ git clone git@github.com:GregorySaison/Plage-Pollution.git
$ cd .\Plage-Pollution\
```

Le dossier complet du projet doit désormais être présent sur votre poste de travail à l'endroit que vous avez designé.

### **Installation des dépendances** <a class="anchor" id="installation"></a>

Afin de permettre le fonctionnement de l'application, il est nécéssaire d'installer les multiples dépendances de cette dernière. Ces dépendances existent à la fois côté client et côté serveur. Deux manipulations sont donc à effectuer.

Dans un premier temps, grâce aux commandes suivantes, dirigez vous vers le dossier server et installer les dépendances de la partie serveur de l'application.

```
$ cd .\server\
$ npm i
```

Une fois cette opération terminée, renouvelez l'opération pour la partie client de l'application.

```
$ cd ..
$ cd .\client\
$ npm i
```

### **Mise en place base de données** <a class="anchor" id="bdd"></a>

Afin de pouvoir renvoyer les informations annexes de l'écran concernant les villes avoisinantes, vous aurez besoin d'une base de données existante et paramétrée.

Une fois votre base de donnée crée, rendez-vous au sein du fichier app.module.ts et remplissez les champs suivant de ce dernier avec vos propres informations. Les infos inscrites dans l'exemple ci-dessous sont présentes a titre d'exemple uniquement.

```
imports: [
    SequelizeModule.forRoot({
      dialect: , //postgres
      host: , //localhost
      port: , //5432
      username: , //DB_User
      password: , //DB_Password
      database: , //DB_Name
      autoLoadModels: true,
      synchronize: true,
    }),
```

Une fois cela fait, votre base de données est prête pour une connexion au reste du projet.

Mais avant toute chose il vous faudra également la remplir pour que cette dernière renvoie une quelconque donnée.

Pour ce faire, vous trouverez dans le dossier data du projet deux fichiers à executer. Le premier à executer, create_table, puis le second, create_data pour les inclure au sein de votre base de données.

### **Lancement de l'application** <a class="anchor" id="lancement"></a>

Afin de voir apparaître une application fonctionnelle, vous devez lancer les deux serveurs du projet qui fonctionne ensemble, chacun se chargeant d'une fonction qui lui est propre.

Premièrement, ouvrez un terminal et dirigez vous vers le dossier server de l'application avant de rentrer la commande suivante.

```
cd .\server\
$ npm run start
```

Puis dans un nouveau terminal, réiterez la même commande au sein du dossier client de l'application.

```
cd .\client\
$ npm run start
```

Une page devrait alors s'ouvrir, laissant apparaître l'application.

### **Modification taux de pollution Lacanau** <a class="anchor" id="lacanau"></a>

Bien conscient que le taux de pollution des eaux de Lacanau peut être régulièrement variant d'un jour à l'autre, nous avons inclus au sein de l'application un bouton en haut à droite de l'écran.

En appuyant sur ce dernier, vous ferez alors apparaître à l'écran un formulaire vous permettant de choisir une nouvelle valeur de pollution qui une fois soumise sera inscrite au sein de l'application.

Vous n'aurez alors plus qu'à cliquez de nouveau sur le bouton pour faire disparaître le formulaire de l'écran.

### **Modification villes alentours** <a class="anchor" id="alentours"></a>

Si vous souhaitez modifier les intitulés ou les taux de pollution respectif des villes alentours de Lacanau, vous devez le faire directement via le fichier create_data du projet.

Une fois les modifications réalisées, il ne vous reste alors plus qu'à relancer le script sql create_table suivi de create_data pour avoir vos valeurs modifiées.

---

## **Etudes** <a class="anchor" id="etudes"></a>

### **Analyses préliminaires** <a class="anchor" id="preliminaire"></a>

#### **Enoncé** <a class="anchor" id="enoncé"></a>

Je dois créer une interface web mono page qui renvoie l’affichage de qualité des eaux de Lacanau ainsi que de celle des plages voisines.

Un champ de saisie permet à l’utilisateur d'entrer une valeur de pollution le jour J, une valeur proche de 0 correspondant à une eau polluée tandis qu’une valeur se rapprochant de 100 signifiant une eau propre. Cette valeur entraîne alors l’affichage d’une illustration correspondant au taux de pollution.

Une partie annexe de la page renvoie elle une liste des plages avoisinantes ainsi que leur taux de pollution d’eau respectif.

Afin de réaliser l'application, je dois avant tout partir sur une élaboration d'api classique via Node et une relation avec un front en React. Vient par la suite une refactorisation de la partie back en NestJS.

#### **Scénario** <a class="anchor" id="scénario"></a>

L'office de tourisme de Lacanau m'a contacté. Alors que l'été se profile, cette dernière souhaite profiter de son écran pour afficher des données de pollution de l'eau de sa plage locale ainsi que celles des plages des villes avoisinante.

#### **Reflexions initiales** <a class="anchor" id="reflexion"></a>

A travers la lecture de l'énoncé et cette première mise en situation, on peut déjà en retirer plusieurs informations qui vont offrir une ligne directrice au projet.

- **Office du tourisme de LACANAU :** Nous connaissons le client et nous connaissons la localisation du projet, à savoir au sein de l'office du tourisme de Lacanau. En ce sens, il apparaît logique de s'appuyer sur l'identité visuelle de ce dernier pour créer un rendu qui s'y adapte et ne dénote pas avec le reste de l'établissement.

- **Utilisation sur ECRAN :** Au sein d'un office de tourisme, les écrans d'informations ne sont souvent pas destiné a un seul affichage. Généralement, on peut voir apparaître plusieurs affichages qui se succèdent les uns les autres. Notre application d'affichage de pollution pourrait alors faire partie d'un ensemble d'autres affichages différents. On peut alors imaginer une transition de fondu au cas où on aurait la possibilité de l'insérer dans un tel ensemble.

- **PARAMETRAGE par agent :** On doit permettre la mise à jour des données au jour le jour par les agents de l'office de tourisme. Néanmoins cela ne doit pas se faire au détriment de la qualité du rendu sur écran. En ce sens on peut imaginer un formulaire de modification simpliste mais également avec une possibilité de masquer son affichage une fois la mise à jour effectué pour garder une qualité d'affichage optimale.

### **Architecture Générale** <a class="anchor" id="generale"></a>

![architecture générale](./docs/Sch%C3%A9ma.png)

L'application se divise en trois parties distinctes : Le Front, le Back et la Base de données.

Dans sa première version, la décomposition du back se fait a l'aide d'un serveur Express couplé a Node JS. La version finale et actuelle a elle évolué vers une solution en NestJS.

Afin de pouvoir faire fonctionner l'application, les deux parties Front et Back de cette dernière sont en marche sur deux ports différents, respectivement le port 3000 et le port 3002. L'implémentation du package cors au sein du paramétrage du serveur Express permet a la logique React d'être autorisé à entrer en relation avec la partie Back.

Cette partie Back interagit avec une base de données Postgres charger de renvoyer les informations ainsi qu'un fichier de config spécifiquement crée pour le ville d'Hourtin. Ces données sont accessibles via des routes définies. C'est sur ces routes que le Front effectue les requêtes pour récupérer les données.

Dans sa version finale, la base de données de l'application inclut Hourtin directement en son sein.

### **Décomposition front-end React** <a class="anchor" id="front"></a>

![react](./docs/D%C3%A9coupage%20Front.png)

### **Remarques** <a class="anchor" id="remarques"></a>

_Au sein de l'énoncé fourni par l'entreprise, il était précisé qu'une valeur de 0 signifie une eau pollué tandis qu'une valeur de 100 signifie elle une eau claire._

_Cependant, et face à l'incohérence du rendu, je me suis permis d'inversé le système de notation._

_En effet, en suivant l'énoncé, je me retrouvais alors avec des annotation tels que "Pollution 0%" au sein du rendu de l'application mais avec une image correspondant a une eau pollué, résultant d'une incohérence._
