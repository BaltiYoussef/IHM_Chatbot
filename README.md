# manuel de maintenance du code.

## Index.html

  * <strong> html tag </strong>  
  La page principale est index.html . c'est celle qui a été codée en premier.
  Cette page contient en premier la balise < html lang="fr" > dans laquelle on précise au navigateur le langage qui sera utilisé pour la page html. La langue ici est le     Français.
  
 * <strong> head tag </strong>  
  Ensuite on trouve la balise < head > : La balise < head > contient les métadonnées de la page ( le titre du document, les styles, liens, scripts ), des informations spécifiques sur la page web qui ne sont pas affichées à l'utilisateur , mais qui peuvent étre interessantes pour celui qui dévellope la page.
  On trouve dans notre < head > la balise < title > qui contient le titre de notre page HTML.
  et puis dans un second temps tout les differents liens et scripts qui permettent notre page de s'afficher correctement. exemple : lien vers le fichier css , liens vers   des scripts qui sont necessaires pour le chatbot , etc..
  Une remarque importante si on fait appel à des liens hypertextes externes, il faut que tout les lines commencent par HTTPS , sinon Github va juger que la connexion vers ce lien n'est pas sécurisé et bloquera donc l'accées à la page.
 
  * <strong> body tag </strong>  
   On peut dire que la balise < body > est decoupé en 3 principales partie : 
 1. la premiere partie contient la bare déroulante de la page, et qui represénte le Menu.  Cette bare se trouve déja sur presque toutes les pages de notre site, afin     de faciliter la navigation des utilisateurs dans le site. La bare déroulante a été developé avec du bootstrap , qu'on appelle à l'aide d'un < script > dans la partie  head.
    La bare de menu contient en tout 4 lien hypertextes. Le lien * Page principale qui te permet de revenir sur cette page quand tu es sur une autre page
    Le lien * Aide va te rediriger vers la page aide qui contient des informations sur l'utilisation du site web.
    le lien * Contacts te redirige vers une page dans laquelle on peut trouver un formulaire de contact pour laisser un message au propriétaire du site web.
    le lien * Decawish qui represente le nom du site web et qui est aussi un lien qui te redirige vers la page principale.
    Tout le code pour la bare déroulante se trouve dans la balise < header > < /header > et il y a des commentaires dans le code qui indiquent  lé début et la fin de la partie de code associé à la bare de Menu.
 
   2. la deuxieme partie  contient les 6 articles et toutes les informations qui sont liées aux articles. Pour faire la mise-en page des articles ,on a du faire appel au fichier css du bootstrap. et afin d'afficher les informations liées aux articles ( images , prix , description ) on fait appel à un fichier javascript "affichage_articles.js" qui lui fait appel aussi à un fichier description.json qui contient toutes les informations liées aux articles sous format JSON.
tout le code lié à cette partie se trouve dans la balise < main > < /main >et il y a des commentaires dans le code qui indiquent  lé début et la fin de la partie de code associé à l'affichage des articles.

 3. La troisieme partie est la partie auquellle le projet tourne, il s'agit du chatbot.
Globalement, il y a deux grandes catégories de chatterbots. On différencie les chatbots fonctionnant sur le principe du "pattern matching" (reconnaissance de mots-clés) et les chatbots basés sur le "deep learning" (apprentissage profond).
  Le chatbot que nous avons mis en place fonctionne sur le principe du "pattern matching" seulement. c'est à dire que le chatbot va revevoir un input "le message que l'utilisateur va envoyer" et le chatbot va chercher s'il a une réponse pour le message qu'il a reçu. tout ça est geré dans un fichier qui s'appelle bot.rive dans le dossier brain. Le langage qui est utilisé dans ce fichier s'appelle du [Rivescript](https://www.rivescript.com/docs/tutorial). c'esst un langage de script simple pour les chatbots avec une syntaxe intuitive et facile à apprendre.
  la partie qui contient la balise div class="chat-box , permet de créer la structure du chatbot et fait appel à des fonctions javascripts qui permettent d'envoyer et de recevoir des message au chatbot.  
 la partie script à la fin du code permet d'ouvrir ou réduire la barre de dialogue du chatbot.
  Tout le code pour la partie du chatbot se trouve à la fin du fichier index.html , et il est mentionné avec un commentaire qui indique le début et la fin de sa partie.

## roulette.html
Vous avez surement constaté en ouvrant la page index.html, une deuxieme page s'affiche sous forme de pop-up. il s'agit de la page de roulette.
Cette page s'affiche dés qu'on ouvre la page index.html, grace à une fonction javascript qui déclenche l'affichage de roulette.html. Il s'agit d'une image qui tourne en la cliquant et qui affiche une des 4 pages nommées "cograts" selon le résultat.

## Articles
chacun des 6 articles qui sont affichées sur la page index.html redirige vers la page d'article en cliquant sur acheter. Tout les pages html des articles sont situées dans le dossier articles.

## contact.html
> la page contact est accessible depuis la bare de menu. elle permet à l'utilisateur de contacter l'administrateur de la page en remplissant un  formulaire de contact. La page est décomposée en deux grandes parties, la premiere partie est la bare de contact qui a été expliqué precedement dans la page index.html et la deuxieme partie est le formulaire de contact.
le formulaire est créé avec du bootstrap. le bootstrap nous permet de créer les cases d'input d'une maniere propre et afin d'envoyer des messages à l'admin de la page on a fait recours à un service externe qui s'appelle [formsubmit](https://formsubmit.co/)
Il suffit juste de préciser l'adresse mail auquel on veut envoyer le mail qui contiendra les informations qui seront remplies par l'utilisateur.

 Toutes les pages HTML ( saufs pour les pages d'articles ) sont déposées dans la racine , et les restes des fichiers sont réparties dans des dossiers selon leur types, pour faciliter la maintenance du code en cas d'évolution
