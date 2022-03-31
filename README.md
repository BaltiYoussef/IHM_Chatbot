# manuel de maintenance du code.

## Index.html

  * <strong> html tag </strong>  
  La page principale est index.html . c'est celle qui a été codée en premier.
  Cette page contient en premier la balise <html lang="fr"> dans laquelle on précise au navigateur le langage qui sera utilisé pour la page html. La langue ici est le     Français.
  
 * <strong> head tag </strong>  
  Ensuite on trouve la balise <head> : La balise <head> contient les métadonnées de la page ( le titre du document, les styles, liens, scripts ), des informations         spécifiques sur la page web qui ne sont pas affichées à l'utilisateur , mais qui peuvent étre interessantes pour celui qui dévellope la page.
  On trouve dans notre <head> la balise <title> qui contient le titre de notre page HTML.
  et puis dans un second temps tout les differents liens et scripts qui permettent notre page de s'afficher correctement. exemple : lien vers le fichier css , liens vers   des scripts qui sont necessaires pour le chatbot , etc..
  Une remarque importante si on fait appel à des liens hypertextes externes, il faut que tout les lines commencent par HTTPS , sinon Github va juger que la connexion vers ce lien n'est pas sécurisé et bloquera donc l'accées à la page.
 
  * <strong> body tag </strong>  
   On peut dire que la balise <body> est decoupé en 3 principales partie : 
 1. la premiere partie contient la bare déroulante de la page, et qui represénte le Menu.  Cette bare se trouve déja sur presque toutes les pages de notre site, afin     de faciliter la navigation des utilisateurs dans le site. La bare déroulante a été developé avec du bootstrap , qu'on appelle à l'aide d'un <script> dans la partie    head.
    La bare de menu contient en tout 4 lien hypertextes. Le lien * Page principale qui te permet de revenir sur cette page quand tu es sur une autre page
    Le lien * Aide va te rediriger vers la page aide qui contient des informations sur l'utilisation du site web.
    le lien * Contacts te redirige vers une page dans laquelle on peut trouver un formulaire de contact pour laisser un message au propriétaire du site web.
    le lien * Decawish qui represente le nom du site web et qui est aussi un lien qui te redirige vers la page principale.
    Tout le code pour la bare déroulante se trouve dans la balise <header> </header>
 
   2. la deuxieme partie  contient les 6 articles et toutes les informations qui sont liées aux articles. Pour faire la mise-en page des articles ,on a du faire appel au fichier css du bootstrap. et afin d'afficher les informations liées aux articles ( images , prix , description ) on fait appel à un fichier javascript "affichage_articles.js" qui lui fait appel aussi à un fichier description.json qui contient toutes les informations liées aux articles sous format JSON.
tout le code lié à cette partie se trouve dans la balise <main> </main>

 3. La troisieme partie est la partie sur lauquelle le projet tourne, il s'agit du chatbot.
Globalement, il y a deux grandes catégories de chatterbots. On différencie les chatbots fonctionnant sur le principe du "pattern matching" (reconnaissance de mots-clés) et les chatbots basés sur le "deep learning" (apprentissage profond).
  Le chatbot que nous avons mis en place fonctionne sur le principe du "pattern matching" seulement. c'est à dire que le chatbot va revevoir un input "le message que l'utilisateur va envoyer" et le chatbot va chercher s'il a une réponse pour le message qu'il a reçu. tout ça est geré dans un fichier qui s'appelle bot.rive dans le dossier brain. 


 
