## Quelques conseils avant de démarrer :

La difficulté est subjective. Lisez bien l'énoncé et regardez bien le résultat attendus. **Prenez connaissance des Div à utiliser (ID et Classes)**, celles-ci sont mentionnés pour chaque Question dans le fichier app.js.
En dehors de l'utilisation du DOM, **il n'est pas nécessaire de modifier le fichier HTML**. Pas besoin **non plus** de créer un fichier CSS.
Il y a plus d'une solution possible, si votre solution fonctionne... elle fonctionne!
Et surtout, amusez-vous!

# Question 1

## User Input

### Objectif :

> Lorsque l'utilisateur entre des charactéres dans le champ input, la répliquer en **majuscule**.

**Ennoncé :**
On souhaite récupérer la valeur de l'input (_id="input-uppercase"_) et répliquer sa valeur dans la balise < p > (_id="input-uppercase-text"_). La valeur doit être répliqué en temps réel.

<details>
  <summary>INDICES</summary>

La valeur de l'input (= texte tapé par l'utilisateur) peut être récupéré en utilisant _.value_ dans votre fichier JavaScript

```javascript
document.getElementById("input-uppercase").value;
```

Il est possible d'utiliser une propriété sur la balise _input_ appelé **oniput** afin d'éxécuter une fonction JavaScript. [Voir Documentation](https://www.w3schools.com/jsref/event_oninput.asp)

```html
<input oninput="maFonctionJavascript()" />
```

</details>

### Difficulté ⭐

# Question 2

## Création d'un menu déroulant

### Objectif :

> Lorque l'utilisateur clique sur "Menu", **afficher le sous-menu**.

**Enoncé :** Par défault, le sous menu (**_id="submenu-challenge"_**) est caché (**_class="hidden"_**). Supprimer ou remplacer cette classe par la classe **flex** (class="flex") lorsque l'utilisateur clique sur Menu (**_id="menu-challenge"_**). **Attention de ne pas supprimer les autres classes** présente dans le sous-menu, au risque de changer le design.

<details>
  <summary>INDICES</summary>

Une fois votre élément (sous-menu) enregistré dans une variable, vous pouvez utiliser **_.classlist.replace_** afin de remplacer une classe par une autre. [Voir Documentation](https://developer.mozilla.org/fr/docs/Web/API/Element/classList)

```javascript
// remplacer la classe "foo" par la classe "bar"
div.classList.replace("foo", "bar");
```

Il existe d'ailleurs d'autres méthodes interessantes: .classList.remove('nomDeLaClasse') pour supprimer une classe, .classList.add("uneNouvelleClasse") pour ajouter une nouvelle classe à celles déjà existantes. [Voir Documentation](https://www.w3schools.com/jsref/prop_element_classlist.asp)

</details>

### Difficulté ⭐⭐⭐

# Question 3

## Création d'un bouton "Switch"

### Objectif :

> Créer un bouton animé, type [Switch](https://developer.apple.com/design/human-interface-guidelines/ios/controls/switches/).

**Enoncé:** Lorsque l'utilisateur clique sur le boutton "Switch" (**id="_btn-circle_"**), la couleur de fond du boutton change en vert (**_let green = "#68d391";_**) et le contenu (**_id="btn-circle-inside"_**) change de place. Par chance, une classe existe déjà afin de déplacer le rond vers la droite! Il _suffit juste_ de rajouter la class "justify-end" à notre btn-circle-inside.

### Difficulté ⭐⭐

# Question 4

## Choix multiples

### Objectif :

> Dans une liste de choix disponible, l'utilisateur peux séléctionner / déséléctionner plusieurs cases.

**Enoncé:** Attention, celui est plus difficile! Pour des raisons obscurs, le webdesigner a fait le choix de ne pas utiliser un input type checkbox. L'utilisateur doit avoir la possibilité de séléctionner un ou plusieurs choix (**_ class="choice"_**) dans le conteneur (**_class="choices_**). Les éléments doivent changer de background color et les bordures doivent êtres supprimés!

**Par chance, il existe déjà deux classes existantes à rajouter pour nous faciliter le travail!** Pour le background rajouter la classe : "bg-purple-500" color et pour la bordure, supprimer la classe "border-2".

### Difficulté ⭐⭐⭐⭐

# Question 5

## Night Mode

### Objectif:

> L'utilisateur peux passer le site en [Dark mode](http://www.leparisien.fr/guide-shopping/le-dark-mode-la-nouvelle-tendance-des-sites-systemes-et-applications-28-10-2019-8181882.php) en appuyant sur le bouton.

**Enoncé:** L'utilisateur est sensible de la rétine. Aidons ses yeux à ne pas fondre sous le #FFFoleil! En appuyant sur le bouton (**_id="night-mode"_**), le site (_body_) doit passer en couleur foncé et le texte en blanc. Deux classes existes pour nous faciliter la tâche! bg-gray-900 & text-white. Il faut les rajouter à la balise _body_ sans modifier le reste des classes déjà en place!

### Difficulté ⭐⭐

# BONUS

## Lecteur Audio

### Objectif:

> L'utilisateur peux lancer / mettre sur pause la musique en appuyant sur le bouton "play"

**Enoncé:** Et si on metais un peu de musique? C'est toujours plus sympa de coder en swingant! Mais dabord, un peu de documention. On introduis ici une nouvelle balise dans notre fichier HTML, [la balise < audio>](https://developer.mozilla.org/fr/docs/Web/HTML/Element/audio) ! Il est tout à fait possible de créer un lecteur audio simple en HTML5, impressionnant, non?

Mais ici c'est du JS sacre bleu! Alors on va controler notre < audio > en passant par du JS. Lorsque l'utilisateur appuie sur le boutton (**_id="play-button"_**), l'élément audio (**_id="audio"_**) doit se déclencher.

**OPTIONNEL - La première étape**, si vous le souhaitez, c'est de trouver une [Musique libre de droit](https://cchound.com/) qui vous correspond un peu mieux. Récupérez le lien de la musique, ou alors téléchargez le fichier correspondant et ajoutez le à un nouveau dossier dans votre Challenge. Sinon, vous pouver utiliser la varible "sound" déjà écrite.

**La deuxième étape**, c'est de déclencher la musique lorsque l'utilisateur appuie sur le bouton Play. Pour ça, il est possible d'utiliser une méthode **.play()** ( [Voir Documentation](https://www.w3schools.com/jsref/dom_obj_audio.asp) ). Mais avant de pouvoir jouer de la musique, n'oubliez pas de définir **quel** fichier audio votre lecteur doit jouer (la source de votre fichier), en utilisant la méthode **.src("lienversvotremusique.mp3")**

**La troisième étape** est de permettre à l'utilisateur de mettre sa musique sur pause! Tout comme l'étape précédente, il existe une méthode **.pause()** pour mettre notre musique en pause.

https://codepen.io/icesofty/pen/KKdGxVo

### Difficulté ⭐⭐⭐⭐
