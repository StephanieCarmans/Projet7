
# Kasa - Créez une application web de location immobilière avec React
Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.
------------------

## Le contexte
Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année !

## Les outils
Create React App
React Router Dom
Sass
Pas de librairie React externe

## Les contraintes techniques
### React
Il est impératif d’utiliser ces éléments de React pour un code de qualité :
* Découpage en composants modulaires et réutilisables ;
* Un composant par fichier ;
* Structure logique des différents fichiers ;
* Utilisation des props entre les composants ;
* Utilisation du state dans les composants quand c'est nécessaire ;
* Gestion des événements ;
* Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible.
Il est également recommandé, mais pas imposé, d’utiliser des composants fonctionnels plutôt que des composants classes.

### React Router :
* Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
* Il existe une page par route.
* La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
* La logique du routeur est réunie dans un seul fichier.

### Général :
* Le code ne doit pas produire d'erreur ou de warning dans la console.

 # Mettre en marche le projet
 `npm start`