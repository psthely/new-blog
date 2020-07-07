<img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/1263950/7890b7cbd71284e840eaab3c19ee078674f4a707.png" data-miniprofile="28021301">

# <a href="#html-css" id="html-css">HTML et CSS</a>
- [Introduction, Généralités](#introduction-generalites)
- [Créer une page HTML](#creer-page-html)

## <a href="#introduction-generalites" id="introduction-generalites">Introduction, Généralités</a>

HTML et CSS sont les deux langages interprêtés par le navigateur Web
pour afficher une page Web.

HTML sert à décrire le contenu d'une page Web à l'aide de mots-clés
descriptifs, les [éléments HTML](https://developer.mozilla.org/fr/docs/Web/HTML/Element) :
- **h1** pour titre de premier niveau
- **p** pour paragraphe
- **header**, **nav**, **main**, **aside**, **footer** pour structurer
le contenu
- **br** pour marquer un retour à la ligne
- **div** pour contenu de block générique
- **span** pour contenu en ligne générique

CSS sert à la mise en forme visuelle de la page Web en appliquant des
[propriétés CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Reference#Syntaxe_de_r%C3%A8gle_basique) aux éléments HTML ciblés :
- **color** pour changer la couleur du contenu
- **backround** pour modifier le rendu de fond de l'élément
- **margin**, **padding** pour appliquer des marges intérieurs et
extérieurs aux éléments
- **font** pour modifier le rendu de la police de caractères
- **display** pour modifier le rendu par défaut de l'élément

Les [sélécteurs CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Reference#S%C3%A9lecteurs) permettent de cibler les éléments HTML auxquels
appliquer des propriétés :
- **h1** pour cibler tous les titres de premier niveau de la page Web
- **h1, h2, p** pour appliquer les propriétés aux titres
de niveau 1, niveau 2 et aux paragraphes
- **main p** pour cibler tous les paragraphes à l'intérieur d'un élément
**main**
- **main > p** pour cibler tous les paragraphes directement enfants d'un
élément **main**
- **p[class="paragraphe"]** pour cibler tous les paragraphes qui possèdent
la propriété **class** dont la valeur est **paragraphe**
- **.paragraphe** pour cibler tous les éléments qui possèdent l'attribut
**class** dont la valeur est **paragraphe**
- **p::first-letter** pour cibler chaque première lettre des paragraphes
de la page Web

> **NB** <br/>
Vous n'avez pas à connaître chaque propriétés ou sélecteurs CSS, ni chaque
balise HTML pour créer une page Web. En effet, avant de parcourir la
documentation pour trouver le bon sélecteur, propriété CSS ou balise
HTML, demandez-vous ce qui serait le plus commode, de façon intuitive.
Quelqu'un à probablement déjà rencontré le même problème et trouvé ou
apporté une solution.<br/>
**Si vous ne trouvez pas de solution facilement,
c'est que vous n'avez pas bien défini le problème**.

---
[Haut de page](#html-css)

## <a href="#creer-page-html" id="creer-page-html">Créer une page HTML</a>

Créer et déclarer une page index.html :
```cmd
mkdir html-css; cd html-css;
echo '<!doctype html><html><head></head><body></body></html>' > index.html
```

Modifier le code source avec [Nano](http://doc.ubuntu-fr.org/nano)... :
```cmd
nano index.html
```
... ou [VSCode](https://code.visualstudio.com/) :
```cmd
code index.html
```

Par exemple :
```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Lorem Ipsum</title>
</head>
<body>
    <article>
        <header>
            <h1>Lorem Ipsum</h1>
            <h2>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h2>
            <label>Publié le </label>
            <time datetime="2020-07-05">5 juillet 2020</time>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis porttitor sollicitudin. Vivamus tincidunt sagittis dapibus. Vestibulum malesuada eget elit et vehicula. Morbi gravida massa in nisl sollicitudin dictum. Cras pulvinar mauris mauris, semper maximus felis suscipit vel. Nulla facilisi. Phasellus quis erat vitae nisl facilisis interdum.</p>
        <p>Donec felis sapien, luctus at risus eget, ullamcorper molestie libero. Donec ut erat vel enim euismod finibus ac et nisi. Nullam suscipit laoreet ligula ac volutpat. Proin nec sodales purus. Ut tincidunt leo urna, vitae condimentum odio ultricies ac. Morbi sit amet maximus turpis. Phasellus eleifend tellus ac fringilla consequat. Phasellus erat arcu, porta eu ligula in, iaculis placerat turpis. Maecenas quis finibus dui, vel blandit dolor.</p>
        <footer><a href="https://fr.lipsum.com/">fr.lipsum.com</a></footer>
    </article>
</body>
</html>
```

---
[Haut de page](#html-css)

