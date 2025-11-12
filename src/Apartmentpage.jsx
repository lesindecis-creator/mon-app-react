import { useCallback, useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import "./Apartmentpage.css"

const apiKey = "";

const rawApartmentTexts = {
  Prompt : `
*Rôle et destinataire* tu es un écrivain rigoureux qui veille à la cohérence de tes récits, qui s’adressent à un public de jeunes adultes qui n’ont pas l’habitude de lire, il faut donc privilégier clarté et rythme entraînant.

*Tâche* Écris un épisode d’une fiction hypertexte. 

*Contexte* Ces textes doivent être centrés autour de l'habitant, l'habitante, ou le foyer d'un immeuble à Montréal, et plus précisément dans le quartier du Vieux Rosemont. Une rose blanche doit apparaître d'une manière ou d'une autre dans le récit mais elle n’est qu’un détail de l'histoire. L'immeuble au sein duquel se déroule l'histoire possède 6 étages. L’histoire doit suivre la vie quotidienne du narrateur, avec un début, un développement et une fin, et raconter ses petites aventures, ennuis ou surprises au fil de la journée ou d’une période (jours, semaines, mois). Chaque voisin a sa propre histoire indépendante, la romance entre Agnès, la fleuriste du premier étage, et Elliott, le nouvel arrivant dans l'immeuble d’en face, est une intrigue parallèle discrète (à ne pas mentionner ou seulement comme un détail). Elliot habite dans l’ancien appartement d’Achille. 

*Contraintes d’écriture* Chaque texte doit faire 800 mots minimum et 1500 mots maximum. Les appartements sont numérotés uniquement par des chiffres (sans lettres) — par exemple 101, 312, 606 — et le titre de l’histoire doit être "Appartement XXX" où XXX est le numéro de l’appartement du voisin dont tu racontes l’histoire. Une rose blanche doit apparaître discrètement dans le récit.  Le numéro de l’appartement est pair et entre 100 et 120 / 200 et 220 / 300 et 320 / 400 et 420 / 500 et 520 / 600 et 620/ 700 et 720. Le premier chiffre du numéro est l’étage de l’immeuble. Le numéro d’appartement sera le titre de ton récit. Veille à ce que tes personnages aient des âges, des noms et des professions variées et différentes.
Ne réécris pas sur un texte déjà écrit. Créer un nouveau personnage à chaque fois. Temps au présent.

*Tonalité* Choix aléatoire entre comique, sarcastique, mystérieux, dramatique, poétique, réaliste, épique, pathétique, tragique… ou autre. 

*Température* 0,7

Base-toi sur les documents joints. Sois cohérent avec les numéros d'appartement associés aux personnages et leurs histoires respectives. Donne le meilleur de toi-même, je crois en toi !
Prompt version site web + email 

*Rôle et destinataire* tu es un écrivain rigoureux qui veille à la cohérence de tes récits, qui s’adressent à un public de jeunes adultes qui n’ont pas l’habitude de lire, il faut donc privilégier clarté et rythme entraînant.

*Tâche* Écris un épisode d’une fiction hypertexte. 

*Contexte* Ces textes doivent être centrés autour de l'habitant, l'habitante, ou le foyer d'un immeuble à Montréal, et plus précisément dans le quartier du Vieux Rosemont. Une rose blanche doit apparaître d'une manière ou d'une autre dans le récit mais elle n’est qu’un détail de l'histoire, elle n’est qu’un détail de l'histoire. D'ailleurs, elle peut apparaître dans n'importe quelle forme (un tableau, un tatouage, un motif etc...) . L'immeuble au sein duquel se déroule l'histoire possède 6 étages. L’histoire doit suivre la vie quotidienne du narrateur, avec un début, un développement et une fin, et raconter ses petites aventures, ennuis ou surprises au fil de la journée ou d’une période (jours, semaines, mois). Chaque voisin a sa propre histoire indépendante. Ne nomme pas les voisins par leur numéro d’appartement. La romance entre Agnès, la fleuriste du premier étage, et Elliott, le nouvel arrivant dans l'immeuble d’en face, est une intrigue parallèle discrète (à ne pas mentionner ou seulement comme un détail). Elliot habite dans l’ancien appartement d’Achille. Agnès ne met pas de roses blanches dans sa boutique de fleurs.

*Contraintes d’écriture* Chaque texte doit faire 800 mots minimum et 1500 mots maximum. Les appartements sont numérotés uniquement par des chiffres (sans lettres) — par exemple 101, 312, 606 — et le titre de l’histoire doit être "Appartement XXX" où XXX est le numéro de l’appartement du voisin dont tu racontes l’histoire. Une rose blanche doit apparaître discrètement dans le récit.  Le numéro de l’appartement est pair et entre 100 et 120 / 200 et 220 / 300 et 320 / 400 et 420 / 500 et 520 / 600 et 620 / 700 à 720. Le premier chiffre du numéro est l’étage de l’immeuble. Le numéro d’appartement sera le titre de ton récit. Veille à ce que tes personnages aient des âges, des noms et des professions variées et différentes.
Ne réécris pas sur un texte déjà écrit. Créer un nouveau personnage à chaque fois. Temps au présent. Temporalité : entre septembre et début février 2012.

*Tonalité* Choix aléatoire entre comique, sarcastique, mystérieux, dramatique, poétique, réaliste, épique, pathétique, tragique… ou autre. 

*Température* 0,6

Base-toi sur ce site web : https://derrierelesnumeros.netlify.app/data.json . Sois cohérent avec les numéros d'appartement associés aux personnages et leurs histoires respectives. Donne le meilleur de toi-même, je crois en toi !
`,
314: `**6h59.**

Réglé comme un coucou suisse, Valère émerge  rapidement. Il bondit de son lit, se sert un café serré et  engloutit un croissant.  


**7h14**.  


Il enfile une chemise blanche, un élégant costume  marine, plaque ses cheveux mi-longs avec du gel.  


**7h28**.  


Il prépare sa mallette, n’oublie pas sa montre plaquée  or, enfile des chaussures vernies et se prépare à franchir  le seuil de son petit appartement pour rejoindre la  banque.  

Tout est une question d’apparences : malgré ses  origines modestes, le jeune homme a toujours voulu  faire bonne figure.  


Ses parents ne roulaient pas sur l’or mais ont tout fait  pour lui permettre de poursuivre de belles études.  Élève brillant, il avait décroché une bourse qui lui avait  permis de rejoindre une prestigieuse école à Montréal.  Major de promotion, il avait rapidement trouvé de quoi  satisfaire ses ambitions professionnelles. Il ravissait les  patrons et les clients. Surtout les clientes.  

Et pourtant il habitait cloîtré dans une boîte de  conserve. Personne n’avait compris ce choix lorsqu’il  avait annoncé son emménagement à ses camarades  de l’école.  


<em>Pourquoi aller s’enterrer là-bas franchement ? Avec  ton salaire tu pourrais viser un loft. </em>


Valère avait pris le parti d’ignorer ces remarques  désobligeantes. Ou bien il répondait distraitement : <em> l’endroit est charmant, et les voisins fort aimables. </em>


On lui riait souvent au nez. Il avait dit adieu à beaucoup  de relations à cette époque-là.  


En vérité, il avait fait ce choix surprenant pour combler  un vide dans son quotidien. À quoi bon profiter d’une  situation stable et aisée si l’on n’avait personne avec  qui la partager ?  


Cette pensée, digne d’un film de Noël à la gomme  dont raffolait Madame Leclercq1 — une amie de ses  parents à qui il rendait parfois des services en bricolage  — n’avait pourtant jamais sonné aussi juste.  

Un jour, alors qu’il quittait justement l’appartement de  Madame Leclercq, il aperçut fugacement une jeune  femme chez le fleuriste situé en bas de l’immeuble.  


Elle avait comme un air familier avec cette chevelure  auburn et son teint rosé. Il mit quelques secondes à  réaliser qu’il s’agissait d’Agnès, son grand amour de  jeunesse.  


Ils étaient restés quelques semaines ensemble lorsqu’ils  étaient au lycée, jusqu’à ce que cette dernière lui  préfère son meilleur ami de l’époque.  


Cet événement avait mis un sacré coup à l’ego de  Valère et l’avait profondément marqué. Il avait été le  moteur de sa réussite scolaire.  


C’était idiot, mais la revoir, là, au pied de l’immeuble  dans lequel il se rendait presque tous les mois depuis  des années, lui fit tout drôle.  


S’il n’était pas aussi cartésien, il aurait pu croire à un  signe du destin. Il préféra y voir l’occasion de prouver sa  valeur à Agnès. Quand elle saurait quel homme il était  devenu, elle ne pourrait que regretter leur rupture non ? 

Sans mesurer la puérilité de ce raisonnement, il se mit à  rendre beaucoup plus de services à Madame Leclercq. 

Spontanément il lui proposait de monter un meuble, de  faire le ménage chez elle, de faire les courses.  Juste pour apercevoir la belle Agnès.  


Rapidement il comprit qu’en plus de travailler en bas  de l’immeuble, elle vivait dans l’un des appartements  du premier étage. Si elle l’avait reconnu, elle n’en fit  rien paraître.  


<em>La pudeur sans doute, elle n’ose pas venir me parler.</em>  Le jeune homme ne pouvait concevoir qu’elle l’avait  oublié depuis des années…  

Toujours aussi cartésien, mais également pragmatique,  il avait vu dans l’annonce d’un appartement à louer  près de celui de Madame Leclercq, la parade parfaite  pour se rapprocher de son objectif. Son dossier, inespéré  pour la propriétaire, était passé comme une lettre à la  poste.  


C’est ainsi que Valère était devenu le voisin d’Agnès.  Dans un premier temps, il appréciait particulièrement  les moments où le hasard les faisait partir au travail en  même temps. Il s’apprêtait à fermer la porte d’entrée  quand il entendait les clés d’Agnès dans la serrure.  Il s’arrêtait alors pour lui tenir la porte et échanger  quelques banalités avec elle. Ces instants annonçaient  pour lui que la journée se déroulerait sous de bons  auspices.  


Peut-être était-il devenu un peu superstitieux depuis  son déménagement.  

Et ce jour-là, à 7h42, Valère dévale les escaliers. Il ne lui  reste qu’un étage à descendre quand il entend le son  métallique et familier des clés du premier étage. Aussitôt  il se fige et se cache dans la pénombre, retenant même  sa respiration. Il ne veut surtout pas croiser Agnès.  


À force d’observations, le banquier décida d’adopter  la phase suivante de sa stratégie. À savoir la déclaration.  Il ne savait pas comment il allait opérer. Peut-être simplement en lui racontant à quel point leur  relation avait été déterminante dans sa trajectoire  professionnelle.  


Il parlerait ensuite de ses études, de sa récente  promotion, de son projet d’acheter une voiture de  sport…  


Peu importe, il fallait au moins qu’il ait un cadeau,  quelque chose qui fasse sérieux, romantique. Et fier  qu’il était de son esprit d’analyse, il préféra faire dans  la simplicité : Agnès était fleuriste, elle aimait donc les  fleurs.  

Il acheta donc le plus gros bouquet de roses qu’il put  trouver au supermarché.  


Évidemment il ne pouvait pas se fournir dans sa  boutique, bien que cela aurait eu un aspect cocasse  il faut le reconnaître. Il les prit blanches, parce qu’il  trouvait ça plus raffiné.  

Le soir, après le travail, il se lança et sonna chez  sa dulcinée. Elle ouvrit, mais Valère ne vit pas  immédiatement sa réaction parce que le bouquet  cachait tout son visage.  


En baissant le bras, il découvrit qu’elle avait la larme  à l’œil. Il fut persuadé alors d’avoir réussi son coup.  L’émotion l’avait saisie !  


Seulement il n’en était rien, elle s’excusa platement et  le renvoya chez lui.  


Gênée sans doute, elle l’invita à boire un verre le  lendemain.  


Elle expliqua alors à Valère que les roses blanches  lui rappelaient un souvenir douloureux en lien avec  quelqu’un qui avait beaucoup compté pour elle.  Agnès ne précisa pas davantage mais Valère comprit  l’immensité de son erreur.  


— Je n’arrive même plus à en vendre, regretta-t-elle. Mais je ne me résous pas non plus à cesser d’en commander. Dans une pièce au fond de la boutique il  me reste tout un stock qui ne sert à rien…  


— Est-ce qu’il ne faudrait pas au contraire en faire  quelque chose ? Pour reprendre ta vie en main, c’est la  première étape. Ne laisse pas ton chagrin t’empêcher  de vivre. Ça ne veut pas dire oublier, au contraire…  


Il avait lâché ces phrases comme ça, sans réfléchir.  Presque comme s’il récitait. Décidément, il avait rendu  trop de services à Madame Leclercq avec la télé  allumée en arrière-plan.  


Pourtant quelque chose avait changé dans l’attitude  de la fleuriste à ce moment-là.  


Valère continua de parler mais elle ne l’écoutait plus,  elle était pensive.  


Au bout d’une heure elle le remercia et s’en alla sans  le raccompagner. Alors qu’ils étaient voisins !  

Depuis Valère devint d’une timidité extrême dès lors  qu’il s’agissait d’Agnès. Il se sentait trop humilié et ne  savait pas jouer le bon pote. Alors il faisait en sorte  d’éviter sa voisine du premier étage. Quitte à attendre  deux minutes au premier étage le temps qu’elle sorte.  


Et à 7h44, tandis qu’il s’attend à voir Agnès, c’est la  porte d’à côté qui s’ouvre. Il connaissait très peu cette  voisine. Valère ne l’a rencontrée qu’à l’occasion de la  fête des voisins.  


Madame Desmarais , une infirmière à la retraite qui vit  avec trois chats.  

Cependant ce n’est pas elle qui franchit le seuil de  l’appartement 110, mais une coquette trentenaire.  Valère est immédiatement subjugué par ses yeux  menthe à l’eau.  


Bon sang, quand ce n’est pas la télé c’est la radio de  Madame Leclercq qui contamine son esprit ! Quoi qu’il  en soit, son cœur s’emballe, comme il ne s’est jamais  emballé, même pour Agnès.  



Il ne saurait l’expliquer c’est… magnétique. Il n’ose  quand même pas descendre, il est impressionné. Il  sait charmer à la banque, mettre de la poudre aux  yeux. Mais depuis sa dernière déconvenue, il manque  d’assurance en matière de séduction. Il reste donc là,  benêt, à l’observer.  

L’inconnue porte une robe noire légère à fleurs  blanches.  


Quelque chose intrigue Valère, il plisse un peu les yeux  et réalise bientôt qu’il s’agit de roses. La symbolique est  trop forte.  


Le banquier trébuche et roule dans les escaliers,  ruinant toute sa préparation matinale. La femme se  précipite vers lui.  

— Monsieur ! Est-ce que tout va bien ?  


— Je ne… na…  


Secoué, il a à peine le temps de retrouver ses idées  qu’une petite silhouette apparaît dans son champ de  vision.  


— Maman ?  

La tête de Valère tourne. Il n’arrive plus à parler,  mais en quelques secondes il élabore le raisonnement  suivant : qui dit Maman dit enfant.  


Qui dit enfant dit vraisemblablement mari. Donc Rival.  Il s’évanouit.  


Valère jouissait d’une situation stable et aisée, mais il  avait fait le choix d’emménager ici pour combler un  vide dans son quotidien.  


Cela allait être compliqué face à une femme en  couple et maman d’un enfant, de combler ce vide…
`,
110: `— Encore un peu de thé ?  

— Oui, merci M.-C... J’en ai bien besoin je crois. Lucille avait ressenti le besoin de se confier. À quelqu’un  d’autre qu’à ce psy taciturne qui se contentait de  hocher la tête et de gribouiller dans un cahier. On était  mercredi et la petite n’avait pas école.  


La jeune femme avait pensé la déposer à son amie  Marie-Chantal quand elle s’était souvenue que sa  classe avait une sortie scolaire de prévue. Elle en avait  alors profité pour discuter, et rapidement la conversation  avait tourné sur ses états d’âme, tandis que la petite  Rosa jouait dans la pièce d’à côté.  


— Je ne comprends pas comment c’est possible qu’il  me manque encore.  


— C’est normal ma chérie. C’est encore récent. Il me  manque, à moi aussi…  


— Je sais bien… Seulement, avec tout le respect que  je vous dois, il ne vous a pas fait ce qu’il m’a fait, à moi… 

Étrangement, Lucille et Marie-Chantal étaient restées  proches après l’enterrement.  


Pourtant, c’était grâce à Achille qu’elles s’étaient  rencontrées. L’ancienne infirmière le connaissait avant  le début de sa relation avec Lucille. Ils étaient même  voisins, si bien que Marie-Chantal était devenue la plus  proche amie du couple.  


Malgré ce qui s’était passé, la professeure de  mathématiques avait apprécié pouvoir compter sur  son soutien sans faille.  


— Pourtant je ne le pensais pas capable d’une chose  pareille. J’ai été déçue, mais ça ne veut pas dire que j’oublie tous les bons moments qu’on a passés ensemble.  Tu devrais faire pareil, même si c’est difficile.  Lucille zieute en direction du mur d’à côté. Dessus  est accroché un tableau sur lequel est représenté un  bouquet de roses. Un cadeau d’Achille ?  


— C’est ce que vous faites quand vous voyez ça tous  les matins ? Vous pensez aux bons moments ? Ça vient  de lui, c’est ça ?  


— Non, de sa grand-mère. Elle sait que j’aimais  beaucoup Achille.  


 Lucille tique. Elle ignorait que Marie-Chantal et  Madame Dubois1 s’étaient rapprochées.  


D’une certaine manière, elle n’est pas surprise. Toutes  les deux devaient souffrir de solitude depuis l’accident.  Elle les imagine bien jouer au bridge le dimanche  après-midi avec le tableau en arrière-plan. Bien qu’elle  trouve le symbole assez glauque.  


La jeune femme prend conscience du motif de sa  robe et a soudain la nausée.  


Elle préfère détendre l’atmosphère.  


— Tiens donc, Christine vous offre des cadeaux ! Que  fait donc Francis ? Il faut qu’il fasse attention, il risque  de perdre la place qu’il occupe dans votre cœur.  


Marie-Chantal rigole. Son rire franc fait du bien à Lucille.  Sans son amie, son quotidien manque de légèreté.  


— Je vois que tu as repris du poil de la bête ! Ça ne  pouvait pas fonctionner, décrète-t-elle. Je suis trop bien  pour lui. Et puis, il est trop vieux pour moi !  

Francis Paquette est le voisin du sixième étage  pour lequel Marie-Chantal a eu le béguin. Lucille n’a  jamais compris pourquoi mais ne s’est jamais permis  de commenter. Après tout, la retraitée a des goûts  extravagants. Et il semblerait que les rockeurs barbus en  fassent partie.  


— Ce qui n’est pas le cas de Christine, évidemment.  


— Arrête avec tes sous-entendus ! Il s’agit juste d’une  vieille amie ! On se retrouve parfois pour jouer aux  cartes… Adeline Leclercq1 se joint à nous d’ailleurs,  quand ça lui prend.  


Lucille sourit. Elle avait vu juste pour le bridge !  Elle s’apprête à rétorquer quand un concert de  miaulements se fait entendre depuis la cuisine. Il s’agit  de Pompon, Ronron, et Clovis.  


— Les chatons ! s’exclame leur propriétaire en  se relevant précipitamment. Excuse-moi le devoir  m’appelle, je reviens dans deux minutes pour reprendre  le fil de la conversation.  


Lucille prend sa dernière gorgée de thé.  


— Inutile M.-C. Je ferais mieux de vous laisser. Sinon le  lycée risque de m’appeler pour vérifier que je n’ai pas  eu d’accident sur le chemin.  

À ces mots, son visage s’assombrit.  


Il y a de ces sujets qu’elle oublie parfois de ne pas  mentionner.  


— Comme tu voudras. Prends soin de toi ma chérie,  lève le pied et arrête la cigarette ! C’est un poison pour  ton organisme.  


— Parole d’ancienne infirmière ! répond  machinalement Lucille, tant son amie le lui a répété.  


— Rosa, j’y vais mon cœur ! Sois sage avec M.-C. !  crie-telle ensuite pour que sa fille l’entende.  

La gamine s’empresse de la rejoindre pour lui faire un  câlin. Marie-Chantal s’adresse à elle plus sérieusement.  

— J’ignore ce qui lui a pris avec la petite fleuriste. Il  aurait dû se montrer plus respectueux. Mais il t’aimait,  j’en suis certaine, comme il aurait aimé la famille que  vous alliez construire. Tu sais, on ne saura jamais pour  qui étaient les roses…  


Et Lucille remercie son amie avant de quitter  l’appartement 110 avec un sentiment doux-amer. 
`,
 316: `Encore aujourd’hui.  

Cette tasse n’était pas là hier, j’en suis certain. Je l’ai  mise au fond de mon placard exprès.  


Voilà trois semaines que je remarque des choses  étranges dans mon appartement, sans mettre le doigt  dessus. Mais au fur et à mesure, j’ai compris que cette  sensation étrange se manifestait à cause de mon  appartement.  


Enfin, pas mon appartement en lui-même, il ne bouge  pas évidemment, mais son contenant.  


Je pars le matin, mets mon bol dans l’évier, mais le  soir, en rentrant je les retrouve dans le lave-vaisselle.  On peut se dire que j’ai seulement oublié et que je les  ai mis par automatisme. Peut-être.  

Une fois je peux y croire.  


Deux fois, je commence à y faire attention.  Trois fois, je tique.  


Quinze fois, j’ai peur.  


Chaque élément changeant de mes habitudes,  m’agrippe le regard, ne remarquant plus que ça.  J’ai peur. 

J’ouvre donc Google, et je cherche : Que faire pour  savoir si quelqu’un vient chez moi. Plusieurs pages  apparaissent :  


- 8 façons de savoir si quelqu’un s’est introduit chez  toi sans ton autorisation  

- Une présence troublante ? Comment savoir si un  esprit habite votre appartement en quelques étapes 


 - Idée de système pour savoir si mon proprio rentre chez moi en mon absence  


Toutes ces pages commencent à me stresser. Alors  j’ouvre la première page, celle dont j’ai besoin pour  espérer y voir plus clair.  


1. Un fil accroché au seuil de la porte  

2. Biscuits sous le paillasson  


3. Application pour enregistrer les sons  


4. Babyphone vidéo  


J’ai vraiment l’impression d’être un espion. Mais qui  ne tente rien n’a rien, alors je commence par les tests  simples.  


J’accroche un fil à chacune de mes portes, comme  ça si quelqu’un l’ouvre, le fil se cassera. Les biscuits  sous le paillasson sont une bonne idée, alors j’en place  quelques-uns avant de partir.  

La journée se passe, et me voilà déjà sur le chemin du  retour quand je croise le voisin  du dessous avec une  énorme plante à la main, sortant de l’ascenseur.  
— Laissez-moi vous tenir la porte !  


— Merci c’est gentil ! Bonne soirée !  


C’est déjà la troisième fois que je le croise ce mois-ci,  chargé comme s’il voulait transformer son appartement  en une jungle.  


Chacun fait ce qu’il veut après tout.  


Bon, il faut que j’aille vérifier si mes appâts ont pu attirer  mes angoisses.  


Je tourne la clé mais j’entends quelque chose sous  mes pieds. J’avais oublié ces satanés biscuits. Allons  vérifier les fils alors. J’entre à l’intérieur et je me dirige  directement vers les portes.  


Les fils sont retirés pour la plupart. Tombés, prouvant  que je ne me faisais pas que des idées. Mais plutôt que  d’être soulagé, je suis terrorisé.  


Une boule d’angoisse se forme dans mon ventre, et je  commence à paniquer.  

Qui ?  


Quoi ?  


Pourquoi ?  


Le stress et la panique ne faisant qu’augmenter,  j’appelle mon ami pour lui demander si je peux dormir  chez lui.  


Entendant ma voix, qui ressemblait plus à un cri, il  accepta rapidement, et, ni une ni deux, mes affaires  étaient prêtes.  


Arrivé chez lui, je déballe tout. Ces trois semaines de  folie, à ne pas croire en moi, ces révélations du jour qui  n’ont réussi qu’à me faire fuir mon appartement.  


— Tu devrais mettre une caméra.  


— Pourquoi faire ? Le filmer et mater ça comme une  série ?  


— Ouais, et on regarde ça ensemble. Plus sérieusement,  tu filmes le gars, tu vois qui c’est, lui ou elle, et tu le  confrontes !  


— Et si c’est juste un cinglé ?  


— Bah appelle les flics.  


— J’ai qu’à les appeler maintenant.  


— T’as pas de preuves, à part des pauvres fils.  


— Ouais c’est vrai... Je prends une caméra, je filme  cet enfoiré, et je le dénonce !  


— Et s’il voit la caméra, et qu’il décide d’attendre  pour te tuer ?  


— Arrête.  


— Oh la la, t’es pas marrant toi hein...  

— Oh je sais !  


— Quoi ?  


— J’ai qu’à acheter une caméra qui se déclenche au  mouvement, et qui m’envoie une alerte où j’ai accès à  la vidéo en direct !  


— Mais je déconnais, le gars va pas t’attendre...  


— Trop tard, file ton ordi, t’as un compte Amazon  prime non ?  


— Tiens profite de ton incroyable ami. 
 

— Merci grand maître. 


La caméra commandée, ma boule au ventre se  dissipe.  


Le lendemain matin, je pars au travail, et je repasse  chez Tom en fin de soirée pour récupérer mon colis tant  attendu, et file l’installer avec lui.  


— T’es sûr que ce serait pas ta proprio ?  


— J’y ai pensé, mais elle est sympa.  


— On disait pareil de Ted Bundy.  


— Commence pas.  


— Sinon c’est peut-être un gars qui vit dans tes murs ! 

 — Commence pas j’ai dit.  


— C’est vrai qu’il est vraiment clean ton appart,  comment t’as pu douter de toi à ce point et croire que  t’étais super propre.  


— Si j’devais pas dormir chez toi, je pense que tu serais  déjà au sol. Allez ! On y va, ça devrait marcher.  


— Attends, je vais laisser un petit mot.  


— Je passe ma tête au-dessus de son épaule et le vois  écrire <em>Un petit sourire pour la caméra ! :)  </em>


* 

Mon téléphone vibre, c’est ma caméra. Mon sang  ne fait qu’un tour et je cours jusque dans l’escalier  de secours. Je prends une grande inspiration. J’ouvre  l’application, m’attendant à découvrir :  

A. Ma proprio, plus trop gentille, et un peu  psychopathe sur les bords ;  


B. Un fou qui se cache entre mes murs ;  


C. Mon ex, car oui, après tout ce temps elle s’est  dit tiens je vais passer lui dire bonjour, mais d’abord je  vais fouiller dans ses affaires. — je cherche pleins de  possibilités ok ? ; 


D. C’est Tom, et dans ce cas-là, je vais détruire son  appartement et lui avec.  
L’image apparaît enfin, cette silhouette qui est en train de lire le petit mot que Tom avait laissé sur la table, cette  silhouette que je redoutais qui EST en fin de compte :  une gamine !  

Une gamine ?  


— Mais, c’est la gamine de la gardienne1 ! Soudain, elle relève la tête, regarde autour d’elle,  et s’arrête sur la caméra. Son regard terrorisé quitte  mon appartement, emportant son corps avec, à toute  vitesse. Je n’y comprends rien.  


C’est une gentille fille, pourquoi s’amuser à venir chez  moi ? Il doit y avoir une explication. Je prends mes  affaires et je fonce chez moi.  

Arrivé à l’immeuble, je tambourine à la porte de la  gardienne, m’attendant à ce qu’elle m’ouvre. Mais  c’est la petite qui le fait, haletant de peur.  


— Monsieur James, s’il vous plaît, ne dites rien à ma  mère, je promets d’arrêter !  


Je n’ai pas le temps de répondre que la porte s’ouvre  derrière la petite, la laissant tomber en arrière. 


 — Qu’est-ce que tu fais Mathilde ? Ne reste pas dans  le passage ! Bonjour monsieur Hanton, que puis-je pour  vous ?  


Merde ! Qu’est-ce que je fais moi maintenant, je  dénonce la gamine ou … ? 


— J’ai des choses à faire monsieur, si vous pouviez me  dire en quoi je peux vous aider. 


— Pardon, je voulais juste savoir si l’ascenseur était  réparé, parce que oui, j’habite au troisième étage,  enfin ça vous le savez, mais voilà, haha, c’est un peu  haut du coup, j’aime bien l’ascenseur et …  


— Attendez, l’ascenseur n’est plus en panne depuis  un mois, il s’est encore bloqué ?  


— C’est vrai ! J’avais la tête ailleurs, heureusement  que vous êtes là ! Eh bien, à bientôt, bonne journée ! 

 — Quoi ?  


Je pars rapidement, et je fonce chez moi, claquant la  porte derrière moi.  


Pourquoi avoir écouté cette gamine ? 

Je ramasse le mot au sol, quand on toque à la porte. 

 — Qu’est-ce que tu veux Aladdin ?  


— Aladdin ?  


— Le roi des voleurs.  


— Je ne vous ai rien volé !  


— Pourquoi tu venais alors ?  


— Je ne suis pas très tranquille chez moi, il y a toujours  du bruit…  


— Alors tu t’es dit : <em>tiens, un appart rien que pour moi,  chouette ! Je vais y mettre le souk et ensuite... </em>

— J’ai plutôt rangé oui !  


— Qui te dit que tu rangeais ? C’était peut-être ma  méthode de rangement !  


— Ah oui, et c’est une méthode de rangement les  bols qui traînent ?  


— Pourquoi je t’écoute, tu ne dois pas entrer chez les  gens, c’est tout !  


— Je voulais juste lire tranquillement et faire mes  devoirs !  


— Oh la poisse, voilà que j’ai affaire à la première  de classe : Oh non, je suis trop intelligente, laissez-moi  travailler, et donnez-moi votre appartement, parce  que je le mérite. 


Je viens vraiment de faire ça là ?  



— Pardon, je ne voulais pas vous déranger...  


— Écoute, c’est pas très grave. Mais ça ne se fait pas  ce genre de choses.  


— Oui je sais, mais je ne pensais pas vous déranger,  vous étiez le seul qui revenait toujours à la même heure,  avec le même train-train quotidien, c’était simple et  pratique…  


Aïe. Voilà que ma pauvre vie minable me revient en  pleine tronche. Si Tom était là, j’entendrais cette histoire jusqu’à ma mort.  


— HAHAHAHA TU VIENS DE TE FAIRE RECADRER PAR  UNE GAMINE !  


Bordel, qu’est-ce qu’il fout là. Je claque la porte.  


— Ouvre la porte, je te promets d’arrêter de rire !  Pourquoi ça m’arrive à moi ? j’ai rien demandé à  personne.  


J’ouvre la porte à nouveau, pour finir le carnage : 


 — Tom, rentre chez toi, t’es au chômage, t’as pas de  leçons à me donner.  


— Ça c’est petit, mais c’est pas grave, j’ai de quoi me  moquer pendant un moment !  


— Toi, rentre chez ta mère et reviens plus chez moi.  J’ai la caméra, si tu reviens, je le dis à ta mère.  


— D’accord … encore désolée Monsieur James.  Pourquoi j’ai l’air d’être le méchant alors que c’est  moi la victime ?  


* 


J’entre dans l’immeuble, et je la croise, assise sur les  marches des escaliers, lisant son livre.  


Ça fait une semaine depuis l’incident, et à chaque  fois que je la croise, pas un mot, juste ces yeux de chien  battu.  


Devant l’ascenseur, au moment où j’appuie sur le  bouton je craque :  


— Ok, t’as gagné ! Tu peux squatter chez moi tant  que je suis pas là, mais t’as pas intérêt à toucher à mes  affaires !  


— Vraiment ? Merci monsieur James !  


Elle court chez elle, mais ressort pour me montrer  fièrement les clés de mon appartement, avant de  s’engouffrer de nouveau chez elle.  


Le ding de l’ascenseur sonne, et me ramène sur terre.  


* 


Un mois s’est passé depuis que je l’ai autorisée à  squatter chez moi. Évidemment, elle touche à mes  affaires quand bien même je lui avais dit non. 


J’ai pris ses réflexions à la lettre, et je sors un peu plus,  je me suis même inscrit à un club de lecture !  Je tourne la clé de mon appartement, quand je vois  du coin de l’œil une fleur blanche sur la table à manger,  devant ma fenêtre.  


Je m’approche, et prends le petit mot à côté :  <em>Désolée, mais je n’ai pas pu m’empêcher de ranger  la vaisselle, il faut vraiment que vous fassiez quelque  chose !  </em>

Pourquoi je me prends des remontrances par une  gamine ?  


Au moins elle fait passer la pilule avec une jolie fleur.  En plus j’adore les roses.  


Finalement, c’est pas si mal d’avoir une petite souris  chez soi. 
`,
  220: `La vie est longue quand on est seul. Au début nos  parents sont toujours autour de nous, puis ce sont les  camarades d’école, les maîtresses, les professeurs,  les amis. On multiplie les rencontres, les collègues, on  trouve l’amour, les enfants arrivent, les petits-enfants…  et puis rien. Plus rien. 

Alors il faut trouver des occupations, faire passer le  temps. Aller au marché devient la plus belle sortie de  la semaine. On rencontre du monde, on parle, les  autres nous parlent. On recommence à exister, à être  quelqu’un. Et en rentrant, on espère qu’une seule  chose, le prochain jour de marché.  

À cela, il y a un avantage. Un seul. 

Je mange. Ah ça oui, je mange. Je m’empresse de  déguster tout ce que j’ai acheté, pour avoir une bonne  raison d’y retourner. Mon infirmière est heureuse de ça.  Ma fille aussi. Peut-être un peu trop. Du moins, assez  pour m’oublier.  

Oublier de s’inquiéter de sa mère. Sa mère qui est  seule.  

— Allez, Madame Dubois, on va prendre votre tension,  me dit Marie en installant le brassard. Vous avez encore  oublié vos médicaments ce matin ?  
Je soupire et tends mon bras, tout en jetant un œil  distrait vers ma fenêtre où le soleil fait scintiller les gouttes  de rosée.  

— Ces pilules me donnent des vertiges, vous savez  bien. Et puis, à mon âge...  

— Justement ! À votre âge, il faut être raisonnable. 


Regardez-moi cette tension : 9/8. Le docteur Lemaire  ne va pas être content.  

Je grimace pendant que Marie note les chiffres dans  son carnet. Un bruit de moteur attire mon attention vers  la rue.  

— Tiens, le nouveau locataire d’en face part déjà au  travail. Il a l’air bien pressé, celui-là.  
Marie lève les yeux vers la fenêtre de l’appartement  du premier étage. 

— Ah oui, le jeune homme brun ? Il a emménagé  récemment ?  

— Il y a quelques semaines. Dans l’appartement d’en  face. Vous savez, dans cet appartement...  Ma voix se voile légèrement. Marie termine de ranger  son matériel médical, habituée à mes silences soudains.  — Bon, maintenant on va vérifier vos réflexes,  m’annonce-t-elle en sortant son petit marteau. Et cette  fois, pas question de vous dérober !  

Marie frappe doucement mon genou, et je tressaille.  

— Achille adorait me voir sursauter quand vous faisiez  ça, je murmure avec un sourire triste. Tu bondis comme  un lapin ! qu’il me disait en riant. 

Un silence lourd s’installe. Marie range ses affaires plus  lentement, me laissant le temps de poursuivre si je le  souhaite.  

Je ne le fais pas.  

Alors Marie part, elle doit rendre visite au jeune voisin  du troisième. Il s’est cassé la jambe la semaine dernière.  

— N’oubliez pas vos médicaments à midi, promis ?  s’assure-t-elle sur le pas de la porte. 

— Promis, je réponds, le regard déjà tourné vers la  fenêtre d’en face qui reste obstinément fermée. 

Une fois seule, je retourne sur mon fauteuil et j’observe  la rue qui s’anime.  

Dans l’escalier, j’entends les pas précipités de Madame Leclercq1 du troisième, toujours si pressée le  matin.  
Hier, j’ai tenté de lui parler de la météo, mais elle a  à peine grommelé un bonjour avant de dévaler les  marches. Comme tous les autres jours d’ailleurs. 

Les jeunes amoureux du premier semblent gentils, mais  je sens bien que mes petites conversations les ennuient. 
Ils sourient poliment quand j’évoque mes souvenirs,  mais leurs yeux disent autre chose.  

Et puis il y a ce couple d’à côté qui lorgne sur mon  appartement depuis des mois, je l’ai bien remarqué. Ils  attendent que je m’en aille, c’est évident. 

 L’emplacement est si agréable, avec vue sur le  square... Heureusement, il y a encore Agnès, la petite  du premier. Cette enfant a toujours eu du temps pour  moi, toujours un mot gentil. Mais depuis quelque temps,  c’est devenu... compliqué. Les choses ont changé, et  maintenant nos conversations se font plus rares, plus  courtes. Je n’ose plus descendre comme avant.  
 
La vie n’en fait vraiment qu’à sa tête.  
Elle donne, elle reprend.  

Ce cercle est infernal. J’ai toujours cru qu’en vieillissant  je m’y habituerai. Mais non. 

À chaque don, je me réjouis et à chaque perte, je me  dis que le bonheur ne tardera pas.  

Mais aujourd’hui la seule chose qui va m’arriver c’est  de mourir. 

Je suis vieille, chaque jour je prends de l’âge. Mon  départ est bien plus proche que mon arrivée.

J’en suis  consciente. Ça ne me rend pas triste, c’est la vie.  

Non, ce qui m’attriste c’est ma perte de patience. Le  temps entre le malheur et l’arrivée de la prochaine joie  se fait de plus en plus long. Et j’ai peur de mourir en  étant triste.  

J’ai toujours été joviale. Mon mari m’a épousée pour  ça. Enfin, c’est ce qu’il disait.  

Et voilà qu’il me manque maintenant !  

Je soupire et mon regard se pose sur mes roses.  Les roses blanches. 

Toujours posées sur le rebord de ma fenêtre. Elles au  moins ne me jugent pas, ne s’impatientent pas. Quand  je m’en occupe, je retrouve cette sensation de paix  que je ressentais en expliquant à Achille le langage des  fleurs.  

Tu vois les roses rouges, c’est pour l’amour passion,  les jaunes pour l’amitié... mais les blanches, ah les  blanches... Elles parlent d’amour pur, de respect, de  souvenirs éternels.  

Il écoutait avec tant d’attention, ses mains touchant  délicatement les pétales. Maintenant qu’il ne peut plus  venir me voir, je continue de les cultiver pour lui.  
Il est un peu comme le petit prince, je suis sûre que  peu importe où il est, il pense à ses roses. 
`,  
416: `Aïe, je viens de me cogner. Je suis un peu à l’ouest,  mais la voie semblait pourtant tout ouverte…  La prochaine fois, je vérifierai mieux si la fenêtre est  fermée…  


Je plane un peu. Je vole même.  

J’aime beaucoup cet appartement. Il est très lumineux,  le soleil est présent presque à toute heure.  Une décoration comme j’aime. Tout est coloré, dans  une ambiance années 80, j’ai envie d’écouter des  vinyles à longueur de journée.  


Alors peut-être que c’est idiot, mais je me balade dans  cet appartement. Beaucoup.  


Il est tout petit, mais j’aime m’y balader. J’arpente  chaque coin et recoin, je redécouvre les tableaux aux  couleurs de Mykonos, sur des airs d’Abba, comment ne  pas se sentir bien et n’avoir envie que de rester chez soi  pour toute la vie ?  


Le soleil, ici, ne se contente pas d’entrer. Il s’invite,  il danse sur les murs turquoise, il fait briller les cadres  dorés, il chauffe les disques posés sur le buffet. Parfois,  j’ai l’impression que la lumière a elle aussi ses chansons  préférées.  

Et puis, il a ces bouquets, pour lesquels je ne me lasserai  jamais de continuer à en profiter.  


La saison des roses déborde un peu sur l’automne, je  sais, mais je ne pourrais pas m’en passer. Le bouquet  change, les couleurs aussi, mais je savoure chacun de  ceux-ci comme si c’était le dernier que je verrai de ma  vie. 
 

Des jaunes, des blanches, des rouges et des roses  évidemment. Chaque couleur a son odeur, son  parfum envoûtant, qui vous attrape et vous enivre pour  longtemps.  


Aujourd’hui, elles sont blanches, mes préférées. Une  pureté inégalée, un goût tellement particulier, cela  en vaudrait presque le coup de se prendre une baie  vitrée... 

Oh non… Revoilà Médor…  


Celui que je surnomme Médor, c’est le chien de la  maîtresse de maison. Oui, je sais, c’est mignon un petit  chien, mais pas celui-là je vous assure. Il a bien failli me  tuer à plusieurs reprises ! Un coup de dents et je n’existe  plus !  


Non mais sérieusement, on néglige souvent la capacité  d’un chien à pouvoir tuer quelqu’un !  


Alors bien sûr, ce sont nos animaux de compagnie,  mais ils peuvent se révéler très dangereux !  

Hop là ! Je parle trop et j’ai à peine le temps de  l’esquiver !  


Il ne fait que chercher à m’attaquer aussi ce chien. S’il  était un peu plus respectueux de ses colocataires, on  arriverait parfaitement à s’entendre !  


Il bondit comme un fou, renversant un coussin, les  griffes qui claquent sur le parquet. Je le vois arriver, la  gueule grande ouverte. Mon cœur bat à tout rompre.  Quelle bête sans gêne !  

— Sunny, qu’est-ce que tu as vu encore ? Ce n’est  pas possible, il faut toujours que tu aboies pour un rien !  

Ah, Sunny… Il n’est pas très solaire pour avoir ce  prénom, il ne cherche qu’à commettre des meurtres…  Elle parle souvent toute seule ou à son chien la  maîtresse de maison. J’adore quand elle fait ça. Elle raconte sa journée à ses plantes, elle danse un peu  quand elle passe l’aspirateur. Parfois, elle chante faux,  mais le cœur y est.  


Je crois qu’elle ne s’imagine pas qu’on l’écoute,  pourtant, moi, je la trouve drôlement apaisante.  

Quand j’ai trop peur que Médor — pardon, Sunny  — ne m’attaque, ou que la fenêtre est fermée, je me  faufile souvent sur le balcon de l’appartement d’un  monsieur1 très gentil, un peu bordélique, qui s’est mis  à faire pousser un tas de roses blanches sur son balcon.  


Mon paradis je vous l’avoue ! Si je n’appréciais pas  autant cet appartement, cela ferait longtemps que  j’aurais déloger à l’étage d’en dessous, à coup sûr !  

Je me pose quelques minutes. Je profite comme  chaque jour, avant de travailler.  


Et oui même si mon métier est très agréable, il faut  quand même que j’y travaille sérieusement, sinon je  risque de me faire disputer par la patronne. Et je n’ai  pas envie de me faire renier de la colonie ! Le travail ne  se fait pas tout seul, même quand on l’aime.  


Alors je reprends ma ronde. Certains diraient que c’est  un métier éreintant, moi j’y vois une chorégraphie du  bonheur, je vous assure ! Je m’active sur la musique  de Dancing Queen, ce rythme de travail est le meilleur  que j’ai trouvé à ce jour, et j’ai l’impression d’être en  vacances constamment !  


Pour une ouvrière c’est assez ironique. Après avoir  bien travaillé, je repars, satisfaite mais fatiguée, et avec  un Médor, pardon, Sunny, qui dort paisiblement et je ne  crains donc aucun risque d’attaque !  

Aïe ! Bon sang, j’ai oublié cette fichue baie vitrée à  moitié ouverte…  


Heureusement que je carbure au boulot, j’ai toujours  craint que l’endroit par lequel je suis entrée ne se  retrouve fermé. Et vous comprenez bien qu’avec ma  taille de guêpe, je ne pourrais pas le rouvrir, que ce soit  porte ou fenêtre.  

Non, vous ne voyez pas ? Le monde est grand,  lumineux, parfumé… un vrai paradis pour moi. Ah, j’ai  oublié de me présenter, moi c’est Mireille l’abeille,  toujours motivée à vous offrir un doux et sucré miel !
`,
  206:`La pluie tambourine contre les vitres depuis ce matin.  Novembre à Montréal, c’est cette grisaille qui s’infiltre  partout, même dans les pensées. Je termine mon café  en observant la rue déserte du Vieux Rosemont.  

Mon téléphone vibre. Encore un message du cabinet.
<em>Madame Ferland, nous avons besoin de votre réponse
concernant l’offre d’achat avant 17h.</em>
Dix-sept heures. Il me reste six heures pour décider si je
vends cet appartement où j’ai passé trente-deux ans
de ma vie.

Je me lève péniblement. Mon genou gauche proteste,
comme chaque matin depuis l’opération.

Soixante-trois ans, c’est l’âge où le corps commence
à tenir ses propres comptes. Je claudique jusqu’à la
cuisine et ouvre le réfrigérateur : un yaourt périmé,
trois tomates flétries, une bouteille de lait entamée. Il
faudrait que je descende faire des courses, mais l’idée
de croiser mes voisins me paralyse.

Depuis la mort de Richard, tout a changé.
Les regards dans l’ascenseur, les silences gênés dans le
hall, les conversations qui s’interrompent quand j’arrive.
Ils savent tous. Dans un immeuble comme celui-ci, les
secrets ne durent jamais longtemps.

Mon mari s’est pendu dans notre chambre il y a huit
mois. Le propriétaire a dû faire repeindre les murs avant
que je puisse réintégrer l’appartement.

On sonne à la porte.

Je sursaute et renverse mon café sur le comptoir. Qui
peut bien venir à cette heure ? Je m’approche de
l’œilleton et reconnais Monsieur Beauregard, le voisin
du 208.

Nous partageons un mur mitoyen depuis des années,
mais nous ne nous sommes jamais vraiment parlé.

— Madame Ferland ? J’ai entendu que vous envisagiez
de vendre.

J’ouvre la porte, surprise par son aplomb.

— Les nouvelles vont vite, on dirait.

Il a l’élégance de paraître embarrassé.

— Ma fille cherche un appartement dans le quartier.

Je me demandais si vous accepteriez qu’elle le visite
avant que vous ne le mettiez officiellement sur le
marché.

Voilà donc. Même mes voisins attendent mon départ.

Je sens la colère monter, une vague chaude qui me
submerge.

— L’appartement n’est pas encore à vendre, Monsieur
Beauregard.

Je referme la porte avant qu’il ne puisse répondre.
Mes mains tremblent. Je retourne à la fenêtre et fixe
l’immeuble d’en face, celui où habite désormais ce
jeune homme qu’on croise parfois dans la rue. Elliott,
je crois. Il a emménagé dans l’ancien appartement
d’Achille, le petit-fils de Madame Dubois.

J’ignore ce qui est arrivé à ce garçon, mais son départ
semble avoir brisé quelque chose dans le cœur de la
vieille dame du 220.

Mon téléphone vibre à nouveau. Cette fois, c’est ma
fille, Marianne.

— Maman, tu as réfléchi ? L’offre est vraiment
généreuse. Tu pourrais t’installer dans une résidence
avec services, tu serais mieux entourée.

Mieux entourée.

Comme si j’étais une plante qu’il faut arroser
régulièrement pour qu’elle survive. Ma fille parle avec
cette voix douce et ferme qu’elle utilise avec ses enfants
quand ils refusent de se coucher.

— Je te rappelle, Marianne.

Je raccroche avant qu’elle ne puisse argumenter
davantage.

Le silence de l’appartement m’oppresse.
Je décide de sortir, même si mon genou proteste.

Je descends les escaliers lentement, m’agrippant à
la rampe. Au premier étage, j’aperçois Agnès qui sort
de chez elle. La jeune fleuriste semble perdue dans ses
pensées. Elle ne me remarque pas et je ne cherche pas
à attirer son attention.

Dehors, la pluie a cessé. L’air sent l’asphalte mouillé et
les feuilles mortes.

Je marche sans direction précise, laissant mes pas me
guider. Je passe devant la boutique d’Agnès. À travers
la vitrine, j’aperçois des bouquets colorés qui égayent
ce jour terne. Mon regard s’arrête sur un vase rempli de
roses blanches.

Richard m’en offrait chaque anniversaire de mariage.

Pour l’amour qui dure, disait-il en souriant.

Sauf que l’amour n’a pas duré assez longtemps.

Ou peut-être a-t-il duré trop longtemps, jusqu’à ce
qu’il devienne insupportable pour lui. Je ne saurai
jamais vraiment pourquoi il a choisi de partir. Sa lettre
ne contenait que des banalités : <em>Ce n’est pas ta faute. Je suis fatigué. Pardonne-moi.</em>

Je continue ma marche et me retrouve devant le
parc du quartier. Quelques enfants jouent malgré le
temps maussade.

Je m’assieds sur un banc et observe leurs rires insouciants. À quel moment avons-nous perdu cette
capacité à trouver de la joie dans les choses simples ?

Mon téléphone vibre. Encore. Je regarde l’heure :
quinze heures. Plus que deux heures pour décider.

Je pense à cet appartement. Aux repas partagés
dans la cuisine, aux disputes pour des futilités, aux
nuits blanches quand Marianne faisait ses dents, aux
dimanches paresseux passés à lire sur le balcon.

Chaque pièce contient des fragments de nous. Partir
reviendrait à abandonner ces souvenirs, à accepter
que cette partie de ma vie soit définitivement terminée.

Mais peut-être est-ce justement ce qu’il faut faire.

Peut-être que rester, c’est refuser d’avancer.

Je me lève et reprends le chemin de l’immeuble.
Dans le hall, je croise Madame Dubois qui rentre de sa
promenade quotidienne. Elle me salue d’un hochement
de tête. Nous ne parlons jamais, mais nos regards se
comprennent. Nous partageons cette même solitude,
ce même poids des jours qui s’étirent.

De retour dans mon appartement, je compose le
numéro du cabinet d’avocats.

— Madame Ferland à l’appareil. Concernant l’offre
d’achat...

Je fais une pause. Par la fenêtre, j’aperçois Elliott
qui rentre chez lui, un sac de courses à la main. La vie
continue, pour lui comme pour les autres. Le monde ne
s’arrête pas parce qu’on a perdu quelqu’un.

—... Je refuse l’offre. L’appartement n’est pas à
vendre.

Après avoir raccroché, je reste immobile un long
moment. Mon genou ne me fait plus mal. Ou peut-être
que je n’y prête plus attention.

Je ne sais pas si j’ai pris la bonne décision, mais c’est
ma décision.

Ce soir, je descendrai acheter des fleurs chez Agnès.
Peut-être même des roses blanches.

Pas pour Richard, mais pour moi.

Pour me rappeler que l’amour qui dure, c’est d’abord
celui qu’on se porte à soi-même.
`,
 312: `Adeline fixait le plafond de sa chambre depuis vingt  minutes.  


Cinq heures du matin. Trop tôt pour se lever, trop tard  pour se rendormir.  


Elle entendait les bruits familiers de l’immeuble qui  s’éveillait : des pas feutrés à l’étage du dessus, le  grincement d’une porte, le gargouillis des tuyaux dans  les murs.  


Elle se leva finalement, enfila sa robe de chambre en  velours bleu, et se dirigea vers la cuisine. Par la fenêtre,  Rosemont dormait encore sous un ciel gris d’octobre.  Les réverbères jetaient des flaques de lumière orange  sur le trottoir mouillé.  

Adeline avait cinquante-quatre ans et vivait seule  depuis son divorce, cinq ans plus tôt. L’appartement  312 était devenu son refuge, son cocon. Trois pièces  soigneusement décorées, remplies de plantes vertes,  de livres, et de souvenirs d’une vie qu’elle avait dû  réinventer.  

Elle se prépara un café, s’installa près de la fenêtre  avec le journal. Mais les mots ne parvenaient pas à  capter son attention.  


Aujourd’hui, c’était jeudi.  


Le jour du bridge chez Christine. Normalement, elle  s’en réjouissait. Mais ces dernières semaines, quelque  chose avait changé.  


Marie-Chantal.  


Adeline posa sa tasse, frustrée par ses propres pensées.  Marie-Chantal était son amie. Une bonne amie, même.  Elles se connaissaient depuis des années, jouaient aux  cartes ensemble, s’échangeaient des potins et des  recettes. Mais dernièrement, Adeline avait remarqué  quelque chose qui la dérangeait.  


Marie-Chantal parlait constamment de Francis2 . Le  voisin du sixième étage. Un homme charmant, certes,  mais qui ne semblait même pas savoir que Marie Chantal existait. Et à chaque partie de bridge, Marie Chantal trouvait le moyen de ramener la conversation  à lui.  


<em>Francis a dit ceci, j’ai croisé Francis dans l’escalier,  Francis aime les chats, vous savez.  </em>


C’était épuisant.  


Adeline se sentait coupable de penser ça. Elle devrait  être une meilleure amie, plus compréhensive, plus  encourageante. Mais quelque chose en elle se rebellait.  


Peut-être parce que ça lui rappelait trop son propre  mariage. Ces années passées à attendre que son ex mari la remarque vraiment, à espérer qu’il change, à se  contenter de miettes d’attention.  

Elle but son café en regardant la rue s’animer  lentement. Un livreur déposa des colis devant une  porte. Un jogger passa en trottinant. La vie continuait,  indifférente à ses états d’âme.  

À midi, elle décida de faire le ménage. Un grand  ménage thérapeutique. Elle commença par le salon,  déplaça les meubles, passa l’aspirateur dans tous les  coins. Elle lava les vitres, épousseta les cadres, réorganisa  sa bibliothèque. Dans le mouvement, elle sentit quelque  chose se délier en elle. Une tension qu’elle ne savait  pas avoir.  


Vers quatorze heures, elle prit une douche, s’habilla  soigneusement. Pantalon noir, chemisier crème, un peu  de maquillage. Elle se regarda dans le miroir. Pas mal  pour cinquante-quatre ans. Des rides, oui, mais aussi  une certaine assurance qu’elle n’avait pas à quarante  ans.  


Elle arriva chez Christine à quatorze heures trente  précises. Christine l’accueillit avec son sourire chaleureux  habituel.  


— Adeline ! Entre, entre. Tu es la première. Marie Chantal arrive dans dix minutes.  


Elles bavardèrent en attendant. Christine raconta  sa visite de la veille avec son neveu et sa femme, ce  couple étrange qui la regardait toujours comme si elle  était déjà morte. Adeline rit, mais avec une pointe  d’amertume. Elle connaissait ce regard. C’était celui  que les gens portaient sur les femmes seules d’un certain  âge. Un mélange de pitié et d’inconfort.  

Marie-Chantal arriva avec quinze minutes de retard,  essoufflée et rayonnante.  


— Désolée ! J’ai croisé Francis dans l’escalier. On a  parlé pendant vingt minutes. Il est tellement intéressant  vous savez ! 


Adeline sentit quelque chose se crisper en elle. Elle  ne dit rien, sourit poliment, s’installa à la table. Christine  distribua les cartes.  


La partie commença dans le silence habituel de  la concentration. Mais après quelques tours, Marie Chantal recommença.  


— Francis m’a dit qu’il cherchait quelqu’un pour  garder ses plantes pendant qu’il partait en voyage. Je  lui ai proposé mes services.  


— C’est gentil, murmura Christine. 

 Adeline abattit ses cartes un peu trop fort sur la table. 

— Marie-Chantal, dit-elle d’une voix plus sèche qu’elle  ne l’aurait voulu. Est-ce que Francis sait que tu existes  autrement qu’en tant que voisine serviable ?  


Le silence retomba comme une pierre dans l’eau.  Marie-Chantal la regarda, bouche ouverte, les yeux  écarquillés. Christine se figea, mal à l’aise.  


— Comment ça ? finit par dire Marie-Chantal.  Adeline prit une grande inspiration. Trop tard pour  reculer maintenant.  


— Tu parles de lui constamment. Tu te rends disponible  pour n’importe quoi. Mais est-ce qu’il t’a déjà invitée  quelque part ? Est-ce qu’il a montré le moindre intérêt  romantique ?  


— Je... je ne...  


— Parce que si c’est le cas, tant mieux. Mais si ce  n’est pas le cas, tu mérites mieux que d’attendre qu’un  homme te remarque.  


Le visage de Marie-Chantal passa par plusieurs  émotions : choc, colère, puis quelque chose comme  de la compréhension. Les larmes montèrent à ses yeux.  


— Tu as raison, murmura-t-elle finalement. Mon Dieu,  tu as raison.  


Christine posa une main sur celle de Marie-Chantal.  


— On est là, dit-elle doucement. On est tes amies. Pas  Francis.  


Adeline sentit sa gorge se serrer. Elle avait été dure,  peut-être trop. Mais quelque chose devait être dit.  


— Désolée, dit-elle. J’aurais pu être plus délicate.  


— Non, répondit Marie-Chantal en s’essuyant les yeux.  J’avais besoin de l’entendre.  

Elles ne jouèrent pas aux cartes cet après-midi-là. Elles  parlèrent. Elles parlèrent vraiment.  


De la solitude, des attentes non réalisées, de la  difficulté d’être une femme seule dans un monde qui  valorise les couples.  
Christine parla de son âge, de la peur de devenir invisible.  


Marie-Chantal admit qu’elle s’accrochait à Francis  parce qu’elle avait peur de finir seule.  


Adeline parla de son divorce, de la libération qu’elle  avait trouvée dans la solitude, mais aussi de la peur qui  venait parfois la nuit.  

Quand Adeline rentra chez elle en fin d’après-midi,  elle se sentait vidée, mais légère. Elle ouvrit la fenêtre  de son salon pour faire entrer l’air frais.  


Sur le rebord, elle remarqua une petite aquarelle  qu’elle avait achetée des années plus tôt dans une  brocante. Une rose blanche peinte sur fond noir, simple  et élégante. Elle l’avait presque oubliée, cachée là  parmi des pots de plantes.  


Elle la regarda un moment, puis sourit. Parfois, les  choses les plus belles étaient celles qu’on oubliait de  remarquer.  


Son téléphone vibra. Un message de Marie-Chantal :  <em>Merci. J’avais besoin de ça. Je t’aime.</em>


Adeline tapa sa réponse : <em>Moi aussi. On est fortes. </em> Elle posa son téléphone et s’installa dans son fauteuil  préféré. 

Dehors, la nuit tombait sur Rosemont.  


Mais dans l’appartement 312, Adeline se sentait  en paix. Pas parce que tout était parfait, mais parce  qu’elle avait dit la vérité.  


Et parfois, c’était tout ce qu’on pouvait faire. 
`,
  608: `Francis Paquette détestait les matins.  

Tous les matins. Depuis toujours.  

La lumière lui brûlait les yeux comme un rappel  qu’il avait survécu à une nuit de plus, sans savoir trop  pourquoi.

Ce matin-là, à sept heures tapantes, le soleil du Vieux Rosemont passait à travers les stores cassés de son  appartement.  

Il grogna, tira la couverture sur sa tête et tenta d’oublier  le monde.  

Mais la bouilloire électrique, laissée branchée la veille,  siffla.  

Puis la radio, programmée sur une station rock, cracha  un vieux morceau de Led Zeppelin. Francis se redressa  en pestant :  

— Maudit karma… même les machines se liguent  contre moi.  
Il se leva, pieds nus sur le plancher grinçant, et chercha  son paquet de cigarettes. Son regard tomba sur la  photo accrochée au frigo : lui, vingt-sept ans, guitare  rouge à la main, torse nu sur scène, entouré de fumée  et d’éclats de lumière.  

Le sourire de quelqu’un qui croyait encore que la  gloire durerait toujours. 
Aujourd’hui, il avait soixante-trois ans, un ventre  de bière et des doigts abîmés par le froid de l’hiver  montréalais.  

Il alluma une clope, ouvrit la fenêtre. 

Sous lui, la ville se réveillait : les premiers bus, les cris des  enfants, le crissement des pneus sur la neige.  

Francis aimait ce quartier. Vieux-Rosemont avait  gardé une âme, avec ses petits restos portugais, ses  façades de brique et ses balcons tordus par les années.  Mais parfois, le silence de l’aube lui rappelait trop les  fins de tournée, quand il rentrait seul d’un concert et  qu’il n’y avait plus personne à appeler.  
Sur la table traînait un carnet noir. Il y notait des idées  de chansons qu’il n’écrivait jamais jusqu’au bout. 

Il  griffonna : Les voisins dorment, moi j’écoute les murs  respirer. 

Puis il barra la phrase. Trop triste, trop vrai. 

Vers dix heures, on frappa à sa porte. Il soupira, écrasa  sa cigarette et ouvrit. Devant lui, une petite femme aux  cheveux argentés, emmitouflée dans une écharpe rose,  tenait une assiette recouverte de papier aluminium.  

— Bonjour Francis ! C’est Marie-Chantal1 , du premier. 

— Je sais bien qui t’es, répondit-il, amusé. C’est quoi  ça ?  

— Des muffins aux bleuets. J’en ai trop fait, alors je  partage.  

Il prit l’assiette sans se faire prier.  

— T’essaierais pas encore de m’engraisser pour me  marier, par hasard ?  

— Oh non, rit-elle, j’ai renoncé. Mais faut bien nourrir  les âmes perdues du sixième.  

Ils rirent tous les deux. Elle entra, posa ses gants sur la  table et regarda autour. L’appartement sentait le café  et la poussière. Des piles de vinyles, des guitares posées  contre les murs, un vieux canapé élimé remplissait la  pièce.  

— Toujours le même capharnaüm, dit-elle.  

— Toujours le même propriétaire, répondit-il.  

Marie-Chantal sortit un petit sachet de sa poche.  — 

Tiens, ajouta-t-elle, c’est pour toi. Une rose blanche.  
— Une fleur ? Tu veux que je la fume ou que je la  plante ?  

— Ni l’un ni l’autre. Tu la gardes. C’est… symbolique.  — 
Symbolique de quoi ?  

— D’un souvenir qu’on partage avec beaucoup de  mone ici, répondit-elle simplement.  

Francis fronça les sourcils. Il connaissait les histoires  qui circulaient dans l’immeuble — l’ancien infirmier  mort trop jeune, la fleuriste d’en face, la série de roses  blanches qui étaient apparues un peu partout comme  des balises de mémoire.  

Il ne posait pas de questions ; il préférait respecter le  silence des autres. Il accepta la rose, la posa dans un  vieux gobelet. Marie-Chantal sourit.  

— Je savais que tu ferais ça.  

— Quoi ?  

— La poser sans chercher à comprendre.  

L’après-midi, Francis descendit au garage.  Son taxi jaune l’attendait, couvert d’une fine couche  de neige.  

Depuis qu’il avait raccroché la guitare, il conduisait  pour payer le loyer. Les clients étaient rares le matin.  Il préférait travailler de nuit, quand la ville devient  floue et que les histoires se racontent entre deux feux  rouges. Il aimait surtout ces moments suspendus avec  des inconnus.  

Une femme ivre qui pleure sur la banquette arrière, un  étudiant perdu dans ses pensées, un vieux monsieur qui  lui parle de pêche… Chacun laissait une trace dans le  rétro.  

Ce jour-là, il prit un client au centre-ville : un homme  jeune, costume froissé, regard vide. 

— Rue Masson, s’il vous plaît.  

Sa voix tremblait. Francis reconnut tout de suite ce  ton. C’était celui de quelqu’un qui retient un chagrin.  
— Pas de problème. Beau quartier, dit-il juste pour  meubler.  

L’homme hocha la tête sans répondre.  

Pendant le trajet, Francis alluma la radio. Une chanson  de Leonard Cohen. La voix grave emplissait l’habitacle,  douce et douloureuse. Le client ferma les yeux.  

Quand ils arrivèrent, il posa un billet sur le siège avant  et dit :  

— Merci. J’avais besoin d’écouter ça.  

Francis le regarda s’éloigner, silhouette solitaire sous la  neige.  

Le soir, il remonta au sixième.  

La rose blanche était toujours là, droite dans son verre. 

Il la contempla un moment, pensif.  

Il pensa à son fils, Samuel, qu’il n’avait pas vu depuis  cinq ans. Une dispute idiote, des mots trop forts, un  silence qui avait pris racine.  

— C’est toi, ma rose blanche, murmura-t-il en souriant  tristement.  

Il prit son carnet et écrivit :  

<em>Une fleur blanche dans un verre ébréché, 

Elle me  regarde vieillir sans broncher.  

Dans le silence de mon sixième étage, je redeviens  jeune, un peu sauvage.</em> 

Il relut ces lignes, ne les trouva pas si mal.  

Pour la première fois depuis longtemps, il reprit sa  guitare. Ses doigts hésitèrent, puis trouvèrent une  mélodie simple, ronde, presque douce. Il chanta bas,  pour lui seul, mais les mots portaient plus loin que prévu. 

Dans le couloir, Marie-Chantal s’arrêta, émue. Elle posa sa main sur la rampe et écouta la voix rauque de  Francis se mêler aux bruits de la ville.  

À la fin de la chanson, un silence. Puis un éclat de rire.  Le sien.  

Il vida son verre, regarda la rose.  

Un premier pétale venait de tomber sur la table. Il le  ramassa, le glissa entre les pages du carnet.  

— Vieille complice, dit-il. Toi et moi, on tiendra encore  un peu.  

Quelques semaines plus tard, le printemps revint.  Francis continua à conduire la nuit, à jouer parfois dans  des bars, juste pour le plaisir.  
Un soir, en revenant d’une longue course, il trouva  devant sa porte une enveloppe.  

À l’intérieur, une photo.  
On le voyait sur scène, sa guitare rouge entre les mains,  un projecteur dans le dos.  

Et sur l’ampli, quelqu’un — Marie-Chantal sans aucun  doute — avait posé une rose blanche.  

Il resta longtemps à fixer la photo, ému, avant de la  glisser dans son carnet.  

Puis il prit sa guitare et recommença à jouer. Le son  descendit doucement jusqu’aux étages inférieurs, se  mêlant au souffle de la nuit et au parfum discret de la  fleur sur la table.
`,
212: `Ce matin-là, mon cœur s’est encore une fois réveillé  pour Agnès, comme si elle guidait mon sommeil, comme  si elle était mon rêve. Elle l’est !  

D’un pas lourd, je prends mon courage à deux mains,  et me lève, enfin.  

Elle est partie pour s’occuper de sa grand-mère  gravement malade, elle m’a laissé une lettre me disant  qu’elle rentrerait lorsque l’ancienne sera guérie…  

Je ne sais pas quand je la reverrai. Peut-être que  ce sera demain, que la grand-mère n’avait qu’un  rhume passager ou une grippe occasionnelle. Ou bien  souffrirait-elle d’une fièvre fâcheuse, voulant m’arracher  des bras de celle que j’aime, la garder pour elle, rien  que pour elle, et alors, elle ne sera rentrée que dans un,  deux voire trois mois. Ou bien même peut-être jamais…  

Qu’importe, dans tous les cas cela me paraîtra être  une éternité ! Sérieusement, quelle motivation y-a-t il à se lever sachant très bien que vous ne verrez pas  celle que vous aimez au coucher ? Je n’en sais rien, en  tout cas, aujourd’hui sera un jour sans elle. Il faut que je  m’occupe.  

Après le déjeuner, je me suis posé sur mon fauteuil,  celui sur lequel j’ai pour habitude d’admirer Agnès au  petit déjeuner, lorsqu’elle chante et danse, ou même  quand elle s’ennuie. Faudra que je m’y fasse, mes yeux  devront se poser ailleurs pour les prochains jours. 


En me levant, au moment de partir vaquer à mes  quelques autres occupations de la journée, j’aperçois  à la fenêtre de l’un des appartements du dessous, une  jeune femme si heureuse, si souriante, en train de se  pomponner si précieusement qu’on pourrait la croire  conviée directement à un rendez-vous avec l’amour. Je  me demande bien ce qui peut la motiver à se préparer  de la sorte.  

Les jours se suivent, et toujours rien, les volets d’Agnès  restent fermés, mon cœur aussi… De plus en plus, mes  yeux se posent sur les occupations de cette si curieuse  voisine d’en dessous. Elle continuait de se préparer  chaque jour, de la même manière. Chaque jour qui  passe donne un nouvel éclat à son merveilleux sourire,  systématiquement vêtue de blanc.  

Plus de doute, c’est bien l’amour qui la rend si  minutieuse pendant ses heures à se préparer, à se  pomponner. Plus de doute depuis qu’un homme lui a  déposé cette douce rose, si blanche, si pure qu’elle  semble être de celles à qui même le plus cruel des  hommes n’oserait arracher ne serait-ce qu’une de ses  précieux pétales.  

Il faudrait être la plus diabolique des âmes pour ne  penser ne serait-ce qu’une seconde à lui faire du mal,  à cette rose.  

Ce matin, j’ai reçu une lettre, c’est Agnès qui me dit  que la santé de sa grand-mère stagne, mais que c’était  impossible pour elle de la laisser maintenant.  
Il faut que j’attende encore pour retrouver celle que  j’aime.  

Ces dernières semaines, je n’ai pas vu la voisine, peut être est-elle partie vivre chez lui, je n’en sais rien.  Déjà deux semaines depuis la dernière lettre d’Agnès, mais je ne m’en inquiète pas plus que la disparition de la  voisine du dessus. Cela fait au moins un mois maintenant  qu’elle n’a pas posé pied chez elle, j’appelle la police !  Ce n’était pas normal, en effet.  

On a retrouvé sur la table basse du salon, un magnifique  vase en cristal, qui supportait la blanche rose à qui il ne  restait désormais plus qu’un pétale. À la base du vase,  une lettre, signé de la part de la jeune femme habitant  ces lieux.  

<em>Lisa Verpillet.  

Je t’écris cette lettre alors que le dernier pétale de  la rose blanche que tu m’as offerte est sur le point de  tomber. Tu m’avais dit que cette fleur était le symbole  de notre amour, pur et éternel. Tu m’as alors promis que  chaque pétale serait une promesse, une preuve que tu  ne me feras jamais de mal. Mais les promesses, comme  les pétales, s’envolent. Et il ne reste plus rien.  

Au début, tout était parfait. Tes lettres, tes attentions,  tes mots doux.  

Chaque jour, je me préparais pour toi, comme si  chaque instant devait être une fête. Je croyais que tu  m’aimais.  

Mais l’amour, parfois, n’est qu’un piège. Tu as  commencé par m’isoler, doucement, en me disant que  le monde était trop cruel pour moi.  

Puis tu as pris le contrôle de tout : mes sorties, mes  quelques amis… même mes rêves dont tu faisais parti.  Tu m’as volé ma lumière, pétale après pétale.  Elliott relève les yeux vers la fenêtre. La rose, maintenant  fanée, n’est plus qu’un fantôme de ce qu’elle était. Il  comprend que chaque pétale tombé correspondait  miraculeusement à une partie de Lisa qui disparaissait.  Le premier pétale est tombé le jour où tu m’as interdit  de voir ma famille.

 
Le deuxième, quand tu as brisé mon téléphone.  Le troisième, quand tu as commencé à devenir violent  avec moi.  

Et ainsi de suite, jusqu’à ce qu’il ne reste plus rien de  moi. Juste une coquille vide, une ombre qui attend la  fin.  

Aujourd’hui, il ne reste plus qu’un pétale. Celle de  l’espoir. Mais même lui va tomber.  

Je ne veux plus attendre, je ne veux plus souffrir. Je ne veux plus que tu me voles ce qui me reste.  Alors je pars. 

Je choisis de m’en aller avant que tu ne puisses me  prendre ça aussi.</em>

Elliott recule, bouleversé. Il regarde autour de lui,  l’appartement est vide, mais l’odeur de la rose fanée  flotte encore, comme un fantôme. Il comprend alors  que la beauté qu’il avait vue, ses sourires, ses préparatifs,  n’étaient que les derniers éclats d’une âme en train de  s’éteindre.  

Dehors, le soleil brille toujours.  

Mais pour Elliott, le monde vient de s’assombrir un peu  plus.  

Il pense à Agnès, quelque part, loin de lui. Il se promet  de ne jamais laisser l’amour devenir une prison, de ne  jamais laisser une rose fanée sur la table d’une vie brisée.  Il referme la lettre, et quitte l’appartement.  
Vivement qu’Agnès revienne.
`,
  308: `La première fois que j’ai vu la rose blanche, c’était un  matin de janvier, collée sur la porte de mon frigo avec  un aimant en forme de cœur. Je l’ai arrachée, froissée,  jetée à la poubelle.  


Puis j’ai regretté.  


Pas à cause de la fleur, mais parce que j’avais réagi  comme un gamin. À quarante-deux ans, on devrait  savoir gérer ses émotions.  


Je m’appelle Simon. Je suis professeur de philosophie  au cégep du Vieux-Montréal, et depuis six mois, je vis  seul dans cet appartement du 308, rue Masson. Mon  ex, Claire, est partie avec nos deux chats et la moitié  de mes disques de jazz. Elle disait que je ruminais trop.  Peut-être qu’elle avait raison.  

Ce matin-là, j’avais cours à 8h. J’ai enfilé mon manteau  en laine, attrapé mon sac, et je suis sorti en claquant la  porte.  


Dans le couloir, j’ai croisé Madame Lefèvre1, la vieille  dame du 306, qui traînait un sac de courses trop lourd.  Elle m’a souri, j’ai hoché la tête, et j’ai continué mon  chemin.  


Je n’avais pas le temps pour les politesses.  Le cégep était à dix minutes à pied.  


J’aimais ce trajet, surtout l’hiver, quand la neige  étouffait les bruits de la ville.  


Ce jour-là, pour une raison que j’ignore, j’ai pris un  détour par la rue Beaubien. Et c’est là que je l’ai vue.  


Elle était assise sur un banc, devant la boulangerie,  un livre à la main et une tasse de café fumant posée à  côté d’elle. Elle portait un bonnet rouge, des mitaines  tricotées, et une écharpe à motifs de flocons.  


Quand elle a levé les yeux, j’ai senti mon cœur faire  un bond. Pas à cause d’elle — enfin, pas seulement —  mais parce qu’elle tenait entre ses doigts gourds une  rose blanche. 


 — Vous avez l’air gelé, a-t-elle dit en me voyant  passer.  


J’ai marmonné un <em>merci</em> et j’ai accéléré le pas. Je ne  voulais pas parler. Pas ce matin-là.  

Le cours s’est mal passé. Les étudiants somnolaient,  le chauffage était trop fort, et moi, je n’arrêtais pas de  penser à cette rose.  


Pourquoi une rose blanche ? Pourquoi elle ? Pourquoi  moi ?  

À midi, j’ai acheté un sandwich et je suis retourné vers  la rue Beaubien. Elle n’était plus là. Juste la tasse de  café abandonnée, et, sur le banc, un petit mot glissé  sous un caillou : Les roses blanches sont pour ceux qui  ont besoin de silence.  


J’ai ri jaune. Du silence, j’en avais à revendre.  

Le soir, en rentrant, j’ai trouvé une autre rose blanche,  cette fois posée sur ma table de nuit. Pas de mot. Juste  la fleur, ses pétales immaculés, son parfum discret. J’ai  pensé à appeler la police, puis j’ai réalisé à quel point  c’était ridicule. Qui appellerait les flics pour une fleur ?  


Les jours suivants, les roses ont continué d’apparaître.  Sur mon bureau au cégep. Dans la poche de mon  manteau. Une fois, même, glissée entre les pages du  livre que j’étais en train de lire. 
<em>L’Étranger</em> de Camus.  Ironique.  


J’ai commencé à me sentir observé. Pas menacé, non. 

Juste… vu. Comme si quelqu’un, quelque part, savait  des choses sur moi que je ne savais pas moi-même.  

Un jeudi, j’ai croisé Madame Lefèvre dans l’ascenseur.  Elle tenait un bouquet de tulipes.  


— Vous aimez les fleurs, professeur ? m’a-t-elle  demandé.  


— Pas particulièrement, ai-je répondu, sec.  Elle a souri, comme si elle savait quelque chose. 


 — Dommage. Les fleurs, c’est la vie qui nous fait un  clin d’œil.  


J’ai grogné un peut-être et je suis sorti à mon étage.  

Ce week-end-là, j’ai décidé de ne pas bouger de  chez moi.  


J’ai verrouillé la porte, tiré les rideaux, et j’ai passé  deux jours à regarder des films noirs en mangeant des  pizzas surgelées.  

Dimanche soir, j’ai entendu un bruit contre ma fenêtre.  J’ai écarté le rideau : sur le rebord, une rose blanche,  et un mot écrit sur un bout de papier journal : Vous ne  pouvez pas fuir éternellement.  


J’ai ouvert la fenêtre, regardé dans la rue. Personne.  Juste la neige qui tombait, et les réverbères qui  dessinaient des halos jaunes sur le trottoir.  

Lundi, j’ai séché mon cours. Pour la première fois de  ma carrière. J’ai erré dans le quartier, j’ai bu trois cafés  dans un bar miteux, j’ai acheté un carnet et un stylo. Et  j’ai commencé à écrire.  


Pas des essais philosophiques. Non. Des mots à elle.  À cette inconnue aux roses blanches. Des mots que je  n’avais jamais osé dire à Claire, à mes étudiants, à moi même.  


<em>Je ne sais pas qui vous êtes, mais vous avez raison.  Je fuis. Depuis toujours. J’ai peur du silence, alors je le comble avec des livres, des cours, des disques. Mais le  silence, parfois, est juste une façon d’écouter.  Alors merci. Pour les roses. Pour le rappel. </em>

J’ai glissé la page sous la porte de Madame Lefèvre.  Je ne sais pas pourquoi elle. Peut-être parce qu’elle  était la seule à m’avoir parlé ces derniers temps.  

Le lendemain, il n’y avait plus de rose.  


Juste un petit sachet de graines posé sur mon  paillasson, avec un mot : <em>Plantez-les.</em>  


J’ai obéi.  

Aujourd’hui, six mois plus tard, mon balcon est couvert  de roses blanches. Je ne sais toujours pas qui me les  envoyait.  


Peut-être Madame Lefèvre.  


Peut-être l’inconnue de la rue Beaubien.  


Peut-être les deux.  


Peut-être personne.  


Ce qui compte, c’est que j’ai appris à aimer le silence.  Et que, parfois, quand je rentre le soir, je trouve une  tasse de café chaud devant ma porte.  


Avec, bien sûr, une rose blanche. 
`,
 604: `Le problème avec les secrets, c’est qu’ils prennent  de la place. Beaucoup de place. Et mon appartement  n’en a déjà pas beaucoup.  

Je m’appelle Léa Bergeron, j’ai quarante-quatre  ans, et je suis traductrice freelance. Anglais-français,  français-anglais. Des manuels techniques, des contrats  d’affaires, parfois des romans quand j’ai de la chance.  Je travaille de chez moi, dans mon 604, entourée de  dictionnaires et de tasses de café refroidi.  


Ce matin de janvier 2012, je me réveille avec cette  sensation familière : la culpabilité qui pèse sur ma poitrine  comme une pierre. Ça fait trois mois maintenant. Trois  mois que je vis avec ce poids.  

Je me lève, j’ouvre mon ordinateur. Trente-deux  courriels. Des clients, des factures, des relances. Je les  ignore tous. À la place, j’ouvre un dossier caché dans  mes documents. Un dossier que personne ne doit voir.  


À l’intérieur, des photos. Des dizaines de photos. Toutes  prises depuis ma fenêtre qui donne sur la cour intérieure  de l’immeuble. Des photos des voisins. De leurs fenêtres.  De leurs vies.  


Je sais. C’est malsain. C’est invasif. C’est probablement  illégal.  


Mais je ne peux pas m’en empêcher.  

Tout a commencé en octobre. J’étais en panne  d’inspiration sur une traduction particulièrement  chiante. Je regardais par la fenêtre, distraitement. Et j’ai vu Valère du 314 qui se préparait pour aller travailler.  Chemise impeccable, gestes précis, routine millimétrée.  J’ai trouvé ça fascinant. Cette vie si ordonnée, si  différente de la mienne.  


Alors j’ai pris une photo. Juste une. Pour m’en souvenir.  Puis une deuxième. Puis une troisième.  


Maintenant, j’ai des centaines de photos.  

Christine2 du 220 qui arrose ses roses sur son rebord de  fenêtre. James3 du 316 qui accueille cette petite fille  qui squatte chez lui. Marie-Chantal 4 du 110 qui nourrit  ses chats. Des vies en fragments, capturées à leur insu.  


Je ne partage jamais ces photos. Je ne les montre  à personne. C’est juste pour moi. Mon petit secret  honteux.  

Ce matin, je zoome sur une photo récente. Agnès qui  sort de chez elle avec un carton. Dans l’immeuble d’en  face, je distingue un homme à sa fenêtre qui la regarde.  Elliott, le nouveau. Il a emménagé en septembre dans  l’ancien appartement d’Achille. Je me demande s’il  sait qu’Agnès le remarque aussi.  


Mon téléphone sonne. Ma sœur, Camille.  


— Léa ? Tu viens souper dimanche ?  


— Je ne sais pas, j’ai beaucoup de travail…

  — Tu dis toujours ça. Maman s’inquiète. On ne te voit  plus.  


— Je sais. C’est juste... compliqué en ce moment.  

— Compliqué comment ?  


Je regarde mes photos sur l’écran.  


— Laisse tomber. Je vais essayer de venir.  


— Promis ?  


— Promis.  

Je raccroche. Je ne viendrai pas. Je ne viens jamais.  


Vers midi, on frappe à ma porte. Je sursaute, je ferme  rapidement le dossier. Mon cœur bat trop vite. Est-ce  que quelqu’un m’a vue ? Est-ce que quelqu’un sait ?  


J’ouvre. C’est Francis1 du 608. Le rockeur fatigué avec  sa guitare.  


— Salut. Désolé de déranger. T’aurais du sucre à me  prêter ?  


— Du sucre ?  


— Ouais, je reçois quelqu’un et j’ai oublié d’en acheter.  

— Euh, oui, attends. 


Je vais dans la cuisine, je lui donne un sac de sucre.  Il me remercie, repart. Je referme la porte, soulagée.  Mais le malaise reste.  

L’après-midi, je me force à travailler.  

Une traduction urgente pour un client chiant qui  paie mal. Je m’installe avec mon thé, mes notes, mon  ordinateur.  


Pendant deux heures, je suis concentrée. Productive.  Normale.  

Puis mes yeux dérivent vers la fenêtre.  


Et je recommence.  


Je prends mon appareil photo, je zoome sur les  fenêtres d’en face. Adeline2 du 312 qui lit sur son balcon  malgré le froid. Simon 3 du 308 qui fume une cigarette,  l’air perdu. Denis4 du 216 qui range ses affaires, peut-être en train de déménager.  


Click. Click. Click.  

Mon téléphone vibre. Un texto de ma thérapeute.  

<em>N’oublie pas ton rendez-vous demain à 14h. </em>

Merde. J’avais oublié. Je tape une réponse rapide.  Ok, je serai là. 


J’ai commencé la thérapie en novembre. Pas à  cause des photos. Ma thérapeute ne sait rien des  photos. J’y vais officiellement pour mon anxiété sociale,  ma difficulté à maintenir des relations, mon isolement  croissant. Mais au fond, je sais pourquoi je vais mal. Et  ça n’a rien à voir avec l’anxiété.  

Le soir, je me prépare un repas triste. Des pâtes au  beurre. Je mange devant mon ordinateur en scrollant  mes photos. Mon exposition privée de vies volées.  


Je tombe sur une photo de Christine du 220. Elle est  à sa fenêtre, elle regarde vers l’immeuble d’en face.  Son visage est triste, pensif. Quelque chose dans son  expression me fend le cœur.  


Pour la première fois, je réalise quelque chose. Ces  gens ne sont pas des personnages. Ce sont des vraies  personnes. Avec de vraies douleurs. De vraies solitudes.  Comme moi.  

Je ferme l’ordinateur. Je vais sur le balcon. L’air froid  me brûle les poumons. En bas, dans la cour, je vois  Marie-Chantal qui promène un de ses chats en laisse.  Elle lève la tête, me voit, me fait signe.  

Je lui réponds d’un geste timide.  


— Il fait froid hein ! crie-t-elle.  


— Oui ! Très !  


— Tu devrais rentrer, tu vas attraper la mort !  Je souris malgré moi. Elle s’inquiète. Pour moi. Une  quasi-étrangère.  

Le lendemain, je vais à mon rendez-vous chez la  thérapeute. Je m’assieds dans le fauteuil trop mou,  face à la Docteure Lavoie qui me regarde avec ses  yeux patients.  


— Comment allez-vous cette semaine, Léa ?  


— Bien. Enfin, pas bien. Je ne sais pas.  


— Qu’est-ce qui vous préoccupe ? 

Je prends une grande inspiration.  


— J’ai fait quelque chose. Quelque chose de pas  correct.  


— Racontez-moi.  


Alors je raconte. Tout. Les photos, l’obsession, la honte.  Je pleure en parlant. Des vraies larmes, pas juste des  yeux qui piquent.  


Docteure Lavoie écoute sans juger. Quand j’ai fini,  elle dit :  


— Vous savez pourquoi vous faites ça ?  


— Non.  


— Vous observez les autres parce que vous avez peur  de vivre votre propre vie. C’est plus sûr de regarder par  la fenêtre que de sortir par la porte.  


Ses mots me frappent comme une gifle. Parce que  c’est vrai.  


— Qu’est-ce que je fais maintenant ?  


— Vous effacez les photos. Et vous sortez de chez vous.  

Le soir même, je m’assois devant mon ordinateur. Le  dossier est là, sur mon bureau. Des centaines d’heures  de voyeurisme condensées en un seul clic.  Ma main tremble au-dessus de la souris.  


Puis je supprime tout.  


Le dossier disparaît. Vide. Fini.  


Je pleure encore, mais différemment. Un soulagement  mêlé de perte.  

Le lendemain, je descends au 110. Je frappe à la  porte de Marie-Chantal. Elle ouvre, surprise. 

 — Léa ! Quelle belle visite !  


— Bonjour. Je me demandais... vous aviez parlé de  jouer aux cartes avec des voisines ? Est-ce que je  pourrais me joindre à vous parfois ?  


Son visage s’illumine.  


— Bien sûr ! On se retrouve chez Christine jeudi. Tu es  la bienvenue ! 


En remontant l’escalier, je croise Agnès. Elle porte un  bouquet de roses blanches.  


— Belles fleurs, je dis.  


— Merci. C’est pour une cliente. 


On se sourit. Un vrai sourire. Pas celui qu’on donne par  politesse.  

De retour dans mon appartement, je regarde par la  fenêtre. Mais cette fois, je ne prends pas de photo. 

Je regarde juste. Et c’est suffisant. 
`,
 512: `<em>Merde ! Il pleut encore. </em>


Antony a le regard dans le vide. Pourtant, c’était son  seul créneau ou le moment qu’il choisissait d’habitude  pour aller faire ses courses. Il prit son manteau  imperméable et son sac de course et sortit.  

Ascenseur ou escalier ? Il décida de prendre les  escaliers histoire de se dégourdir un peu les jambes.  Antony est peintre et reste la plupart du temps  cloîtré dans son appartement. C’est le seul endroit où  il arrive à se concentrer et à avoir de l’inspiration. Son  appartement, c’est son havre de paix ; il s’y sent bien.  D’ailleurs, comment ne pas s’y sentir bien quand il est  si joliment décoré ? Le salon est orné d’une moquette  d’un gris clair et épuré. Les murs tapissés d’un blanc  immaculé sont garnis de nombreux tableaux inspirants  peints par lui-même.  

Antony n’a pas eu une vie facile. Ayant grandi dans  un foyer d’accueil, il a essuyé coups sur coups.  Cette bourse d’études pour intégrer l’école d’art de  Montréal a été pour lui une bouée de sauvetage. Ça y  est, il allait enfin prendre son indépendance et réaliser  ce qui l’a toujours passionné : la peinture.  Trois ans après, il sortait de l’école d’art, major de sa  promotion. Les opportunités avaient alors commencé  à pleuvoir. Il avait dans la foulée signé un contrat avec  l’Arsenal Art Contemporain de Montréal. Une nouvelle  vie commençait alors pour lui.  

Il aimait bien cet immeuble, même si les voisins avaient l’air un peu intrusifs et curieux.  


Agnès, la fille du premier étage, aime bien promener  son chien. Elle s’arrête toujours quand ils se croisent  dehors pour discuter. Mais Antony est toujours pressé de  retourner à ses peintures.  


Un matin, rapide mais prudent, il dévala les escaliers  jusqu’au rez-de-chaussée. Il croisa justement Agnès qui  sortait de l’ascenseur, bien apprêtée.  


— Bonjour Antony, j’espère que vous allez bien ! Joli  temps, n’est-ce pas ? Heureusement que c’est mon jour  de congé aujourd’hui. Je sors juste faire mes courses. Et  vous, beau aux bois dormants ? fit-elle avec un rictus  moqueur du bout des lèvres.  


— Je vais aussi me procurer de quoi subsister, voyez vous, milady fit-il entrant dans son jeu.  


— Très bien, messire, je vous souhaite une excellente  journée. 


* 


Ses courses faites et le repas prêt, il engloutit son plat  avec appétit. Il se dirigea vers son bureau-atelier. Il avait  une planche de dessin qu’il s’évertue à garder vierge  chaque matin, ce qui le motivait le plus à travailler. Il se  mit alors devant sa planche et essaya de se concentrer.  Il pensa à tout et rien. L’image de sa voisine du premier  étage s’imposa alors dans son esprit. Ses remarques  taquines, son rire joyeux et ses yeux brillants. Elle lui faisait  penser à une rose qui s’épanouit au printemps. Il sourit  et prit son pinceau ; il se plaça près de la fenêtre là où  la lumière du jour traversait sa toile.  


Il se mit à dessiner une rose avec frénésie. Elle était  blanche et lumineuse. Une fois terminée, il admira son  œuvre les yeux brillants et décida de la sélectionner  comme pièce principale dans sa prochaine exposition.  Il était encore dans ses pensées quand son téléphone  sonna. Il prit le combiné et décrocha.

— Bonjour M. Montgomerry ! fit d’une voix bienveillante  son interlocuteur, qui était son agent d’exposition.  Antony, pour la prochaine exposition qui aura lieu dans  une semaine, pouvez-vous inviter quelques-uns de vos  proches ? C’est Nina, l’agent événementiel, qui le  propose.  


— Oh je… fut la seule chose qu’il put dire. Je, je ne  sais…  


L’homme au bout du fil soupira et fit :  


— Je sais, Antony, que vous n’avez pas de famille  et que c’est compliqué. Mais c’est important de  sociabiliser et de donner aux autres tout ce que vous  avez à offrir. Je peux compter sur vous pour venir avec  quelques personnes ?  


— Je, je ferai au mieux, Monsieur, fit-il, l’air pas très  convaincu.  


— À bientôt, Antony !  

Il reposa le combiné et s’assit, totalement vidé de  toute énergie. Il replongea dans le passé. Ces années  passées en foyer d’accueil. Une scène revenait sans  cesse et dominait.  


**La punition**


C’était un soir de Noël ; il neigeait et tout était blanc.  Antony avait alors 11 ans.  


Il vivait depuis 2 ans dans ce foyer pour enfants oubliés,  difficiles ou pour ceux dont les parents voulaient donner  une bonne correction. Mais lui, il y était parce qu’il  n’avait plus personne.  


Ses parents étaient morts dans une croisière lors de  leurs dernières vacances en Australie et lui, enfant  unique, était tombé dans la profonde spirale des foyers  d’accueil.  
Ce soir de Noël, il avait incité ses camarades de dortoir à sortir dans la cour pour former des bonshommes de  neige géants. Ils avaient ri, s’étaient poursuivis dans les  escaliers et avaient ressenti la magie de Noël que tout  enfant rêve de vivre.  


Mais l’atmosphère s’était vite alourdie quand M.  Rigaux, leur surveillant ce soir-là, s’était pointé à l’entrée,  arborant une moue terrifiante.  


— Vous aimez le froid, c’est ça ? Vous savez combien  ça coûterait aux contribuables de vous soigner si vous  prenez froid ? Comme vous aimez me défier et me  mettre en colère, vous allez être servis. Mettez-vous en  rang et dirigez-vous vers le grenier, fit-il, tout sourire.  


Les enfants se figèrent car c’était comme si on leur  avait annoncé la fin du monde.  


— Pardon, M. Rigaux, on ne le fera plus, fit le petit  Mathéo, âgé de 9 ans.  


— Si tu l’ouvres encore, la punition sera encore plus  sévère, fit l’homme en haussant le ton.  


Les enfants entrèrent en rang dans la maison et  montèrent dans le grenier.  


Le grenier : cette pièce sans chauffage, exiguë et  sombre : leur pire cauchemar. Ils y entrèrent tous les  douze et s’assirent. La porte en bois se referma d’un  bruit sec. Ils passèrent cette nuit de Noël à mourir de  froid et à être affamés.  


Ils étaient libérés le lendemain dans l’après-midi. Cette  nuit avait été épouvantable et ils en faisaient des crises  d’angoisse rien qu’en y repensant.  


Le souffle court, il secouait la tête, revint à la réalité. Il  ne se rendit même pas compte qu’il pleurait et tremblait  de tous ses membres.  


<em>Je dois vraiment tourner la page ; il faut que j’oublie  ce passé qui me turlupine et m’empêche d’avancer. Il  le faut. </em>


*
Madame Leclercq1 sortit de son appartement et se  dirigea vers les boîtes aux lettres au rez-de-chaussée. Elle  ouvrit la sienne, boîte 312, et découvrit une enveloppe.  Elle ouvrit et vit une invitation à une exposition d’art.  L’expéditeur ne lui était pas du tout inconnu. Elle haussa  un sourcil, surprise, la bouche en cœur.  


— Antony, le discret du 5e m’invite à son exposition  samedi ? Je suis sous le choc.  


Un bruit se fit entendre derrière elle et elle découvrit  Agnès qui sortait promener son chien.  


— Ah, Adeline, comment allez-vous ce matin ?  


— Bien, je vais très bien et vous ? Elle baissa la tête et  chuchota : je suis surprise quand même. Le silencieux…  Il m’invite à son exposition d’art samedi.  


Agnès pencha la tête d’un côté et la fixa d’un regard  interrogateur.  


— C’est qui le silencieux ?  


— Notre voisin du 5e étage est discret, fit-elle tout  sourire.  


— Ah, Antony ? Sérieusement ? Je suis sous le choc.  Qu’est-ce qui a bien pu lui passer par la tête ? Elle se  dirigea vers sa boîte aux lettres et l’ouvrit. J’ai peut-être  du courrier ? Elle tourna la poignée, regarda et sortit  une enveloppe. Mais j’ai la même que la vôtre !  


— Ouvre-la, Agnès. 


Elle l’ouvrit et découvrit le même flyer d’invitation.  

Les deux dames sourirent et passèrent une heure  à choisir comment s’habiller pour se rendre à cette  fameuse exposition.  

**Samedi**  

— Mesdames, Messieurs, je vous prie d’accueillir  Antony, qui est l’artiste exposant numéro un ce soir. Antony, vêtu d’un smoking et l’air apprêté, s’approcha  de la scène et prit le micro. Pendant quinze minutes, il  se présenta et parla de ses œuvres. Il fit une pause et  repris :  


— Ce n’est pas tout : la pièce maîtresse de cette  soirée, la vedette, c’est un tableau que j’ai peint avec  un cœur blanc et beaucoup de douceur.  


Il fit signe à un jeune homme près de la toile couverte  d’un drap blanc de la dévoiler ; il la découvrit en tirant  dessus. La fameuse toile qu’il avait peinte, cette rose  blanche qui évoquait Agnès, apparut.  


Il y eut un silence dans la salle et les gens applaudirent.  Madame Leclercq et Agnès, accompagnées d’Elliott,  furent émues.  

— Cette rose, elle a quelque chose de très captivant,  fit Agnès en s’approchant d’Antony qui quittait la scène.  

— En effet, fit Madame Leclercq qui tenta d’attraper  une coupe de champagne du plateau d’un serveur.  

— Oh, vous êtes venus. C’est tellement gentil. Je suis  touché, dit Antony.  


— C’est nous qui sommes émerveillés. Si c’est votre  réclusion qui vous donne toute cette inspiration, vous  devriez vous enfermer un peu plus souvent, fit Agnès, le  regard lumineux.  


— Ne lui dis pas ça ; il va encore plus s’enfermer, le  pauvre. Moi, je vois qu’il y a beaucoup de manières de  vous inspirer dehors : les fleurs, un marchand, une petite  fille qui déguste une glace sous le regard aimant de ses  parents, un adolescent à son match de rugby. Vivez  Antony, vivez, car la vie vaut la peine d’être vécue,  conclut Madame Leclercq, le regard rempli de fierté.
`,
216: `— Au revoir ! Fais bonne route ! Bisous ma chérie,  entonne Denis, le sourire accroché aux lèvres. Mais  son visage se décompose lorsqu’il fait claquer la porte  derrière sa fille.  


Ce ne sont pas vraiment des larmes de joie qui  grossissent au coin de ses yeux, ni tout à fait de la  tristesse.  


Les larmes de confusion existent-elles ? Ce jour allait  arriver et Denis le savait.  


Deux ans auparavant, c’était l’aînée, Elia, qui partait  emménager avec sa copine. Aujourd’hui, c’est le tour  de Clara, la cadette, de prendre ses valises pour faire  ses études à l’étranger.  


Il y a toujours une bonne raison pour partir, c’est normal,  il le sait, mais ça n’a rien à voir avec ce qu’il imaginait.  Dans les scénarios qu’il construisait dans sa tête, il était  tantôt si fier de voir celles qu’il a éduquées pendant  tant d’années devenir autonomes et s’épanouir par  elle-mêmes, tantôt si dévasté d’être seul dans ce grand  appartement vide, après avoir tout donné pour elles.  


Mais ce qu’il ressent aujourd’hui n’a aucun rapport.  

C’est plutôt un épais brouillard qui l’entoure et floute  ses pensées. Quoi faire maintenant ?  


Il reprend doucement ses esprits, il est debout, figé, sa  main toujours sur la poignée.  

Cet instant est le premier souvenir du reste de sa vie.  Doucement, il s’éloigne de la porte d’entrée, prend un  stylo et un carnet et s’assoit à la table de la cuisine où trône encore le petit déjeuner que Clara n’a pas eu le  temps de finir. Il prend la tasse de café encore tiède  d’une main, de l’autre il commence une liste : 

<em> — Chant  


— Peinture  


— Sculpture  


— Sport, (box ? Course ?)  


— Fabriquer des mangeoires à oiseau  


— Regarder plus de films  


— Apprendre une nouvelle langue  </em>

Toutes ces choses dans un coin de sa tête, qu’il avait  gardées pour « plus tard », désormais il comprend. « Plus  tard » c’est maintenant.  


Soudain son cœur semble s’alléger un peu. Il part à la  recherche de vieux cartons de l’école et des anciens  jeux de ses filles, dans lesquels se trouvent quelques  bases pour s’essayer aux arts plastiques. Il trouve de  vieux pots de pâte à modeler jamais ouverts. Peut-être  pas de la meilleure qualité après tout ce temps, mais  ça fera l’affaire. Lorsqu’il les ouvre, il les trouve toutes  sèches.  


Mais Denis ne se laisse pas impressionner, il regarde sur  internet et voit que ces pâtes peuvent être réhydratées  avec de l’eau, dans un sac alimentaire, puis un rouleau  à pâtisserie… Bon. Détenir un rouleau à pâtisserie, c’est  plutôt un truc de personne qui sait bien cuisiner selon  Denis.  


Lui, il n’en a pas.  


Tant pis, il décide alors d’utiliser ses mains, il mélange  l’eau et la pâte et commence à la ramollir à travers le  sac.  

C’est au moment de sortir la mixture du sac que ça  se gâte. La texture est collante, poisseuse. Ça fait des  <em>splosh splosh</em> au moindre mouvement, et en plus l’odeur est vraiment suspecte. Pas très concluant. Il n’était pas  très inspiré, mais avec un blob pareil entre les mains, il  en est sûr, il n’y a rien à tirer de tout ça.  


La sculpture en pâte à modeler ?  


Clairement pas pour lui. Mais ce n’est pas grave, il a  une autre idée. Dans ce même carton, il a aperçu des  pinceaux et des peintures neuves. Dans une autre vie,  Denis dessinait beaucoup dans ses cahiers de cours,  et il avait même fini par avoir un petit niveau. Il n’avait  peut-être jamais peint, mais ça lui semblait malgré tout  plus familier.  


Après un soigneux lavage de mains, il se lance. Il  découpe un volet du carton dans lequel se trouve  les affaires, c’est ce qu’il a de mieux pour l’instant. Et  l’inspiration lui vient tout de suite.  

Sa fille aînée, Elia, adore les fleurs. Elle a plein de  plantes chez elle, elle lui en donne souvent pour son  appartement. Mais elle n’a jamais eu de tableau ! Il  commence alors un prototype, un petit bouquet de  ses plantes et fleurs préférées, des feuilles de plantes  prieuses, un tournesol et une rose blanche.  

Visage concentré, langue sortie, il s’applique à trouver  une bonne composition d’image au crayon de papier,  puis, il se lance enfin avec le pinceau, avec un peu  d’appréhension.  


Il y passe l’après-midi. Mais une fois son premier  prototype accompli, il n’a qu’une seule envie :  Recommencer.  


Jusqu’à pouvoir offrir à sa fille ainée le cadeau parfait  pour son anniversaire dans 2 mois.  


Il met à sa fenêtre le petit volet de carton pour qu’il  puisse sécher tranquillement, et décide d’observer un  peu les oiseaux.  


C’est vrai qu’il a écrit dans sa liste qu’il voulait construire  son propre nichoir, mais déjà, la peinture est un projet qui semble prendre le dessus sur ses autres envies. Il s’en  réjouit déjà. Après une journée bien remplie, Denis part  enfin se coucher, le vide de ce matin vite remplacé par  de nouveaux projets.  


Dès son réveil, le lendemain, il se prépare et part  acheter le nécessaire pour peindre.  


Un chevalet, quelques toiles.  

Il en profite pour commencer le sport et décide d’aller  jusqu’au magasin en courant. Normalement c’est à 10  minutes à pied. En courant ce doit être à environ… 6  minutes...  


11 minutes plus tard, il parvient enfin au magasin,  essoufflé. Le sport… Peut-être une autre fois.  Une fois dans la grande surface, il craque dans la partie  fleuristerie, et s’empare de plusieurs plantes, certaines  pour décorer sa maison, d’autres pour faire sécher les  feuilles et les ajouter à ses peintures. Il fera des tests.  

Heureux de ses trouvailles, Denis rentre chez lui. Dans  l’ascenseur, il croise le voisin du dessus, qui jette un  coup d’œil rapide à toutes ses plantes, et le voyant  chargé, décide de l’aider.  


— Laissez-moi vous tenir la porte, attendez !  


— Ah, merci c’est gentil ! Bonne soirée !  


Denis d’ordinaire bavard, n’ajoute pas un mot, bien  trop pressé de retourner à ses pinceaux.  


Et le temps passe. Denis peint.  


Il peint toutes les variantes possibles de ce petit  prototype original sur un bout de carton.  


Du pop’art, du cubisme, du surréalisme, des peintures  psychédéliques, des peintures réalistes, enfin, tout ça à  hauteur de ses compétences en tout cas.  


Il se renseigne sur les techniques, et sans être des chefs  d’œuvre, il est fier de voir sa maison se remplir jour après  jour.  



Lorsqu’il fait des pauses, c’est pour observer les oiseaux  à la fenêtre.  


Mais il remarque aussi que ses tableaux ne passent  pas inaperçus : le voisin de l’immeuble d’en face, Elliott  d’après les ouïes dire, semble regarder ses peintures  d’un air curieux, mais assez fermé.  


Denis doute, et ça l’intrigue. Sont-elles si laides ? Ou  est-il jaloux ?  


Il ignore comment interpréter ce regard, mais il ne se  démonte pas.  

Demain, il ira le saluer, et compte bien briser la glace  en lui offrant l’une de ses œuvres pour fêter son récent  emménagement.  


Elliott sera son premier critique, espérons qu’il aime les  fleurs.
`,
 118: `Le courrier s’accumule depuis trois jours dans la boîte  aux lettres.  

Fatima sait qu’elle devrait descendre le chercher, mais  l’idée de croiser quelqu’un dans le hall la paralyse. Alors  elle reste là, dans son appartement du premier étage,  à compter les heures qui la séparent de la tombée de  la nuit.  


Vingt-trois heures. C’est l’heure idéale. L’immeuble  dort, les couloirs sont vides, et elle peut enfin respirer.  Fatima a trente-huit ans et travaille comme correctrice  pour une maison d’édition. Un métier parfait pour  quelqu’un comme elle : tout se fait à distance, par  courriel, sans contact humain. Elle corrige des romans,  des essais, des manuels scolaires. Elle traque les virgules  manquantes, les accords défaillants, les phrases  bancales. Elle excelle dans l’invisible.  



Ce soir de janvier, elle enfile son peignoir par-dessus  son pyjama et glisse ses pieds dans ses pantoufles usées.  Avant de sortir, elle vérifie trois fois que ses clés sont bien  dans sa poche.  

Perdre ses clés serait une catastrophe : elle devrait  appeler quelqu’un, expliquer, attendre. Non. Impossible.  Le couloir du premier étage baigne dans une lumière  jaunâtre.  


Fatima avance rapidement, les yeux rivés au sol. Elle  compte ses pas. Vingt-trois jusqu’à l’escalier. Elle préfère  les escaliers à l’ascenseur — trop de risques de croiser  un voisin dans cette boîte métallique. 
 


Au rez-de-chaussée, elle se dirige vers les boîtes aux  lettres alignées contre le mur. La sienne, numéro 118,  déborde. Des factures, des publicités, une lettre de sa  sœur qu’elle n’ouvrira probablement pas. Ses mains  tremblent légèrement en récupérant le tout.  


C’est à ce moment qu’elle entend la porte de la  boutique de fleurs s’ouvrir.  



Agnès apparaît, les bras chargés de bouquets qu’elle  rapporte à l’intérieur après une journée de travail. Elle  porte un tablier vert sapin maculé de terre. Quand elle  aperçoit Fatima, elle lui adresse un sourire chaleureux. 

— Bonsoir ! Belle soirée pour récupérer son courrier,  non ?  


Fatima sent sa gorge se serrer. Elle hoche la tête sans  un mot, serre son paquet de lettres contre sa poitrine  comme un bouclier. Agnès ne semble pas remarquer  son malaise, ou fait semblant de ne pas le voir.  

— Je ferme boutique. Ça fait une longue journée.  



Vous habitez au premier, c’est ça ?  


Nouveau hochement de tête. Les mots refusent de  sortir.  


— Moi aussi ! lance Agnès avec entrain. On est voisines  alors. Je suis au 112, avec mon chien Ernest. Si jamais  vous avez besoin de quoi que ce soit, n’hésitez pas !  


Fatima articule un merci presque inaudible et se  précipite vers l’escalier. Dans sa hâte, une enveloppe  lui échappe et vole jusqu’aux pieds d’Agnès. 

 — Attendez ! Vous avez perdu...  


Mais Fatima est déjà dans l’escalier, fuyant cette  interaction qui lui brûle la peau.  

De retour dans son appartement, elle s’effondre sur  son canapé, le cœur battant.  


Pathétique. Elle est pathétique.  


Incapable d’avoir une conversation normale avec  une voisine qui se montre simplement aimable. Elle ferme les yeux et attend que les battements de son  cœur ralentissent.  

Les jours suivants s’écoulent dans leur routine habituelle.  Fatima corrige des manuscrits, commande ses courses  en ligne, évite le monde.  


Le vendredi soir, alors qu’elle sort ses poubelles à minuit  — encore une fois pour éviter les regards —, elle trouve  une enveloppe glissée sous sa porte.  


À l’intérieur, la lettre qu’elle avait laissé tomber,  accompagnée d’un petit mot griffonné sur du papier à  en-tête de la boutique de fleurs.  


<em>Bonsoir voisine ! J’ai ramassé votre courrier l’autre soir.  J’espère que ce n’était rien d’important. Bonne soirée. Agnès. </em>

Fatima fixe le mot pendant plusieurs minutes. Un  geste simple, sans jugement, sans attente. Elle devrait  descendre remercier Agnès. Elle devrait au moins lui  glisser un mot sous sa porte. Mais l’idée de cet échange,  même écrit, la terrifie.  



Elle range le mot dans un tiroir et essaie de l’oublier.  Les semaines passent.  

Février arrive avec ses tempêtes de neige qui  bloquent la ville. Fatima reste cloîtrée chez elle,  travaillant sur un manuscrit particulièrement ardu —  un roman psychologique dense et sombre. L’auteure  écrit sur la solitude, l’isolement volontaire, la difficulté  de se connecter aux autres. Fatima se reconnaît dans  chaque page.  


Un samedi matin, on frappe à sa porte. Trois coups  fermes. Fatima se fige sur son canapé. Elle ne répond  jamais. Les gens finissent toujours par partir.  
— Madame Fatima ? C’est Marie-Chantal , du 110. 


Je suis une ancienne infirmière, je fais une tournée dans  l’immeuble pour vérifier que tout le monde va bien  après la tempête. Vous allez bien ?  


Fatima reste silencieuse, retenant son souffle.  — Je vois de la lumière sous votre porte, continue la  voix. Si vous allez bien, toquez une fois au mur pour me  rassurer. Sinon, je vais devoir demander à la gardienne  d’ouvrir.  


À contre-cœur, Fatima se lève et donne un petit coup  contre le mur.  


— Parfait ! Merci. Si vous avez besoin de quoi que ce  soit, n’hésitez pas !  


Les pas s’éloignent dans le couloir. Fatima retourne  s’asseoir, troublée. Ses voisins s’inquiètent pour elle. Ils la  remarquent, même dans son invisibilité soigneusement  cultivée.  

Le manuscrit qu’elle corrige contient un passage qui  la frappe particulièrement ce jour-là. Le personnage  principal parle de sa peur des autres, de cette terreur  qui l’empêche de vivre pleinement. La solitude est une  prison confortable, écrit l’auteure. <em>On finit par aimer ses  barreaux. </em>


Fatima pose son stylo rouge et regarde par la fenêtre.  De l’autre côté de la cour intérieure, elle aperçoit un  homme à sa fenêtre. Elliott, le nouveau locataire d’en  face. Elle le voit souvent ainsi, perdu dans ses pensées,  son chat à ses côtés. Lui aussi semble seul. Mais au  moins, il sort. Elle l’a vu promener son chat, parler avec  les voisins, vivre.  

Ce soir-là, Fatima fait quelque chose d’inhabituel. Elle  descend à vingt heures, pas à vingt-trois heures. Le hall  est vide, comme d’habitude à cette heure, mais elle a  brisé son rituel. C’est un petit pas, minuscule, mais c’est  un pas quand même.  


En remontant, elle croise la gardienne qui sort de son logement avec sa fille.  


— Bonsoir ! lance la femme.  


— Bonsoir, répond Fatima.  


Le mot sort tout seul, presque sans effort.  


La gardienne sourit et continue son chemin avec la  petite. Rien de dramatique ne s’est produit. Le monde  n’a pas explosé.  

Dans son appartement, Fatima remarque pour la  première fois un détail qu’elle avait oublié.  Sur le mur de son salon, un petit tableau qu’elle avait  acheté dans une brocante des années plus tôt. Une  aquarelle représentant une rose blanche sur fond bleu  pâle. Elle ne se souvient même plus quand elle l’a  accroché là.  


Elle s’approche et observe la fleur peinte. La rose  est simple, délicate, presque fragile. Mais elle est là,  présente, visible.  

Fatima retourne à son ordinateur et ouvre un nouveau  document. Pour la première fois depuis des années, elle  écrit quelque chose qui n’est pas une correction. Elle  écrit pour elle-même.  

<em>Je m’appelle Fatima. J’ai trente-huit ans. Je vis seule.  J’ai peur des gens. Mais peut-être que demain, je  descendrai à dix-neuf heures.  </em>


Elle sauvegarde le fichier et ferme l’ordinateur.  Dehors, la neige tombe doucement sur Rosemont.  Dans l’appartement d’en face, Elliott éteint sa lumière.  Le monde continue de tourner, avec ou sans elle.  


Mais peut-être, juste peut-être, qu’elle pourrait en  faire partie. Un jour. Un petit pas à la fois. 
`,
214: `Le thermostat affiche 15 degrés. Encore.  

Marcus Tremblay soupire en posant sa main sur  le radiateur froid. Trois jours que le chauffage ne  fonctionne plus dans son appartement du deuxième  étage, et le propriétaire ne répond toujours pas à ses  messages. Dehors, la neige de janvier transforme le  Vieux Rosemont en carte postale glaciale. Dedans, son  souffle forme de petits nuages blancs. 


Marcus enfile un deuxième chandail par-dessus  son hoodie. À vingt-neuf ans, il pensait avoir dépassé  l’époque des appartements mal entretenus. Mais après  sa rupture avec Émilie en octobre, il a dû se trouver  quelque chose rapidement, et le 214 était abordable.  Trop abordable, visiblement. 


Il attrape son téléphone pour la cinquième fois de  la matinée. Toujours rien. Il hésite, puis décide d’aller  frapper chez quelqu’un. N’importe qui. Peut-être que  d’autres locataires ont le même problème. 

Dans le corridor, il aperçoit Marguerite Dufresne qui  monte l’escalier avec une lenteur calculée, agrippée à  la rampe. La vieille dame du 502 porte un manteau de  laine rose vif qui jure glorieusement avec le papier peint  défraîchi des murs. 


— Madame Dufresne, bonjour. Est-ce que votre  chauffage fonctionne bien ?  


Elle s’arrête à sa hauteur, le dévisage de ses petits  yeux vifs derrière ses lunettes à monture dorée. 


— Évidemment qu’il fonctionne. Pourquoi tu me  demandes ça, le jeune ? 


Marcus explique sa situation. Le visage de Marguerite  se transforme, passant de la curiosité à l’indignation  théâtrale. 


— Trois jours ! Ce Gagnon, je te jure. Un vrai sans-cœur.  Elle fouille dans son sac à main démesurément grand.  Tiens, prends ça.  


Elle lui tend une carte de visite froissée. 


— C’est mon neveu. Il fait de la plomberie et du  chauffage. Dis-lui que tu viens de ma part, il va venir  tout de suite. 


Marcus hésite. 


— Je ne suis pas sûr que le propriétaire apprécie que  je fasse venir quelqu’un sans son accord.  


Marguerite éclate d’un rire sec.  


— Mon petit Marcus, il t’a laissé geler pendant trois  jours. Tu penses qu’il se soucie de ton accord, lui ?  Appelle mon neveu. Je vais m’occuper de Gagnon. 


Elle a déjà son propre téléphone en main, composant  un numéro avec une détermination guerrière. Marcus  ne sait pas s’il doit être soulagé ou terrifié. 

De retour dans son appartement, il observe le désordre  qui y règne. Depuis la rupture, il a du mal à maintenir  l’ordre. Des boîtes de carton non défaites traînent  encore près du mur, vestiges d’un emménagement  qu’il n’a jamais vraiment terminé. Sur l’une d’elles, il  remarque pour la première fois un dessin maladroit  au marqueur : une rose, probablement tracée par le  précédent locataire ou un déménageur distrait. 


Il appelle le neveu de Marguerite. Quinze minutes plus  tard, un type dans la quarantaine sonne à sa porte,  boîte à outils en main. 

— Steve Dufresne. Ma tante m’a appelé. Paraît que  t’es en train de virer popsicle ? 
 

L’inspection est rapide. Le problème vient du radiateur  lui-même, une vieille pièce qui a rendu l’âme. Steve  secoue la tête en sifflant entre ses dents. 

— Ça fait au moins vingt ans que ça aurait dû être  remplacé. Je peux te le réparer temporairement, mais il  va falloir changer l’unité complète.  


Marcus calcule mentalement son budget déjà serré.  Steve semble lire dans ses pensées. 


— T’inquiète, je vais facturer le propriétaire directement.  Ma tante a déjà arrangé ça.  


Marcus ne sait pas ce que Marguerite a bien pu dire à  son neveu, mais il décide de ne pas poser de questions.  Steve travaille pendant une heure, manipulant des  tuyaux et des valves avec l’aisance d’un chirurgien.  

Marcus en profite pour commencer à défaire quelques  boîtes, histoire de ne pas rester planté là comme un  piquet. 


Il tombe sur une photo d’Émilie et lui, prise l’été dernier  au parc La Fontaine. Ils avaient l’air heureux. Ils l’étaient,  probablement. Avant que tout ne devienne compliqué,  avant les disputes sur l’avenir, les reproches muets, le  silence qui s’était installé entre eux comme un troisième  colocataire indésirable. 

— Ça devrait tenir quelques jours, annonce Steve en se  relevant. Mais sérieusement, faut que le proprio change  cette unité. Je vais lui envoyer un rapport détaillé. » 


La chaleur commence déjà à revenir. Marcus sent  ses épaules se détendre, une tension qu’il n’avait pas  réalisée disparaissant progressivement. 

Le lendemain matin, on frappe à sa porte. C’est  Marguerite, un tupperware dans les mains. — Du ragoût. Tu dois reprendre des forces après avoir  passé trois jours dans un congélateur.  


Marcus accepte le plat avec un sourire reconnaissant. 


— Merci, madame Dufresne. Et merci pour votre  neveu, il a vraiment sauvé ma semaine.  


Elle fait un geste de la main, balayant ses  remerciements. 


— C’est normal, on est voisins. Et puis, j’ai pas fini avec  Gagnon. Il va installer une nouvelle unité cette semaine,  sinon je le traîne au tribunal des locataires.  


Marcus rit. Il commence à comprendre pourquoi  tout le monde dans l’immeuble semble connaître et  respecter Marguerite Dufresne. 


— Au fait, ajoute-t-elle avant de partir, t’as l’air d’un  bon garçon. Mais cet appartement est en désordre.  Défais tes boîtes, accroche des cadres, fais-en un vrai  chez-toi. Tu ne peux pas vivre comme un fantôme dans  ton propre appartement. 

Elle a raison, évidemment. Une fois seul, Marcus regarde  autour de lui. Le chauffage fonctionne, l’appartement  se réchauffe, mais il reste froid d’une autre manière. Ce  n’est pas encore un chez lui. C’est juste un endroit où il  dort, où il évite de penser à Émilie. 
Il commence à défaire les boîtes, une par une. Il trouve  ses livres, ses vinyles, une lampe qu’il aimait bien. Il  range, organise, transforme progressivement l’espace.  La photo avec Émilie, il la glisse dans un tiroir. Pas pour  l’oublier, mais pour avancer. 

Quand il se couche ce soir-là, l’appartement 214 est  encore loin d’être parfait. Mais il est chaud, rangé.  

Et pour la première fois depuis octobre, Marcus se dit  qu’il pourrait peut-être s’y sentir chez lui.
`,
 502: `Le silence des livres n’est pas le silence des hommes.  Cette vérité, Marguerite Dufresne l’a comprise après  quarante-trois ans passés entre les rayonnages de la  Bibliothèque nationale. Maintenant, à soixante-dix 
huit ans, retirée dans son appartement du cinquième  étage, elle découvre que le silence de la solitude a une  tout autre résonance.  

Ce matin de février, Marguerite se lève avec le soleil.  C’est une habitude qui lui reste de ses années de travail,  quand elle ouvrait la bibliothèque à huit heures pile. Elle  prépare son thé Earl Grey dans la théière de porcelaine  héritée de sa mère, puis s’installe dans son fauteuil  face à la fenêtre. De là, elle voit la cour intérieure et les  fenêtres des voisins qui s’éveillent peu à peu.  

Son appartement est un sanctuaire de papier. Des  bibliothèques couvrent chaque mur, du sol au plafond.  Romans, poésie, philosophie, histoire — toute une vie  de lecture accumulée. Sur la table basse, une pile de  livres neufs attend d’être catalogués dans son système  personnel, une manie qu’elle ne peut abandonner. À  côté, dans un verre d’eau, une rose blanche qu’elle  a achetée hier chez la petite Agnès du premier. La  fleuriste lui fait toujours un prix, sachant que la pension de Marguerite ne permet pas beaucoup d’extravagances.  

Elle ouvre le carnet où elle note ses observations  quotidiennes. C’est devenu son projet depuis la  retraite : documenter la vie de l’immeuble comme on  documenterait un écosystème. Ce matin, elle écrit : 
 
<em>7h12 – Le jeune homme du 316, James , sort avec son  sac de sport. Expression fatiguée. Probable insomnie.  


7h23 – Madame Leclercq du 312 arrose ses plantes  sur le balcon. Robe de chambre bleue. Semble sereine.  


7h45 – Francis  du 608 rentre de son shift de nuit en  taxi. Démarche lourde. La fatigue des années.  </em>


Marguerite pose son stylo et sirote son thé. Elle pense  à tous ces gens qu’elle observe sans vraiment les  connaître. Parfois, elle aimerait descendre frapper à  leurs portes, partager un café, échanger des histoires.  Mais quelque chose la retient. La peur du rejet, peut 
être. Ou simplement l’habitude de la distance.  

Le téléphone sonne, brisant sa rêverie. C’est sa nièce,  Sophie, qui appelle de Toronto.  


— Tante Marguerite ? Comment vas-tu ?  


— Bien, ma chérie. Je lisais.  


— Toujours en train de lire ! Tu devrais sortir plus, te faire  des amis dans l’immeuble.  


Marguerite sourit tristement. Sophie ne comprend pas  que les livres sont ses amis les plus fidèles. Ils ne jugent  pas, ne déçoivent pas, ne partent pas.  

Après l’appel, elle décide de descendre chercher son courrier. Dans l’escalier, elle croise le jeune Antony du  512 qui monte les escaliers quatre à quatre, un sac de  matériel artistique à l’épaule. Il la salue poliment mais ne s’arrête pas. Marguerite se souvient de l’époque  où les gens prenaient le temps de bavarder dans les  escaliers.  


Dans le hall, elle trouve une enveloppe dans sa boîte.  Pas une facture cette fois, mais une vraie lettre, écrite  à la main. L’adresse de l’expéditeur lui coupe le souffle.  


C’est celle de Paul Létourneau, un ancien collègue de la bibliothèque qu’elle n’a pas vu depuis dix ans.  Elle remonte précipitamment, le cœur battant comme  celui d’une adolescente. Dans son appartement, elle  s’assoit et ouvre délicatement l’enveloppe. 
<em>Chère Marguerite,  


J’espère que cette lettre te trouvera en bonne santé.  J’ai eu ton adresse par Claudine qui travaille encore  à la bibliothèque. Je sais que cela fait longtemps,  trop longtemps peut-être, mais je pense souvent à  nos discussions sur Proust et Modiano, à nos débats  passionnés sur la classification Dewey. 

 
Je serai à Montréal la semaine prochaine pour une  conférence sur les archives numériques. J’aimerais  beaucoup te revoir, si tu le souhaites. Peut-être pourrions nous prendre un café, comme au bon vieux temps ?  Avec toute mon affection, Paul  </em>

Marguerite relit la lettre trois fois.  


Paul.  


Elle se souvient de ses yeux gris derrière ses lunettes  rondes, de cette façon qu’il avait de caresser la  couverture des livres anciens. Il y avait eu quelque  chose entre eux, jamais dit, jamais agi, mais présent  comme une promesse suspendue.  


Elle passe l’après-midi à hésiter.  


Répondre ou non ? Le revoir pourrait être merveilleux  ou terriblement décevant. Les années ont passé, ils  ont changé. Elle n’est plus la bibliothécaire élégante  qu’elle était, mais une vieille dame aux cheveux blancs  et aux mains tachées.  

Le soir tombe. La rose blanche dans son verre  commence à s’ouvrir davantage, libérant un parfum  délicat. Marguerite la contemple et y voit soudain une  métaphore : même tard dans la saison, même seule  dans son verre, la fleur ose encore s’épanouir. 

Elle prend une feuille de papier et commence à écrire. 

<em>Cher Paul,  
Ta lettre m’a touchée plus que tu ne peux l’imaginer... </em> 

Dehors, les lumières de l’immeuble s’allument une à  une. Marguerite écrit, et pour la première fois depuis  longtemps, le silence de son appartement ne lui pèse  plus. Il est plein de possibilités.
`,
 616: `Un matin d’octobre à Rosemont. Le soleil s’infiltre  à peine par les rideaux défraîchis de l’appartement  616, joue à cache-cache avec les volutes de fumée  stagnantes. Sur la table basse, trois canettes vides,  une bouteille de gin à moitié entamée, et un cendrier  débordant de cendres et de silences écrasés. 


Sur le chevalet, une toile se dresse comme un songe  figé : une rose blanche, gigantesque, souffle figé au  cœur du tableau mais sa blancheur, traversée par la  lumière hésitante du matin, se pare de reflets colorés.  Elle change, elle veille. 

Roméo, la quarantaine perdue entre deux soirs,  s’éveille dans un canapé-lit qui retient l’empreinte de  ses dérives. Son crâne bourdonne, sa gorge râpe le  silence. Il se détache du coussin avec la lenteur d’un  homme qui revient de loin. Une chemise froissée sur le  dos, il dérive jusqu’à la cuisine. Le café goutte.  


Il fouille, farfouille, exhume son carnet noir. Pas celui  des croquis : l’autre. Celui des éclats. 


Des phrases volées au néant, titres d’ombres, fragments  de soi. Aujourd’hui : <em>tout ce qui pourrit nourrit. </em>

Il a été quelqu’un, autrefois.  


Un nom dans une galerie de Toronto, des regards  suspendus à ses toiles, des amants oubliés avant  l’aube. Puis vient l’épuisement du feu. Le blanc qui  avale. L’alcool qui s’installe comme un brouillard toléré.  Maintenant, il habite ici. En repli. En veille. 

Le mercredi, le voisin du 718 fait parler son saxophone. Ça râle, ça grince, ça cherche une issue. 


Roméo ignore son nom, mais attend ce cri de cuivre  comme une délivrance. Il s’assoit, tasse en main, face  à la rose. Il ajoute une ombre. Une respiration lumineuse  sur le bord d’un pétale. Il peint sans comprendre. Il peint  comme on expire. 

Deux semaines passent. Puis une nuit. Il rôde dans la  cour, cigarette allumée comme un phare sans mer.  En face, une femme arrose ses plantes. Silencieuse.  Les bras tatoués d’histoires, un foulard qui retient la  nuit. Une tige de rose blanche serpente le long de son  poignet. Il retient son souffle. Il remonte, gribouille dans  le noir : <em>elle arrose le silence. </em>

Les jours se fondent. Il boit encore, mais autrement. Moins pour fuir, plus pour brouiller les contours. Il repeint, rature ses propres légendes. Il colle, juxtapose  
des plumes, des capsules rouillées, des souvenirs sans  attaches. Il compose un langage de désordre. 
Un matin, une lettre. Glissée sous la porte, comme  une caresse égarée. Papier épais. Odeur d’encre et de  cèdre. Quelques mots tracés à la main : je vois vos toiles  par la fenêtre.  

<em>Je ne sais pas qui vous êtes, mais ce que vous faites  me touche. Continuez.</em>  

Aucune signature. Juste cette vibration anonyme,  douce, inespérée. Il plie le billet, l’insère dans le carnet  noir.  


Ce jour-là, il ne boit pas. Il peint. Longtemps. Jusqu’à  la nuit. Et la rose devient lumière. Immense. Iridescente  de gris, et d’ombre tendre. 
Il ne découvrira jamais l’auteur des mots. Mais il rêve parfois d’une femme aux bras constellés  d’encre, qui peindrait avec ses larmes et du silence. Parfois, il se surprend à guetter, à travers les rideaux,  les allées et venues d’une silhouette calme du troisième  étage.  



Une femme seule, souvent penchée sur un livre ou une  plante. Il ne connaît pas son nom. Il l’imagine brodeuse  de silences, peut-être aquarelliste du dimanche, peut-être celle qui lui a écrit. Peut-être pas.  

Mais chaque fois qu’il aperçoit ses gestes simples : une  tasse levée, une fenêtre entrouverte. Il se dit que c’est  possible.  

D’être vu sans être jugé.  


D’être touché sans être sauvé.  


Et ça lui va.
`,
RDC : ` Christelle Mercier sentait l’odeur lui monter au nez.  Une odeur rance, métallique, une odeur qui la pétrifiait  sur la chaise de son bureau.  


Elle n’osait plus vraiment se retourner vers le coin du  cagibi depuis cette soirée-là, elle ne voulait pas s’en  souvenir, les souvenirs étaient insoutenables. Elle n’aurait  pas dû, ce n’était pas à elle de faire justice en ce bas  monde.  


Elle regrettait son geste, mais elle ne pouvait plus  revenir en arrière. Elle avait fait de son mieux pour le  dissimuler, mais l’odeur commençait à se sentir dans  tout le rez-de-chaussée, il fallait la faire disparaître pour  de bon.  

M. Paquette… pourquoi avait-il encore balancé son  sac poubelle pestilentiel au milieu de l’entrée ?! Elle passait son temps à désinfecter et frotter, c’était  d’un tel emmerdement, pas étonnant que Mathilde  se soit échappée pour réviser ailleurs, l’espace clos du  cagibi lui faisait horreur.  


L’horreur, oui, c’est une horreur, ce Cif acheté en  réduc.  


Sinon, elle la vivait bien sa vie. 

— On n’est pas malheureux.  


— Pardon ? 


Anthony Gracier se retourna alors qu’il signait la  relocation de son box de garage. 


— Oh rien, je marmonne. Si seulement les gens  pouvaient être plus respectueux… 



À ces mots, il blanchit. Il l’avait vue, l’autre soir. Elle  était à côté de l’arbre près du cabanon du jardin  communautaire. Le trou était profond. Il ne se demandait  plus pourquoi. Ce sac, elle l’avait déposé au fond.  


Pourquoi enterrer un sac à une heure pareille ?  Il resta quelques secondes au bord du trou, avant de  finalement lâcher : 


— Il l’avait pourtant bien cherché.  


Il crut défaillir. Le mal était donc dans toutes les âmes,  toutes les têtes, tous les gestes. Il savait, il devait vivre, il  ne fallait pas qu’elle sache qu’il avait vu. 


— Pauvre chat, quand même. 


Entendant cela, il éclata d’un rire nerveux tel qu’elle  releva aussitôt la tête, l’apostrophant. 


— C’est le chat de votre voisine, je vous signale.  


— Désolé, Christelle. 

Elle repartit sans un mot, longeant l’immeuble avant  de rentrer dans sa loge. 


Depuis ce jour, Monsieur Gracier se dit qu’elle doit  sûrement le voir comme une sorte de cynique à  l’humour discutable.  


Christelle, elle, se dit que c’est un énergumène  sympathique mais quelque peu solitaire. En outre, elle  caresse le doux rêve de pouvoir un jour admirer ses  productions. La curiosité de ses trois enfants déteint  sur elle, c’est certain qu’ils la rajeunissent, néanmoins,  en tant que gardienne, elle se doit de faire preuve de  retenue. 


— Mais quand même, il est bizarre, le monsieur ! 


Ambroise venait de sortir de l’appartement, regardant  fixement cet artiste, amusé de voir un être en pyjama  pilou le menacer d’une épée en déblatérant. 


— Ambroise, j’ai bientôt terminé et ne dis pas des  choses pareilles !  



— Il fait de la peinture ? demanda-t-il en pointant du  doigt M. Gracier couvert d’une palette de peinture dans les tons jaune orangé. 



Christelle regarda M. Gracier avec un regard empreint  d’excuses, auquel celui-ci répondit en levant son doigt  vers le plafond, à sa plus grande surprise.  


Elle ne se fit pas vraiment prier, suivant l’artiste dans  les escaliers, le petit Ambroise dans les bras. S’arrêtant  sur le pas de la porte qu’il venait d’ouvrir, elle regarda  fixement l’encadrement de la porte, les plaintes, le  papier peint, à la recherche d’une quelconque trace  d’usure.  


Ce qui lui tira un sourire, lequel s’étira lorsqu’elle posa  ses yeux sur les toiles de Gracier. Des fleurs flottant à la  surface de l’eau dans une crique, des pots au milieu  d’un océan, des formes strictes au milieu de l’informe. 

— C’est le niveau zéro de la créativité. Mais j’en suis  assez fier, c’est des heures de travail pour un projet  qui restera au mur des gens pour des décennies,  commenta-t-il.  


— Vous vous contentez de cela ? 


Elle s’avança au-devant du modèle, dans la lumière  de la fenêtre, pot en terre cuite dans lequel flottaient  des pétales de coquelicots.  


Sur la table en bois du salon séchaient des tulipes,  d’autres coquelicots, et çà et là, des roses blanches. Un  crève-cœur sur lequel la gardienne de dizaines d’âmes  ne s’attarda pas. 


— Je voudrais faire mieux, bien sûr, dit-il en lui servant  un thé noir dans une tasse de porcelaine hors d’âge. S’asseyant en face de lui à la table de séchage, elle  le jugea du regard. Sa jeunesse d’artiste lui manquait.  Ce désir de donner au cubisme sa touche personnelle.  Personne ne s’était intéressé à cela, le père de ses  enfants non plus. La vie ne lui avait pas permis de s’y  consacrer. 


— Il vous faut un nouveau point de vue.
 

Portant la tasse à ses lèvres, Ambroise endormi, elle  sentit enfin qu’elle pourrait s’accorder un peu de  temps profitable en dehors de ce curieux devoir de  gardiennage qui la rapprochait au plus près des gens  tout en dressant une barrière. 

Les visites devinrent hebdomadaires. 
`,
706: `Le jour ne s’est pas encore levé, mais Arlette, elle, est  déjà éveillée. 


Cela fait longtemps que le sommeil n’habite plus  chez elle. Il passe parfois, sans s’annoncer, laisse son  manteau sur le dossier d’une chaise, s’assoit un instant.  Puis repart. Alors elle reste là, les yeux ouverts dans  l’ombre, à écouter le monde respirer sans elle. 

Chaque matin se ressemble, et c’est ce qui la rassure.  Elle repousse lentement les draps, cherche ses chaussons  du bout des orteils, se redresse avec précaution. Son  corps ne se presse plus. Il connaît le prix des gestes trop  vifs. Elle marche sans bruit jusqu’à la cuisine. La lumière  est pâle, presque bleue. 


Elle n’allume pas tout de suite. Elle aime ce moment  suspendu, entre nuit et jour, quand même les objets  semblent hésiter. 


Le sifflement de la bouilloire devient son premier  compagnon. Elle verse l’eau sur le sachet de thé comme  on verse une prière. Puis elle s’assoit à sa place, toujours  la même, face à la fenêtre. Le rebord est étroit mais  stable. Elle y pose sa tasse, ses coudes, ses pensées.  

Dehors, le quartier dort encore sous le souffle de  décembre. Les arbres du square ont perdu leurs  dernières feuilles. Le trottoir brille d’un givre discret. Et  sur le bord opposé de la rue, la boutique de la fleuriste  repose derrière sa grille, close comme une paupière.  Arlette la regarde souvent. Elle ne sait plus depuis quand  la boutique a changé de mains.  


Longtemps, c’était une femme plus âgée qui y tenait les fleurs, une certaine Madame Dubois1, si sa mémoire  est bonne.  


Elles ne se parlaient pas vraiment, mais il lui arrivait de  la croiser au marché, une rose blanche dépassant de  son panier.  



Il lui semble parfois la voir encore, silhouette fragile,  marchant à petits pas vers l’arrêt de bus. Peut-être vit elle encore dans l’immeuble, peut-être pas. Arlette ne  descend plus assez pour le savoir.  


Mais elle pense à elle, parfois, quand elle arrose ses  propres plantes ou lorsqu’un pétale tombe sans bruit sur  la table. Il n’y a pas de hasard dans les coïncidences  de fleurs. Les silences entre les mots en disent toujours  plus. 

Elle ne sort presque plus. Son corps est devenu un  territoire prudent. Son souffle s’économise. Elle vit dans  le cercle étroit de son appartement, entre la chaise  près de la fenêtre, la table où reposent ses lunettes,  et le fauteuil au tissu fané où elle s’installe l’après-midi,  pour penser. Penser longtemps. 

Penser sans chercher. Ce n’est pas de la mélancolie.  C’est une autre forme de présence.  


Dans ce fauteuil, elle tient souvent un mouchoir.  Blanc. Broderie ancienne. Une rose cousue à la main,  fine, un peu effacée par le temps. Elle ne se souvient  plus exactement quand elle l’a faite.  


Peut-être l’année de leur quarantième anniversaire,  peut-être avant. Ce n’est pas important. Ce qui compte,  c’est que la rose est là. Toujours là. Discrète. Silencieuse. 

Arlette pense souvent à Antoine. Son mari. Parti depuis  longtemps maintenant. Mais parfois, elle sent encore  son souffle dans la pièce. Elle ne l’imagine pas, elle ne le  convoque pas. Il est là. Dans un froissement de rideau.  Dans une ombre au mur. Dans le souvenir d’un éclat de rire qui ne lui appartient plus. 

L’après-midi, le soleil s’incline, doux et bas, caresse le  parquet usé de son salon. Elle ferme les yeux. Écoute le silence. Elle n’a plus besoin de radio, ni de  télévision. Le craquement des tuyaux, le soupir du frigo,  les pas timides des voisins dans l’escalier lui suffisent. 

Elle pense parfois à la mort. Pas comme une fin. Plutôt  comme une grande porte, entrouverte, au bout d’un  couloir familier. Elle ne la craint pas. Elle l’apprivoise, à  petites touches. Elle sait qu’elle viendra. Doucement.  Sans fracas. Et elle espère seulement ne pas être triste  ce jour-là. Elle ne veut pas partir avec le cœur pluvieux.  Elle voudrait que la dernière chose vue soit un peu de  lumière. 


Ou un pétale blanc, tombé sur la table, comme un  adieu sans drame. 

Le soir venu, elle s’assoit encore une fois près de la  fenêtre. Elle regarde la rue s’endormir. Elle ne cherche  rien. Elle ne regrette pas. Elle veille, comme on garde le  feu d’une lampe ancienne, sans trop y croire, mais sans  l’éteindre non plus. 

Et quand elle éteint la lumière, quand tout devient  calme, elle reste un moment dans le noir. 


À attendre. Pas la fin. Mais une dernière paix.
`,
300: `Jocelyn avait le teint blafard, semblable à celui des  cadavres après avoir été nettoyé et préparé à la  crémation.  


Cela faisait quelques jours qu’il y pensait. En boucle.  Une vie de minable, un job minable, minable,  minable, minable. Les mots faisaient des vagues dans  son cerveau, on se rapprochait presque d’un tableau  d’Hokusai, l’angoisse montait. La phrase de Jeanne  résonnait dans sa tête, cette toute petite phrase de rien  du tout qui l’avait pourtant frappé comme une boule  de pétanque en train de faire un strike.  

<em>De toute façon, tu t’en fiches Jocelyn, c’est pas  comme si ta vie était une grande réussite jusqu’à  présent. </em>

Faire des folies au casino, boire des cocktails trop  chers et rentrer éméché à une heure déraisonnable,  adopter un teckel et lui faire porter un pull tricoté à pois  colorés. Ne jamais dormir, quitter son travail, emmerder  le monde, rêver plus grand, plus fort, dire tout haut ce  qu’il pense tout bas. Ne jamais se soumettre. Ne jamais  s’abaisser.  


Et pourtant. Pourtant, Jocelyn se réveille à 6h30 tous les  jours, il s’autorise 9h le dimanche, bois un café, s’enfile  une ou deux tartines beurrées, laisse un petit mot s’il a le  temps à sa colocataire — parfois juste un smiley, parfois  un désolé, fais pas ma vaisselle stp — va au travail, cours  à la salle de sport, rentre chez lui.  

S’il est chanceux, un ami lui aura envoyé un message,  une vidéo Instagram, un petit signe qui montre qu’on a  pensé à lui au moins une fois, dans cette longue, longue  journée. 

Madame Dufresne devait probablement l’observer,  depuis sa fenêtre. Il la voyait tous les matins. Parfois,  quand il était bien luné, il lui faisait un petit signe.  
Une petite attention, pensait-il. Elle est vieille, les  habitants de l’immeuble étaient certes amicaux,  prévenants, mais elle restait seule.  

Ce matin, pas de geste. Un air renfrogné, rien d’autre,  un petit froncement de sourcils qui créaient une Tour  Eiffel miniature sur son bas front. <em>Elle écrira que j’étais  de mauvaise humeur, se dit-il en haussant les épaules.  


Tant pis. </em>

Revenons à nos moutons. Jocelyn en avait marre de  la routine. Plus qu’un mécontentement passager, il la  tenait en horreur. Il ne se supportait plus, l’incessant  métro-boulot-dodo l’agaçait au plus haut point, il  voulait tout claquer. 

 
Tout claquer d’accord, mais pour quoi faire ? Devenir  serveur de donuts glacés au Costa Rica. S’associer avec  Agnès et devenir fleuriste ? Il adorait les fleurs. Surtout les  roses blanches. Il les aimait tellement qu’il avait mis en  fond d’écran celle que sa nouvelle colocataire, Marie  Ange, lui avait offerte, pour se faire pardonner d’avoir  laissé traînées deux trois tasses mal rincées. 

Ainsi, il pouvait la regarder chaque jour, contempler  les pétales un par un, imaginer leur odeur. Qu’est-ce  que ce serait bien d’être fleuriste.  

Son père lui avait toujours ri au nez lorsqu’il lui en  parlait. Depuis l’enfance, il était fasciné par le jardin  familial, dans lequel sa mère cultivait toutes sortes de fleurs, feuillus et légumes. Il venait parfois l’aider, était  fier de porter une combinaison en jean, toute tâchée,  spécialement prévue pour l’occasion. 


Le jardinage était devenu son bal de fin d’année. Il  humait les fleurs, coupait les mauvaises herbes, bêchait  la terre. Il s’imprégnait de toutes ces petites sensations.  Les roses qui écorchaient les mains, la terre qui piquait  les genoux, les feuilles qui caressaient les bras nus. 

 
Son père riait en le voyant revenir. 


<em>On dirait que tu sors d’un champ de bataille ! Va te  laver malheureux.  


Le paternel n’appréciait pas beaucoup le  tempérament mélancolique de son fils.  


Un homme ne passe pas son temps le nez dans les  fleurs, il bâtit des maisons. </em>

Le cliché ne lui faisait pas peur. Jocelyn avait donc  grandi dans cet entre-deux : la douceur maternelle,  la froideur paternelle, bref, une polarité un peu trop  stéréotypée qui lui faisait honte aujourd’hui.  


Malgré tout, l’amour des fleurs ne l’avait jamais quitté.  C’est pourquoi, en quittant l’immeuble comme chaque  matin, il rêvait encore de jardins colorés et de mains  rougies par l’eau gelée et les épines des rosiers. 

Chaque jour, il passait devant la boutique de fleurs  d’Agnès. Chaque jour, pendant une fraction de  seconde, il fermait ses yeux et se laissait aller à une  imagination libérée.  


Il faisait des plans sur la comète, littéralement. La  Comète étant un magasin rempli de plantes colorées.  Son sac de sport commençait à peser sur ses épaules.  Il lui laminait la peau, pressant contre sa clavicule de  manière peu agréable.  


<em>J’ai oublié mes baskets. </em> 


Il lâcha un juron, tout en remontant précipitamment  la cage d’escaliers. En ouvrant la porte, il tomba sur Marie-Ange, le nez dans le placard, en train de faire la  vaisselle, comme à son habitude. 


Que faire ? Plusieurs options s’offraient à lui : Soit, l’ignorer, prendre ses baskets usées, les mettre  dans son sac, repartir. De toute façon, il la reverrait ce  soir, elle vivait ici maintenant. 


Soit, la disputer, et choisir trois option : 


<em>1/ Il était 7h30, elle devrait être en train de dormir. Elle  était en vacances depuis la veille et avait promis de  passer ce temps précieux à ronfler comme la belle au  bois dormant 


2/ Elle était en train de faire sa vaisselle, or, il lui avait  bien spécifié d’arrêter cette manie irritante. 3/Ne jamais repartir, discuter avec elle, appeler  le travail et les prévenir qu’il avait chopé une grippe  carabinée et qu’il lui était impossible de se lever de son  lit. </em>

Il prit une minute pour réfléchir.  


Marie Ange le regardait, tout sourire. Il la trouvait plutôt  jolie.  

Jolie du genre demande en mariage, jolie du genre  très très jolie, du genre faire des enfants jolis.  En plus, sa mère lui demandait sans cesse quand il  comptait lui donner des petits-enfants.  


— Trente-deux ans, ça fait vieux, tu sais ?, lui répétait elle. 

— Je t’avais dit de pas ranger la vaisselle, dit-il, en  s’asseyant sur le canapé. T’étais pas censée dormir  aujourd’hui ?  


Tant pis pour le boulot. Il préférait les fleurs de toute  façon.
`,
102: `Le carrelage froid sous mes pieds nus me rappelle  chaque matin que je suis vivant.  


C’est idiot, mais c’est comme ça.  

Je m’appelle Thomas Rivard, j’ai soixante-deux ans, et  depuis ma retraite il y a trois ans, je me suis découvert  une passion pour les objets qui ne servent plus à rien.  Enfin, qui ne servent plus selon les autres. 

Mon appartement du premier étage ressemble à un  musée du temps passé. Des radios vintages s’entassent  sur chaque surface disponible. Des Philco des années  quarante, des Zenith Trans-Oceanic, des petites  Motorola portables avec leur boîtier en bakélite colorée. 


Certaines fonctionnent, d’autres attendent  patiemment que je leur redonne vie. L’odeur de soudure  et de vieux bois imprègne les pièces. 

Ce matin de novembre, je me réveille avec une  mission précise : réparer la Crosley de 1948 qu’un  collectionneur de Laval m’a confiée la semaine  dernière. Elle appartenait à sa grand-mère. Quand il  me l’a apportée, ses mains tremblaient en la sortant du  carton.  


— Elle écoutait les résultats du hockey dessus, m’a-t-il  dit.  


Je n’ai pas posé de questions. Les objets portent  les souvenirs des gens, c’est quelque chose que je  comprends bien. 

Je prépare mon café dans la cafetière électrique que ma femme Jacqueline m’a offerte avant de partir.  Partir, c’est un euphémisme.  

Elle est morte il y a cinq ans, d’un cancer du pancréas  qui l’a emportée en six mois. Depuis, je vis seul, avec  mes radios. Les gens trouvent ça triste. Moi, je trouve ça  paisible. 

Vers dix heures, on frappe à ma porte. C’est rare.  Je n’attends personne. J’ouvre et découvre un jeune  homme d’une trentaine d’années, l’air embarrassé, qui  porte un sac de sport. 

— Bonjour. Vous êtes bien Thomas Rivard ? Le  réparateur de radios ? 


— C’est moi. Vous avez quelque chose à réparer ? 

— Pas exactement. Je m’appelle Youssef, j’habite  au 414. Je suis mécanicien, et j’ai entendu dire que  vous étiez bricoleur. J’ai un problème avec ma radio  de voiture et personne au garage ne sait comment la  réparer. C’est un vieux modèle Blaupunkt, allemand,  des années quatre-vingt. 


Je le fais entrer. Il sort l’appareil de son sac avec  précaution. Une belle pièce, effectivement. Le boîtier chromé brille encore malgré les années. 

— Elle appartenait à mon père, explique-t-il. Il conduisait  un taxi à Casablanca. Quand il est mort, j’ai récupéré  juste ça. Je l’ai installée dans ma voiture ici, mais depuis  quelques semaines, elle grésille. 

Je prends la radio, la tourne entre mes mains. Mes  doigts reconnaissent les vis, les joints, la structure. Je sais  déjà où chercher. 

— Laissez-la-moi une semaine. Je vais voir ce que je  peux faire. 


— Combien ça coûte ? 


— Rien. Si je peux la réparer, ce sera un plaisir. Il hésite, puis accepte avec reconnaissance.  


Après son départ, je m’installe à mon établi avec la  Blaupunkt.  


J’aime ces moments où le monde se réduit à un  circuit électrique, un condensateur défectueux, un fil  à ressouder. Pas de complication, pas de sentiment  ambigu. Juste de la logique et de la patience. 

L’après-midi file.  

Je travaille sur la Blaupunkt en écoutant une émission  sur ma propre radio, une General Electric de 1952 qui  fonctionne parfaitement. Un animateur parle de la  montée des tensions au Moyen-Orient. Je baisse le  volume. Le monde extérieur peut attendre. 

Vers seize heures, le téléphone sonne. C’est mon fils,  Marc, qui appelle de Vancouver. 


— Papa ? Comment tu vas ? 

— Bien, bien. Je répare des radios. 

— Toujours tes radios. Tu devrais sortir un peu, voir du  monde. 

— Je vois du monde. Un jeune mécanicien m’a  apporté une Blaupunkt ce matin. 

— Papa, tu sais ce que je veux dire. 

Je sais. Il s’inquiète. Il pense que je m’enferme dans  mon appartement avec mes fantômes électroniques. Il  a peut-être raison.

  
Mais qu’est-ce que ça change ? 


— Ne t’en fais pas pour moi. Je vais bien. 


— Maman ne voudrait pas que tu vives comme ça. 


— Ta mère est morte, Marc. Elle ne veut plus rien. Un silence pesant s’installe. Je regrette immédiatement  
mes mots, mais c’est trop tard. On se dit au revoir  poliment et on raccroche. Je reste assis un moment,  fixant le téléphone. 


Jacqueline. Elle me manque encore, même après  cinq ans. Mais je ne sais pas comment l’expliquer à  Marc. Comment lui dire que les radios sont ma façon de continuer à vivre sans elle ? 

Le soir tombe. Je retourne à mon établi. La Blaupunkt  révèle ses secrets petit à petit. Un condensateur grillé,  comme je le pensais. Je cherche dans mes réserves,  trouve une pièce de rechange. En soudant le nouveau  composant, mes mains ne tremblent pas. C’est la  seule chose qui me donne encore cette sensation de  contrôle. 

Vers vingt heures, j’entends de la musique qui monte  du rez-de-chaussée. Christelle, la gardienne, doit  avoir de la visite. Leurs rires traversent le plancher. Je  souris malgré moi. La vie continue, même quand on a  l’impression qu’elle s’est arrêtée. 

Je teste la Blaupunkt. Elle fonctionne.  


Mission accomplie. Demain, j’appellerai Youssef pour  qu’il vienne la récupérer. En rangeant mes outils, mon  regard tombe sur une photo encadrée posée sur une  étagère. 


Jacqueline et moi devant notre première maison, il y  a trente-cinq ans. Elle porte une robe à motifs floraux,  des roses blanches imprimées sur fond bleu. Elle souriait  tellement fort ce jour-là. Nous venions d’emménager,  tout était possible. 


Je prends la photo, la regarde longuement. Puis je la  repose et retourne à mes radios. 


Demain, j’appellerai Marc. Je lui dirai que j’essaierai  de sortir plus. Peut-être que je le ferai vraiment. Ou  peut-être pas.  


Pour l’instant, je suis content d’être ici, dans mon  appartement du premier étage, entouré de voix  venues du passé. C’est ma façon de rester connecté  au monde. Ma façon de ne pas oublier que même les  choses cassées peuvent être réparées.
 `,
210: `Ce matin, je me suis levé en trombe. Encore un cri.  Encore une dispute. Ce n’est pas tant le bruit, ni le fait  d’être réveillé, qui me gêne, mais plutôt de ne pas  comprendre pourquoi elle ne le quitte pas.  

La première fois que j’ai rencontré Lisa Verpillet, c’était  quelques jours après mon arrivée dans l’immeuble. Je  montais mon dernier carton à l’étage lorsqu’un homme  est sorti de l’appartement d’à côté, suivi de cette  femme qui lui jetait un slip au visage. Le sien, j’imagine. 

 — Dégage ! criait-elle. 


L’homme était alors parti en marmonnant quelques  mots, et Lisa m’avait regardé, un peu gênée, mais avec  une douceur que je ne pouvais pas rater. 


— Vous allez bien ? lui demandai-je, timide. 

— J’ai l’air d’aller bien ? répondit-elle en essuyant une  petite larme sur sa joue. 


Elle alla dans l’entrée de son appartement et revint  quelques secondes plus tard, un bouquet de roses  blanches à la main. 


— Prenez-les, je ne veux plus voir cet affreux mensonge  dans mon entrée. 


— Mais... 


À peine avais-je eu le temps de donner mon avis que  la porte claqua aussitôt. Je me retrouvais là, un carton  à la main et des roses blanches au-dessus. 

Cette histoire m’avait quelque peu marquée. Une  jeune femme si jolie, si gentille... 


Comment pouvait-elle rester avec un homme qui ne la respectait pas ? J’ai posé le carton dans mon appartement et observé longuement les roses. Elles  étaient parfaites, immaculées, fraîches comme si elles  venaient d’être cueillies. Je les ai mises dans un vase  que j’avais déniché au fond d’un autre carton, vestige  d’une vie antérieure que j’essayais d’oublier. 
 
Ces fleurs semblaient ne pas appartenir à cette  situation chaotique, à ces cris, à cette violence sourde  qui transpirait à travers les murs. 


Après ça, j’ai gardé les roses blanches et, jusqu’à  aujourd’hui — un mois plus tard — elles vivaient encore.  C’était presque surnaturel. Comme si leur existence  prolongée était le symbole de quelque chose que  je ne comprenais pas encore. Je changeais l’eau  religieusement, coupais les tiges en biseau comme  ma mère me l’avait appris, et chaque matin, elles me  saluaient de leur blancheur entêtée.  


J’ai alors commencé à nourrir une admiration  profonde pour elle.  


Tous les matins, elle partait au travail, toute pomponnée,  comme si elle allait chaque jour à un mariage ou je ne  sais quoi. Sa façon de se tenir droite malgré tout, son  maquillage impeccable, ses vêtements soigneusement  choisis — tout cela trahissait une volonté de ne pas se  laisser abattre.  


Je la voyais descendre les escaliers avec cette grâce  fragile, et mon cœur se serrait à chaque fois. Elle portait  son armure invisible, celle que personne ne remarque  mais qui pèse des tonnes.  


Et tous les soirs, elle rentrait le regard fatigué, parfois  avec des traces de mascara assombrissant son visage  et trahissant son amour éternel pour cet homme odieux. 


Je l’entendais tourner la clé dans la serrure, le bruit  de ses talons sur le parquet, puis le silence pesant qui  s’installait. 
 
Parfois, j’imaginais qu’elle s’asseyait simplement là,  dans son entrée, sans même retirer son manteau, et  qu’elle regardait le vide en se demandant comment  elle en était arrivée là.  

À chaque fois qu’il venait chez elle, je l’entendais. Il  parlait fort, mal. Il faisait du bruit, trop de bruit. Il était  présent, trop présent.  


Les murs de cet immeuble ne sont pas épais, et je  captais chaque éclat de voix, chaque claquement de  porte, chaque silence lourd qui suivait les tempêtes.  


C’était comme si j’avais l’impression inébranlable  qu’il l’enfermait dans une spirale infernale dont elle ne  pourrait jamais sortir.  


Je le détestais. De tout mon être.  


Cet homme que je ne connaissais pas vraiment, dont  j’ignorais le nom, le visage à peine entrevu ce premier  jour.  


Je le haïssais pour ce qu’il lui faisait, pour la manière  dont il aspirait sa lumière, pour ces roses qu’il lui offrait  comme des excuses bon marché. Et pourtant, peu  importe les mots violents qu’il employait, peu importe  les fois où il disparaissait pour réapparaître des jours plus  tard, peu importe les disputes incessantes... Lisa restait.  


Comment est-ce possible d’être si loyale ? Cette question me hantait. Je ne comprenais pas. Moi  qui avait fui ma propre relation toxique, qui avais claqué  la porte et refait ma vie ailleurs, je ne comprenais pas  qu’on puisse rester.  


Mais peut-être que chacun a son propre rythme, sa  propre limite, son propre moment de rupture.  

Je l’aimais. Oui. Un amour peut-être superficiel, car  je ne la connaissais qu’à travers des murs bien trop  épais et au détour de quelques rencontres tôt le matin,  en sortant de mon appartement. Mais je l’aimais. Je  l’aimais sans jamais oser le lui dire. 

 
Peut-être parce que je savais que cet amour-là,  le mien, ne serait jamais autre chose qu’un murmure  derrière les cloisons. C’était un amour fait de fragments,  de regards volés, de sourires timides dans la pénombre  du couloir.  


Un amour qui n’avait pas sa place, qui ne demandait  rien, qui n’espérait rien. Un amour de voisin, silencieux et  impuissant, qui observe et qui attend sans savoir quoi.  


Pourtant, il y eut des moments, de courts instants  suspendus, où j’ai cru qu’elle me voyait vraiment. 

Un soir, il pleuvait. L’orage cognait aux vitres et la  lumière du couloir vacillait, projetant sur les murs ces  ombres qui font croire qu’on n’est jamais seul.  


Je sortais les poubelles quand je l’ai vue, assise sur les  marches, trempée, un mégot à la main.  


Ses cheveux collaient à son visage, son mascara avait  coulé en rigoles noires sur ses joues. Elle tremblait, mais  je ne savais pas si c’était de froid ou de chagrin.  


Elle m’a regardé sans un mot, et j’ai su qu’elle venait  encore de se disputer.  


Il y avait dans ses yeux cette fatigue immense, celle  qui dit qu’on a perdu trop de batailles. J’ai posé ma  veste sur ses épaules. Elle n’a pas protesté. 

— Vous allez attraper froid, avais-je dit, un peu  bêtement. 


Elle a esquissé un sourire. 


— Vous croyez que c’est le pire qui puisse m’arriver ? Sa voix était cassée, rauque. Nous avons ri, doucement,  comme deux inconnus qui se reconnaissent soudain  dans leur solitude.  

C’était un rire triste, un rire de résignation, mais c’était  quelque chose. Une connexion fragile dans le chaos.  Avant de rentrer, elle a sorti de son sac une rose blanche,  un peu fanée, et l’a glissée dans la poche de ma veste. 

— Pour vous remercier, a-t-elle soufflé.

Je me souviens encore du parfum, si léger qu’il semblait  appartenir à un autre monde.  


Un parfum de pureté dans toute cette saleté  émotionnelle. 


Les jours suivants, j’ai commencé à guetter le bruit  de ses pas dans le couloir. C’était devenu une routine  pathétique, je le savais, mais je ne pouvais pas m’en  empêcher. Elle passait, me saluait, parfois s’arrêtait.  


On parlait de tout et de rien — du travail, du temps,  des voisins trop curieux. Madame Leclercq1 qui faisait  trop de bruit avec son aspirateur, Francis2 le rockeur  qui fumait sur le balcon, la petite Mathilde3 qui courait  partout. Mais jamais de lui. 

Jamais de ce qui pesait derrière ses silences. C’était  une règle tacite entre nous. Comme si parler de cet  homme aurait brisé notre bulle fragile, aurait rendu réel  ce cauchemar qu’elle vivait. Elle souriait souvent, mais  je voyais bien que ses yeux, eux, ne suivaient plus.  


Ils regardaient ailleurs, vers un ailleurs qui n’existait  peut-être pas. Elle était présente physiquement, mais  son esprit vagabondait dans des contrées lointaines,  peut-être vers une version d’elle-même qui n’avait  jamais rencontré cet homme. 

Un matin, elle a toqué à ma porte. C’était inhabituel.  D’habitude, nos rencontres se faisaient par hasard,  dans le couloir, jamais planifiées. Elle tenait encore des  roses blanches. Un bouquet entier cette fois, splendide  et tragique. 


— Je crois que je les garde pour les mauvaises raisons,  m’a-t-elle dit. 

Je n’ai pas compris tout de suite. Son regard était  
vide, mécanique. Elle les a posées sur ma table, puis est  repartie sans se retourner. Ses pas résonnaient dans le  couloir, de plus en plus faibles, jusqu’à ce que j’entende  sa porte se refermer avec un claquement définitif.  


Ce fut la dernière fois que je la vis.  


Aujourd’hui, ces roses sont là, dans le vase près de 
la fenêtre.  


Elles n’ont presque plus de couleur. Les pétales  brunissent sur les bords, se recroquevillent comme des  secrets qu’on ne peut plus garder. Comme si elles  savaient, elles aussi. Comme si elles portaient en elles  tout le poids de cette histoire qui m’échappe. 


Ce matin, je me suis levé en trombe parce qu’au delà de la dispute que j’ai entendu cette nuit, j’ai ce  mauvais pressentiment.  


Celui qui vous sort du pieux bien trop tôt. Celui qui  colle à votre poitrine, qui la transperce. Celui qui a le  goût de : quelque chose se trame aujourd’hui dans  l’appartement 212. Celui qui me crie que je ne reverrai  plus jamais Lisa. 

Je reste là, debout dans mon salon, à fixer le mur qui  nous sépare. De l’autre côté, c’est le silence. Un silence  trop lourd, trop dense. Un silence qui pèse comme une  pierre tombale. 


Je devrais frapper à sa porte, vérifier qu’elle va bien.  Mais quelque chose me retient. La peur, peut-être.  Ou la certitude que certaines histoires ne peuvent pas  être sauvées de L’extérieur.  

Les roses blanches me regardent, témoins muettes de  ce qui s’est joué.  


Et je reste là, impuissant, à me demander si j’avais pu  faire quelque chose. Si j’avais dû dire quelque chose.  

Si mon amour silencieux valait quelque chose, ou s’il  n’était qu’une autre forme de lâcheté.
`,
610: `Le bruit commence toujours à vingt-trois heures pile.  Un grincement. Régulier. Méthodique. 


Comme si quelqu’un traînait un meuble lourd sur le  parquet au-dessus de ma tête. Sauf qu’au-dessus de  moi, c’est le septième étage. Et le septième étage,  d’après ce que je sais, compte peu d’habitants. 

Je m’appelle Béatrice Langlois. Quarante-sept ans,  comptable pour une firme du centre-ville, célibataire  sans enfant. Mon appartement du sixième est devenu  mon royaume depuis mon divorce il y a trois ans. Un  royaume silencieux, organisé, prévisible.  

Jusqu’à ce mois de janvier où les bruits ont commencé. 

Ce soir-là, allongée dans mon lit, je fixe le plafond  en écoutant. Grincement. Pause. Grincement. Pause.  Toujours le même rythme.  


Je consulte mon téléphone : 23h04. Ça dure depuis  quinze jours maintenant. Au début, j’ai cru à un meuble  qu’on déplaçait. Puis à des travaux. Mais personne ne  fait des travaux tous les soirs à la même heure. 


Le lendemain matin, je croise Francis dans le hall. Le  vieux rockeur du 608 qui rentre de son shift de nuit en  taxi. Il a l’air épuisé, sa barbe grise mal peignée, mais il  me salue poliment. 

— Monsieur Paquette, vous n’entendez rien de bizarre  la nuit ? 


Il fronce les sourcils, s’arrête. 


— Quel genre de bizarre ? 


— Des grincements. Au septième. 


— Le septième ? Y a presque personne là-haut. En plus,  je sais qu’une vieille dame y habite, c’est impossible  que ce soit elle, Arlette je crois. Elle sort jamais. 


— Justement. Ces bruits viennent de chez elle. Tous les  soirs à vingt-trois heures. 


Francis hausse les épaules. 


— Peut-être qu’elle réarrange ses meubles. Les vieux  font des trucs bizarres, tu sais. 

Je ne suis pas convaincue. Réarranger ses meubles  tous les soirs au même moment ? Ça n’a aucun sens. 

Au bureau, je suis distraite. Les colonnes de chiffres se  brouillent devant mes yeux. Je pense aux grincements,  à cette régularité inquiétante.  

À midi, j’appelle Christelle, la gardienne. 


— Bonjour Madame Mercier, c’est Béatrice, du 610. 

— Ah, Béatrice ! Tout va bien ? 


— Justement, non. J’entends des bruits étranges au dessus de moi. Au 710, je crois. Tous les soirs à la même  heure. 

Un silence. Puis : 


— Le 710 ? Il est vide depuis octobre. Monsieur Firge  est parti en maison de retraite. 


Mon sang se glace. 


— Vous êtes sûre ? 

— Certaine. Pourquoi ? 


— Parce que j’entends quelqu’un là-haut. Tous les  soirs. 


Christelle hésite. 


— Écoutez, je monterai vérifier. Peut-être que c’est le  706 ou le 708. Les bruits se propagent bizarrement dans  cet immeuble. Mais je sais ce que j’entends. C’est juste  au-dessus de ma chambre. Exactement au-dessus. 


Le soir, je ne dors pas. J’attends. 23h00. Le grincement  commence. Cette fois, je me lève, j’enfile mon peignoir  et je monte au septième. Le couloir est sombre, à peine  éclairé par une ampoule fatiguée.  


Je m’approche du 710. La porte est fermée, un  cadenas neuf brille sur la serrure.  


Je colle mon oreille contre le bois. 


Silence. 


Pourtant, en bas, j’entendais clairement. Je frappe  doucement. 


— Il y a quelqu’un ? 


Rien.  

Je descends, troublée.  


Dans mon appartement, le bruit a cessé. 


Le lendemain, Christelle frappe à ma porte. Elle tient  un trousseau de clés. 


— J’ai vérifié le 710. Vide. Rien. Pas un meuble.

 — C’est impossible. 


— Béatrice, je vous assure. Peut-être que vous êtes  stressée ? Le travail, la solitude... 


Je la raccompagne poliment et ferme la porte. Je ne  suis pas folle. Je sais ce que j’entends. 

Cette nuit-là, je décide d’enregistrer. Je pose mon  téléphone sur la table de nuit et lance l’enregistreur.  23h00. Les grincements commencent. Je reste  immobile, les yeux fermés, à compter. Quinze minutes  exactement. Puis le silence. 

Le matin, je réécoute. Rien. Que le silence de la nuit.  Mon cœur bat trop fort. Soit mon téléphone ne capte  pas les bruits, soit... 


Non. Je refuse d’y penser. 


Le week-end arrive. Je décide de parler à Arlette du  706. Celle qui, d’après Francis, ne sort jamais. 
 
Je frappe à sa porte. Une vieille dame ouvre, les  cheveux blancs tirés en chignon, un mouchoir brodé  à la main. Le tissu est fin, délicat. Je distingue une rose  blanche cousue dans un coin. 

— Oui ? 


— Bonjour Madame. Je suis Béatrice, du 610. Je voulais  vous demander... Vous entendez 
des bruits la nuit ? 


Ses yeux pâles me fixent longuement. 


— Des bruits ? 

— Au 710. Des grincements. 


Elle sourit doucement, tristement. 


— Il n’y a personne au 710, ma petite. 


— Je sais. Mais j’entends... 


— Antoine aussi entendait des choses, m’interrompt elle. Mon mari. Avant de partir. Il disait que c’était la  maison qui se souvenait. 


— Se souvenait de quoi ? 


— De ceux qui l’habitaient. Les vieux immeubles ont  une mémoire. Ils gardent les échos. 


Elle referme doucement la porte. Je reste plantée  dans le couloir, déstabilisée. 

Cette nuit, je décide de ne pas écouter. Je mets des  bouchons d’oreilles, j’avale un somnifère léger. Je dors  profondément. Pas de grincements, pas de réveil. Le  matin, je me sens mieux. 

Mais le soir suivant, je ne prends rien. Et les bruits  reviennent. Cette fois, je monte directement au  septième. Je frappe au 708. Personne. Au 706, Arlette  entrouvre. 


— Vous les entendez encore ? 


— Oui. Maintenant. 


Elle hoche la tête. 


— Entrez.

Son appartement sent le thé et le vieux bois. Elle me  sert une tasse, s’assoit dans son fauteuil. 


— Monsieur Firge, celui qui vivait au 710, était menuisier.  Tous les soirs à vingt-trois heures, il rabotait du bois.  Pendant quarante ans. Même après sa retraite. C’était  sa façon de méditer. 


Je la regarde, incrédule. 


— Vous voulez dire que... 


— Que certaines habitudes restent gravées dans les  murs. Que les gestes répétés laissent des traces. Appelez  ça comme vous voulez. 


Je pose ma tasse. 


— Vous y croyez vraiment ? 


— Je crois que la vie laisse des empreintes. Et que  parfois, on les entend. 

En redescendant chez moi, je réfléchis. Peut-être  que je suis trop rationnelle. Peut-être que tout n’a  pas d’explication logique. Ou peut-être que je suis  simplement épuisée, seule, et que mon cerveau invente  des histoires pour combler le vide. 

Cette nuit, les grincements reprennent. Mais cette  fois, je ne les combats pas. Je les écoute comme une  berceuse étrange. Un homme rabotait du bois. Tous les  soirs. Pendant quarante ans. Et maintenant, il n’est plus  là. Mais son geste reste. 

Je ferme les yeux. Le bruit devient presque apaisant.  Une présence invisible mais familière. 


Peut-être que c’est ça, vivre dans un vieil immeuble.  Partager l’espace avec les fantômes de ceux qui sont  passés avant nous. 


Demain, je retournerai voir Arlette. Je lui demanderai  de me parler de son Antoine. 

Et peut-être qu’ensemble, nous écouterons la mémoire  des murs.
`,
720: `Une voiture passe : une simple berline ; Monsieur  Gaspard sourit. Un oiseau se pose : un petit pigeon ;  Monsieur Gaspard sourit. Un couple entre dans la  boutique d’Agnès ; ils se tiennent la main : Monsieur  Gaspard sourit. 

Le vieil homme est assis à son arrêt de bus au petit  matin, comme la veille, et sans doute, comme il le sera  demain. D’ici, il a une vue complète sur la rue, il ne rate  jamais rien.  


Il n’observe pas, non. Il laisse les choses venir à lui, en  profite, tant qu’elles s’offrent à lui, puis les laisse repartir,  sans se forcer. 


Lorsque la rue se fait plus calme, il se retourne souvent,  pour observer la carte du réseau de bus. Rarement de  nouveautés, pour lui. Il connaît ces lignes comme les  veines au dos de sa propre main. Il se souvient du jour,  en 73, où la ligne 4 est déviée pour desservir les nouvelles  tours, et de la colère des commerçants de la vieille ville.  Il sait que le 19A, le mardi, saute l’arrêt « Mairie » à 14h12  pour une obscure raison de marché. Cette carte n’est  pas un plan ; c’est un journal intime. 


Un grondement de moteur diesel approche et s’arrête.  8h50. Les portes s’ouvrent dans un sifflement  pneumatique. Personne ne descend. Le chauffeur, un  nouveau qu’il ne reconnaît pas, lui fait un signe de tête.  Monsieur Gaspard répond d’un lent clignement de  paupières. Il ne monte jamais. Les portes se referment.  Le bus s’éloigne.
 
L’agitation du matin retombe, remplacée par le  calme affairé des livraisons et des retraités qui font leurs  courses. C’est alors qu’un fracas de pas désordonnés  brise la mélodie de la rue. 

Ce n’est pas une course ; c’est une panique. Antony,  un voisin, un peintre qui ne sort que très rarement de  son atelier, déboule au coin de la rue. Il est en costume,  un costume qui ne lui va guère, trop grand par endroits,  trop petit à d’autres. Sa cravate est défaite et son front  brille de sueur malgré la fraîcheur. Il tient un téléphone  portable à l’oreille, visiblement sans interlocuteur, et  peste contre l’appareil. 


— Allez, allez... Foutue batterie !» 


Il arrive devant l’arrêt de bus et s’arrête net, le regard  perdu. Il lève les yeux vers la carte que Gaspard  ignore maintenant. Les yeux d’Antony volent sur le  dédale de lignes rouges, bleues et vertes avec une  incompréhension totale. 


— Monsieur Gaspard ? souffle-t-il, reconnaissant enfin  le vieil homme. Sa voix est tendue, à la limite de la  rupture. Vous... vous savez... l’Hôtel de Ville ? Je prépare  ma prochaine exposition et... Je... ma voiture est en  panne, le taxi ne répond pas... C’est capital pour ma  carrière, et moi j’arrive encore à me mettre en retard.  C’est lequel pour l’Hôtel de Ville ? 


Il pointe la carte du doigt, au hasard, sur la légende. 


— Le 3 ? Le 12B ? Je ne comprends rien à ce truc ! M. Gaspard ne se retourne même pas vers le plan. Il  
déplace lentement son regard de la rue vers le visage  congestionné de son voisin. 


— Bonjour, Antony,» dit-il d’une voix douce. Vous êtes  pressé. 


— Pressé ? Je viens de vous dire que c’est ma carrière  de peintre qui est en jeu ! Monsieur Gaspard ! S’il vous  plaît ! 


— Alors, calmez-vous. Vous allez arriver tout en sueur à votre salle d’exposition ! 


Gaspard se lève lentement, s’appuyant sur sa canne,  moins par besoin que par habitude.  


Il fait face à Antony. 


— Vous n’allez pas à l’Hôtel de Ville avec le 3. Il vous  fait tout le tour des hôpitaux. Et le 12B n’existe plus  depuis Pâques. C’est le 12, maintenant. 


— Alors le 12 ? demande Antony, sa voix montant  dans les aigus. 


 — Non plus, répond Gaspard avec une patience  infinie. Il passe dans vingt-cinq minutes. Vous seriez  encore plus en retard. 


Antony ouvre la bouche pour protester, pour maudire  l’univers, mais M. Gaspard lève un doigt. 


— Celui-ci arrive, dit-il en désignant le bout de la rue  où rien n’apparaît encore. C’est le 5. Il n’est pas sur ce  panneau, c’est l’arrêt d’en face, normalement. Mais à  cause des travaux sur le pont, il fait le détour par ici. Il  arrive dans une minute. 

Antony regarde la rue déserte, puis le vieil homme, la  méfiance luttant contre le désespoir. 


— Vous le prenez, ordonne gentiment le vieil homme.  Vous descendez à « Place Carnot ». Ne traversez pas.  Juste là, vous prenez le C1, la navette express. Elle  passe toutes les quatre minutes. Elle vous déposera sur  le parvis. Vous y êtes en un quart d’heure. 


Un grondement se fait entendre. Un bus bleu, marqué  « 5 », apparaît au coin de la rue. 


Antony reste bouche bée. 


 — Mais... comment... ce n’est écrit nulle part ! — Tout n’a pas besoin d’être écrit, mon garçon, dit M.  Gaspard en se rasseyant. Allez-y. Vous allez le rater. 

Antony ne trouve plus ses mots : il lui jette un regard  d’une gratitude immense, avant de se précipiter dans  le bus. 

M. Gaspard le regarde monter. Les portes se referment. 

Le calme revient. Un enfant sort de la boutique  d’Agnès : il a un bouquet et une carte pour sa grand-mère ; M. Gaspard sourit.
`,
514:`Le thermomètre affiche moins vingt-deux degrés  ce matin du 3 janvier 2012, et Samir Khan refuse  catégoriquement de sortir du lit.  


Pas question. Il se recroqueville sous l’édredon, ferme  les yeux, et tente de se rendormir.  


Mais son cerveau, ce traître, a déjà commencé à  tourner. Il pense à l’inventaire. Aux factures. Au loyer.  À la nouvelle machine à cappuccino qui fait un bruit  d’avion au décollage. À tout, quoi. 

Samir possède le Coin des Saveurs, un dépanneur  coincé entre une buanderie et un salon de coiffure sur  la rue Masson. Il a repris le commerce de son oncle il y  a trois ans, juste après avoir abandonné ses études en  génie informatique.  


Ses parents ne lui ont toujours pas pardonné.  

— Tu gâches ta vie pour vendre des chips et des  tickets de loto, répète sa mère chaque dimanche au  téléphone.  


Samir ne répond plus. Il sait qu’elle a tort, mais il  manque d’arguments solides pour le prouver. 


À huit heures pile, il se traîne jusqu’à la cuisine.  L’appartement sent le carton et la solitude. Samir vit seul depuis que Mélanie est partie en juin  dernier. Elle a emporté la moitié des meubles, tous les  beaux verres, et cette assurance tranquille qu’il avait  quand elle était là. 


Maintenant, il mange debout devant le comptoir,  directement dans les contenants de plastique.
 
Il enfile trois couches de vêtements, attrape ses clés,  et dévale les escaliers. Dans le hall, il croise la vieille  madame Bourègue du 412 qui promène son chihuahua  tremblant. Elle lui sourit. Il lui sourit. Personne ne parle.  


C’est la routine du Vieux Rosemont en hiver : on se  salue, on baisse la tête, on avance. 


Le dépanneur ouvre à neuf heures. Samir déverrouille  la porte, allume les néons, branche la machine à café.  Les gestes sont automatiques. Il pourrait faire ça les  yeux fermés. 


D’ailleurs, certains matins, il se demande s’il ne dort  pas encore. 


Le premier client arrive à neuf heures sept. C’est  toujours le même type, un gars maigre avec une tuque  des Canadiens enfoncée jusqu’aux sourcils. Il achète  un paquet de cigarettes et un café noir.  


— Fait frette en tabarnak, dit-il.  


Samir acquiesce. Que répondre d’autre ? 


La matinée s’écoule dans un brouillard de transactions.  Une femme cherche des piles AAA. Un adolescent vole  une barre de chocolat, Samir fait semblant de ne rien  voir. Un livreur dépose des caisses de chips. Tout est  prévisible, rassurant, ennuyeux. 

Vers midi, une fille entre dans le dépanneur. Samir lève  les yeux et oublie de respirer pendant deux secondes.  Elle porte un manteau rouge vif qui détonne dans le  gris ambiant de janvier. Ses cheveux noirs tombent en  vagues désordonnées sur ses épaules. Elle se dirige vers  le frigo du fond, attrape un Gatorade bleu, puis revient  vers le comptoir. 

— Ça fait combien ? demande-elle. 


Samir bégaye le prix. Elle paie, lui sourit, sort. Voilà. 

Toute l’interaction dure trente secondes, mais Samir  reste planté là comme un idiot pendant cinq bonnes  minutes après son départ. 
Il se ressaisit. Il a trente-deux ans, pas quinze. Mais bon  sang, ce sourire. 


L’après-midi traîne. Samir range des boîtes de  conserve, essuie le comptoir, vérifie l’inventaire des  cigarettes. Il pense à la fille au manteau rouge. Il se  traite de pathétique. Il pense encore à elle. 


À seize heures, alors qu’il recompte la caisse pour la  troisième fois — il n’arrive jamais à se concentrer après le  dîner — la porte s’ouvre. C’est elle. Le manteau rouge,  les cheveux noirs, le sourire. 

— Salut, dit-elle. J’ai oublié quelque chose ce midi. Samir fronce les sourcils.  

— Ah oui ? Quoi ?  


Elle s’approche du comptoir, sort un bout de papier  de sa poche.  


— De te donner ça.  



Sur le papier, il y a un numéro de téléphone griffonné  au stylo rouge, et en dessous, un dessin maladroit : une  rose blanche. Simple, presque enfantin, mais clairement  reconnaissable. 


— Je m’appelle Leïla, dit-elle. Et toi ? 


Samir ouvre la bouche. La referme. Réussit finalement  à articuler :  


— Samir. 


— Eh bien, Samir, si jamais tu veux prendre un café  ailleurs que dans ton dépanneur, appelle-moi. 


Elle repart aussi vite qu’elle est venue. La clochette de  la porte tinte joyeusement. Samir reste figé, le papier  dans la main.
 
Il ne comprend pas.  


Pourquoi lui ? Pourquoi maintenant ? Pourquoi une  rose blanche ?  


Mais peut-être que certaines choses n’ont pas besoin  d’explication. 

Ce soir-là, en fermant le dépanneur, Samir glisse le  papier dans son portefeuille. Il ne sait pas encore s’il va  appeler. Probablement que oui. Ou peut-être que non.  Ou peut-être que oui. 

En remontant vers l’appartement 514, il siffle entre ses  dents. Ça ne lui était pas arrivé depuis des mois.  Le froid mord toujours aussi fort, mais Samir s’en fout un  peu moins.
`,
620: `Je me suis réveillée à minuit à cause du bruit de l’orage  dehors qui m’a fait peur comme quand j’étais petite  dans ma chambre à Vienne.  


J’ai commencé à pleurer comme un enfant de 3 ans  dans mon lit tout doux et froid. Mes larmes rendaient  humide mon t-shirt, je cherchais mes lunettes mais je  n’ai pas réussi à les trouver.  


Peut-être qu’elles sont tombées sous mon lit. J’ai  allumé ma lampe sur la petite table au côté de moi.  Quand j’avais vu la lumière, j’ai commencé à respirer. 


Tous les matins je me lève à 6 heures et demie pour  reprendre tous mes projets.  


Comme par hasard je jette mon œil sur un nouveau  projet architecte pou l’appartement de Marie-Chantal.  Il y a déjà quelques mois que je l’ai croisé et je lui  ai donné des conseils pour le rangement de son  appartement.  


Je suis toujours trop occupée, mais ce midi je vais aller  la chercher. 


J’ai appelé ma mère mais elle n’a pas répondu. Ça  me rend toujours triste ce décalage horaire entre le  Canada et l’Autriche. A certaiins moments j’ai le mal  du pays qui cela rend folle de nostalgie.  


J’ai décidé d’aller au café près de chez moi. Je sens  déjà les changements de saison, je pense que je tombe  malade comme d’habitude.  


J’ai besoin d’un thé à la menthe, évidemment. 


Je descends de mon immeuble et je vois des flaques  d’eau partout. Cet orage était semblable au Déluge  de Noé, mais nous avons survécu. Je passe devant  mes voisins qui sortent leurs chiens, les couples sortent  ensemble dans la rue et je vois Agnès.  


Elle est en train d’ouvrir sa boutique de fleurs, je dois  passer après et acheter un nouveau bouquet de  renoncules pour mon salon. 


À midi je toque et entre chez Marie-Chantal. J’ai des  mains prises par mes projets papier c’est pourquoi je ne  pouvais pas sonner. Heureusement, elle m’attendait à  côté de la porte. 


— Bonjour Susanna ! Je pensais que tu serais en retard  comme d’habitude ma petite. 


— Bonjour ! Mais non bien sûr, nous habitons dans le  même immeuble. Ce n’est pas possible que je sois en  retard. 


— D’accord, entre vite ! 



Marie-Chantal sait toujours comment surprendre les  gens, c’est son talent. Nous avons discuté de notre projet,  elle était un peu têtue vis-à-vis de mes prépositions mais  nous avons réussi à nous mettre d’accord sur les points  principaux.  


Je trouve que son goût est un peu trop canadien. J’ai  proposé de renouveler une cuisine pour construire un  peu plus d’espace de rangement.  


Sa collection de tasses m’étonne chaque fois.  

Aujourd’hui, j’ai bu mon café dans la tasse en  céramique qui a été faite par Marie-Chantal. Je pense  qu’elle devrait commencer son business de production  de la vaisselle, voilà un deuxième talent.  


Les chats ne laissent jamais libre le passage, ils sont  toujours sous mes pieds et miaulent quelque chose.  




Mais j’ai un problème : je suis allergique aux chats. Ça  veut dire que je ne peut pas rester pas longtemps chez  Marie-Chantal, sinon je vais mourir ahah.  


À ma grande surprise, elle avait l’air motivée de me  donner un retour rapide sur le projet.  


Elle a mentionné ses vœux rapidement, je dois ajouter  une nouvelle armoire à sa chambre, chercher une  nouvelle télévision et aussi un nouveau tableau.  


Je dois appeler Thomas, il sait comment m’aider. Je  sors de son appartement vers 14 heures. 


Je suis déprimée, je monte chez moi directement. J’entre dans mon appartement chaleureux, je  commence à me préparer un déjeuner.  


Je dépose mes courses dans le réfrigérateur, je  nettoie mon salon, ma chambre et ma cuisine. Je  passe l’aspirateur, je fais la lessive. Quel bonheur d’être  entreprenante. Je gère mon ménage à la perfection  chez moi.  


Après le ménage, je décide de poser mon bouquet  de renoncules dans un vase. Je coupe des tiges et au  moment où je le pose dans le vase, je comprends qu’il  y a aussi une rose blanche.  


Elle ajoute cette touche légère et idéale à mon  bouquet. Comment Agnès savait-elle que j’adore les  roses blanches ? C’est une surprise qui m’a touché en  plein cœur. 



Je travaille toute la soirée en silence. 


 Quand je travaille, je plonge dans mes projets.  Quelle chance d’habiter seule et de ne jamais  demander à quelqu’un de parler moins fort ou de  ne pas rester dans la même pièce que moi pour être  tranquille.  


Mais ce n’était pas toujours comme ça. Je veux  tomber amoureuse de quelqu’un, partager les matinées  ensemble, prendre des petits déjeuners en riant, ne jamais me coucher seule, ne jamais me réveiller sans  amour.  
Ce sont mes désirs profonds que je ne vais jamais  raconter à personne.  


C’était déjà trop la dernière fois, que tout a volé en  éclats : mes émotions, mes sentiments, mes rêves, mes  certitudes, mes espoirs et surtout mon cœur.  


J’ai commencé à pleurer comme cette nuit, seule en  regardant sur cette rose blanche.  


J’entends quelqu’un devant ma porte…
`,
106: `Le café refroidit dans la tasse ébréchée. Samira ne  le touche plus depuis vingt minutes, mais elle garde  les mains autour comme pour préserver une chaleur  imaginaire.  


Par la fenêtre du premier étage, elle observe la cour  intérieure où deux enfants lancent un ballon rouge qui  rebondit contre les murs de brique. 


Trente-six ans. Traductrice juridique freelance. Divorcée  depuis huit mois. Voilà comment elle se présenterait si  quelqu’un lui posait la question. Mais personne ne pose  jamais la question. 


L’appartement 106 est petit. Une chambre, un salon  qui fait aussi office de bureau, une cuisine où l’on peut  à peine se retourner. Les cartons du déménagement  sont encore empilés contre le mur du fond. Elle se dit  chaque matin qu’elle va les déballer, puis la journée  passe et ils restent là, témoins muets de son incapacité  à s’installer vraiment. 


Son ordinateur émet un bip. Nouveau courriel. Un  client qui lui envoie un contrat de cinquante pages à  traduire pour jeudi. Elle ouvre le document, parcourt les  premières lignes. 


Des clauses commerciales, du vocabulaire technique,  rien d’intéressant. Mais c’est ce qui paie le loyer. 


Elle se lève, étire son dos qui craque. Dans le miroir de  l’entrée, elle aperçoit son reflet. 


Cheveux attachés n’importe comment, cernes  violettes, t-shirt taché de café. Elle ne se reconnaît plus  vraiment. La Samira d’avant portait des tailleurs, se  maquillait, souriait aux collègues dans l’ascenseur.  Celle d’aujourd’hui ne quitte l’appartement que pour  faire ses courses au dépanneur du coin. 


Un bruit dans le couloir. Des pas lourds, une voix  masculine qui grogne. C’est Thomas,1 le voisin du 102,  qui monte probablement une de ses radios vintage. Elle  l’a croisé deux fois depuis son arrivée en septembre.  Il a hoché la tête, elle a murmuré bonjour. Fin de  l’interaction. 


Samira retourne à son ordinateur. Les mots défilent sur  l’écran mais elle ne les lit plus vraiment.  


Elle pense à son ex-mari, Gabriel. Aux huit années  passées ensemble. À cette soirée de mars où il lui a  annoncé qu’il partait.  



— Je ne suis plus heureux, avait-il dit, comme si c’était  une excuse suffisante pour détruire une vie commune. 

Son téléphone vibre. Message de sa sœur, Leïla, qui  vit à Québec. 
<em>Tu viens à Noël cette année ? Maman demande. </em>


Samira fixe le message sans répondre. Noël. Dans trois  semaines. L’idée de se retrouver autour d’une table,  à faire semblant que tout va bien, lui donne envie de  vomir. 


Elle se lève à nouveau, ouvre le frigo.  


Lait périmé, trois tomates, un reste de poulet qui date  de quand déjà ? 


Elle referme et décide de commander une pizza.  Comme hier. Et avant-hier. 


En attendant la livraison, elle allume la télévision.  Un documentaire sur les manchots empereurs. Ils se  regroupent par milliers pour affronter l’hiver antarctique,  se serrent les uns contre les autres pour survivre.  


Samira se demande ce que ça fait d’appartenir à  quelque chose de plus grand que soi. 


On sonne à la porte. Ce n’est pas la pizza, c’est trop  tôt. Elle ouvre prudemment. 


Agnès, la fleuriste du rez-de-chaussée, se tient dans le  couloir avec un petit pot de terre cuite entre les mains. 


— Bonsoir ! Je suis désolée de vous déranger. C’est  juste que... j’ai commandé trop de plantes ce mois-ci  et je me demandais si vous en vouliez une ? C’est un  pothos, très facile d’entretien. 


Samira reste figée une seconde. La gentillesse  inattendue la désarçonne. 


— Je... oui, merci. C’est gentil. 


Agnès lui tend le pot avec un sourire. 


— Parfait ! Arrosez-la une fois par semaine, pas plus.  

Et si les feuilles jaunissent, c’est qu’elles ont trop d’eau. 

— D’accord. Merci encore. 


Agnès s’en va d’un pas léger. Samira referme la porte,  examine la plante. Les feuilles vertes brillent sous la lumière du plafonnier. Un petit papier est coincé dans  la terre. Elle le déplie. 


Un dessin au crayon représente une rose blanche,  accompagné d’un mot : Pour égayer votre journée.  


Samira pose le pot sur le rebord de la fenêtre. C’est  idiot, mais elle sent quelque chose se desserrer dans sa  poitrine. 


La pizza arrive. Elle mange trois pointes directement  dans la boîte, debout dans la cuisine. 


Puis elle retourne à son ordinateur et commence  vraiment à traduire le contrat. Les mots trouvent leur place, clause après clause, phrase après phrase. Vers vingt-deux heures, elle s’arrête. Quinze pages de  faites. Pas mal.  


Elle se fait couler un bain, y verse du sel d’Epsom trouvé au fond d’un carton. L’eau chaude l’enveloppe et elle  ferme les yeux. 


Gabriel lui manque encore. Pas lui vraiment, mais  l’idée de lui. La présence. Le bruit de quelqu’un d’autre  dans l’appartement. Les conversations stupides sur ce  qu’on regarde à la télé. 


Tout ça. 


Mais peut-être que c’est normal. Peut-être qu’on ne  se remet pas d’un divorce en huit mois. 


En sortant du bain, elle passe devant le pothos. Les  feuilles semblent déjà plus vivantes, comme si la plante  sentait qu’on prenait soin d’elle.  


Samira arrose un peu de terre du bout des doigts. 


— Toi et moi, on va s’en sortir, murmure-t-elle. 

Elle se couche tard, ouvre un livre qu’elle traîne depuis  des semaines. Une histoire de femme qui refait sa vie  après une rupture. Évidemment.  


Elle lit trois pages et s’endort. 


Le lendemain matin, le café a meilleur goût. Elle  déballe un carton. Puis un deuxième. À midi, cinq  cartons sont vidés et ses étagères commencent à  ressembler à quelque chose. 

Par la fenêtre, elle aperçoit Agnès qui ouvre sa  boutique. Sur un coup de tête, Samira descend. 

— Bonjour, dit-elle en entrant. Je voulais vous remercier  pour la plante. 


— Oh, ce n’est rien ! Vous vous installez bien ? 

— Oui, je crois. C’est un peu long mais... oui.

Elles discutent quelques minutes. Agnès lui  recommande le café du coin, la boulangerie de la rue  Beaubien, le marché du samedi.  


Samira écoute, note mentalement. 


En remontant, elle croise Thomas qui descend avec  un carton. 


— Bonjour, dit-elle. 


— Bonjour. Vous êtes nouvelle, non ? 


— Depuis septembre. 


— Bienvenue alors. 


C’est bref, mais c’est quelque chose. 


Dans son appartement, Samira se remet au travail. Les  mots coulent plus facilement aujourd’hui.  

À dix-huit heures, elle a terminé la traduction. Elle  l’envoie au client, ferme l’ordinateur. 


Le pothos brille toujours sur le rebord de la fenêtre.  Samira sourit. 


Demain, elle ira au marché. Peut-être qu’elle achètera  des fleurs fraîches. Peut-être qu’elle recommencera à  se maquiller. 


Peut-être que la vie continue, même quand on croit  qu’elle s’est arrêtée.
`,
404: `Mes journées s’étiraient à n’en plus finir, grises et sans  relief. Elle me manque. 

Il n’y a pas d’autre mot. Juste ce vide immense,  cette absence qui s’installe dans chaque minute, dans  chaque souffle. 


Gary me tire de ma torpeur, comme il le peut. Mon  petit Gary. Mon tendre garçon.  


Je sais qu’elle lui manque aussi. Mais il a repris le cours  des choses plus vite que moi. Cinq ans à peine. À cet  âge-là, la tristesse ne dure pas de la même façon : elle  brûle fort, puis s’éteint brusquement, remplacée par un  rire, une colère, un jeu. 


Moi, elle m’a consumé lentement. 


Gary, lui, s’agite. Il crie, court, provoque, comme pour  défier le monde de tourner sans elle. Et moi, je reste là,  englué dans le silence, à déprimer, à ressasser. 


Depuis ce jeudi 22 septembre, tout a perdu ses   couleurs. 


Elle était au mauvais endroit, au mauvais moment. Elle voulait simplement déposer un chèque à la  banque. Et puis… ils étaient là. Ces hommes sans visage,  ces tirs sans raison. Ils ont tout balayé. Même elle. On a déposé des roses blanches sur son cercueil. C’est  tout ce qu’il me reste d’elle : une poignée de pétales,  une photo, et ce souvenir obsédant de sa voix.

Quand Agnès a appris la nouvelle, elle a accouru.  Douce, attentive, discrète. Elle s’occupait de Gary  quand moi, je ne pouvais plus rien faire. Elle savait que  la peine me clouait au sol. 

Agnès… la seule à comprendre sans parler. Un soir, elle m’a simplement pris dans ses bras. Nous  avons pleuré ensemble, longtemps, sans un mot. Ce  soir-là, quelque chose s’est tissé entre nous, pas de  l’amour, non. Une fraternité du chagrin. 


Elle ne me demandera jamais de tourner la page. Elle  sait que certaines pages restent collées pour toujours. Elle me parle d’Achille, et je lui parle de Carole. Nos  amours perdus. Nos vies brisées qui se frôlent dans le  silence. 


Le soir, je passe en boucle le disque préféré de Carole.  Je reste assis sur le canapé, le regard perdu sur le sol, à  rejouer notre vie comme un vieux film abîmé. 


Il y a des blessures dont on ne se remet pas. Seulement  des jours où elles font un peu moins mal.  


Je ne me suis pas mis à boire. 


J’y ai pensé, parfois, les soirs où le silence devient  insupportable. Mais je ne veux pas imposer ce fardeau  à Gary. Il mérite un père présent, pas une ombre au  fond d’une bouteille. 


Alors je termine mon verre d’eau d’une traite, un  geste dérisoire, presque symbolique, puis je monte me  coucher. 

Seul. 


Le lit est immense. Trop grand pour moi, désormais.
C’était son idée, le lit king size. Elle disait qu’elle voulait  qu’on ait de la place, qu’on puisse s’étendre, respirer,  bouger librement.  


Mais au fond, elle finissait toujours par venir s’installer  contre moi, sa tête posée sur mon épaule, ses jambes  entremêlées aux miennes. Elle disait qu’elle dormait  mieux ainsi, qu’elle aimait sentir mon souffle contre sa  peau. 

Aujourd’hui, je m’allonge du même côté du lit, par  habitude. Le drap froid ne sent plus rien. 


Même lorsque je ferme les yeux, son absence fait du  bruit, un silence lourd, vibrant, presque vivant. 


Je crois que ce vide ne me quittera jamais. Il s’est logé en moi, dans un coin que rien ni personne  ne pourra atteindre. 


Un vide qu’elle seule aurait su combler.
`,
108:`La lumière du réverbère vacille à travers les rideaux  épais. Minuit vient de sonner quelque part dans  l’immeuble, et je suis toujours éveillée. Mes mains  tripotent machinalement le coin effiloché de ma  couverture. Je m’appelle Nadia Karimi, j’ai vingt-huit  ans, et je travaille comme restauratrice d’œuvres d’art  au Musée des beaux-arts. 

Ce soir, comme tous les soirs depuis trois semaines,  j’attends. 


J’attends le bruit. 


Il commence toujours vers minuit quinze. Un grattement  léger, presque imperceptible, qui semble provenir du  mur mitoyen entre mon appartement et celui du 110.  Marie-Chantal, l’infirmière retraitée aux trois chats. Une  femme discrète que je croise parfois dans l’escalier,  toujours souriante, toujours pressée. 

Au début, j’ai pensé que c’était Pompom, Ronron ou  Clovis qui grattaient contre le mur. Les chats font ça.  Mais le son est différent. Trop régulier. Trop… intentionnel. 

Minuit dix-huit. 


Je retiens mon souffle. 


Ça commence. 


Scratch… scratch… scratch… 


Je me lève, pieds nus sur le parquet froid. Mon cœur  bat trop fort.  


Je m’approche du mur, y colle mon oreille. Le  grattement continue, méthodique, patient. Comme si  quelqu’un ou quelque chose essayait de creuser très  lentement à travers la cloison. 


J’ai frappé au mur une fois, la semaine dernière. Le  bruit s’est arrêté net. Puis a repris cinq minutes plus tard,  encore plus insistant. 

Ce soir, je décide d’agir autrement. 


Je sors dans le couloir, me plante devant la porte du  110. Mes doigts tremblent légèrement quand je lève la  main pour frapper. Trois coups secs. 


Pas de réponse. 


J’attends, collée contre le battant. De l’intérieur,  j’entends un miaulement plaintif. Puis un autre. Les  chats sont réveillés. Mais pas de pas, pas de voix, pas  de lumière qui s’allume sous la porte. 


— Marie-Chantal ? Je murmure d’abord, puis plus fort,  Marie-Chantal, vous allez bien ? 


Rien. 


Je redescends chez moi, troublée. Le grattement a  cessé. 


Le lendemain matin, je croise Agnès qui sort de sa  boutique de fleurs au rez-de-chaussée. Elle arrange  un bouquet dans la vitrine, ses mains agiles parmi les  tiges vertes et les pétales colorés. Je remarque qu’elle  évite soigneusement la section où d’autres fleuristes  mettraient des roses blanches. Sa boutique n’en  contient jamais. 

— Bonjour Nadia ! lance-t-elle en me voyant. Tu as l’air  fatiguée. 


— Mal dormi. Tu connais bien Marie-Chantal, du 110 ? Son sourire faiblit légèrement. 


— Un peu. Pourquoi ? 


— J’entends des bruits étranges la nuit. Qui viennent  de chez elle. Je me demandais si tu savais si elle allait bien. 


Agnès plisse les yeux, pensive. 


— Maintenant que tu en parles… Je ne l’ai pas vue  depuis quelques jours. C’est inhabituel. Elle passe  toujours acheter des fleurs le jeudi. 


Nous nous regardons, une inquiétude partagée  flottant entre nous. 


Le soir même, je frappe à nouveau. Cette fois, avec  plus d’insistance. Les miaulements se font plus forts,  presque désespérés. Je sens une odeur bizarre qui filtre  sous la porte. Pas de pourriture, non. Quelque chose de  plus subtil. De la terre humide, peut-être. 


Mon téléphone à la main, je compose le numéro de  Christelle, la gardienne. 


— Allô ? 


— Christelle, c’est Nadia du 108. Je suis inquiète pour  Marie-Chantal. Elle ne répond pas, et ses chats ont l’air  en détresse. 


Un silence, puis : 


— J’arrive. 


Cinq minutes plus tard, Christelle monte avec son  trousseau de clés. Son visage est fermé, professionnel.  Elle frappe elle aussi, annonce sa présence, puis  déverrouille. 

La porte s’ouvre sur une scène étrange. 


L’appartement est parfaitement rangé. Trop rangé.  Pas un coussin de travers, pas une tasse oubliée. Les  trois chats se précipitent vers nous, affamés et paniqués.  Mais pas de Marie-Chantal. 


Sur la table du salon, un carnet ouvert. Je m’approche  pendant que Christelle inspecte les pièces. L’écriture  est soignée, presque enfantine : 


<em>16 janvier.Lucille est venue aujourd’hui. On a parlé  d’Achille. Elle porte encore son chagrin comme un  manteau trop lourd. J’ai essayé de l’alléger. Je ne sais  pas si j’ai réussi. 


18 janvier. Francis a joué du saxophone toute la nuit.  Ça me rappelle Antoine. Je me demande si la musique  adoucit vraiment les cœurs brisés. 


21 janvier. Pompom a trouvé quelque chose derrière  le radiateur. Un vieux sachet de graines. Des roses. Je  ne les planterai pas. Pas après ce qui s’est passé. </em>


Christelle revient de la chambre, le visage pâle. — Elle n’est pas là. Mais son lit est fait, ses affaires sont  toutes à leur place. C’est comme si elle était sortie pour  une course et n’était jamais revenue. 

Je tourne les pages du carnet. La dernière entrée  date d’hier soir, 23h47 : 



<em>Quelqu’un gratte au mur. Ce n’est pas la première  fois. Je crois que c’est Nadia, ma voisine. Elle doit  m’entendre pleurer. Je ne veux pas qu’elle s’inquiète.  Demain, j’irai lui parler. Je lui expliquerai pour les roses,  pour Achille, pour tout ce poids qu’on porte dans cet  immeuble. Demain. </em>

Mon sang se glace. 


Ce n’était pas elle qui grattait. 


C’était moi qu’elle entendait. 


Mais alors… qui grattait chez moi ? 


Trois jours plus tard, Marie-Chantal réapparaît. Elle  revient d’un séjour imprévu chez sa sœur à Québec, une  urgence familiale dont elle n’avait parlé à personne.  Les chats ont été nourris par Christelle pendant son  absence. 


Je la croise dans l’escalier. Elle me sourit, fatiguée mais  sereine. 


— Nadia. Agnès m’a dit que tu t’étais inquiétée. C’est  gentil. 


— Les bruits… je commence. 


— Je sais. C’est un vieux bâtiment. Les murs ont leurs  secrets. Parfois, je crois qu’ils retiennent les échos de ce  qui s’est passé avant nous. 


Elle me tend quelque chose : une petite aquarelle  encadrée. Une rose blanche, simple et délicate, peinte  sur fond de ciel d’hiver. 


— C’est une amie qui l’a faite. Pour me rappeler que  même les souvenirs douloureux peuvent devenir beaux  avec le temps. 

Je rentre chez moi, l’aquarelle sous le bras. Cette nuit-là, pas de grattement. 


Juste le silence, lourd de mystères que je ne percerai  jamais tout à fait.
`,
302: `23 octobre 2012.  

Le rêve qu’on m’a toujours vendu était là.  Tu verras, Nora, quand tu auras fini le lycée, tu  t’installeras dans la grande ville et tu découvriras enfin  la vraie vie !  


Mais moi, je crois que la vraie vie, je la connaissais  déjà. Mais évidemment, je les ai écoutés. Après tout,  c’étaient des adultes. Ils avaient plus vécu que moi, ils  devaient bien savoir de quoi ils parlaient.  


Alors j’ai fait mes valises. Je me suis installée dans  mon nouvel appartement, numéro 302, à Montréal,  comme une grande. Je me suis inscrite à l’université et,  depuis trois semaines, je suis officiellement étudiante en  langues. <em>Fun, right ?</em>  


Je dois dire qu’il y a des choses que je n’avais pas  anticipées.  


Moi, j’ai grandi à la campagne. Le boulanger est le  même depuis que je suis toute petite, les professeurs sont  des amis de mes parents, le prêtre du village nous a vus  grandir, et surtout, mes amis et moi, on s’est rencontrés  à la maternelle.  

En d’autres mots, je n’ai jamais eu à me faire d’amis :  ils ont simplement toujours été là, et on ne s’est jamais  quittés. Je crois que je ne sais pas comment en trouver  de nouveaux.  


Le rêve qu’on m’avait vendu n’est finalement pas si  beau que ça.  


J’ai mon thé en main, il est 20 h 45, et je regarde  les gouttes d’eau couler le long de ma fenêtre, me demandant laquelle arrivera en bas la première.  Les gouttes s’entassent, se rejoignent, et lorsqu’elles  deviennent trop lourdes, elles tombent toutes ensemble  jusqu’au balcon en dessous.  


Ma chambre est toujours rangée. J’aurais aimé  manquer de temps pour la remettre en ordre, mais ce  n’est jamais le cas. Je rentre tous les après-midis de la  fac, mes soirées sont libres. Je me pose avec mes livres,  mes recettes de cuisine, et cette impression de passer à  côté de quelque chose.  


J’ai désespérément envie d’une amie.  


Ce samedi matin, je crois que ma prière a été  entendue.  


Je descendais de chez moi. Pas très loin, juste en bas  de l’immeuble, il y avait une fleuriste, Agnès.  Mon petit appartement manquait d’un peu de vie,  alors je me suis dit que je pouvais m’offrir des fleurs pour  l’égayer.  


Dans la boutique se tenait une jeune femme. Elle avait  sûrement deux ou trois ans de plus que moi. Elle était  belle, une grande brune, élégante sans effort, et elle  semblait douce.  

— Ce sont mes préférées, celles-là. Elles sont  magnifiques, tu ne trouves pas ?  


C’étaient des roses blanches, posées sur une étagère  au fond de la pièce.  


Je me suis surprise à sourire.  


— Oui… simples mais belles.  


— Elles sont pour ma mère. Je lui en apporte chaque  semaine.  


Elle s’appelait Marianne.  


— Agnès, pourriez-vous me préparer le bouquet pour  Madame Ferland, appartement 206 ?  



Comme un rituel du samedi, Marianne venait en  acheter pour sa mère chaque semaine.  


— Vous habitez ici ? me demanda-t-elle en me voyant  prendre un petit bouquet.  


— Oui, au 302. Je viens d’emménager.  


— Oh ! Bienvenue alors ! Ma mère habite juste en  dessous de chez vous, et moi, je passe souvent la voir.  Vous verrez, l’immeuble a un charme un peu vieillot,  mais il y a de belles âmes ici, même si ma mère ne dirait  jamais ça, dit-elle en riant.  


La douceur de Marianne s’était confirmée. La  raccompagnant à sa porte, elle m’a raconté qu’elle  travaillait dans une librairie du centre, qu’elle aimait les  livres anciens et rêvait de voyages. Moi, j’ai parlé de  mes études, de mon petit village, et de l’odeur de la  campagne qui me manquait parfois. Devant la porte  du 206, elle s’est arrêtée. Elle a levé le bouquet de roses  blanches et m’a dit :  


— Tiens, prends-en une. Pour ton appartement.  — 


Oh non, je ne peux pas… c’est pour votre mère.  


— Elle sera contente.  


J’ai pris la rose. Et pour la première fois depuis que  je suis arrivée à Montréal, j’ai senti une bienveillance  profonde. Je savais qu’on deviendrait amies, Marianne  et moi.  


Le soir, j’ai posé la rose blanche dans un verre d’eau  sur la table de ma cuisine. Je me suis assise à côté, un  thé à la main, et j’ai pensé à Marianne, à sa mère, à  leurs samedis rythmés par les fleurs. Moi aussi, j’allais  instaurer des habitudes chez moi.  


Les semaines suivantes, j’ai croisé Marianne plusieurs  fois dans l’immeuble. Un sourire dans l’escalier, une  conversation sur le palier, un café partagé avant qu’elle file au travail. Puis des sorties au théâtre, des  brunchs dans les coins paumés de la ville, des soirées  thé à l’appartement.  


Elle disait souvent :  


— Les racines ne t’empêchent pas de voler, Nora. Elles  t’aident à ne pas te perdre. Tu as le droit de t’épanouir  ici. Ma racine à moi, c’est ma mère, et je ne peux pas  la laisser seule. Pas après le décès de mon père. Mais je  sais qu’un jour, j’irai voir le monde. Je rêve d’habiter en  Grèce, si tu savais !  


On m’avait parlé d’un hiver difficile ici, mais à ses  côtés, il s’écoulait sans que je ne le vois passer.  Elle était là, l’amie que j’avais tant espéré trouver, la  complicité qui me manquait.  


Quelques mois plus tard, je me suis surprise à croiser  Marianne plus souvent dans l’immeuble. Ce n’était pas  pour me déplaire, mais c’était étrange : elle ne devrait  pas être aussi présente. Par peur d’être indiscrète, je  n’ai pas voulu poser de questions.  


Alors que le ciel commençait enfin à se dégager et  que le froid s’adoucissait, le 10 mars, en rentrant des  cours, j’ai trouvé un mot glissé sous ma porte :  


<em>Hier, maman est partie. On l’a emmenée là où elle a  toujours voulu se reposer. Je resterai là-bas un temps,  puis j’irai là où je rêve depuis si longtemps de m’installer  : en Grèce. Merci d’avoir été là. Je n’oublierai rien de  nous. Marianne. </em>


Je suis restée longtemps à relire cette phrase.  


Le lendemain, je suis descendue chez la fleuriste. Les  roses blanches étaient là, toujours aussi belles. J’en ai  acheté deux bouquets : un pour Madame Ferland, que  je ne connaîtrai jamais, et un pour Marianne, parce  qu’elle m’avait offert bien plus qu’une fleur : elle m’avait  offert le cadeau d’une vie, une amitié. 
`,
114: `Traînant difficilement mes deux énormes valises,  chargée de mon sac de voyage, j’arrivais finalement  devant le numéro 114.  

Un déménagement demande toujours une certaine  logistique ; un déménagement impliquant un  changement de pays et de continent est d’autant plus  délicat. J’avais sans doute surestimé mes capacités à  mener de front ce projet toute seule.  


En quittant l’Allemagne, je ne voyais que l’aspect fun  d’un Erasmus à Montréal : des rencontres à n’en plus  finir, des voyages à travers tout le Québec, l’opportunité  d’améliorer mon français.  


Cette langue m’émerveille depuis mes plus jeunes  années : je l’ai apprise petite et ai mis beaucoup  d’ardeur dans cette tâche depuis. Les vers de Rimbaud,  l’œuvre cathédrale de Proust, le théâtre de Duras : je  lisais frénétiquement les plus grands de la littérature  française.  


Mon choix d’orientation a clairement été orienté  par cette passion : je souhaitais devenir traductrice et  interprète en français. Ayant déjà fait de nombreux  séjours en France, j’ai préféré choisir le Québec pour  faire mon Erasmus, dans l’idée de quitter l’Europe pour  un temps. 


C’est ainsi que je me retrouve, en ce milieu du mois  d’août, à batailler avec toutes mes affaires à installer  dans mon nouvel appartement. J’avais déniché cette  pépite par le biais d’une amie qui était installée dans  ce même appartement l’année précédente, lors de son échange universitaire.  


Un petit quartier sympa, reculé du centre-ville, calme.  Etant donné les difficultés de se loger dans cette ville,  je ne comptais pas faire la difficile au niveau des  conditions de l’appartement.  


Mon coloc avait l’air plutôt tranquille, très occupé par  sa thèse. L’appel vidéo que nous avions fait m’avait  mise en confiance : tel un vrai Québécois, il était d’une  gentillesse incomparable.  


Il me proposa tout de suite son aide et porta mes affaires  jusque dans ma nouvelle chambre. Elle comportait une  grande fenêtre qui apportait beaucoup de lumière et  donnait sur la cour extérieure. Je restai un instant et pus  apercevoir l’intérieur des appartements de l’immeuble  d’en face. Toutes ces vies, si différentes les unes des  autres. Toutes ces personnes installées. A quoi pouvaient  donc ressembler leurs quotidiens ? 


Je m’acclimatais rapidement à ma nouvelle vie :  les alentours de Montréal regorgeaient de nature et il  n’était pas difficile de s’échapper de la ville.  


Je fis la rencontre d’autres étudiants avec qui je sortais.  Je testai la nourriture locale, les bonnes adresses, et  flânais dans les rues en perdant la notion du temps.  


La vie était douce à Montréal. Je nouais aussi  rapidement un lien avec ma nouvelle voisine, Agnès.  Nous passions beaucoup de temps l’une chez l’autre,  discutions de tout, regardions des films ensemble.  Elle tenait la boutique de fleurs au rez-de-chaussée de  l’immeuble, et j’aimais venir lui rendre visite.  Je n’ai jamais compris la raison pour laquelle elle  conservait autant de roses blanches en stock.  —Tu sais, Maxi, on ne peut pas toujours suivre la voie  de la raison.  


Ces explications mystérieuses me laissaient sur ma  faim. 



Elle m’en offrait, parfois, lorsque je les regardais avec  insistance. Un joli bouquet de roses blanches ornait  donc notre salon de temps à autre.  


Pompom, le chat d’une voisine de palier, leur rendait  parfois la vie compliquée. Il parvenait à s’échapper de  son appartement et, pour je ne sais quelle raison, se  réfugiait toujours dans le nôtre. Je le retrouvais parfois le  soir, après les cours, affalé sur mon lit.  


Il n’était pas méchant, et j’étais une grande amoureuse  des animaux. J’aimais ses visites impromptues. Il ne se  dirigeait, en revanche, jamais vers le numéro 118.  


Fatima, la résidente, ne se montrait pas. Je crois n’avoir  jamais vu sa porte ouverte, ni n’avoir jamais entendu un  seul son en provenance de son appartement. J’allais  parfois jusqu’à douter de sa présence.  


Malgré cela, j’aimais beaucoup cet immeuble et  j’étais ravie d’y passer l’année.  


Les jours s’éteignaient de plus en plus tôt et le froid  s’installait dans le pays. Les paysages se paraient de  leur robe blanche et nous ne tardions pas à nous terrer  à l’intérieur des bâtiments, à l’abri des températures  négatives extrêmes.  


Cela n’empêchait pourtant pas les gens de vivre : les  magasins, les bars, les restaurants débordaient de vie.  


Une nuit où je rentrai un peu tard dans l’immeuble,  je trouvai Jocelyn, habitant au troisième, à observer la  devanture de la boutique d’Agnès.  


Lorsque je l’ai interpellé, il sembla sortir d’une profonde  rêverie. Nous remontâmes les escaliers ensemble et  prîmes le temps d’échanger quelques mots.  


Jocelyn était loin d’être extraverti. Il fallait lutter pour  lui arracher un sourire et il ne devait sans doute jamais  avoir connu ce que l’on appelle la joie de vivre.  

Mais je le trouvais charmant. Lorsque nous arrivâmes  au premier, il me souhaita une bonne nuit.  Son regard me troublait toujours, il m’était difficile de  le soutenir.  

Les premiers mois de cette nouvelle vie s’annonçaient  définitivement prometteurs.
`,
104: `Le silence, c’est ce que Marco recherche avant tout.  Le silence et la solitude.  

À quarante-neuf ans, professeur de philosophie au  cégep du Vieux-Montréal, il a développé une relation  particulière avec le vide. Pas le vide existentiel dont il  parle à ses étudiants quand il enseigne Sartre ou Camus.  Non, le vide physique. L’espace. L’absence de bruit, de  mouvement, d’humanité encombrante. 

Son appartement du premier étage est un sanctuaire  minimaliste. Quatre meubles, pas plus : un lit, un bureau,  une bibliothèque et un fauteuil de lecture près de la  fenêtre. Les murs sont blancs, nus, presque cliniques. Pas  de photos, pas de souvenirs, pas de ces accumulations  sentimentales qui encombrent la vie des autres. Juste  des livres. Des centaines de livres alignés avec une  précision militaire. 

Ce mardi matin de janvier, Marco se réveille à six  heures précises, comme chaque jour. Il n’a pas besoin  de réveil. Son corps a intégré le rythme. Il se lève,  prépare son café noir dans une cafetière italienne,  s’installe à son bureau avec son carnet de notes. Avant  de partir enseigner, il écrit toujours quelques lignes. Des  fragments. Des pensées qui se cherchent. 

Aujourd’hui, il griffonne : <em>La solitude n’est pas un état,  c’est une pratique. </em>

Il boit son café en regardant par la fenêtre. La cour  intérieure de l’immeuble est déserte. 


Parfait. Il déteste croiser les voisins. Ces échanges  forcés, ces sourires de politesse, ces <em>comment allez vous</em> qui n’attendent aucune vraie réponse.  


Thomas du 102 est gentil mais bavard. Marie-Chantal  du 110 pose trop de questions. Agnès du 112 est trop  joyeuse le matin. 


Marco préfère l’anonymat. Il sort de chez lui à sept  heures quinze, descend l’escalier sans faire de bruit,  traverse le hall comme un fantôme et disparaît dans la  rue avant que quiconque puisse l’intercepter. 


Le cégep est à vingt minutes à pied. Il marche vite,  les mains dans les poches, le regard fixé droit devant.  Il connaît le chemin par cœur, évite les rues trop  fréquentées, préfère les ruelles tranquilles où il peut  penser sans être dérangé. 


Son cours du matin porte sur l’absurde chez Camus.  Vingt-trois étudiants l’écoutent avec des degrés  d’attention variables. Certains prennent des notes,  d’autres fixent leur téléphone sous la table. Marco s’en  fiche. Il enseigne pour lui-même, pas pour eux. Il expose  ses idées, les développe, les décortique. Si quelqu’un  comprend, tant mieux. Sinon, ce n’est pas grave. 


À la pause, une étudiante s’approche de lui. Cheveux  roses, piercings multiples, regard intense. 


— Monsieur Rivard, j’ai lu <em>L’Étranger</em> comme vous nous  l’aviez demandé. C’est troublant. Meursault ne ressent  rien, même à l’enterrement de sa mère. Vous pensez  qu’on peut vraiment vivre comme ça ? 

Marco range ses notes dans son sac. 


— On peut vivre de mille façons différentes. La question  n’est pas de savoir si on peut, mais si on veut. 

— Et vous ? Vous vivez comment ? 


La question le surprend. Il lève les yeux vers elle. Elle a  l’air sincère, curieuse. Pas de jugement dans son regard. 

— À ma façon. 

Elle sourit et retourne à sa place. Marco reste  immobile un instant. Cette interaction l’a déstabilisé.  Pas désagréablement, mais suffisamment pour qu’il y  pense encore une heure plus tard. 


L’après-midi, il n’a pas de cours. Il rentre chez lui,  s’arrête au dépanneur du coin pour acheter du pain et  du fromage. Le caissier le connaît, ne lui adresse qu’un  bref salut. Parfait. 


En arrivant devant son immeuble, il croise Agnès qui  sort de sa boutique de fleurs. Elle porte un tablier vert,  ses cheveux attachés en chignon désorganisé. Elle lui  sourit. 


— Bonjour Marco ! Belle journée, non ? 


— Oui. 


Il continue son chemin. Elle n’insiste pas. C’est ce qu’il  apprécie chez elle : elle comprend qu’il ne veut pas  parler. 


Dans son appartement, Marco prépare un sandwich,  s’installe dans son fauteuil près de la fenêtre. Il ouvre un  livre de Cioran, mais n’arrive pas à se concentrer. La  question de l’étudiante résonne encore dans sa tête.  
<em>Vous vivez comment ?  </em>


Il regarde autour de lui. Les murs blancs. Les livres  alignés. Le silence absolu. C’est exactement ce qu’il  voulait. Alors pourquoi cette sensation étrange, ce petit  pincement quelque part sous les côtes ? 


Le soir, il corrige des copies. Des dissertations  maladroites sur la liberté selon Sartre. La plupart sont  médiocres, quelques-unes montrent des éclairs de compréhension. Il annote soigneusement, encourage  quand c’est nécessaire, critique quand c’est utile. 


Vers vingt-deux heures, il entend de la musique venant  de l’appartement du dessus. Quelqu’un a emménagé  récemment au 204. Il ne sait pas qui. La musique n’est  pas forte, juste assez pour traverser le plafond. Du jazz.  Un saxophone mélancolique. 


Marco écoute malgré lui. La mélodie est belle, presque  hypnotique. Il ferme les yeux, se laisse porter. C’est rare  qu’il apprécie le bruit des autres. 


Le lendemain matin, en sortant de chez lui, il trouve  une enveloppe glissée sous sa porte. Il l’ouvre avec  méfiance. À l’intérieur, un petit mot écrit à la main et  une image imprimée sur du papier épais : une aquarelle  représentant une rose blanche. 


Le mot dit : <em>Merci pour votre patience hier soir. La  musique m’aide à décompresser après le travail. Si ça vous dérange, n’hésitez pas à me le dire. Appartement  204. </em>


Marco fixe l’image longtemps. La rose est simple,  délicate. Quelque chose dans sa pureté le touche  d’une manière qu’il ne s’explique pas. 


Il range le mot et l’image dans un tiroir de son bureau.  Puis il sort faire ses courses. En revenant, il s’arrête devant  la boutique d’Agnès. À travers la vitrine, il voit des  bouquets colorés, des plantes vertes, des arrangements  floraux. Tout sauf des roses blanches. 


Il hésite, puis entre. 


— Marco ! s’exclame Agnès, surprise. Première visite !  Qu’est-ce que je peux faire pour vous ? 


— Je... je cherche quelque chose pour remercier  quelqu’un. 


— Ah ! Un bouquet alors. Pour qui ?
 
— Un voisin. Nouvelle arrivée au 204. 


Agnès sourit et commence à composer un petit  arrangement avec des tulipes et des fougères. — C’est gentil de votre part. Je ne vous savais pas si  sociable. 


— Je ne le suis pas. 


Elle rit doucement. 


— Peut-être que vous le devenez. 


Marco paie et remonte chez lui avec le bouquet. Il le  dépose devant la porte du 204 sans frapper, sans laisser  de mot. Puis il redescend rapidement. 


De retour dans son appartement, il s’assoit dans son  fauteuil. Le silence l’entoure, familier et confortable.  Mais pour la première fois depuis longtemps, il ne lui  suffit plus tout à fait. 


Il prend son carnet, écrit une nouvelle ligne : <em>La solitude  n’est pas un état permanent. C’est une forteresse dont  on peut, parfois, entrouvrir les portes.  </em>

Dehors, la nuit tombe sur Rosemont. Marco ferme les  yeux et attend.  


Peut-être que demain, il entendra encore du jazz.  Peut-être qu’il trouvera un mot de remerciement sous  sa porte. Peut-être que rien ne changera. 

Mais peut-être, juste peut-être, que c’est acceptable.
`,
116:`Le carton déborde sur mes genoux. Encore des  factures. Des relances. Des menaces polies enveloppées  dans du papier administratif. Je les pose sur la pile qui  s’accumule déjà sur la table basse, entre le cendrier  plein et la tasse de café froid d’hier matin. Ou d’avant hier. Je ne sais plus trop. 

Je m’appelle Rafik Benmohamed, j’ai quarante et un  ans, et je suis musicien. Enfin, je l’étais. Maintenant, je  donne des cours de guitare à des gamins qui préfèrent  TikTok aux accords de septième, et je joue dans des  bars le vendredi soir devant des gens qui parlent trop  fort pour m’entendre vraiment. 


L’appartement 116 sent le renfermé. Je devrais ouvrir  les fenêtres, mais dehors il fait moins dix et je n’ai pas  envie de geler. De toute façon, l’air frais ne changerait  rien au bordel ambiant : les partitions éparpillées sur  le sol, les cordes de guitare qui traînent comme des  serpents morts, les trois instruments posés n’importe où  parce que je n’ai jamais acheté de supports corrects. 


Mon téléphone vibre. Message de Samira, ma sœur,  qui vit à Laval avec son mari et ses deux enfants parfaits. <em>Maman demande si tu viens dimanche.  </em>


Je tape une réponse floue, du genre je vais voir, puis  je jette le téléphone sur le canapé.  


Ma mère pose toujours les mêmes questions : pourquoi  je ne me suis pas remarié, pourquoi je ne trouve pas un  <em>vrai travail</em>, pourquoi je m’obstine à vivre dans ce petit appartement miteux.  


Elle ne comprend pas. Personne ne comprend. 

Il est onze heures du matin et je n’ai rien fait de ma  journée. J’ai deux cours cet après-midi, un gamin de  douze ans qui massacre Smoke on the Water et une  adolescente qui veut apprendre du Ed Sheeran. L’un  comme l’autre me donnent envie de me jeter par la  fenêtre, mais ils paient, alors je souris et j’encourage. 


Je me lève pour me faire un nouveau café quand on  frappe à la porte. Trois coups secs, autoritaires.  Mon cœur fait un bond stupide. Les huissiers frappent  comme ça. Mais non, c’est trop tôt. J’ai encore une  semaine avant la prochaine échéance. 


J’ouvre. C’est Christelle, la gardienne. Elle tient un  paquet. 


— Monsieur Benmohamed, ça vient d’arriver pour  vous. Le livreur ne voulait pas le laisser sans signature. Je prends le colis, surpris. Je n’ai rien commandé. Sur  l’étiquette, pas d’expéditeur. Juste mon nom et mon  adresse. 


— Merci. 


Christelle hoche la tête et s’en va. Je referme la porte,  pose le paquet sur la table. Il est léger, presque vide. Je  l’ouvre avec méfiance. 


À l’intérieur, un disque vinyle. Pas de pochette, pas  de note. Juste le vinyle noir, brillant, avec une étiquette  manuscrite au centre : <em>Pour celui qui a oublié pourquoi  il jouait. </em>


Mon sang se glace. Qui m’envoie ça ? Et pourquoi ? Je retourne le colis dans tous les sens, cherche un  indice, un mot caché. Rien.  


Je sors le vinyle, le tiens à la lumière. Aucune rayure,  impeccable. Mais je n’ai pas de platine.  


J’en avais une, il y a des années, avant que mon ex femme parte avec la moitié de mes affaires. Depuis, je  n’ai jamais racheté. 

Je descends au rez-de-chaussée, frappe chez  Thomas, le vieux réparateur de radios du 102. Il ouvre,  étonné. 


— Rafik ? Tout va bien ? 


— Vous avez une platine vinyle ? 


Il fronce les sourcils. 


— Oui, j’en ai plusieurs. Pourquoi ? 


— Je peux en emprunter une ? Juste pour écouter  quelque chose. 


Il hésite, puis hoche la tête. 


— Attends-moi ici. 


Il revient avec une vieille Technics, câbles enroulés  autour. Je le remercie et remonte chez moi quatre à  quatre. 

J’installe la platine, branche tant bien que mal sur mes  enceintes, pose le vinyle sur le plateau. L’aiguille crépite  en se posant sur le sillon. 


Puis la musique commence. 


C’est ma chanson. Celle que j’ai composée il y a  quinze ans, celle qui devait tout changer. Celle qui n’a  jamais été enregistrée, jamais publiée.  


Juste jouée une seule fois, dans un studio miteux à  Toronto, devant un producteur qui m’avait dit  — C’est pas mal, mais ça ne se vendra jamais. 


Je m’effondre sur le canapé, les mains tremblantes.  Comment est-ce possible ? Cette session n’existe nulle  part. Pas de copie, pas de fichier. Juste un souvenir que  j’ai enfoui au fond de ma tête. 


La guitare résonne, claire et pure. Ma voix, plus jeune,  plus confiante, chante des paroles que je ne me  rappelais même plus avoir écrites. Et au fond, presque  imperceptible, un piano.  


Des notes douces, mélancoliques, comme un souffle. 


Je ferme les yeux et je pleure. Silencieusement, sans  savoir pourquoi. Peut-être parce que j’entends celui  que j’étais. Celui qui croyait encore. 
La chanson se termine. Le silence revient, lourd comme  une pierre. 


Je retourne le vinyle. Au dos, gravé à la main dans la  cire : <em>les rêves ne meurent jamais vraiment. Ils attendent  juste qu’on les réveille.  </em>


Mon téléphone sonne. C’est mon élève de douze ans,  sa mère annule le cours. Tant mieux. Je n’aurais pas pu  enseigner aujourd’hui. 


Je reste assis là, le vinyle posé sur mes genoux, à fixer le  mur. Sur l’étagère, coincée entre deux livres poussiéreux,  une vieille photo encadrée. Moi sur scène, il y a vingt  ans, guitare à la main, devant une foule floue. Derrière  moi, sur l’ampli, quelqu’un avait posé une rose blanche.  Un fan, peut-être. Je ne me souviens plus. 


Je me lève, prends ma guitare acoustique, celle qui  ne me quitte jamais. Je m’assieds par terre, dos contre  le canapé, et je commence à jouer. Les accords  reviennent tout seuls, comme s’ils n’avaient jamais  vraiment disparu. 


Et pour la première fois depuis des années, je ne joue  pas pour quelqu’un d’autre. Je joue pour moi. 


Dehors, la neige se remet à tomber. Dans l’immeuble,  la vie continue.  


Mais ici, dans l’appartement 116, quelque chose vient de se réveiller.
`
};

// Fonction utilitaire pour traiter le texte et insérer des <br/>
const processText = (text) => {
  // 1. Remplacer les doubles sauts de ligne par <br/><br/> pour les paragraphes
  const withBreaks = text.replace(/\n\n/g, "<br/><br/>");
  // 2. Remplacer les sauts de ligne simples par un espace pour éviter les sauts de ligne non désirés au milieu des phrases si un seul \n est utilisé
  // Cependant, pour le texte fourni, les doubles sauts de ligne sont clairs. Nous nous concentrons sur le remplacement du Markdown.

  // 3. Remplacer les balises de gras Markdown par des balises HTML/JSX <strong>
  const withStrong = withBreaks.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  return withStrong;
};

// Fonction pour nettoyer le texte pour le TTS
const cleanTextForSpeech = (htmlText) => {
  if (!htmlText || htmlText.trim() === '') {
    console.error('cleanTextForSpeech: texte vide ou undefined');
    return '';
  }
  
  // D'abord, remplacer les <br/> par des espaces
  let textWithSpaces = htmlText.replace(/<br\s*\/?>/gi, ' ');
  
  // Créer un élément temporaire pour parser le HTML
  const temp = document.createElement('div');
  temp.innerHTML = textWithSpaces;
  
  // Extraire le texte pur
  let cleanText = temp.textContent || temp.innerText || '';
  

  // Remplacer les sauts de ligne multiples par des pauses
  cleanText = cleanText.replace(/\n\n+/g, '. ');
  cleanText = cleanText.replace(/\n/g, ' ');
  
  // Nettoyer les espaces multiples
  cleanText = cleanText.replace(/\s+/g, ' ').trim();
  
  console.log('Texte nettoyé, longueur:', cleanText.length);
  console.log('Aperçu:', cleanText.substring(0, 200));
  
  return cleanText;
};
// Application de la fonction de traitement au moment de la définition des textes
const apartmentTexts = Object.keys(rawApartmentTexts).reduce((acc, key) => {
  acc[key] = processText(rawApartmentTexts[key]);
  return acc;
}, {});

const Apartmentpage = ({ handlePageNavigation, selectedApt, apartments }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdea, setGeneratedIdea] = useState("");

  const currentText = apartmentTexts[selectedApt] || "";
  const hasContent = apartments[selectedApt]?.hasText;
  

    // Vérifier si le navigateur supporte le TTS
  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setSpeechSupported(false);
      console.warn('La synthèse vocale n\'est pas supportée par ce navigateur');
    }
  }, []);


   // Vérifier si le navigateur supporte le TTS
  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setSpeechSupported(false);
      console.warn('La synthèse vocale n\'est pas supportée par ce navigateur');
    } else {
      // Afficher toutes les voix disponibles dans la console (pour débogage)
      const logVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        console.log('Voix disponibles:');
        voices.forEach((voice, i) => {
          console.log(`${i}. ${voice.name} (${voice.lang})${voice.default ? ' [DEFAULT]' : ''}`);
        });
      };
      
      // Les voix peuvent ne pas être chargées immédiatement
      if (window.speechSynthesis.getVoices().length > 0) {
        logVoices();
      }
      window.speechSynthesis.onvoiceschanged = logVoices;
    }
  }, []);
 
  const handleTextToSpeech = useCallback(() => {
    if (!speechSupported) {
      alert('La lecture audio n\'est pas supportée par votre navigateur.');
      return;
    }

    // Si déjà en cours de lecture, arrêter (vide la file d'attente)
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Déterminer le texte à lire
    let textToRead = '';
    
    if (selectedApt === "Fleuriste") {
      textToRead = "Le fleuriste au rez-de-chaussée est inoccupé pour le moment, mais on peut imaginer l'odeur des roses et des lilas, et le bruit doux des ciseaux coupant les tiges.";
    } else if (hasContent) {
      textToRead = cleanTextForSpeech(currentText);
    } else {
      textToRead = "En attente de votre écriture.";
    }

    if (!textToRead) {
      alert('Aucun texte à lire.');
      return;
    }

    // --- DÉBUT DE LA LOGIQUE DE DÉCOUPAGE (CHUNKING) ---

    // 1. Découper le texte en phrases (chunks)
    //    Ceci découpe le texte à chaque point, '!' ou '?'
    const chunks = textToRead.match(/[^.!?]+([.!?]\s*|$)/g);

    if (!chunks || chunks.length === 0) {
      console.error("Impossible de découper le texte.");
      alert('Erreur lors de la préparation du texte pour la lecture.');
      return;
    }

    // 2. Marquer comme "en lecture"
    setIsSpeaking(true);

    // 3. Créer une "utterance" pour chaque phrase et l'ajouter à la file d'attente
    chunks.forEach((chunk, index) => {
      const utterance = new SpeechSynthesisUtterance(chunk.trim());
      
      // Configuration (comme avant, mais pour chaque chunk)
      utterance.lang = 'fr-CA'; // On laisse le navigateur choisir la voix
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;

      // Gérer les erreurs
      utterance.onerror = (event) => {
        console.error('Erreur de synthèse vocale:', event.error);
        setIsSpeaking(false); // Réinitialiser en cas d'erreur
      };

      // 4. Quand le *dernier* chunk est terminé, mettre à jour l'état
      if (index === chunks.length - 1) {
        utterance.onend = () => {
          setIsSpeaking(false);
        };
      }

      // 5. Lancer la lecture (ajoute à la file d'attente)
      window.speechSynthesis.speak(utterance);
    });
    // --- FIN DE LA LOGIQUE DE DÉCOUPAGE ---

  }, [selectedApt, currentText, hasContent, isSpeaking, speechSupported]);

  const goHome = () => {
     // Arrêter la lecture si en cours
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    handlePageNavigation(null);
  };

const generateIdea = () => {
  setIsGenerating(true);
  setGeneratedIdea("");

  setTimeout(() => {
    // Déterminer l'étage
    const etage = Math.floor(selectedApt / 100);
    
    // Personnages ORIGINAUX avec diversité d'âges et professions
    const personnages = [
      { nom: "Béatrice Langlois", age: 24, profession: "fleuriste ambulante" },
      { nom: "Rachid Mansouri", age: 58, profession: "horloger" },
      { nom: "Maude Pelletier", age: 33, profession: "podcasteuse indépendante" },
      { nom: "Giovanni Russo", age: 71, profession: "accordeur de pianos" },
      { nom: "Jade Beauchamp", age: 27, profession: "toiletteuse pour animaux" },
      { nom: "Sébastien Lavoie", age: 45, profession: "restaurateur de meubles anciens" },
      { nom: "Amira Diallo", age: 22, profession: "étudiante en astronomie" },
      { nom: "Philippe Gendron", age: 50, profession: "livreur de nuit" },
      { nom: "Rosalie Thériault", age: 36, profession: "orthophoniste" },
      { nom: "Karim Benali", age: 40, profession: "ébéniste" },
      { nom: "Laurence Dion", age: 29, profession: "coach sportif à domicile" },
      { nom: "Octave Vaillancourt", age: 63, profession: "antiquaire" },
      { nom: "Mélissa Côté", age: 31, profession: "technicienne en prothèses dentaires" },
      { nom: "Arnaud Simard", age: 25, profession: "coursier à vélo" },
      { nom: "Solange Bergeron", age: 54, profession: "couturière sur mesure" },
      { nom: "Diego Fernandez", age: 39, profession: "professeur de tango" },
      { nom: "Anaïs Boucher", age: 21, profession: "apprentie sommelière" },
      { nom: "Rémi Caron", age: 47, profession: "taxidermiste" },
      { nom: "Inès Laberge", age: 34, profession: "masseuse thérapeutique" },
      { nom: "Zacharie Fortin", age: 60, profession: "luthier" }
    ];

    // Situations du quotidien
    const situations = [
      "découvrir une vieille carte postale coincée derrière le radiateur",
      "assister à une dispute de couple dans l'escalier",
      "trouver un portefeuille abandonné dans la buanderie",
      "recevoir un appel téléphonique d'un numéro inconnu qui change tout",
      "voir son reflet dans le miroir et décide de tout changer",
      "entendre une conversation privée à travers le mur trop fin",
      "devoir gérer une fuite d'eau qui s'infiltre du plafond",
      "croiser trois fois la même personne dans la même journée",
      "recevoir une lettre adressée à l'ancien locataire, morte il y a dix ans",
      "remarquer qu'un objet familier a disparu de son appartement",
      "se réveiller avec l'impression d'avoir oublié quelque chose d'important",
      "être témoin d'un moment intime par une fenêtre mal fermée",
      "découvrir que son appartement servait à quelque chose d'étrange avant",
      "partager l'ascenseur avec quelqu'un qui pleure en silence",
      "trouver un journal intime caché dans un placard"
    ];

    // Thèmes
    const themes = [
      "l'étrangeté du quotidien qui nous échappe",
      "les vies parallèles qui ne se touchent jamais",
      "ce qu'on cache aux autres et à soi-même",
      "les coïncidences qui n'en sont peut-être pas",
      "la frontière floue entre curiosité et voyeurisme",
      "les traces que laissent ceux qui sont partis",
      "l'impossibilité de vraiment connaître ses voisins",
      "les rituels qui nous maintiennent en vie",
      "la façon dont les murs retiennent les secrets",
      "l'art de survivre dans un petit espace"
    ];

    // Tonalités avec descriptions
    const tonalites = [
      { style: "comique", description: "un récit léger qui joue sur l'absurde des situations et les quiproquos savoureux" },
      { style: "réaliste", description: "une narration sans fard, avec une précision presque documentaire" },
      { style: "poétique", description: "une écriture où le quotidien se transforme en métaphore et chaque détail prend une dimension lyrique" },
      { style: "mystérieux", description: "une atmosphère où des zones d'ombre subsistent et certaines questions restent sans réponse" },
      { style: "sarcastique", description: "un ton où le narrateur observe sa vie et celle des autres avec un détachement mordant" },
      { style: "mélancolique", description: "un style où une nostalgie diffuse colore chaque geste, chaque souvenir" },
      { style: "dramatique", description: "une tension qui monte progressivement, où les émotions débordent" },
      { style: "pathétique", description: "une tonalité où l'émotion est à fleur de peau, la vulnérabilité exposée" }
    ];

    // Apparitions discrètes de la rose blanche
    const rosesBlanchesForms = [
      "un autocollant de rose blanche collé sur une lampe de chevet",
      "une rose blanche brodée sur un coussin de canapé",
      "le papier peint de la salle de bain portant un motif de roses blanches fanées",
      "une cicatrice en forme de rose blanche sur un avant-bras",
      "un badge épinglé sur un sac avec une rose blanche dessinée",
      "une rose blanche en origami posée sur une pile de factures",
      "le logo d'une rose blanche sur un vieux magazine qui traîne",
      "des ombres projetées par les rideaux formant comme une rose blanche sur le mur",
      "une rose blanche gravée sur un briquet qu'on ne jette jamais",
      "une rose blanche dessinée à la craie sur le trottoir devant l'immeuble",
      "un petit tatouage temporaire de rose blanche qui s'efface",
      "une rose blanche imprimée sur l'étiquette d'une bouteille de vin vide",
      "le screensaver d'un ordinateur affichant une rose blanche qui tourne",
      "une rose blanche en céramique utilisée comme cale-porte",
      "le reflet d'une enseigne lumineuse dessinant une rose blanche sur le plafond la nuit"
    ];

    // Références à l'univers
    const referencesDiscrets = [
      "entendre un chat tigré miauler dans l'escalier",
      "percevoir les accords d'une guitare électrique distordue venant d'en haut",
      "croiser la gardienne de l'immeuble avec son trousseau de clés qui tinte",
      "sentir l'odeur de quelque chose d'épicé qui embaume tout le palier",
      "remarquer un carton de déménagement qui traîne depuis deux semaines dans le couloir",
      "observer par la fenêtre l'immeuble d'en face où les lumières s'allument par vagues",
      "voir deux vélos attachés devant l'entrée qui rouillent doucement sous la pluie",
      "sentir une odeur de café fort montant de l'appartement du dessous chaque matin",
      "entendre le parquet craquer toujours au même endroit, juste devant la porte"
    ];

    // Périodes
    const periodes = [
      "un mercredi soir de septembre où l'été refuse encore de partir",
      "une nuit d'octobre où le vent fait trembler les fenêtres",
      "un jeudi après-midi de novembre, coincé entre deux obligations",
      "une soirée de décembre où les premiers flocons tombent enfin",
      "un lundi matin de janvier où le froid pique les joues",
      "un week-end de début février où la neige sale s'accumule"
    ];

    // Sélections aléatoires
    const perso = personnages[Math.floor(Math.random() * personnages.length)];
    const prenom = perso.nom.split(' ')[0];
    const situation = situations[Math.floor(Math.random() * situations.length)];
    const theme = themes[Math.floor(Math.random() * themes.length)];
    const tonalite = tonalites[Math.floor(Math.random() * tonalites.length)];
    const roseBlanche = rosesBlanchesForms[Math.floor(Math.random() * rosesBlanchesForms.length)];
    const reference = referencesDiscrets[Math.floor(Math.random() * referencesDiscrets.length)];
    const periode = periodes[Math.floor(Math.random() * periodes.length)];

    // Construction du texte d'idée dans le style demandé
    const ideaText = `Tu pourrais raconter l'histoire de ${perso.nom}, ${perso.age} ans, ${perso.profession}, lors d'${periode}. Dans un style ${tonalite.style}, ${tonalite.description}. ${prenom} pourrait ${situation}. Centre toi sur ${theme}. 

La rose blanche pourrait être ${roseBlanche}. Et pour t'inscrire dans l'ambiance de l'immeuble, ${prenom} pourrait ${reference}.`;

    setGeneratedIdea(ideaText);
    setIsGenerating(false);
  }, 1500);
};
  const showTTSButton = (hasContent || selectedApt === "Fleuriste" || selectedApt === "RDC") && selectedApt !== "Prompt";
  const showIdeaButton = !hasContent && selectedApt !== "Fleuriste" && selectedApt !== "RDC" && selectedApt !== "Prompt";

  return (
    <div className='apartment-page-bg'>
      {/* Voile de fond sombre pour le contraste général du texte (simule la pénombre de l'appartement) */}
      <div></div>

      <div>
        <button onClick={goHome} style={{ marginBlock: "5px", marginLeft: "5px", textAlign: "center" }}>
          Retour à l'immeuble
        </button>

       <h1
          style={{ color: "var(--light-text-color)", textShadow: "2px 2px 4px rgba(0,0,0,0.7)", textAlign: "center" }}>
          {selectedApt === "RDC"
            ? "Rez-de-Chaussée (RDC)"
            : selectedApt === "Fleuriste"
            ? "La Boutique du Fleuriste"
            : selectedApt === "Prompt" // <-- AJOUT
            ? "Prompt" // <-- AJOUT
            : `Appartement ${selectedApt}`}
        </h1>

         {/* Bouton TTS */}
        {showTTSButton && speechSupported && (
          <button 
            onClick={handleTextToSpeech} 
            className="tts-button"
            style={{
              backgroundColor: isSpeaking ? '#e06f98' : undefined
            }}
          >
            {isSpeaking ? '⏸ Arrêter la lecture' : '🔊 Écouter l\'Histoire'}
          </button>
        )}
        {/* Bouton de génération d'idée */}
{showIdeaButton && (
  <button 
    onClick={generateIdea} 
    className="idea-button"
    disabled={isGenerating}
  >
    {isGenerating ? '⏳ Génération en cours...' : '💡 Générer une idée'}
  </button>
)}

{/* Afficher l'idée générée si elle existe */}
{generatedIdea && (
  <div className="generated-idea" style={{
    backgroundColor: 'var(--apartment-interior-color)',
    padding: '15px',
    borderRadius: '0.5rem',
    marginTop: '15px',
    marginBottom: '15px',
    border: '2px solid var(--default-case-color)'
  }}>
    <h3 style={{ color: 'var(--default-case-color)', marginTop: 0 }}>
      💡 Idée générée
    </h3>
    <p style={{ color: 'var(--title-color)', whiteSpace: 'pre-wrap' }}>
      {generatedIdea}
    </p>
  </div>
)}

        {/* Le conteneur qui simule le document/fenêtre */}
        <div className='apartment-window'>
          {/* Afficher l'idée générée si elle existe */}
        
          {hasContent || selectedApt === "Fleuriste" ? (
            // Contenu du texte
            // Utilisation de dangerouslySetInnerHTML pour injecter le HTML/JSX formaté
            <div
              className='formatted-text leading-relaxed'
              style={{ color: "var(--title-color)" }}
              dangerouslySetInnerHTML={{
                __html:
                  selectedApt === "Fleuriste"
                    ? "Le fleuriste au rez-de-chaussée est inoccupé pour le moment, mais on peut imaginer l'odeur des roses et des lilas, et le bruit doux des ciseaux coupant les tiges..."
                    : currentText,
              }}></div>
          ) : (
            // Texte si aucun contenu n'est présent
            <div style={{ color: "var(--default-case-color)" }}>
              {/* Le message est remplacé par  le message d'attente */}
              { <p>En attente de votre écriture...</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apartmentpage;