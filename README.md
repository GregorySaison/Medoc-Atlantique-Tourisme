# **MEDOC ATLANTIQUE TOURISME**

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
  - [Enoncé](#enoncé)
  - [Scénario](#scénario)
- **[Reste à faire](#raf)**
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

### **Enoncé** <a class="anchor" id="enoncé"></a>

Je dois créer une interface web mono page qui renvoie l’affichage de qualité des eaux de Lacanau ainsi que de celle des plages voisines.

Un champ de saisie permet à l’utilisateur d'entrer une valeur de pollution le jour J, une valeur proche de 0 correspondant à une eau polluée tandis qu’une valeur se rapprochant de 100 signifiant une eau propre. Cette valeur entraîne alors l’affichage d’une illustration correspondant au taux de pollution.

Une partie annexe de la page renvoie elle une liste des plages avoisinantes ainsi que leur taux de pollution d’eau respectif.

### **Scénario** <a class="anchor" id="scénario"></a>

L'office de tourisme de Lacanau m'a contacté. Alors que l'été se profile, cette dernière souhaite profiter de son écran pour afficher des données de pollution de l'eau de sa plage locale ainsi que celles des plages des villes avoisinante.
