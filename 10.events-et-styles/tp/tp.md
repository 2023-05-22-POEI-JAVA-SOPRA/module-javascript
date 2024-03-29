**Exercice: Remplacement Aléatoire d'Éléments dans un Tableau**

**Objectif:**
Mettre en place un bouton "Aléatoire" qui, lorsqu'il est cliqué, remplace aléatoirement tous les éléments d'une liste de technologies. Si la nouvelle valeur est différente de l'ancienne, appliquer un style pour indiquer le changement.

**Instructions:**

1. Créez un bouton avec l'étiquette "Aléatoire" sous la liste des technologies donnée.
2. Lorsque le bouton "Aléatoire" est cliqué, générez aléatoirement une nouvelle valeur pour chaque élément de la liste.
3. Si la nouvelle valeur est différente de la précédente, appliquez un style pour indiquer que la valeur de l'élément a changé.
4. Assurez-vous qu'une valeur déjà utilisée lors d'un clic précédent sur le bouton "Aléatoire" ne peut pas être réutilisée.
<!-- 5. Afficher les anciennes et nouvelles valeurs dans une sidebar/tooltip au survol des éléments modifiés -->

**Liste de Technologies:**

```javascript
const frameworks = [
  "Nest.js",
  "Spring",
  "Asp Dotnet Core",
  "Ruby On Rails",
  "Node.js & Express",
  "Angular",
  "Symfony",
  "Laravel",
  "Django",
  "Javascript",
  "Express.js",
  "Meteor",
  "PostgreSQL",
  "HTML",
  "CSS",
  "React.js & Redux",
  "Mongo DB",
];
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Cours Javascript</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This is the best Javascript DOM manipulation cours Ever.</p>
    <p>This cours will help you master the DOM API and become a DOM Ninja.</p>
    <h2>Topics</h2>
    <ul class="technos">
      <li class="techno">HTML</li>
      <li class="techno">CSS</li>
      <li class="techno">Javascript</li>
      <li class="techno">React.js & Redux</li>
      <li class="techno">Node.js & Express</li>
      <li class="techno">Nest.js</li>
      <li class="techno">PostgreSQL</li>
      <li class="techno">Mongo DB</li>
    </ul>
    <script src="app.js"></script>
  </body>
</html>
```

**Instructions Supplémentaires:**

- Utilisez des événements JavaScript pour détecter le clic sur le bouton "Aléatoire".
- Vous pouvez utiliser des méthodes de manipulation du DOM (Document Object Model) pour mettre en place les changements visuels.
- Gardez une trace des valeurs déjà utilisées pour éviter les répétitions.
- N'oubliez pas de considérer les changements de styles pour les éléments modifiés.

**Conseils:**

- Utilisez la méthode `Math.random()` pour générer des indices aléatoires dans le tableau.
- Utilisez une structure conditionnelle pour vérifier si la nouvelle valeur est différente de l'ancienne avant d'appliquer des changements visuels.

**Bonus**

- Ajouter un compteur qui affiche le nombre de changements effectués à chaque clic sur le bouton “Aléatoire”
- Permettre à l’utilisateur de fournir sa propre liste personnalisée à modifier avec des entrés prompt et qui vont ensuite s’ajouter dans le tableau
