import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, Volume2, Wand2, Loader2, AlignCenter } from "lucide-react";
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
  314: `**6h59.** Réglé comme un coucou suisse, Valère émerge rapidement. Il bondit de son lit, se sert un café serré et engloutit un croissant. **7h14.** Il enfile une chemise blanche, un élégant costume marine, plaque ses cheveux mi-longs avec du gel. **7h28.** Il prépare sa mallette, n’oublie pas sa montre plaquée or, enfile des chaussures vernies et se prépare à franchir le seuil de son petit appartement pour rejoindre la banque.

Tout est une question d’apparences : malgré ses origines modestes, le jeune homme a toujours voulu faire bonne figure. Ses parents ne roulaient pas sur l’or mais ont tout fait pour lui permettre de poursuivre de belles études. Élève brillant, il avait décroché une bourse qui lui avait permis de rejoindre une prestigieuse école à Montréal. Major de promotion, il avait rapidement trouvé de quoi satisfaire ses ambitions professionnelles. Il ravissait les patrons et les clients. Surtout les clientes.

Et pourtant il habitait cloîtré dans une boîte de conserve. Personne n’avait compris ce choix lorsqu’il avait annoncé son emménagement à ses camarades de l’école. “Pourquoi aller s'enterrer là-bas franchement ? Avec ton salaire tu pourrais viser un loft.” Valère avait pris le parti d’ignorer ces remarques désobligeantes. Ou bien il répondait distraitement “L’endroit est charmant, et les voisins fort aimables.” On lui riait souvent au nez. Il avait dit adieu à beaucoup de relations à cette époque-là.

En vérité, il avait fait ce choix surprenant pour combler un vide dans son quotidien. À quoi bon profiter d’une situation stable et aisée si l’on n’avait personne avec qui la partager ? Cette pensée, digne d’un film de Noël à la gomme dont raffolait Madame Leclercq - une amie de ses parents à qui il rendait parfois des services en bricolage - n’avait pourtant jamais sonné aussi juste.

Un jour, alors qu’il quittait justement l’appartement de Madame Leclercq, il aperçut fugacement une jeune femme chez le fleuriste situé en bas de l’immeuble. Elle avait comme un air familier avec cette chevelure auburn et son teint rosé. Il mit quelques secondes à réaliser qu’il s’agissait d’Agnès, son grand amour de jeunesse. Ils étaient restés quelques semaines ensemble lorsqu’ils étaient au lycée, jusqu’à ce que cette dernière lui préfère son meilleur ami de l’époque.

Cet événement avait mis un sacré coup à l’ego de Valère et l’avait profondément marqué. Il avait été le moteur de sa réussite scolaire. C’était idiot, mais la revoir, là, au pied de l’immeuble dans lequel il se rendait presque tous les mois depuis des années, lui fit tout drôle. S’il n’était pas aussi cartésien, il aurait pu croire à un signe du destin. Il préféra y voir l’occasion de prouver sa valeur à Agnès. Quand elle saurait quel homme il était devenu, elle ne pourrait que regretter leur rupture, non ?

Sans mesurer la puérilité de ce raisonnement, il se mit à rendre beaucoup plus de services à Madame Leclercq. Spontanément il lui proposait de monter un meuble, de faire le ménage chez elle, de faire les courses. Juste pour apercevoir la belle Agnès. Rapidement il comprit qu’en plus de travailler en bas de l’immeuble, elle vivait dans l’un des appartements du premier étage. Si elle le reconnut, elle n’en fit rien paraître. La pudeur sans doute, elle n’ose pas venir me parler. Le jeune homme ne pouvait concevoir qu’elle l’avait oublié depuis des années…

Toujours aussi cartésien, mais également pragmatique, il avait vu dans l’annonce d’un appartement à louer près de celui de Madame Leclercq la parade parfaite pour se rapprocher de son objectif. Son dossier, inespéré pour la propriétaire, était passé comme une lettre à la poste. C’est ainsi que Valère était devenu le voisin d’Agnès.

Dans un premier temps, il appréciait particulièrement les moments où le hasard les faisait partir au travail en même temps. Il s’apprêtait à fermer la porte d’entrée quand il entendait les clés d’Agnès dans la serrure. Il s’arrêtait alors pour lui tenir la porte et échanger quelques banalités avec elle. Ces instants annonçaient pour lui que la journée se déroulerait sous de bons auspices. Peut-être était-il devenu un peu superstitieux depuis son déménagement.

Et ce jour-là, à **7h42**, Valère dévale les escaliers. Il ne lui reste qu’un étage à descendre quand il entend le son métallique et familier de clés du premier étage. Aussitôt il se fige et se cache dans la pénombre, retenant même sa respiration. Il ne veut surtout pas croiser Agnès.

À force d'observations, le banquier décida d’adopter la phase suivante de sa stratégie. À savoir la déclaration. Il ne savait pas comment il allait opérer. Peut-être simplement en lui racontant à quel point leur relation avait été déterminante dans sa trajectoire professionnelle. Il parlerait ensuite de ses études, de sa récente promotion, de son projet d’acheter une voiture de sport… Peu importe, il fallait au moins qu’il ait un cadeau, quelque chose qui fasse sérieux, romantique. Et fier qu’il était de son esprit d’analyse, il préféra faire dans la simplicité : Agnès était fleuriste, elle aimait donc les fleurs.

Il acheta donc le plus gros bouquet de roses qu’il put trouver au supermarché. Évidemment il ne pouvait pas se fournir dans sa boutique, bien que cela aurait eu un aspect cocasse il faut le reconnaître. Il les prit blanches, parce qu’il trouvait ça plus raffiné.

Le soir, après le travail, il se lança et sonna chez sa dulcinée. Elle ouvrit, mais Valère ne vit pas immédiatement sa réaction parce que le bouquet cachait tout son visage. En baissant le bras, il découvrit qu’elle avait la larme à l'œil. Il fut persuadé alors d’avoir réussi son coup. L’émotion l’avait saisie ! Seulement il n’en était rien, elle s’excusa platement et le renvoya chez lui.

Gênée sans doute, elle l’invita à boire un verre le lendemain. Elle expliqua alors à Valère que les roses blanches lui rappelaient un souvenir douloureux en lien avec quelqu’un qui avait beaucoup compté pour elle. Agnès ne précisa pas davantage mais Valère comprit l’immensité de son erreur.

“Je n’arrive même plus à en vendre, regretta-t-elle. Mais je ne me résous pas non plus à cesser d’en commander. Dans une pièce au fond de la boutique il me reste tout un stock qui ne sert à rien…

Est-ce qu’il ne faudrait pas au contraire en faire quelque chose ? Pour reprendre ta vie en main c’est la première étape. Ne laisse pas ton chagrin t’empêcher de vivre. Ça ne veut pas dire oublier, au contraire…”

Il avait lâché ces phrases comme ça, sans réfléchir. Presque comme s’il récitait. Décidément, il avait rendu trop de services à Madame Leclercq avec la télé allumée en arrière-plan.

Pourtant quelque chose avait changé dans l’attitude de la fleuriste à ce moment-là. Valère continua de parler mais elle ne l’écoutait plus, elle était pensive. Au bout d’une heure elle le remercia et s’en alla sans le raccompagner. Alors qu’ils étaient voisins ! Depuis Valère devint d’une timidité extrême dès lors qu’il s’agissait d’Agnès. Il se sentait trop humilié et ne savait pas jouer le bon pote. Alors il faisait en sorte d’éviter sa voisine du premier étage. Quitte à attendre deux minutes au premier étage le temps qu’elle sorte.

Et à **7h44**, tandis qu’il s’attend à voir Agnès, c’est la porte d’à côté qui s'ouvre. Il connaît très peu cette voisine, elle ne sort presque jamais de chez elle et Valère ne l’a rencontrée qu’à l’occasion de la fête des voisins. Madame Desmarais, une infirmière à la retraite qui vit avec trois chats.

Cependant ce n’est pas elle qui franchit le seuil de l’appartement **110**, mais une coquette trentenaire. Valère est immédiatement subjugué par ses yeux menthe à l’eau. <em>Bon sang, quand ce n’est pas la télé c’est la radio de Madame Leclercq qui contamine son esprit !</em> Quoi qu’il en soit, son cœur s’emballe, comme il ne s’est jamais emballé pour Agnès. Il ne saurait l’expliquer c’est… magnétique. Il n’ose quand même pas descendre, il est impressionné. Il sait charmer à la banque, mettre de la poudre aux yeux. Mais depuis sa dernière déconvenue il manque d’assurance en matière de séduction. Il reste donc là, benêt, à l’observer.

L’inconnue porte une robe noire légère à fleurs blanches. Quelque chose intrigue Valère, il plisse un peu les yeux et réalise bientôt qu’il s’agit de roses. La symbolique est trop forte. Le banquier trébuche et roule dans les escaliers, ruinant toute sa préparation matinale. La femme se précipite vers lui.

“Monsieur ! Est-ce que tout va bien ?

Je ne… na…

Secoué, il a à peine le temps de retrouver ses idées qu’une petite silhouette apparaît dans son champ de vision.

Maman ?”

La tête de Valère tourne. Il n’arrive plus à parler, mais en quelques secondes il élabore le raisonnement suivant : Qui dit Maman dit enfant. Qui dit enfant dit vraisemblablement mari. Donc Rival. Il s’évanouit.`,
  110: `« Encore un peu de thé ? 

  — Oui, merci M.-C... J’en ai bien besoin je crois. 

  Lucille avait ressenti le besoin de se confier. À quelqu’un d’autre qu’à ce psy taciturne qui se contentait de hocher la tête et de gribouiller dans un cahier. On était mercredi et la petite n’avait pas école. La jeune femme avait pensé la déposer à son amie Marie-Chantal quand elle s’était souvenue que sa première classe avait une sortie scolaire de prévue. Elle en avait alors profité pour discuter, et rapidement la conversation avait tourné sur ses états d’âme, tandis que Rosa jouait dans la pièce d’à côté. 

  — Je ne comprends pas comment c’est possible qu’il me manque encore. 

  — C’est normal ma chérie. C’est encore récent. Il me manque, à moi aussi… 

  — Je sais bien… Seulement, avec tout le respect que je vous dois, il ne vous a pas fait ce qu’il m’a fait, à moi… 

  Étrangement, Lucille et Marie-Chantal étaient restées proches après l’enterrement. Pourtant, c’était grâce à Achille qu’elles s’étaient rencontrées. L’ancienne infirmière le connaissait avant le début de sa relation avec Lucille. Ils étaient même voisins, si bien que Marie-Chantal était devenue la plus proche amie du couple. Malgré ce qui s’était passé, la professeure de mathématiques avait apprécié pouvoir compter sur son soutien sans faille. 

  — Pourtant je ne le pensais pas capable d’une chose pareille. J’ai été déçue, mais ça ne veut pas dire que j’oublie tous les bons moments qu’on a passés ensemble. Tu devrais faire pareil, même si c’est difficile. 

  Lucille zieute en direction du mur d’à côté. Dessus est accroché un tableau sur lequel est représenté un bouquet de roses. Un cadeau d’Achille ? 

  — C’est ce que vous faites quand vous voyez ça tous les matins ? Vous pensez aux bons moments ? Ça vient de lui, c’est ça ? 

  — Non, de sa grand-mère. Elle sait que j’aimais beaucoup Achille. 

  Lucille tique. Elle ignorait que Marie-Chantal et Madame Dubois s’étaient rapprochées. D’une certaine manière, elle n’est pas surprise. Toutes les deux devaient souffrir de solitude depuis l’accident. Elle les imagine bien jouer au bridge le dimanche après-midi avec le tableau en arrière-plan. Bien qu’elle trouve le symbole assez glauque. La jeune femme prend conscience du motif de sa robe et a soudain la nausée. 

  Elle préfère détendre l’atmosphère. 

  — Tiens donc, Christine vous offre des cadeaux ! Que fait donc Francis ? Il faut qu’il fasse attention, il risque de perdre la place qu’il occupe dans votre cœur. 

  Marie-Chantal rigole. Son rire franc fait du bien à Lucille. Sans son amie, son quotidien manque de légèreté. 

  — Je vois que tu as repris du poil de la bête ! Ça ne pouvait pas fonctionner, décrète-t-elle. Je suis trop bien pour lui. Et puis, il est trop vieux pour moi ! 

  Francis Paquette est le voisin du sixième étage pour lequel Marie-Chantal avait le béguin. Lucille n’a jamais compris pourquoi mais ne s’est jamais permise de commenter. Après tout, la retraitée a des goûts extravagants. Et il semblerait que les rockeurs barbus en fassent partie. 

  — Ce qui n’est pas le cas de Christine, évidemment. 

  — Arrête avec tes sous-entendus ! Il s’agit juste d’une vieille amie ! On se retrouve parfois pour jouer aux cartes… Adeline Leclercq se joint à nous d’ailleurs, quand ça lui prend. 

  Lucille sourit. Elle avait vu juste pour le bridge ! Elle s’apprête à rétorquer quand un concert de miaulements se fait entendre depuis la cuisine. Il s’agit de Pompon, Ronron, et Clovis. 

  — Les chatons ! s’exclame leur propriétaire en se relevant précipitamment. Excuse-moi le devoir m’appelle, je reviens dans deux minutes pour reprendre le fil de la conversation. 

Lucille prend sa dernière gorgée de thé. 

— Inutile M.-C. Je ferais mieux de vous laisser. Sinon le lycée risque de m’appeler pour vérifier que je n’ai pas eu d’accident sur le chemin. 

À ces mots, son visage s’assombrit. Il y a de ces sujets qu’elle oublie parfois de ne pas mentionner. 

— Comme tu voudras. Prends soin de toi ma chérie, lève le pied et arrête la cigarette ! C’est un poison pour ton organisme. 

— Parole d’ancienne infirmière ! répond machinalement Lucille, tant son amie le lui a répété. 

— Rosa, j’y vais mon cœur ! Sois sage avec M.-C. ! crie-telle ensuite pour que sa fille l’entende. 

La gamine s’empresse de la rejoindre pour lui faire un câlin. Marie-Chantal s’adresse à elle plus sérieusement. 

— J’ignore ce qui lui a pris avec la petite fleuriste. Il aurait dû se montrer plus respectueux. Mais il t’aimait, j’en suis certaine, comme il aurait aimé la famille que vous alliez construire. Tu sais, on ne saura jamais pour qui étaient les roses… » 

Et Lucille remercie son amie avant de quitter l’appartement 110 avec un sentiment doux-amer. 
`,
  316: `
  Encore aujourd’hui. 

  Cette tasse n’était pas là hier, j’en suis certain. Je l’ai mise au fond de mon placard exprès. Voilà trois semaines que je remarque des choses étranges dans mon appartement, sans mettre le doigt dessus. Mais au fur et à mesure, j’ai compris que cette sensation étrange se manifestait à cause de mon appartement. Enfin, pas mon appartement en lui-même, il ne bouge pas évidemment, mais son contenant. Je pars le matin, mets mon bol dans l’évier, mais le soir, en rentrant je les retrouve dans le lave-vaisselle. 

  On peut se dire que j’ai seulement oublié et que je les ai mis par automatisme. Peut-être. 

  Une fois je peux y croire. 

  Deux fois, je commence à y faire attention. 

  Trois fois, je tique. 

  Quinze fois, j’ai peur. 

  Chaque élément changeant de mes habitudes, m’agrippe le regard, ne remarquant plus que ça. J’ai peur. 

  J’ouvre donc Google, et je cherche : « Que faire pour savoir si quelqu’un vient chez moi ». Plusieurs pages apparaissent : 

  8 façons de savoir si quelqu’un s’est introduit chez toi sans ton autorisation 

  Une présence troublante ? Comment savoir si un esprit habite votre appartement en quelques étapes 

  Idée de système pour savoir si mon proprio rentre chez moi en mon absence 

  Toutes ces pages commencent à me stresser. Alors j’ouvre la première page, celle dont j’ai besoin pour espérer y voir plus clair. 

  Un fil accroché au seuil de la porte 

  Biscuits sous le paillasson 

  Application pour enregistrer les sons 

  Babyphone vidéo 

  J’ai vraiment l’impression d'être un espion. Mais qui ne tente rien n’a rien, alors je commence par les tests simples. J’accroche un fil à chacune de mes portes, comme ça si quelqu’un l’ouvre, le fil se cassera. Les biscuits sous le paillasson sont une bonne idée, alors j’en place quelques-uns avant de partir. 

  La journée se passe, et me voilà déjà sur le chemin du retour quand je croise le voisin du dessous avec une énorme plante à la main, sortant de l’ascenseur. 

  « Laissez-moi vous tenir la porte ! 

  — Merci c’est gentil ! Bonne soirée ! » 

  C’est déjà la troisième fois que je le croise ce mois-ci, chargé comme s’il voulait transformer son appartement en une jungle. Chacun fait ce qu’il veut après tout. Bon, il faut que j’aille vérifier si mes appâts ont pu attirer mes angoisses. Je tourne la clé mais j’entends quelque chose sous mes pieds. J’avais oublié ces satanés biscuits. Allons vérifier les fils alors. J’entre à l’intérieur et je me dirige directement vers les portes. Les fils sont retirés pour la plupart. Tombés, prouvant que je ne me faisais pas que des idées. Mais plutôt que d’être soulagé, je suis terrorisé. Une boule d’angoisse se forme dans mon ventre, et je commence à paniquer. 

  Qui ? 

  Quoi ? 

  Pourquoi ? 

  Le stress et la panique ne faisant qu’augmenter, j’appelle mon ami pour lui demander si je peux dormir chez lui. Entendant ma voix, qui ressemblait plus à un cri, il accepta rapidement, et, ni une ni deux, mes affaires étaient prêtes. Arrivé chez lui, je déballe tout. Ces trois semaines de folie, à ne pas croire en moi, ces révélations du jour qui n’ont réussi qu’à me faire fuir mon appartement. 

  « Tu devrais mettre une caméra. 

  — Pourquoi faire ? Le filmer et mater ça comme une série ? 

  — Ouais, et tu regardes ça ensemble. Plus sérieusement, tu filmes le gars, tu vois qui c’est, lui ou elle, et tu le confrontes ! 

  — Et si c’est juste un cinglé ? 

  — Bah appelle les flics. 

  — J’ai qu’à les appeler maintenant. 

  — T’as pas de preuves, à part des pauvres fils. 

  — Ouais c’est vrai... Je prends une caméra, je filme cet enfoiré, et je le dénonce ! 

  — Et s’il voit la caméra, et qu’il décide d’attendre pour te tuer ? 

  — Arrête. 

  — Oh la la, t’es pas marrant toi hein 

  — Je sais ! 

  — Quoi ? 

  — J’ai qu’à acheter une caméra qui se déclenche au mouvement, et qui m’envoie une alerte où j’ai accès à la vidéo en direct ! 

  — Mais je déconnais, le gars va pas t’attendre 

  — Trop tard, file ton ordi, t’as un compte Amazon non ? - Tiens profite de ton incroyable ami. 

  — Merci grand maître. » 

  La caméra commandée, ma boule au ventre se dissipe. 

  Le lendemain matin, je pars au travail, et je repasse chez Tom en fin de soirée pour récupérer mon colis tant attendu, et file l'installer avec lui. 

  « T’es sûr que ce serait pas ta proprio ? 

  — J’y ai pensé, mais elle est sympa. 

  — On disait pareil de Ted Bundy. 

  — Commence pas. 

  — Soit c’est un gars qui vit dans tes murs ! 

  — Commence pas j’ai dit. 

  — C’est vrai qu’il est vraiment clean ton appart, comment t’as pu douter de toi à ce point et croire que t’étais super propre. 

  — Si je devais dormir chez toi, je pense que tu serais déjà au sol. Allez ! On y va, ça devrait marcher. 

  — Attends, je vais laisser un petit mot. » 

  — Je passe ma tête au-dessus de son épaule et le vois écrire « Cheese pour la caméra ! :) ». 

  *

  Mon téléphone vibre, c’est ma caméra. Mon sang ne fait qu’un tour et je cours jusque dans l’escalier de secours. Je prends une grande inspiration. J’ouvre l’application, m’attendant à découvrir : 

  Ma proprio, plus trop gentille, et un peu psychopathe sur les bords ; 

  Un fou qui se cache entre mes murs ; 

  Mon ex, car oui, après tout ce temps elle s’est dit « tiens je vais passer lui dire bonjour, mais d’abord je vais fouiller dans ses affaires. » Je cherche des possibilités ok ? ; 

  C’est Tom, et dans ce cas-là, je vais détruire son appartement et lui avec. 

  L’image apparaît enfin, cette silhouette qui est en train de lire le petit mot que Tom avait laissé sur la table, cette silhouette que je redoutais qui EST : une gamine ! 

  Une gamine ? 

  « Mais, c’est la gamine de la gardienne ? » 

  Soudain, elle relève la tête, regarde autour d’elle, et s’arrête sur la caméra. Son regard terrorisé quitte mon appartement, emportant son corps avec, à toute vitesse. Je n’y comprends rien. C’est une gentille fille, pourquoi s’amuser à venir chez moi. Il doit y avoir une explication. Je prends mes affaires et je fonce chez moi. 

  Arrivé à l’immeuble, je tambourine à la porte de la gardienne, m’attendant à ce qu’elle m’ouvre. Mais c’est la petite qui le fait, haletant de peur. 

  « Monsieur James, s’il vous plaît, ne dites rien à ma mère, je promets d’arrêter ! » 

  Je n’ai pas le temps de répondre que la porte s’ouvre derrière la petite, la laissant tomber en arrière. 

  — Qu’est-ce que tu fais Mathilde, ne reste pas dans le passage ! Bonjour monsieur Hanton, que puis-je pour vous ? 

  Merde ! Qu’est-ce que je fais moi maintenant, je dénonce la gamine ou … 

  — J’ai des choses à faire monsieur, si vous pouviez me dire en quoi je peux vous aider 

  — Pardon, je voulais juste savoir si l’ascenseur était réparé, parce que oui, j’habite au troisième étage, enfin ça vous le savez, mais voilà, haha, c’est un peu haut du coup, j’aime bien l’ascenseur et … 

  — Stop, l’ascenseur n’est plus en panne depuis un mois, il s’est encore bloqué ? 

  — C’est vrai ! J’avais la tête ailleurs, heureusement que vous êtes là ! Eh bien, à bientôt, bonne journée ! 

  — Quoi ? 

  Je pars rapidement, et je fonce chez moi, claquant la porte derrière moi. Pourquoi avoir écouté cette gamine. Je ramasse le mot au sol, quand on toque à la porte. 

  « Qu’est-ce que tu veux Aladin ? 

  — Aladin ? 

  — Le roi des voleurs. 

  — Je ne vous ai rien volé ! 

  — Pourquoi tu venais alors ? 

  — Je ne suis pas très tranquille chez moi, il y a toujours du bruit… 

  — Alors tu t’es dit « tiens, un appart rien que pour moi, chouette ! Je vais y mettre le souk et ensuite... 

  — J’ai plutôt rangé oui ! 

 — Qui te dit que tu rangeais ? C’était peut-être une méthode ! 

 — Ah oui, et c’est une méthode de rangement les bols qui traînent ? 

 — Pourquoi je t’écoute, tu ne dois pas entrer chez les gens, c’est tout ! 

 — Je voulais juste lire tranquillement et faire mes devoirs ! 

 — Oh la poisse, voilà que j’ai affaire à la première de classe, « oh non, je suis trop intelligente, laissez-moi travailler, et donnez-moi votre appartement, parce que je le mérite » 

 Je viens vraiment de faire ça là ? 

 — Pardon, je ne voulais pas vous déranger 

 — Écoute, c’est pas très grave. Mais ça ne se fait pas ce genre de choses 

 — Oui je sais, mais je ne pensais pas vous déranger, vous étiez le seul qui revenait toujours à la même heure, le même train quotidien, c’était simple et pratique… » 

 Aïe. Voilà que ma pauvre vie minable m’arrive en pleine tronche. Si Tom était là, j’entendrais cette histoire jusqu’à ma mort. 

 « HAHAHAHA TU VIENS DE TE FAIRE RECADRER PAR UNE 

 GAMINE ! » 

 Bordel, qu’est-ce que je fous là. Je claque la porte. 

 — Ouvre la porte, je te promets d'arrêter de rire ! 

 Pourquoi ça m’arrive à moi, j’ai rien demandé à personne. 

 J’ouvre la porte à nouveau, pour finir le carnage : 

 — Tom, rentre chez toi, t’es au chômage, t'as pas de leçons à me donner. 

 — Ça c’est petit, mais c’est pas grave, j’ai de quoi me moquer pendant un moment ! 

 — Toi, rentre chez ta mère et reviens plus chez moi. J’ai la caméra, si tu reviens, je le dis à ta mère. 

 — D’accord … encore désolé Monsieur James. » 

 Pourquoi j’ai l’air d’être le méchant alors que c’est moi la victime ? 

 J’entre dans l'immeuble, et je la croise, assise sur les marches des escaliers, lisant son livre. Ça fait une semaine depuis l’incident, et à chaque fois que je la croise, pas un mot, juste ces yeux de chien battu. Devant l’ascenseur, au moment où j’appuie sur le bouton je craque : 

 « Ok, t’as gagné ! Tu peux squatter chez moi tant que je suis pas là, mais t’as pas intérêt à toucher à mes affaires ! 

 — Vraiment ? Merci monsieur James ! » 

 Elle court chez elle, mais ressort pour me montrer fièrement les clés de mon appartement, avant de s’engouffrer de nouveau chez elle. Le ding de l’ascenseur sonne, et me ramène sur terre. 

 *

 Un mois s’est passé depuis que je l'ai autorisé à squatter chez moi. Évidemment, elle touche à mes affaires quand bien même je lui avais dit non. J’ai pris ses réflexions à la lettre, et je sors un peu plus, je me suis même inscrit à un club de lecture !  Je tourne la clé de mon appartement, quand je vois du coin de l'œil une fleur blanche sur la table à manger, devant ma fenêtre. Je m’approche, et prends le petit mot à côté : « Désolé, mais je n’ai pas pu m’empêcher de ranger la vaisselle, il faut vraiment que vous fassiez quelque chose ! ». Pourquoi je me prends des remontrances par une gamine ? 

 Au moins elle fait passer la pilule avec une jolie fleur. En plus j’adore les roses. Finalement, c’est pas si mal d’avoir une petite souris chez soi. 
 `,
  220: `La vie est longue quand on est seul. Au début nos parents sont toujours autour de nous, puis ce sont les camarades d'école, les maîtresses, les professeurs, les amis. On multiplie les rencontres, les collègues, on trouve l'amour, les enfants arrivent, les petits-enfants… et puis rien. Plus rien. Alors il faut trouver des occupations, faire passer le temps. Aller au marché devient la plus belle sortie de la semaine. On rencontre du monde, on parle, les autres nous parlent. On recommence à exister, à être quelqu'un. Et en rentrant, on espère qu'une seule chose : le prochain jour de marché.

  À cela, il y a un avantage. Un seul. Je mange. Ah ça oui, je mange. Je m'empresse de déguster tout ce que j'ai acheté, pour avoir une bonne raison d'y retourner. Mon infirmière est heureuse de ça. Ma fille aussi. Peut-être un peu trop. Du moins, assez pour m'oublier. Oublier de s'inquiéter de sa mère. Sa mère qui est seule.

  — Allez, Madame Dubois, on va prendre votre tension, me dit Marie en installant le brassard. Vous avez encore oublié vos médicaments ce matin ?

  Je soupire et tends mon bras, tout en jetant un œil distrait vers ma fenêtre où le soleil fait scintiller les gouttes de rosée.

  — Ces pilules me donnent des vertiges, vous savez bien. Et puis, à mon âge...

  — Justement ! À votre âge, il faut être raisonnable. Regardez-moi cette tension : 16/9. Le docteur Lemaire ne va pas être content.

  Je grimace pendant que Marie note les chiffres dans son carnet. Un bruit de moteur attire mon attention vers la rue.

  — Tiens, le nouveau locataire d'en face part déjà au travail. Il a l'air bien pressé, celui-là.

  Marie lève les yeux vers la fenêtre de l'appartement du premier étage.

  — Ah oui, le jeune homme brun ? Il a emménagé récemment ?

  — Il y a quelques semaines. Dans l’appartement d’en face. Vous savez, dans cet appartement... 

  Ma voix se voile légèrement. Marie termine de ranger son matériel médical, habituée à mes silences soudains.

  — Bon, maintenant on va vérifier vos réflexes, m'annonce-t-elle en sortant son petit marteau. Et cette fois, pas question de vous dérober !

  Marie frappe doucement mon genou, et je tressaille.

  — Achille adorait me voir sursauter quand vous faisiez ça, je murmure avec un sourire triste. "Tu bondis comme un lapin !", qu'il me disait en riant.

  Un silence lourd s'installe. Marie range ses affaires plus lentement, me laissant le temps de poursuivre si je le souhaite. Je ne le fais pas. Alors Marie part, elle doit rendre visite au jeune voisin du troisième. Il s’est cassé la jambe la semaine dernière. 

  — N'oubliez pas vos médicaments à midi, promis ? s’assure-t-elle sur le pas de la porte. 

  — Promis, je réponds, le regard déjà tourné vers la fenêtre d'en face qui reste obstinément fermée.

  Une fois seule, je retourne sur mon fauteuil et j'observe la rue qui s'anime. Dans l'escalier, j'entends les pas précipités de Madame Leclercq du troisième, toujours si pressée le matin. Hier, j'ai tenté de lui parler de la météo, mais elle a à peine grommelé un bonjour avant de dévaler les marches. Comme tous les autres d'ailleurs. Les jeunes amoureux du premier semblent gentils, mais je sens bien que mes petites conversations les ennuient. Ils sourient poliment quand j'évoque mes souvenirs, mais leurs yeux disent autre chose. Et puis il y a ce couple d’à côté qui lorgne mon appartement depuis des mois, je l'ai bien remarqué. Ils attendent que je m'en aille, c'est évident. L'emplacement est si agréable, avec vue sur le square...

  Heureusement, il y a encore Agnès, la petite du premier. Cette enfant a toujours eu du temps pour moi, toujours un mot gentil. Mais depuis quelque temps, c'est devenu... compliqué. Les choses ont changé, et maintenant nos conversations se font plus rares, plus courtes. Je n'ose plus descendre comme avant.

  La vie n'en fait vraiment qu’à sa tête. Elle donne, elle reprend. Ce cercle est infernal. J’ai toujours cru qu’en vieillissant je m’y habituerai. Mais non. A chaque don, je me réjouis et à chaque perte, je me dis que le bonheur ne tardera pas. Sauf qu’aujourd’hui la seule chose qui va m’arriver c’est de mourir. Je suis vieille, chaque jour je prends de l’âge. Mon départ est bien plus proche que mon arrivée. J’en suis consciente. Ça ne me rend pas triste, c’est la vie. Non, ce qui m’attriste c’est ma perte de patience. Le temps entre le malheur et l’arrivée de la prochaine joie se fait de plus en plus long. Et j’ai peur de mourir en étant triste. J’ai toujours été joviale. Mon mari m’a épousé pour ça. Enfin, c’est ce qu’il disait. Et voilà qu’il me manque maintenant !

  Je soupire et mon regard se pose sur mes roses. Les roses blanches. Toujours posées sur le rebord de ma fenêtre. Elles au moins ne me jugent pas, ne s'impatientent pas. Quand je m'en occupe, je retrouve cette sensation de paix que je ressentais en expliquant à Achille le langage des fleurs. "Tu vois les roses rouges, c'est pour l'amour passion, les jaunes pour l'amitié... mais les blanches, ah les blanches ! Elles parlent d'amour pur, de respect, de souvenirs éternels." Il écoutait avec tant d'attention, ses mains touchant délicatement les pétales. Maintenant qu'il ne peut plus venir me voir, je continue à les cultiver pour lui. Il est un peu comme le petit prince, je suis sûre que peu importe où il est, il pense à ses roses.
  `,
  416: `Aïe, je viens de me cogner. Je suis un peu à l’ouest, mais la voie semblait pourtant toute ouverte… La prochaine fois, je vérifierai mieux si la fenêtre est fermée…

Je plane un peu. Je vole même. J’aime beaucoup cet appartement. Il est très lumineux, le soleil est présent presque à toute heure. Une décoration comme j’aime. Tout est coloré, dans une ambiance années 80, j’ai envie d’écouter des vinyles à longueur de journée.

Alors peut-être que c’est idiot, mais je me balade dans cet appartement. Beaucoup. Il est tout petit, mais j’aime m’y balader. J’arpente chaque coin et recoin, je redécouvre les tableaux aux couleurs de Mykonos, sur des airs d’Abba, comment ne pas se sentir bien et n’avoir envie que de rester chez soi pour toute la vie ? Le soleil, ici, ne se contente pas d’entrer. Il s’invite, il danse sur les murs turquoise, il fait briller les cadres dorés, il chauffe les disques posés sur le buffet. Parfois, j’ai l’impression que la lumière a elle aussi ses chansons préférées. 

Et puis, il a ces bouquets, pour lesquels je ne me lasserai jamais de continuer à en profiter. La saison des roses déborde un peu sur l’automne, je sais, mais je ne pourrais pas m’en passer. Le bouquet change, les couleurs aussi, mais je savoure chacun de ceux-ci comme si c’était le dernier que je verrai de ma vie. Des jaunes, des blanches, des rouges et des roses évidemment. Chaque couleur a son odeur, son parfum envoûtant, qui vous attrape et vous enivre pour longtemps.

Aujourd’hui, elles sont blanches, mes préférées. Une pureté inégalée, un goût tellement particulier, cela en vaudrait presque le coup de se prendre une baie vitrée !

Oh non… Revoilà Médor… Celui que je surnomme Médor, c’est le chien de la maîtresse de maison. Oui, je sais, c’est mignon un petit chien, mais pas celui-là je vous assure. Il a bien failli me tuer à plusieurs reprises ! Un coup de dents et je n’existe plus ! Non mais sérieusement, on néglige souvent la capacité d’un chien à pouvoir tuer quelqu’un ! Alors bien sûr, ce sont nos animaux de compagnie, mais ils peuvent se révéler très dangereux !

Hop là ! Je parle trop et j'ai à peine le temps de l’esquiver ! Il ne fait que chercher à m’attaquer aussi ce chien. S’il était un peu plus respectueux de ses colocataires, on arriverait parfaitement à s’entendre ! Il bondit comme un fou, renversant un coussin, les griffes qui claquent sur le parquet. Je le vois arriver, la gueule grande ouverte. Mon cœur bat à tout rompre. Quelle bête sans gêne !

« Sunny, qu’est-ce que tu as vu encore ? Ce n’est pas possible, il faut toujours que tu aboies pour un rien ! »

Ah, Sunny… Il n’est pas très solaire pour avoir ce prénom, il ne cherche qu’à commettre des meurtres… Elle parle souvent toute seule ou à son chien la maîtresse de maison. J’adore quand elle fait ça. Elle raconte sa journée à ses plantes, elle danse un peu quand elle passe l’aspirateur. Parfois, elle chante faux, mais le cœur y est. Je crois qu’elle ne s’imagine pas qu’on l’écoute — pourtant, moi, je la trouve drôlement apaisante. 

Quand j'ai trop peur que Médor - pardon, Sunny - ne m'attaque, ou que la fenêtre est fermée, je me faufile souvent sur le balcon de l'appartement d'un monsieur très gentil, un peu bordélique, qui s'est mis à faire pousser un tas de roses blanches sur son balcon. Mon paradis je vous l'avoue ! Si je n'appréciais pas autant cet appartement, cela ferait longtemps que j'aurais déloger à l'étage d'en dessous, à coup sûr ! 

Je me pose quelques minutes. Je profite comme chaque jour, avant de travailler. Et oui même si mon métier est très agréable, il faut quand même que j’y travaille sérieusement, sinon je risque de me faire disputer par la patronne. Et je n’ai pas envie de me faire renier de la colonie ! Le travail ne se fait pas tout seul, même quand on l’aime. Alors je reprends ma ronde. Certains diraient que c’est un métier éreintant, moi j’y vois une chorégraphie du bonheur, je vous assure !

Je m’active sur la musique de Dancing Queen, ce rythme de travail est le meilleur que j’ai trouvé à ce jour, et j’ai l’impression d’être en vacances constamment ! Pour une ouvrière c’est assez ironique. Après avoir bien travaillé, je repars, satisfaite mais fatiguée, et avec un Médor, pardon, Sunny, qui dort paisiblement et je ne crains donc aucun risque d’attaque ahah !

Aïe ! Bon sang, j’ai oublié cette fichue baie vitrée à moitié ouverte… Heureusement que je carbure au boulot, j’ai toujours craint que l’endroit par lequel je suis entrée se retrouve fermé. Et vous comprenez bien qu’avec ma taille de guêpe, je ne pourrais pas le rouvrir, que ce soit porte ou fenêtre. Non, vous ne voyez pas ? Le monde est grand, lumineux, parfumé… un vrai paradis pour moi. Ah, j’ai oublié de me présenter, moi c’est Mireille l’abeille, toujours motivée à vous offrir un doux et sucré miel !
`,
  206: `La pluie tambourine contre les vitres depuis ce matin. Novembre à Montréal, c'est cette grisaille qui s'infiltre partout, même dans les pensées. Je termine mon café en observant la rue déserte du Vieux Rosemont. Mon téléphone vibre. Encore un message du cabinet : « Madame Ferland, nous avons besoin de votre réponse concernant l'offre d'achat avant 17h. » 

  Dix-sept heures. Il me reste six heures pour décider si je vends cet appartement où j'ai passé trente-deux ans de ma vie. 

  Je me lève péniblement. Mon genou gauche proteste, comme chaque matin depuis l'opération. Soixante-trois ans, c'est l'âge où le corps commence à tenir ses propres comptes. Je claudique jusqu'à la cuisine et ouvre le réfrigérateur : un yaourt périmé, trois tomates flétries, une bouteille de lait entamée. Il faudrait que je descende faire des courses, mais l'idée de croiser mes voisins me paralyse. 

  Depuis la mort de Richard, tout a changé. Les regards dans l'ascenseur, les silences gênés dans le hall, les conversations qui s'interrompent quand j'arrive. Ils savent tous. Dans un immeuble comme celui-ci, les secrets ne durent jamais longtemps. Mon mari s'est pendu dans notre chambre il y a huit mois. Le propriétaire a dû faire repeindre les murs avant que je puisse réintégrer l'appartement. 

  On sonne à la porte. Je sursaute et renverse mon café sur le comptoir. Qui peut bien venir à cette heure ? Je m'approche de l'œilleton et reconnais Monsieur Beauregard, le voisin du 208. Nous partageons un mur mitoyen depuis des années, mais nous ne nous sommes jamais vraiment parlé. 

  « Madame Ferland ? J'ai entendu que vous envisagiez de vendre. 

  J'ouvre la porte, surprise par son aplomb. 

  — Les nouvelles vont vite, on dirait. 

  Il a l'élégance de paraître embarrassé. 

  — Ma fille cherche un appartement dans le quartier. Je me demandais si vous accepteriez qu'elle le visite avant que vous ne le mettiez officiellement sur le marché. 

  Voilà donc. Même mes voisins attendent mon départ. Je sens la colère monter, une vague chaude qui me submerge. 

  — L'appartement n'est pas encore à vendre, Monsieur Beauregard. » 

  Je referme la porte avant qu'il ne puisse répondre. Mes mains tremblent. Je retourne à la fenêtre et fixe l'immeuble d'en face, celui où habite désormais ce jeune homme qu'on croise parfois dans la rue. Elliott, je crois. Il a emménagé dans l'ancien appartement d'Achille, le petit-fils de Madame Dubois. J'ignore ce qui est arrivé à ce garçon, mais son départ semble avoir brisé quelque chose dans le cœur de la vieille dame du 220. 

  Mon téléphone vibre à nouveau. Cette fois, c'est ma fille, Marianne. 

  « Maman, tu as réfléchi ? L'offre est vraiment généreuse. Tu pourrais t'installer dans une résidence avec services, tu serais mieux entourée. 

  Mieux entourée. Comme si j'étais une plante qu'il faut arroser régulièrement pour qu'elle survive. Ma fille parle avec cette voix douce et ferme qu'elle utilise avec ses enfants quand ils refusent de se coucher. 

  — Je te rappelle, Marianne. » 

Je raccroche avant qu'elle ne puisse argumenter davantage. 

Le silence de l'appartement m'oppresse. Je décide de sortir, même si mon genou proteste. Je descends les escaliers lentement, m'agrippant à la rampe. Au premier étage, j'aperçois Agnès qui sort de chez elle. La jeune fleuriste semble perdue dans ses pensées. Elle ne me remarque pas et je ne cherche pas à attirer son attention. 

Dehors, la pluie a cessé. L'air sent l'asphalte mouillé et les feuilles mortes. Je marche sans direction précise, laissant mes pas me guider. Je passe devant la boutique d'Agnès. À travers la vitrine, j'aperçois des bouquets colorés qui égayent ce jour terne. Mon regard s'arrête sur un vase rempli de roses blanches. Richard m'en offrait chaque anniversaire de mariage. « Pour l'amour qui dure », disait-il en souriant. 

Sauf que l'amour n'a pas duré assez longtemps. Ou peut-être a-t-il duré trop longtemps, jusqu'à ce qu'il devienne insupportable pour lui. Je ne saurai jamais vraiment pourquoi il a choisi de partir. Sa lettre ne contenait que des banalités : « Ce n'est pas ta faute. Je suis fatigué. Pardonne-moi. » 

Je continue ma marche et me retrouve devant le parc du quartier. Quelques enfants jouent malgré le temps maussade. Je m'assieds sur un banc et observe leurs rires insouciants. À quel moment avons-nous perdu cette capacité à trouver de la joie dans les choses simples ? 

Mon téléphone vibre. Encore. Je regarde l'heure : quinze heures. Plus que deux heures pour décider. 

Je pense à cet appartement. Aux repas partagés dans la cuisine, aux disputes pour des futilités, aux nuits blanches quand Marianne faisait ses dents, aux dimanches paresseux passés à lire sur le balcon. Chaque pièce contient des fragments de nous. Partir reviendrait à abandonner ces souvenirs, à accepter que cette partie de ma vie soit définitivement terminée. 

Mais peut-être est-ce justement ce qu'il faut faire. Peut-être que rester, c'est refuser d'avancer. 

Je me lève et reprends le chemin de l'immeuble. Dans le hall, je croise Madame Dubois qui rentre de sa promenade quotidienne. Elle me salue d'un hochement de tête. Nous ne parlons jamais, mais nos regards se comprennent. Nous partageons cette même solitude, ce même poids des jours qui s'étirent. 

De retour dans mon appartement, je compose le numéro du cabinet d'avocats. 

« Madame Ferland à l'appareil. Concernant l'offre d'achat... 

Je fais une pause. Par la fenêtre, j'aperçois Elliott qui rentre chez lui, un sac de courses à la main. La vie continue, pour lui comme pour les autres. Le monde ne s'arrête pas parce qu'on a perdu quelqu'un. 

—... Je refuse l'offre. L'appartement n'est pas à vendre. » 

Après avoir raccroché, je reste immobile un long moment. Mon genou ne me fait plus mal. Ou peut-être que je n'y prête plus attention. Je ne sais pas si j'ai pris la bonne décision, mais c'est ma décision. 

Ce soir, je descendrai acheter des fleurs chez Agnès. Peut-être même des roses blanches. Pas pour Richard, mais pour moi. Pour me rappeler que l'amour qui dure, c'est d'abord celui qu'on se porte à soi-même. Appartement 312 

Adeline fixait le plafond de sa chambre depuis vingt minutes. Cinq heures du matin. Trop tôt pour se lever, trop tard pour se rendormir. Elle entendait les bruits familiers de l'immeuble qui s'éveillait : des pas feutrés à l'étage du dessus, le grincement d'une porte, le gargouillis des tuyaux dans les murs. 

Elle se leva finalement, enfila sa robe de chambre en velours bleu, et se dirigea vers la cuisine. Par la fenêtre, Rosemont dormait encore sous un ciel gris d'octobre. Les réverbères jetaient des flaques de lumière orange sur le trottoir mouillé. 

Adeline avait cinquante-quatre ans et vivait seule depuis son divorce, cinq ans plus tôt. L'appartement 312 était devenu son refuge, son cocon. Trois pièces soigneusement décorées, remplies de plantes vertes, de livres, et de souvenirs d'une vie qu'elle avait dû réinventer. 

Elle se prépara un café, s'installa près de la fenêtre avec le journal. Mais les mots ne parvenaient pas à capter son attention. Aujourd'hui, c'était jeudi. Le jour du bridge chez Christine. Normalement, elle s'en réjouissait. Mais ces dernières semaines, quelque chose avait changé. 

Marie-Chantal. 

Adeline posa sa tasse, frustrée par ses propres pensées. Marie-Chantal était son amie. Une bonne amie, même. Elles se connaissaient depuis des années, jouaient aux cartes ensemble, s'échangeaient des potins et des recettes. Mais dernièrement, Adeline avait remarqué quelque chose qui la dérangeait. 

Marie-Chantal parlait constamment de Francis. Le voisin du sixième étage. Un homme charmant, certes, mais qui ne semblait même pas savoir que Marie-Chantal existait. Et à chaque partie de bridge, Marie-Chantal trouvait le moyen de ramener la conversation à lui. « Francis a dit ceci », « J'ai croisé Francis dans l'escalier », « Francis aime les chats, vous savez ». 

C'était épuisant. 

Adeline se sentait coupable de penser ça. Elle devrait être une meilleure amie, plus compréhensive, plus encourageante. Mais quelque chose en elle se rebellait. Peut-être parce que ça lui rappelait trop son propre mariage. Ces années passées à attendre que son ex-mari la remarque vraiment, à espérer qu'il change, à se contenter de miettes d'attention. 

Elle but son café en regardant la rue s'animer lentement. Un livreur déposa des colis devant une porte. Un jogger passa en trottinant. La vie continuait, indifférente à ses états d'âme. 

À midi, elle décida de faire le ménage. Un grand ménage thérapeutique. Elle commença par le salon, déplaça les meubles, passa l'aspirateur dans tous les coins. Elle lava les vitres, épousseta les cadres, réorganisa sa bibliothèque. Dans le mouvement, elle sentit quelque chose se délier en elle. Une tension qu'elle ne savait pas avoir. 

Vers quatorze heures, elle prit une douche, s'habilla soigneusement. Pantalon noir, chemisier crème, un peu de maquillage. Elle se regarda dans le miroir. Pas mal pour cinquante-quatre ans. Des rides, oui, mais aussi une certaine assurance qu'elle n'avait pas à quarante ans. 

Elle arriva chez Christine à quatorze heures trente précises. Christine l'accueillit avec son sourire chaleureux habituel. 

« Adeline ! Entre, entre. Tu es la première. Marie-Chantal arrive dans dix minutes. 

Elles bavardèrent en attendant. Christine raconta sa visite de la veille avec son neveu et sa femme, ce couple étrange qui la regardait toujours comme si elle était déjà morte. Adeline rit, mais avec une pointe d'amertume. Elle connaissait ce regard. C'était celui que les gens portaient sur les femmes seules d'un certain âge. Un mélange de pitié et d'inconfort. 

Marie-Chantal arriva avec quinze minutes de retard, essoufflée et rayonnante. 

— Désolée ! J'ai croisé Francis dans l'escalier. On a parlé pendant vingt minutes. Il est tellement intéressant ! 

Adeline sentit quelque chose se crisper en elle. Elle ne dit rien, sourit poliment, s'installa à la table. Christine distribua les cartes. 

La partie commença dans le silence habituel de la concentration. Mais après quelques tours, Marie-Chantal recommença. 

— Francis m'a dit qu'il cherchait quelqu'un pour garder ses plantes pendant qu'il part en voyage. Je lui ai proposé mes services. 

— C'est gentil, murmura Christine. 

Adeline abattit ses cartes un peu trop fort sur la table. 

— Marie-Chantal, dit-elle d'une voix plus sèche qu'elle ne l'aurait voulu. Est-ce que Francis sait que tu existes autrement qu'en tant que voisine serviable ? 

Le silence tomba comme une pierre dans l'eau. Marie-Chantal la regarda, bouche ouverte, les yeux écarquillés. Christine se figea, mal à l'aise. 

— Quoi ? finit par dire Marie-Chantal. 

Adeline prit une grande inspiration. Trop tard pour reculer maintenant. 

— Tu parles de lui constamment. Tu te rends disponible pour n'importe quoi. Mais est-ce qu'il t'a déjà invitée quelque part ? Est-ce qu'il a montré le moindre intérêt romantique ? 

— Je... je ne... 

— Parce que si c'est le cas, tant mieux. Mais si ce n'est pas le cas, tu mérites mieux que d'attendre qu'un homme te remarque. 

Le visage de Marie-Chantal passa par plusieurs émotions : choc, colère, puis quelque chose comme de la compréhension. Les larmes montèrent à ses yeux. 

— Tu as raison, murmura-t-elle finalement. Mon Dieu, tu as raison. 

Christine posa une main sur celle de Marie-Chantal. 


— On est là, dit-elle doucement. On est tes amies. Pas Francis. 

Adeline sentit sa gorge se serrer. Elle avait été dure, peut-être trop. Mais quelque chose devait être dit. 

— Désolée, dit-elle. J'aurais pu être plus délicate. 

— Non, répondit Marie-Chantal en s'essuyant les yeux. J'avais besoin de l'entendre. » 

Elles ne jouèrent pas aux cartes cet après-midi-là. Elles parlèrent. Vraiment parlèrent. De la solitude, des attentes non réalisées, de la difficulté d'être une femme seule dans un monde qui valorise les couples. Christine parla de son âge, de la peur de devenir invisible. Marie-Chantal admit qu'elle s'accrochait à Francis parce qu'elle avait peur de finir seule. Adeline parla de son divorce, de la libération qu'elle avait trouvée dans la solitude, mais aussi de la peur qui venait parfois la nuit. 

Quand Adeline rentra chez elle en fin d'après-midi, elle se sentait vidée mais légère. Elle ouvrit la fenêtre de son salon pour faire entrer l'air frais. Sur le rebord, elle remarqua une petite aquarelle qu'elle avait achetée des années plus tôt dans une brocante. Une rose blanche peinte sur fond noir, simple et élégante. Elle l'avait presque oubliée, cachée là parmi des pots de plantes. 

Elle la regarda un moment, puis sourit. Parfois, les choses les plus belles étaient celles qu'on oubliait de remarquer. 

Son téléphone vibra. Un message de Marie-Chantal : « Merci. J'avais besoin de ça. Je t'aime. » 


Adeline tapa sa réponse : « Moi aussi. On est fortes. » 

Elle posa son téléphone et s'installa dans son fauteuil préféré. Dehors, la nuit tombait sur Rosemont. Mais dans l'appartement 312, Adeline se sentait en paix. Pas parce que tout était parfait, mais parce qu'elle avait dit la vérité. Et parfois, c'était tout ce qu'on pouvait faire. 
`,
  312: `Adeline fixait le plafond de sa chambre depuis vingt minutes. Cinq heures du matin. Trop tôt pour se lever, trop tard pour se rendormir. Elle entendait les bruits familiers de l'immeuble qui s'éveillait : des pas feutrés à l'étage du dessus, le grincement d'une porte, le gargouillis des tuyaux dans les murs. 

  Elle se leva finalement, enfila sa robe de chambre en velours bleu, et se dirigea vers la cuisine. Par la fenêtre, Rosemont dormait encore sous un ciel gris d'octobre. Les réverbères jetaient des flaques de lumière orange sur le trottoir mouillé. 

  Adeline avait cinquante-quatre ans et vivait seule depuis son divorce, cinq ans plus tôt. L'appartement 312 était devenu son refuge, son cocon. Trois pièces soigneusement décorées, remplies de plantes vertes, de livres, et de souvenirs d'une vie qu'elle avait dû réinventer. 

  Elle se prépara un café, s'installa près de la fenêtre avec le journal. Mais les mots ne parvenaient pas à capter son attention. Aujourd'hui, c'était jeudi. Le jour du bridge chez Christine. Normalement, elle s'en réjouissait. Mais ces dernières semaines, quelque chose avait changé. 

  Marie-Chantal. 

  Adeline posa sa tasse, frustrée par ses propres pensées. Marie-Chantal était son amie. Une bonne amie, même. Elles se connaissaient depuis des années, jouaient aux cartes ensemble, s'échangeaient des potins et des recettes. Mais dernièrement, Adeline avait remarqué quelque chose qui la dérangeait. 

  Marie-Chantal parlait constamment de Francis. Le voisin du sixième étage. Un homme charmant, certes, mais qui ne semblait même pas savoir que Marie-Chantal existait. Et à chaque partie de bridge, Marie-Chantal trouvait le moyen de ramener la conversation à lui. « Francis a dit ceci », « J'ai croisé Francis dans l'escalier », « Francis aime les chats, vous savez ». 

  C'était épuisant. 

  Adeline se sentait coupable de penser ça. Elle devrait être une meilleure amie, plus compréhensive, plus encourageante. Mais quelque chose en elle se rebellait. Peut-être parce que ça lui rappelait trop son propre mariage. Ces années passées à attendre que son ex-mari la remarque vraiment, à espérer qu'il change, à se contenter de miettes d'attention. 

  Elle but son café en regardant la rue s'animer lentement. Un livreur déposa des colis devant une porte. Un jogger passa en trottinant. La vie continuait, indifférente à ses états d'âme. 

  À midi, elle décida de faire le ménage. Un grand ménage thérapeutique. Elle commença par le salon, déplaça les meubles, passa l'aspirateur dans tous les coins. Elle lava les vitres, épousseta les cadres, réorganisa sa bibliothèque. Dans le mouvement, elle sentit quelque chose se délier en elle. Une tension qu'elle ne savait pas avoir. 

  Vers quatorze heures, elle prit une douche, s'habilla soigneusement. Pantalon noir, chemisier crème, un peu de maquillage. Elle se regarda dans le miroir. Pas mal pour cinquante-quatre ans. Des rides, oui, mais aussi une certaine assurance qu'elle n'avait pas à quarante ans. 

  Elle arriva chez Christine à quatorze heures trente précises. Christine l'accueillit avec son sourire chaleureux habituel. 

  « Adeline ! Entre, entre. Tu es la première. Marie-Chantal arrive dans dix minutes. 

  Elles bavardèrent en attendant. Christine raconta sa visite de la veille avec son neveu et sa femme, ce couple étrange qui la regardait toujours comme si elle était déjà morte. Adeline rit, mais avec une pointe d'amertume. Elle connaissait ce regard. C'était celui que les gens portaient sur les femmes seules d'un certain âge. Un mélange de pitié et d'inconfort. 

  Marie-Chantal arriva avec quinze minutes de retard, essoufflée et rayonnante. 

  — Désolée ! J'ai croisé Francis dans l'escalier. On a parlé pendant vingt minutes. Il est tellement intéressant ! 

  Adeline sentit quelque chose se crisper en elle. Elle ne dit rien, sourit poliment, s'installa à la table. Christine distribua les cartes. 

  La partie commença dans le silence habituel de la concentration. Mais après quelques tours, Marie-Chantal recommença. 

  — Francis m'a dit qu'il cherchait quelqu'un pour garder ses plantes pendant qu'il part en voyage. Je lui ai proposé mes services. 

  — C'est gentil, murmura Christine. 

  Adeline abattit ses cartes un peu trop fort sur la table. 

  — Marie-Chantal, dit-elle d'une voix plus sèche qu'elle ne l'aurait voulu. Est-ce que Francis sait que tu existes autrement qu'en tant que voisine serviable ? 

  Le silence tomba comme une pierre dans l'eau. Marie-Chantal la regarda, bouche ouverte, les yeux écarquillés. Christine se figea, mal à l'aise. 

  — Quoi ? finit par dire Marie-Chantal. 

  Adeline prit une grande inspiration. Trop tard pour reculer maintenant. 


  — Tu parles de lui constamment. Tu te rends disponible pour n'importe quoi. Mais est-ce qu'il t'a déjà invitée quelque part ? Est-ce qu'il a montré le moindre intérêt romantique ? 

  — Je... je ne... 

  — Parce que si c'est le cas, tant mieux. Mais si ce n'est pas le cas, tu mérites mieux que d'attendre qu'un homme te remarque. 

  Le visage de Marie-Chantal passa par plusieurs émotions : choc, colère, puis quelque chose comme de la compréhension. Les larmes montèrent à ses yeux. 

  — Tu as raison, murmura-t-elle finalement. Mon Dieu, tu as raison. 


  Christine posa une main sur celle de Marie-Chantal. 

  — On est là, dit-elle doucement. On est tes amies. Pas Francis. 

  Adeline sentit sa gorge se serrer. Elle avait été dure, peut-être trop. Mais quelque chose devait être dit. 

  — Désolée, dit-elle. J'aurais pu être plus délicate. 

  — Non, répondit Marie-Chantal en s'essuyant les yeux. J'avais besoin de l'entendre. » 

  Elles ne jouèrent pas aux cartes cet après-midi-là. Elles parlèrent. Vraiment parlèrent. De la solitude, des attentes non réalisées, de la difficulté d'être une femme seule dans un monde qui valorise les couples. Christine parla de son âge, de la peur de devenir invisible. Marie-Chantal admit qu'elle s'accrochait à Francis parce qu'elle avait peur de finir seule. Adeline parla de son divorce, de la libération qu'elle avait trouvée dans la solitude, mais aussi de la peur qui venait parfois la nuit. 

  Quand Adeline rentra chez elle en fin d'après-midi, elle se sentait vidée mais légère. Elle ouvrit la fenêtre de son salon pour faire entrer l'air frais. Sur le rebord, elle remarqua une petite aquarelle qu'elle avait achetée des années plus tôt dans une brocante. Une rose blanche peinte sur fond noir, simple et élégante. Elle l'avait presque oubliée, cachée là parmi des pots de plantes. 

  Elle la regarda un moment, puis sourit. Parfois, les choses les plus belles étaient celles qu'on oubliait de remarquer. 

  Son téléphone vibra. Un message de Marie-Chantal : « Merci. J'avais besoin de ça. Je t'aime. » 

  Adeline tapa sa réponse : « Moi aussi. On est fortes. » 

  Elle posa son téléphone et s'installa dans son fauteuil préféré. Dehors, la nuit tombait sur Rosemont. Mais dans l'appartement 312, Adeline se sentait en paix. Pas parce que tout était parfait, mais parce qu'elle avait dit la vérité. Et parfois, c'était tout ce qu'on pouvait faire. 
`,
  608: `Francis Paquette détestait les matins. Toujours. Depuis toujours. La lumière lui brûlait les yeux comme un rappel qu’il avait survécu à une nuit de plus, sans savoir trop pourquoi. Ce matin-là, à sept heures tapantes, le soleil du Vieux-Rosemont passait à travers les stores cassés de son appartement. Il grogna, tira la couverture sur sa tête et tenta d’oublier le monde. 

  Mais la bouilloire électrique, laissée branchée la veille, siffla. 

  Puis la radio, programmée sur une station rock, crachota un vieux morceau de Led Zeppelin. Francis se redressa en pestant : 

  « Maudit karma… même les machines se liguent contre moi. » 

  Il se leva, pieds nus sur le plancher grinçant, et chercha son paquet de cigarettes. Son regard tomba sur la photo accrochée au frigo : lui, vingt-sept ans, guitare rouge à la main, torse nu sur scène, entouré de fumée et d’éclats de lumière. Le sourire de quelqu’un qui croyait encore que la gloire durerait toujours. Aujourd’hui, il avait soixante-trois ans, un ventre de bière et des doigts abîmés par le froid de l’hiver montréalais. 

  Il alluma une clope, ouvrit la fenêtre. 

  Sous lui, la ville se réveillait : les premiers bus, les cris des enfants, le crissement des pneus sur la neige. Francis aimait ce quartier. Vieux-Rosemont avait gardé une âme, avec ses petits restos portugais, ses façades de brique et ses balcons tordus par les années. Mais parfois, le silence de l’aube lui rappelait trop les fins de tournée, quand il rentrait seul d’un concert et qu’il n’y avait plus personne à appeler. 

  Sur la table traînait un carnet noir. Il y notait des idées de chansons qu’il n’écrivait jamais jusqu’au bout. Il griffonna : “Les voisins dorment, moi j’écoute les murs respirer.” Puis il barra la phrase. Trop triste, trop vrai. 

  Vers dix heures, on frappa à sa porte. Il soupira, écrasa sa cigarette et ouvrit. Devant lui, une petite femme aux cheveux argentés, emmitouflée dans une écharpe rose, tenait une assiette recouverte de papier aluminium. 

  — Bonjour Francis ! C’est Marie-Chantal, du premier. — Je sais bien qui t’es, répondit-il, amusé. C’est quoi ça ? 

  — Des muffins aux bleuets. J’en ai fait trop, alors je partage. 

  Il prit l’assiette sans se faire prier. 

  — T’essaierais pas encore de m’engraisser pour me marier, par hasard ? 

  — Oh non, rit-elle, j’ai renoncé. Mais faut bien nourrir les âmes perdues du sixième. 

  Ils rirent tous les deux. Elle entra, posa ses gants sur la table et regarda autour. L’appartement sentait le café et la poussière. Des piles de vinyles, des guitares posées contre les murs, un vieux canapé élimé. 

  — Toujours le même capharnaüm, dit-elle. 

  — Toujours le même propriétaire, répondit-il. 

  Marie-Chantal sortit un petit sachet de sa poche. 

  — Tiens, ajouta-t-elle, c’est pour toi. Une rose blanche. 

  — Une fleur ? Tu veux que je la fume ou que je la plante ? 

  — Ni l’un ni l’autre. Tu la gardes. C’est… symbolique. 

  — Symbolique de quoi ? 

  — D’un souvenir qu’on partage tous ici, répondit-elle simplement. 

  Francis fronça les sourcils. Il connaissait les histoires qui circulaient dans l’immeuble — l’ancien infirmier mort trop jeune, la fleuriste d’en face, la série de roses blanches qui étaient apparues un peu partout comme des balises de mémoire. 

  Il ne posait pas de questions ; il préférait respecter le silence des autres. Il accepta la rose, la posa dans un vieux gobelet. Marie-Chantal sourit. 

  — Je savais que tu ferais ça. 

  — Quoi ? 

  — La poser sans chercher à comprendre. » 

  L’après-midi, Francis descendit au garage. 

  Son taxi jaune l’attendait, couvert d’une fine couche de neige. 


  Depuis qu’il avait raccroché la guitare, il conduisait pour payer le loyer. Les clients étaient rares le matin ; il préférait travailler de nuit, quand la ville devient floue et que les histoires se racontent entre deux feux rouges. Il aimait surtout ces moments suspendus avec des inconnus. 

  Une femme ivre qui pleure sur la banquette arrière, un étudiant perdu dans ses pensées, un vieux monsieur qui lui parle de pêche… Chacun laissait une trace dans le rétro. 

Ce jour-là, il prit un client au centre-ville : un homme jeune, costume froissé, regard vide. 

« Rue Masson, s’il vous plaît. 

La voix tremblait. Francis reconnut tout de suite ce ton — Celui de quelqu’un qui retient un chagrin. 

— Pas de problème. Beau quartier, dit-il juste pour meubler. » 

L’homme hocha la tête sans répondre. 

Pendant le trajet, Francis alluma la radio. Une chanson de Leonard Cohen. La voix grave emplissait l’habitacle, douce et douloureuse. Le client ferma les yeux. 

Quand ils arrivèrent, il posa un billet sur le siège avant et dit : 

« Merci. J’avais besoin d’écouter ça. » 

Francis le regarda s’éloigner, silhouette solitaire sous la neige. 

Le soir, il remonta au sixième. 

La rose blanche était toujours là, droite dans son verre. Il la contempla un moment, pensif. 

Il pensa à son fils, Samuel, qu’il n’avait pas vu depuis cinq ans. Une dispute idiote, des mots trop forts, un silence qui avait pris racine. 

« C’est toi, ma rose blanche », murmura-t-il en souriant tristement. 

Il prit son carnet et écrivit : 

<em>Une fleur blanche dans un verre ébréché, Elle me regarde vieillir sans broncher. 

Dans le silence de mon sixième étage, 

Je redeviens jeune, un peu sauvage. </em>

Il relut ces lignes, ne les trouva pas si mal. Pour la première fois depuis longtemps, il reprit sa guitare. Ses doigts hésitèrent, puis trouvèrent une mélodie simple, ronde, presque douce. Il chanta bas, pour lui seul, mais les mots portaient plus loin que prévu. 

Dans le couloir, Marie-Chantal s’arrêta, émue. Elle posa sa main sur la rampe et écouta la voix rauque de Francis se mêler aux bruits de la ville. 

À la fin de la chanson, un silence. Puis un éclat de rire. Le sien. 

Il vida son verre, regarda la rose. 

Un premier pétale venait de tomber sur la table. Il le ramassa, le glissa entre les pages du carnet. 

« Vieille complice, dit-il. Toi et moi, on tiendra encore un peu. » 

Quelques semaines plus tard, le printemps revint. Francis continua à conduire la nuit, à jouer parfois dans des bars, juste pour le plaisir. Un soir, en revenant d’une longue course, il trouva devant sa porte une enveloppe. 

À l’intérieur, une photo. 

On le voyait sur scène, la guitare rouge entre les mains, un projecteur dans le dos. Et sur l’ampli, quelqu’un — Marie-Chantal sans doute — avait posé une rose blanche. Il resta longtemps à fixer la photo, ému, avant de la glisser dans son carnet. Puis il prit sa guitare et recommença à jouer. Le son monta doucement jusqu’aux étages inférieurs, se mêlant au souffle de la nuit et au parfum discret de la fleur sur la table.

On le voyait sur scène, la guitare rouge entre les mains, un projecteur dans le dos. Et sur l’ampli, quelqu’un — Marie-Chantal sans doute — avait posé une rose blanche. Il resta longtemps à fixer la photo, ému, avant de la glisser dans son carnet. Puis il prit sa guitare et recommença à jouer. Le son monta doucement jusqu’aux étages inférieurs, se mêlant au souffle de la nuit et au parfum discret de la fleur sur la table. 
`,
  212: `Ce matin-là, mon cœur s’est encore une fois réveillé pour Agnès, comme si elle guidait mon sommeil, comme si elle était mon rêve. Elle l’est ! 

  D’un pas lourd, je prends mon courage à deux mains, et me lève, enfin. Elle est partie pour s’occuper de sa grand-mère gravement malade, elle m’a laissé une lettre me disant qu’elle rentrerait lorsque l’ancienne sera guérie… Je ne sais pas quand je la reverrai. Peut-être que ce sera demain, que la grand-mère n’avait qu’un rhume passager ou une grippe occasionnelle. Ou bien souffrirait-elle d’une fièvre fâcheuse, voulant m’arracher des bras celle que j’aime, la garder pour elle, rien que pour elle, et alors, elle ne sera rentrée que dans un, deux voire trois mois. Ou bien même peut-être jamais… Qu’importe, dans tous les cas cela me paraîtra être une éternité ! Sérieusement, quelle motivation y-a-t-il à se lever sachant très bien que vous ne verrez pas celle que vous aimez au coucher ? Je n’en sais rien, en tous cas, aujourd’hui sera un jour sans elle. Il faut que je m’occupe. 

  Après le déjeuner, je me suis posé sur mon fauteuil, celui sur lequel j’ai pour habitude d’admirer Agnès au petit déjeuner, lorsqu’elle chante et danse, ou même quand elle s’ennuie. Faudra que je m’y fasse, mes yeux devront se poser ailleurs pour les prochains jours. En me levant, au moment de partir vaquer à mes quelques autres occupations de la journée, j'aperçois à la fenêtre de l’un des appartements du dessous, une jeune femme si heureuse, si souriante, en train de se pomponner si précieusement qu’on pourrait la croire conviée directement à un rendez-vous avec l’amour. Je me demande bien ce qui peut la motiver à se préparer de la sorte. 

  Les jours se suivent, et toujours rien, les volets d’Agnès restent fermés, mon cœur aussi… De plus en plus, mes yeux se posent sur les occupations de cette si curieuse voisine d’en dessous. Elle continuait de se préparer chaque jour, de la même manière. Chaque jour qui passe donne un nouvel éclat à son merveilleux sourire, systématiquement vêtue de blanc 

  Plus de doute, c’est bien l’amour qui la rend si minutieuse pendant ses heures à se préparer, à se pomponner. Plus de doute depuis qu’un homme lui a déposé cette douce rose, si blanche, si pure qu’elle semble être de celles à qui même le plus cruel des hommes n’oserait arracher ne serait-ce qu’une de ses précieuses pétales. Il faudrait être la plus diabolique des âmes pour ne penser ne serait-ce qu’une seconde à lui faire du mal, à cette rose. 

  Ce matin, j’ai reçu une lettre, c’est Agnès qui me dit que la santé de sa grand-mère stagne, mais que c’était impossible pour elle de la laisser maintenant. Il faut que j’attende encore pour retrouver celle que j’aime. Ces dernières semaines, je n’ai pas vu la voisine, peut-être est-elle partie vivre chez lui, je n’en sais rien. 

  Déjà deux semaines depuis la dernière lettre d’Agnès, mais je ne m’en inquiète pas plus que la disparition de la voisine du dessus. Cela fait au moins un mois maintenant qu’elle n’a pas posé pied chez elle, j’appelle la police ! 

  Ce n’est pas normal, en effet. On a retrouvé sur la table basse du salon, un magnifique vase en cristal, qui supportait la blanche rose à qui il ne restait désormais plus qu’un pétale. A la base du vase, une lettre, signé de la part de la jeune femme. Lisa Verpillet. 

  <em>Je t’écris cette lettre alors que le dernier pétale de la rose blanche que tu m’as offerte vient de tomber. Tu m’avais dit que cette fleur était le symbole de notre amour, pur et éternel. Tu m’as alors promis que chaque pétale serait une promesse, une preuve que tu ne me feras jamais de mal. Mais les promesses, comme les pétales, s’envolent. Et il ne reste plus rien. 

  Au début, tout était parfait. Tes lettres, tes attentions, tes mots doux. Chaque jour, je me préparais pour toi, comme si chaque instant devait être une fête. Je croyais que tu m’aimais. Mais l’amour, parfois, n’est qu’un piège. Tu as commencé par m’isoler, doucement, en me disant que le monde était trop cruel pour moi. Puis tu as pris le contrôle de tout : mes sorties, mes quelques amis… même mes rêves dont tu faisais partie. Tu m’as volé ma lumière, pétale après pétale. </em>

  Elliott relève les yeux vers la fenêtre. La rose, maintenant fanée, n’est plus qu’un fantôme de ce qu’elle était. Il comprend que chaque pétale tombé correspondait miraculeusement à une partie de Lisa qui disparaissait. 

 <em> Le premier pétale est tombé le jour où tu m’as interdit de voir ma famille. La deuxième, quand tu as brisé mon téléphone. La troisième, quand tu as commencé à devenir violent avec moi. Et ainsi de suite, jusqu’à ce qu’il ne reste plus rien de moi. Juste une coquille vide, une ombre qui attend la fin. 

  Aujourd’hui, il ne reste plus qu’un pétale. Celle de l’espoir. Mais même elle est tombée. Je ne veux plus attendre, je ne veux plus souffrir. Je ne veux plus que tu me voles ce qui me reste. Alors je pars. Je choisis de m’en aller avant que tu ne puisses me prendre ça aussi.</em>

  Elliott recule, bouleversé. Il regarde autour de lui, l’appartement est vide, mais l’odeur de la rose fanée flotte encore, comme un fantôme. Il comprend alors que la beauté qu’il avait vue, ces sourires, ces préparatifs, n’étaient que les derniers éclats d’une âme en train de s’éteindre. 

  Dehors, le soleil brille toujours. Mais pour Elliott, le monde vient de s’assombrir un peu plus. Il pense à Agnès, quelque part, loin de lui. Il se promet de ne jamais laisser l’amour devenir une prison, de ne jamais laisser une rose fanée sur la table d’une vie brisée. 

  Il referme la lettre, et quitte l’appartement. 

  <em>Vivement qu’Agnès revienne. </em>
`,
  308: `La première fois que j’ai vu la rose blanche, c’était un matin de janvier, collée sur la porte de mon frigo avec un aimant en forme de cœur. Je l’ai arrachée, froissée, jetée à la poubelle. Puis j’ai regretté. Pas à cause de la fleur, mais parce que j’avais réagi comme un gamin. À quarante-deux ans, on devrait savoir gérer ses émotions. 

  Je m’appelle Simon. Je suis professeur de philosophie au cégep du Vieux-Montréal, et depuis six mois, je vis seul dans cet appartement du 308, rue Masson. Mon ex, Claire, est partie avec nos deux chats et la moitié de mes disques de jazz. Elle disait que je « ruminais trop ». Peut-être qu’elle avait raison. 

  Ce matin-là, j’avais cours à 8h. J’ai enfilé mon manteau en laine, attrapé mon sac, et je suis sorti en claquant la porte. Dans le couloir, j’ai croisé Madame Lefèvre, la vieille dame du 306, qui traînait un sac de courses trop lourd. Elle m’a souri, j’ai hoché la tête, et j’ai continué mon chemin. Je n’avais pas le temps pour les politesses. 

  Le cégep était à dix minutes à pied. J’aimais ce trajet, surtout l’hiver, quand la neige étouffait les bruits de la ville. Ce jour-là, pour une raison que j’ignore, j’ai pris un détour par la rue Beaubien. Et c’est là que je l’ai vue. 

  Elle était assise sur un banc, devant la boulangerie, un livre à la main et une tasse de café fumant posée à côté d’elle. Elle portait un bonnet rouge, des mitaines tricotées, et une écharpe à motifs de flocons. Quand elle a levé les yeux, j’ai senti mon cœur faire un bond. Pas à cause d’elle – enfin, pas seulement – mais parce qu’elle tenait entre ses doigts gourds une rose blanche. « Vous avez l’air gelé », a-t-elle dit en me voyant passer. 

  J’ai marmonné un « merci » et j’ai accéléré le pas. Je ne voulais pas parler. Pas ce matin-là. 

  Le cours s’est mal passé. Les étudiants somnolaient, le chauffage était trop fort, et moi, je n’arrêtais pas de penser à cette rose. Pourquoi une rose blanche ? Pourquoi elle ? Pourquoi moi ? 

  À midi, j’ai acheté un sandwich et je suis retourné vers la rue Beaubien. Elle n’était plus là. Juste la tasse de café abandonnée, et, sur le banc, un petit mot glissé sous un caillou : Les roses blanches sont pour ceux qui ont besoin de silence. 

  J’ai ri jaune. Du silence, j’en avais à revendre. 

  Le soir, en rentrant, j’ai trouvé une autre rose blanche, cette fois posée sur ma table de nuit. Pas de mot. Juste la fleur, ses pétales immaculés, son parfum discret. J’ai pensé à appeler la police, puis j’ai réalisé à quel point c’était ridicule. Qui appellerait les flics pour une fleur ? 

  Les jours suivants, les roses ont continué d’apparaître. Sur mon bureau au cégep. Dans la poche de mon manteau. Une fois, même, glissée entre les pages du livre que j’étais en train de lire. <em>L’Étranger</em> de Camus. Ironique. 

  J’ai commencé à me sentir observé. Pas menacé, non. Juste… vu. Comme si quelqu’un, quelque part, savait des choses sur moi que je ne savais pas moi-même. 

  Un jeudi, j’ai croisé Madame Lefèvre dans l’ascenseur. Elle tenait un bouquet de tulipes. 

  « Vous aimez les fleurs, professeur ? m’a-t-elle demandé. 

  — Pas particulièrement, ai-je répondu, sec. 

  Elle a souri, comme si elle savait quelque chose. 

  — Dommage. Les fleurs, c’est la vie qui nous fait un clin d’œil. » 

  J’ai grogné un « peut-être » et je suis sorti à mon étage. 

  Ce week-end-là, j’ai décidé de ne pas bouger de chez moi. J’ai verrouillé la porte, tiré les rideaux, et j’ai passé deux jours à regarder des films noirs en mangeant des pizzas surgelées. Dimanche soir, j’ai entendu un bruit contre ma fenêtre. J’ai écarté le rideau : sur le rebord, une rose blanche, et un mot écrit sur un bout de papier journal : « Vous ne pouvez pas fuir éternellement. » 

  J’ai ouvert la fenêtre, regardé dans la rue. Personne. Juste la neige qui tombait, et les réverbères qui dessinaient des halos jaunes sur le trottoir. 

  Lundi, j’ai séché mon cours. Pour la première fois de ma carrière. J’ai erré dans le quartier, j’ai bu trois cafés dans un bar miteux, j’ai acheté un carnet et un stylo. Et j’ai commencé à écrire. 

  Pas des essais philosophiques. Non. Des mots à elle. À cette inconnue aux roses blanches. Des mots que je n’avais jamais osé dire à Claire, à mes étudiants, à moi-même. 

  Je ne sais pas qui vous êtes, mais vous avez raison. Je fuis. Depuis toujours. J’ai peur du silence, alors je le comble avec des livres, des cours, des disques. Mais le silence, parfois, est juste une façon d’écouter. Alors merci. Pour les roses. Pour le rappel. 

  J’ai glissé la page sous la porte de Madame Lefèvre. Je ne sais pas pourquoi elle. Peut-être parce qu’elle était la seule à m’avoir parlé ces derniers temps. 

  Le lendemain, il n’y avait plus de rose. Juste un petit sachet de graines posé sur mon paillasson, avec un mot : « Plantez-les. » 

  J’ai obéi. 

  Aujourd’hui, six mois plus tard, mon balcon est couvert de roses blanches. Je ne sais toujours pas qui me les envoyait. Peut-être Madame Lefèvre. Peut-être l’inconnue de la rue Beaubien. Peut-être les deux. Peut-être personne. 

  Ce qui compte, c’est que j’ai appris à aimer le silence. Et que, parfois, quand je rentre le soir, je trouve une tasse de café chaud devant ma porte. 

  Avec, bien sûr, une rose blanche. 
`,
  604: `Le problème avec les secrets, c'est qu'ils prennent de la place. Beaucoup de place. Et mon appartement n'en a déjà pas beaucoup. 

  Je m'appelle Léa Bergeron, j'ai quarante-quatre ans, et je suis traductrice freelance. Anglais-français, français-anglais. Des manuels techniques, des contrats d'affaires, parfois des romans quand j'ai de la chance. Je travaille de chez moi, dans mon 604, entourée de dictionnaires et de tasses de café refroidies. 

  Ce matin de janvier 2012, je me réveille avec cette sensation familière : la culpabilité qui pèse sur ma poitrine comme une pierre. Ça fait trois mois maintenant. Trois mois que je vis avec ce poids. 

  Je me lève, j'ouvre mon ordinateur. Trente-deux courriels. Des clients, des factures, des relances. Je les ignore tous. À la place, j'ouvre un dossier caché dans mes documents. Un dossier que personne ne doit voir. 

  À l'intérieur, des photos. Des dizaines de photos. Toutes prises depuis ma fenêtre qui donne sur la cour intérieure de l'immeuble. Des photos des voisins. De leurs fenêtres. De leurs vies. 

  Je sais. C'est malsain. C'est invasif. C'est probablement illégal. 

  Mais je ne peux pas m'en empêcher. 

  Tout a commencé en octobre. J'étais en panne d'inspiration sur une traduction particulièrement chiante. Je regardais par la fenêtre, distraitement. Et j'ai vu Valère du 314 qui se préparait pour aller travailler. Chemise impeccable, gestes précis, routine millimétrée. J'ai trouvé ça fascinant. Cette vie si ordonnée, si différente de la mienne. 

  Alors j'ai pris une photo. Juste une. Pour m'en souvenir. Puis une deuxième. Puis une troisième. 

  Maintenant, j'ai des centaines de photos. Christine du 220 qui arrose ses roses sur son rebord de fenêtre. James du 316 qui accueille cette petite fille qui squatte chez lui. Marie-Chantal du 110 qui nourrit ses chats. Des vies en fragments, capturées à leur insu. 

  Je ne partage jamais ces photos. Je ne les montre à personne. C'est juste pour moi. Mon petit secret honteux. 

  Ce matin, je zoome sur une photo récente. Agnès qui sort de chez elle avec un carton. Dans l'immeuble d'en face, je distingue un homme à sa fenêtre qui la regarde. Elliott, le nouveau. Il a emménagé en septembre dans l'ancien appartement d'Achille. Je me demande s'il sait qu'Agnès le remarque aussi. 

  Mon téléphone sonne. Ma sœur, Camille. 

  « Léa ? Tu viens souper dimanche ? 

  — Je ne sais pas, j'ai beaucoup de travail... 

  — Tu dis toujours ça. Maman s'inquiète. On ne te voit plus. 

  — Je sais. C'est juste... compliqué en ce moment. 

  — Compliqué comment ? 

  Je regarde mes photos sur l'écran. 

  — Laisse tomber. Je vais essayer de venir. 

  — Promis ? 

  — Promis. » 

  Je raccroche. Je ne viendrai pas. Je ne viens jamais. 

  Vers midi, on frappe à ma porte. Je sursaute, je ferme rapidement le dossier. Mon cœur bat trop vite. Est-ce que quelqu'un m'a vue ? Est-ce que quelqu'un sait ? 

  J'ouvre. C'est Francis du 608. Le rockeur fatigué avec sa guitare. 

  « Salut. Désolé de déranger. T'aurais du sucre à me prêter ? 

  — Du sucre ? 

  — Ouais, je reçois quelqu'un et j'ai oublié d'en acheter. 

  — Euh, oui, attends. » 

  Je vais dans la cuisine, je lui donne un sac de sucre. Il me remercie, repart. Je referme la porte, soulagée. Mais le malaise reste. 

  L'après-midi, je me force à travailler. Une traduction urgente pour un client chiant qui paie mal. Je m'installe avec mon thé, mes notes, mon ordinateur. 

  Pendant deux heures, je suis concentrée. Productive. Normale. 

  Puis mes yeux dérivent vers la fenêtre. 

  Et je recommence. 

  Je prends mon appareil photo, je zoome sur les fenêtres d'en face. Adeline du 312 qui lit sur son balcon malgré le froid. Simon du 308 qui fume une cigarette, l'air perdu. Denis du 216 qui range ses affaires, peut-être en train de déménager. 

  Click. Click. Click. 

  Mon téléphone vibre. Un texto de ma thérapeute. 

  « N'oublie pas ton rendez-vous demain à 14h. » 

  Merde. J'avais oublié. Je tape une réponse rapide. 

  « Ok, je serai là. » 

  J'ai commencé la thérapie en novembre. Pas à cause des photos. Ma thérapeute ne sait rien des photos. J'y vais officiellement pour mon anxiété sociale, ma difficulté à maintenir des relations, mon isolement croissant. 

  Mais au fond, je sais pourquoi je vais mal. Et ça n'a rien à voir avec l'anxiété. 

  Le soir, je me prépare un repas triste. Des pâtes au beurre. Je mange devant mon ordinateur en scrollant mes photos. Mon exposition privée de vies volées. 

  Je tombe sur une photo de Christine du 220. Elle est à sa fenêtre, elle regarde vers l'immeuble d'en face. Son visage est triste, pensif. Quelque chose dans son expression me fend le cœur. 

  Pour la première fois, je réalise quelque chose. Ces gens ne sont pas des personnages. Ce sont des vraies personnes. Avec de vraies douleurs. De vraies solitudes. 

  Comme moi. 

  Je ferme l'ordinateur. Je vais sur le balcon. L'air froid me brûle les poumons. En bas, dans la cour, je vois Marie-Chantal qui promène un de ses chats en laisse. Elle lève la tête, me voit, me fait signe. 

  Je lui réponds d'un geste timide. 

  « Il fait froid hein ! crie-t-elle. 

  — Oui ! Très ! 

  — Tu devrais rentrer, tu vas attraper la mort ! 

  Je souris malgré moi. Elle s'inquiète. Pour moi. Une quasi-étrangère. 

  Le lendemain, je vais à mon rendez-vous chez la thérapeute. Je m'assieds dans le fauteuil trop mou, face à Docteure Lavoie qui me regarde avec ses yeux patients. 

  — Comment allez-vous cette semaine, Léa ? 

  — Bien. Enfin, pas bien. Je ne sais pas. 

  — Qu'est-ce qui vous préoccupe ? 

  Je prends une grande inspiration. 

  — J'ai fait quelque chose. Quelque chose de pas correct. 

  — Racontez-moi. 

  Alors je raconte. Tout. Les photos, l'obsession, la honte. Je pleure en parlant. Des vraies larmes, pas juste des yeux qui piquent. 

  Docteure Lavoie écoute sans juger. Quand j'ai fini, elle dit : 

  — Vous savez pourquoi vous faites ça ? 

  — Non. 

  — Vous observez les autres parce que vous avez peur de vivre votre propre vie. C'est plus sûr de regarder par la fenêtre que de sortir par la porte. 

  Ses mots me frappent comme une gifle. Parce que c'est vrai. 

  — Qu'est-ce que je fais maintenant ? 

  — Vous effacez les photos. Et vous sortez de chez vous. » 

  Le soir même, je m'assois devant mon ordinateur. Le dossier est là, sur mon bureau. Des centaines d'heures de voyeurisme condensées en un seul clic. 

  Ma main tremble au-dessus de la souris. 

  Puis je supprime tout. 

  Le dossier disparaît. Vide. Fini. 

  Je pleure encore, mais différemment. Un soulagement mêlé de perte. 

  Le lendemain, je descends au 110. Je frappe à la porte de Marie-Chantal. Elle ouvre, surprise. 

  « Léa ! Quelle belle visite ! 

  — Bonjour. Je me demandais... vous aviez parlé de jouer aux cartes avec des voisines ? Est-ce que je pourrais me joindre à vous parfois ? 

  Son visage s'illumine. 

  — Bien sûr ! On se retrouve chez Christine jeudi. Tu es la bienvenue ! 

  En remontant l'escalier, je croise Agnès. Elle porte un bouquet de roses blanches. 

  — Belles fleurs, je dis. 

  — Merci. C'est pour une cliente. » 

  On se sourit. Un vrai sourire. Pas celui qu'on donne par politesse. 

  De retour dans mon appartement, je regarde par la fenêtre. Mais cette fois, je ne prends pas de photo. 

  Je regarde juste. Et c'est suffisant. 
`,
  512: `« Merde ! Il pleut encore. » 

  Antony le regard dans le vide. Pourtant, c’était son seul créneau ou le moment qu’il choisissait d’habitude pour aller faire ses courses. Il prit son manteau imperméable et son sac de course et sortit. Ascenseur ou escalier ? Il décida de prendre les escaliers histoire de se dégourdir un peu les jambes. 

  Antony est peintre et reste la plupart du temps cloîtré dans son appartement. C’est le seul endroit où il arrive à se concentrer et à avoir de l’inspiration. Son appartement, c’est son havre de paix ; il s’y sent bien. D’ailleurs, comment ne pas s’y sentir bien quand il est si joliment décoré ? Le salon est tapissé d’une moquette d’un gris clair et épuré. Les murs d’un blanc immaculé sont garnis de nombreux tableaux inspirants peints par lui-même. Antony n’a pas eu une vie facile. Ayant grandi dans un foyer d’accueil, il a essuyé coups sur coups. 

  Cette bourse d’études pour intégrer l’école d’art de Montréal a été pour lui une bouée de sauvetage. Ça y est, il allait enfin prendre son indépendance et réaliser ce qui l’a toujours passionné : la peinture. Trois ans après, il sortait de l’école d’art, major de sa promotion. Les opportunités avaient alors commencé à pleuvoir. Il avait dans la foulée signé un contrat avec l’Arsenal Art Contemporain de Montréal. Une nouvelle vie commençait alors pour lui. 

  Il aimait bien cet immeuble, même si les voisins avaient l’air un peu intrusifs et curieux. Agnès, la fille du premier étage, aime bien promener son chien. Elle s’arrête toujours quand ils se croisent dehors pour discuter. Mais Antony est toujours pressé de retourner à ses peintures. 

  Un matin, rapide mais prudent, il dévale les escaliers jusqu’au rez-de-chaussée. Il croisa justement Agnès qui sortait de l’ascenseur, bien apprêtée. 

  « Bonjour Antony, j’espère que vous allez bien ! Joli temps, n’est-ce pas ? Heureusement que c’est mon jour de congé aujourd’hui. Je sors juste faire mes courses. Et vous, beau aux bois dormants ? fit-elle avec un rictus moqueur du bout des lèvres. 

  — Je vais aussi me procurer de quoi subsister, voyez-vous, milady fit-il entrant dans son jeu. 

  — Très bien, messire, je vous souhaite une excellente journée. » 

  *

  Ses courses faites et le repas prêt, il engloutit son plat avec appétit. Il se dirigea vers son bureau-atelier. Il avait une planche de dessin qu’il s'évertue à garder vierge chaque matin, ce qui le motivait le plus à travailler. Il se mit alors devant sa planche et essaya de se concentrer. Il pensa à tout et rien. L’image de sa voisine du premier étage s’imposa alors dans son esprit. Ses remarques taquines, son rire joyeux et ses yeux brillants. Elle lui faisait penser à une rose qui s’épanouit au printemps. Il sourit et prit son pinceau ; il se plaça près de la fenêtre là où la lumière du jour traversait sa toile. 

  Il se mit à dessiner une rose avec frénésie. Elle était blanche et lumineuse. Une fois terminée, il admira son œuvre les yeux brillants et décida de la sélectionner comme pièce principale dans sa prochaine exposition. Il était encore dans ses pensées quand son téléphone sonna. Il prit le combiné et décrocha. 

  « Bonjour M. Montgomerry ! Oui, ça va lui répondit d’une voix bienveillante son interlocuteur, qui était son agent d’exposition. 

  — Antony, pour la prochaine exposition qui aura lieu dans une semaine, pouvez-vous inviter quelques-uns de vos proches ? C’est Nina, l’agent événementiel, qui le propose. 

  — Oh je… fut la seule chose qu’il put dire. Je, je ne sais… 

  L’homme au bout du fil soupira et fit : 

  — Je sais, Antony, que vous n’avez pas de famille et que c’est compliqué. Mais c’est important de socialiser et de donner aux autres tout ce que vous avez à offrir. Je peux compter sur vous pour venir avec quelques personnes ? 

  — Je, je ferai au mieux, Monsieur, fit-il, l’air pas très convaincu. 

  — À bientôt, Antony ! » 

  Il reposa le combiné et s’assit, totalement vidé de toute énergie. Il replongea dans le passé. Ces années passées en foyer d’accueil. Une scène revenait sans cesse et dominait. 

  **La punition**

  C’était un soir de Noël ; il neigeait et tout était blanc. Antony avait alors 11 ans. Il vivait depuis 2 ans dans ce foyer pour enfants oubliés, difficiles ou pour ceux dont les parents voulaient donner une bonne correction. Mais lui, il y était parce qu’il n’avait plus personne. Ses parents étaient morts dans une croisière lors de leurs dernières vacances en Australie et lui, enfant unique, était tombé dans la profonde spirale des foyers d’accueil. Ce soir de Noël, il avait incité ses camarades de dortoir à sortir dans la cour pour former des bonshommes de neige géants. Ils avaient ri, s’étaient poursuivis dans les escaliers et avaient ressenti la magie de Noël que tout enfant rêve de vivre. Mais l’atmosphère s’était vite alourdie quand M. Rigaux, leur surveillant ce soir-là, s’était pointé à l’entrée, arborant une moue terrifiante. 

  « Vous aimez le froid, c’est ça ? Vous savez combien ça coûterait aux contribuables de vous soigner si vous prenez froid ? Comme vous aimez me défier et me mettre en colère, vous allez être servis. Mettez-vous en rang et dirigez-vous vers le grenier, fit-il, tout sourire. 

  Les enfants se figèrent car c’était comme si on leur avait annoncé la fin du monde. 

  — Pardon, M. Rigaux, on ne le fera plus, fit le petit Mathéo, âgé de 9 ans. 

  — Si tu l’ouvres encore, la punition sera encore plus grande, fit l’homme en haussant le ton. 

  Les enfants entrèrent en rang dans la maison et montèrent dans le grenier. Le grenier : cette pièce sans chauffage, exigu et sombre : leur pire cauchemar. Ils y entrèrent tous les douze et s’assirent. La porte en bois se referma d’un bruit sec. Ils passèrent cette nuit de Noël à mourir de froid et à être affamés. 

  Ils étaient libérés le lendemain dans l’après-midi. Cette nuit avait été épouvantable et ils en faisaient des crises d’angoisse rien qu’en y pensant. Le souffle court, il secouait la tête, revint à la réalité. Il ne se rendit même pas compte qu’il pleurait et tremblait de tous ses membres. 

  « Je dois vraiment tourner la page ; il faut que j’oublie ce passé qui me turlupine et m’empêche d’avancer. Il le faut. » 

  *

  Madame Leclercq sortit de son appartement et se dirigea vers les boîtes aux lettres au rez-de-chaussée. Elle ouvrit la sienne, boîte 312, et découvrit une enveloppe. Elle ouvrit et vit une invitation à une exposition d’art. L’expéditeur ne lui était pas du tout inconnu. Elle haussa un sourcil, surprise, la bouche en cœur. 

  « Antony, le discret du 5e m’invite à son exposition samedi ? Je suis sous le choc. 

  Un bruit se fit entendre derrière elle et elle découvrit Agnès qui sortait promener son chien. 

  — Ah, Adeline, comment allez-vous ce matin ? 

  — Bien, je vais très bien et vous ? Elle baissa la tête et chuchota : je suis surprise quand même. Le silencieux… Il m'invite à son exposition d’art samedi. 

  Agnès pencha la tête d’un côté et la fixa d’un regard interrogateur. 

  — C’est qui le silencieux ? 

  — Notre voisin du 5e étage est discret, fit-elle tout sourire. 

  — Ah, Antony ? Sérieusement ? Je suis sous le choc. Qu’est-ce qui a bien pu lui passer par la tête ? Elle se dirigea vers sa boîte aux lettres et l’ouvrit. J’ai peut-être du courrier ? Elle tourna la poignée, regarda et sortit une enveloppe. Mais j’ai la même que la vôtre ! 

  — Ouvre-la, Agnès. » 

  Elle l’ouvrit et découvrit le même flyer d’invitation. Les deux dames sourirent et passèrent une heure à choisir comment s’habiller pour se rendre à cette fameuse exposition. 

  **Samedi**

  « Mesdames, Messieurs, je vous prie d’accueillir Antony, qui est l’artiste exposant numéro un ce soir. » 

  Antony, vêtu d’un smoking et l’air apprêté, s’approcha de la scène et prit le micro. Pendant quinze minutes, il se présenta et parla de ses œuvres. Il fit une pause et repris : 

  « Ce n’est pas tout : la pièce maîtresse de cette soirée, la vedette, c’est un tableau que j’ai peint avec un cœur blanc et beaucoup de douceur. Il fit signe à un jeune homme près de la toile couverte d’un drap blanc de la dévoiler ; il la découvrit en tirant dessus. La fameuse toile qu’il avait peinte, cette rose blanche qui évoquait Agnès, apparut. Il y eut un silence dans la salle et les gens applaudirent. Madame Leclercq et Agnès, accompagnées d’Elliott, furent émues. 

  — Cette rose, elle a quelque chose de très captivant, fit 

  — Agnès en s’approchant d’Antony qui quittait la scène. 

  — En effet, fit Madame Leclercq qui tenta d’attraper une coupe de champagne du plateau d’un serveur. 

  — Oh, vous êtes venus. C’est tellement gentil. Je suis touché, dit Antony. 

  — C’est nous qui sommes émerveillés. Si c’est votre réclusion qui vous donne toute cette inspiration, vous devriez vous enfermer un peu plus souvent, fit Agnès, le regard lumineux. 

  — Ne lui dis pas ça ; il va encore plus s’enfermer, le pauvre. Moi, je vois qu’il y a beaucoup de manières de vous inspirer dehors : les fleurs, un marchand, une petite fille qui déguste une glace sous le regard aimant de ses parents, un adolescent à son match de rugby. Vivez Antony, vivez, car la vie vaut la peine d’être vécue. » conclut Madame Leclercq, le regard rempli de fierté. 
  `,
  216: `« Au revoir ! Fais bonne route ! Bisous ma chérie ! » entonne Denis, le sourire accroché aux lèvres. Mais son visage se décompose lorsqu'il fait claquer la porte derrière sa fille. 

  Ce ne sont pas vraiment des larmes de joie qui grossissent au coin de ses yeux, ni tout à fait de la tristesse. Les larmes de confusion existent-elles ? Ce jour allait arriver et Denis le savait. 

  Deux ans auparavant, c’était l’ainée, Elia qui partait emménager avec sa copine. Aujourd’hui, c’est le tour de Clara, la cadette, de prendre ses valises pour faire ses études à l’étranger. Il y a toujours une bonne raison pour partir, c’est normal, il le sait, mais ça n’a rien à voir avec ce qu’il imaginait. Dans les scénarios qu’il construisait dans sa tête, il était tantôt si fier de voir celles qu’il a éduqués pendant tant d’années devenir autonome et s’épanouir par elle-même, tantôt si dévasté d’être seul dans ce grand appartement vide, après avoir tout donné pour elles. 

  Mais ce qu’il ressent aujourd’hui n’a aucun rapport. C’est plutôt un épais brouillard qui l’entoure et floute ses pensées. Quoi faire maintenant ? Il reprend doucement ses esprits, il est debout, figé, sa main toujours sur la poignée. Cet instant est le premier souvenir du reste de sa vie. Doucement, il s’éloigne de la porte d’entrée, prend un stylo et un carnet et s’assoit à la table de la cuisine où trône encore le petit déjeuner que Clara n’a pas eu le temps de finir. Il prend la tasse de café encore tiède d’une main, de l’autre il commence une liste : 

  — Chant 

  — Peinture 

  — Sculpture 

  — Sport, (box ? Course ?) 

  — Fabriquer des mangeoires à oiseau 

  — Regarder plus de films 

  — Apprendre une nouvelle langue 

  Toutes ces choses dans un coin de sa tête, qu’il avait gardé pour « plus tard », désormais il comprend. « Plus tard » c’est maintenant. Soudain son cœur semble s’alléger un peu. Il part à la recherche de vieux cartons de l’école et des anciens jeux de ses filles, dans lesquels se trouvent quelques bases pour s’essayer aux arts plastiques. Il trouve de vieux pots de pâte à modeler jamais ouverts. Peut-être pas la meilleure qualité après tout ce temps, mais ça fera l’affaire. Lorsqu’il les ouvre, il les trouve toutes sèches. Mais Denis ne se laisse pas impressionner, il regarde sur internet et voit que ces pâtes peuvent être réhydratées avec de l’eau, dans un sac alimentaire, puis un rouleau à pâtisserie… Bon. Détenir un rouleau à pâtisserie, c’est plutôt un truc de personne qui sait bien cuisiner selon Denis, lui, il n’en a pas. 

  Tant pis, il décide alors d’utiliser ses mains, il mélange l’eau et la pâte et commence à la ramollir à travers le sac. 

  C’est au moment de sortir la mixture du sac que ça se gâte. La texture est collante, poisseuse. Ça fait des “splosh splosh” au moindre mouvement, et en plus l’odeur est vraiment suspecte. Pas très concluant. Il n’était pas très inspiré, mais avec un blob pareil entre les mains, il en est sûr, il n’y a rien à tirer de tout ça. 

  La sculpture en pâte à modeler ? Clairement pas pour lui. Mais ce n’est pas grave, il a une autre idée. Dans ce même carton, il a aperçu des pinceaux et des peintures neuves. Dans une autre vie, Denis dessinait beaucoup dans ses cahiers de cours, et il avait même fini par avoir un petit niveau. Il n’avait peut-être jamais peint, mais ça lui semblait malgré tout plus familier. 

  Après un soigneux lavage de mains, il se lance. Il découpe un volet du carton dans lequel se trouve les affaires, c’est ce qu’il a de mieux pour l’instant. Et l’inspiration lui vient tout de suite. 

  Sa fille ainée, Elia, adore les fleurs. Elle a plein de plantes chez elle, elle lui en donne souvent pour son appartement. Mais elle n’a jamais eu de tableau ! Il commence alors un prototype, un petit bouquet de ses plantes et fleurs préférées, des feuilles de plantes prieuses, un tournesol et une rose blanche. 

  Visage concentré, langue sortie, il s’applique à trouver une bonne composition d’image au crayon de papier, puis, il se lance enfin avec le pinceau, avec un peu d’appréhension. 

  Il y passe l’après-midi. Mais une fois son premier prototype accompli, il n’a qu’une seule envie : Recommencer. 

  Jusqu’à pouvoir offrir à sa fille ainée le cadeau parfait pour son anniversaire dans 2 mois. 

  Il met à sa fenêtre le petit volet de carton pour qu’il puisse sécher tranquillement, et décide d’observer un peu les oiseaux. C’est vrai qu’il a écrit dans sa liste qu’il voulait construire son propre nichoir, mais déjà, la peinture est un projet qui semble prendre le dessus sur ses autres envies. Il s’en réjouit déjà. Après une journée bien remplie, Denis part enfin se coucher, le vide de ce matin vite remplacé par de nouveaux projets. 

  Dès son réveil, le lendemain, il se prépare et part acheter le nécessaire pour peindre. Un chevalet, quelques toiles. Il en profite pour commencer le sport et décide d’aller jusqu’au magasin en courant, Normalement c’est à 10 minutes à pied. En courant ce doit être à environ… 6 minutes ? 

  11 minutes plus tard, il parvient enfin au magasin, essoufflé. Le sport… Peut-être une autre fois. 

  Une fois dans la grande surface, il craque dans la partie fleuristerie, et s’empare de plusieurs plantes, certaines pour décorer sa maison, d’autres pour faire sécher les feuilles et les ajouter à ses peintures. Il fera des tests. 

  Heureux de ses trouvailles, Denis rentre chez lui. Dans l’ascenseur, il croise le voisin du dessus qui jette un coup d’œil rapide à toutes ses plantes, et le voyant chargé, décide de l’aider. 

  « Laissez-moi vous tenir la porte, attendez ! 

— Ah, merci c’est gentil ! Bonne soirée ! » 

Denis d’ordinaire bavard, n’ajoute pas un mot, bien trop pressé de retourner à ses pinceaux. Et le temps passe. Denis peint. 


Il peint toutes les variantes possibles de ce petit prototype original sur un bout de carton. Du pop’art, du cubisme, du surréalisme, des peintures psychédéliques, des peintures réalistes, enfin, tout ça à hauteur de ses compétences en tout cas. Il se renseigne sur les techniques, et sans être des chefs d’œuvre, il est fier de voir sa maison se remplir jour après jour. 

Lorsqu’il fait des pauses, c’est pour observer les oiseaux à la fenêtre. Mais il remarque aussi que ses tableaux ne passent pas inaperçus : le voisin de l’immeuble d’en face, Elliott d’après les ouïes dire, semble regarder ses peintures d’un air curieux, mais assez fermé. Denis doute, et ça l’intrigue. Sont-elles si laides ? Ou est-il jaloux ? Il ignore comment interpréter ce regard, mais il ne se démonte pas. Demain, il ira le saluer, et compte bien briser la glace en lui offrant l’une de ses œuvres pour fêter son récent emménagement. Elliott sera son premier critique, espérons qu’il aime les fleurs. 
`,
  118: `Le courrier s'accumule depuis trois jours dans la boîte aux lettres. Fatima sait qu'elle devrait descendre le chercher, mais l'idée de croiser quelqu'un dans le hall la paralyse. Alors elle reste là, dans son appartement du premier étage, à compter les heures qui la séparent de la tombée de la nuit. 

  Vingt-trois heures. C'est l'heure idéale. L'immeuble dort, les couloirs sont vides, et elle peut enfin respirer. 

  Fatima a trente-huit ans et travaille comme correctrice pour une maison d'édition. Un métier parfait pour quelqu'un comme elle : tout se fait à distance, par courriel, sans contact humain. Elle corrige des romans, des essais, des manuels scolaires. Elle traque les virgules manquantes, les accords défaillants, les phrases bancales. Elle excelle dans l'invisible. 

  Ce soir de janvier, elle enfile son peignoir par-dessus son pyjama et glisse ses pieds dans ses pantoufles usées. Avant de sortir, elle vérifie trois fois que ses clés sont bien dans sa poche. Perdre ses clés serait une catastrophe : elle devrait appeler quelqu'un, expliquer, attendre. Non. Impossible. 

  Le couloir du premier étage baigne dans une lumière jaunâtre. Fatima avance rapidement, les yeux rivés au sol. Elle compte ses pas. Vingt-trois jusqu'à l'escalier. Elle préfère les escaliers à l'ascenseur — trop de risques de croiser un voisin dans cette boîte métallique. 

  Au rez-de-chaussée, elle se dirige vers les boîtes aux lettres alignées contre le mur. La sienne, numéro 118, déborde. Des factures, des publicités, une lettre de sa sœur qu'elle n'ouvrira probablement pas. Ses mains tremblent légèrement en récupérant le tout. 

  C'est à ce moment qu'elle entend la porte de la boutique de fleurs s'ouvrir. 

  Agnès apparaît, les bras chargés de bouquets qu'elle rapporte à l'intérieur après une journée de travail. Elle porte un tablier vert sapin maculé de terre. Quand elle aperçoit Fatima, elle lui adresse un sourire chaleureux. 

  — Bonsoir ! Belle soirée pour récupérer son courrier, non ? 

  Fatima sent sa gorge se serrer. Elle hoche la tête sans un mot, serre son paquet de lettres contre sa poitrine comme un bouclier. Agnès ne semble pas remarquer son malaise, ou fait semblant de ne pas le voir. 

  — Je ferme boutique. Ça fait une longue journée. Vous habitez au premier, c'est ça ? 

  Nouveau hochement de tête. Les mots refusent de sortir. 

  — Moi aussi ! lance Agnès avec entrain. On est voisines alors. Je suis au 110, avec mon chien Ernest. Si jamais vous avez besoin de quoi que ce soit, n'hésitez pas ! 

  Fatima articule un « merci » presque inaudible et se précipite vers l'escalier. Dans sa hâte, une enveloppe lui échappe et vole jusqu'aux pieds d'Agnès. 

  — Attendez ! Vous avez perdu... 

  Mais Fatima est déjà dans l'escalier, fuyant cette interaction qui lui brûle la peau. 

  De retour dans son appartement, elle s'effondre sur son canapé, le cœur battant. Pathétique. Elle est pathétique. Incapable d'avoir une conversation normale avec une voisine qui se montre simplement aimable. Elle ferme les yeux et attend que les battements de son cœur ralentissent. 

  Les jours suivants s'écoulent dans leur routine habituelle. Fatima corrige des manuscrits, commande ses courses en ligne, évite le monde. Le vendredi soir, alors qu'elle sort ses poubelles à minuit — encore une fois pour éviter les regards —, elle trouve une enveloppe glissée sous sa porte. 

  À l'intérieur, la lettre qu'elle avait laissé tomber, accompagnée d'un petit mot griffonné sur du papier à en-tête de la boutique de fleurs. 

  « Bonsoir voisine ! J'ai ramassé votre courrier l'autre soir. J'espère que ce n'était rien d'important. Bonne soirée, 

  Agnès. » 

  Fatima fixe le mot pendant plusieurs minutes. Un geste simple, sans jugement, sans attente. Elle devrait descendre remercier Agnès. Elle devrait au moins lui glisser un mot sous sa porte. Mais l'idée de cet échange, même écrit, la terrifie. 

  Elle range le mot dans un tiroir et essaie de l'oublier. 

  Les semaines passent. Février arrive avec ses tempêtes de neige qui bloquent la ville. Fatima reste cloîtrée chez elle, travaillant sur un manuscrit particulièrement ardu — un roman psychologique dense et sombre. L'auteure écrit sur la solitude, l'isolement volontaire, la difficulté de se connecter aux autres. Fatima se reconnaît dans chaque page. 

  Un samedi matin, on frappe à sa porte. Trois coups fermes. Fatima se fige sur son canapé. Elle ne répond jamais. Les gens finissent toujours par partir. 

  — Madame Fatima ? C'est Marie-Chantal, du 110. Je suis infirmière, je fais une tournée dans l'immeuble pour vérifier que tout le monde va bien après la tempête. Vous allez bien ? 

  Fatima reste silencieuse, retenant son souffle. 

  — Je vois de la lumière sous votre porte, continue la voix. Si vous allez bien, toquez une fois au mur pour me rassurer. Sinon, je vais devoir demander à la gardienne d'ouvrir. 

  À contrecœur, Fatima se lève et donne un petit coup contre le mur. 

  — Parfait ! Merci. Si vous avez besoin de quoi que ce soit, n'hésitez pas ! 

  Les pas s'éloignent dans le couloir. Fatima retourne s'asseoir, troublée. Ces voisins s'inquiètent pour elle. Ils la remarquent, même dans son invisibilité soigneusement cultivée. 

  Le manuscrit qu'elle corrige contient un passage qui la frappe particulièrement ce jour-là. Le personnage principal parle de sa peur des autres, de cette terreur qui l'empêche de vivre pleinement. « La solitude est une prison confortable, écrit l'auteure. On finit par aimer ses barreaux. » 

  Fatima pose son stylo rouge et regarde par la fenêtre. De l'autre côté de la cour intérieure, elle aperçoit un homme à sa fenêtre. Elliott, le nouveau locataire d'en face. Elle le voit souvent ainsi, perdu dans ses pensées, son chat à ses côtés. Lui aussi semble seul. Mais au moins, il sort. Elle l'a vu promener son chat, parler avec les voisins, vivre. 

  Ce soir-là, Fatima fait quelque chose d'inhabituel. Elle descend à vingt heures, pas à vingt-trois heures. Le hall est vide, comme d'habitude à cette heure, mais elle a brisé son rituel. C'est un petit pas, minuscule, mais c'est un pas quand même. 

  En remontant, elle croise la gardienne qui sort de son logement avec sa fille. 

  — Bonsoir ! lance la femme. 

  — Bonsoir, répond Fatima. 

  Le mot sort tout seul, presque sans effort. La gardienne sourit et continue son chemin avec la petite. Rien de dramatique ne s'est produit. Le monde n'a pas explosé. 

  Dans son appartement, Fatima remarque pour la première fois un détail qu'elle avait oublié. Sur le mur de son salon, un petit tableau qu'elle avait acheté dans une brocante des années plus tôt. Une aquarelle représentant une rose blanche sur fond bleu pâle. Elle ne se souvient même plus quand elle l'a accroché là. 

  Elle s'approche et observe la fleur peinte. La rose est simple, délicate, presque fragile. Mais elle est là, présente, visible. 

  Fatima retourne à son ordinateur et ouvre un nouveau document. Pour la première fois depuis des années, elle écrit quelque chose qui n'est pas une correction. Elle écrit pour elle-même. 

  « Je m'appelle Fatima. J'ai trente-huit ans. Je vis seule. J'ai peur des gens. Mais peut-être que demain, je descendrai à dix-neuf heures. » 

  Elle sauvegarde le fichier et ferme l'ordinateur. Dehors, la neige tombe doucement sur Rosemont. Dans l'appartement d'en face, Elliott éteint sa lumière. Le monde continue de tourner, avec ou sans elle. 

  Mais peut-être, juste peut-être, qu'elle pourrait en faire partie. Un jour. Un petit pas à la fois. 
`,
  214: `Le thermostat indique dix-sept degrés. Dehors, janvier crache son froid sur le Vieux Rosemont, mais Youssef refuse de monter le chauffage. Pas par avarice — par principe. À trente-deux ans, il économise pour ouvrir son propre garage et chaque dollar compte. Alors il enfile trois pulls superposés et garde ses chaussettes de laine même pour dormir. 

  Ce matin, le café sort brûlant de la cafetière italienne que sa mère lui a offerte avant qu'il quitte Casablanca. Il le boit debout devant la fenêtre qui donne sur la rue Masson, observant les passants emmitouflés qui se pressent vers le métro. Youssef travaille de nuit comme mécanicien dans un atelier de Villeray, ce qui lui laisse les matinées libres pour gérer ses affaires. Aujourd'hui, il doit absolument trouver un moyen de réparer la fuite sous l'évier. 

  Il ouvre le placard sous le lavabo et grimace. L'eau a formé une petite mare qui a déjà gondolé le contreplaqué bon marché. Il attrape une bassine, une clé à molette et s'accroupit dans l'espace étroit. La position lui tire le dos — séquelle d'un accident de moto trois ans plus tôt. Mais Youssef a appris à vivre avec la douleur. Elle fait partie du package, comme les factures et les hivers québécois. 

  Le joint du siphon est foutu. Évidemment. Il faudrait le remplacer, mais le propriétaire de l'immeuble, Monsieur Beauchesne, met toujours des semaines à réagir. Youssef soupire et resserre tant bien que mal, sachant que ça ne tiendra pas longtemps. En se relevant, son genou cogne contre le tuyau et la bassine se renverse, inondant ses chaussettes. 

  « Tabarnak. » 

  Il a appris à jurer en québécois dès sa première semaine à Montréal. Ça fait partie de l'intégration. 

  Après s'être changé, Youssef descend à la buanderie du sous-sol avec son sac de linge sale. L'endroit sent l'humidité et le détergent bon marché. Les machines ronronnent déjà — quelqu'un d'autre a eu la même idée matinale. Il reconnaît le manteau accroché au mur, celui avec le motif de rose blanche brodé sur la poche : c'est celui d'Agnès, la fleuriste du premier étage. Une fille discrète qui le salue toujours poliment dans l'escalier. 

  Il charge sa machine et monte les quatre volées de marches jusqu'au cinquième, où vit Thomas, un vieux bonhomme qui répare des radios vintages. Youssef lui a promis de jeter un œil à sa Pontiac 1985 qui refuse de démarrer depuis novembre. 

  « Youssef ! Entre, entre ! » 

  L'appartement de Thomas est un capharnaüm organisé : des dizaines de postes de radio empilés sur des étagères, des outils éparpillés sur une table, des journaux qui datent des années quatre-vingt. Ça sent le tabac à pipe et le vieux bois. 

  « Elle est dans le stationnement arrière, explique Thomas en lui tendant les clés. Je pense que c'est la batterie, mais je n'y connais rien en mécanique moderne. » 

  Youssef descend dans le stationnement couvert où dorment quelques véhicules enneigés. La Pontiac est une beauté délabrée, rouge écaillée avec des traces de rouille. Il ouvre le capot et commence son diagnostic. Effectivement, la batterie est morte. 

  Mais en inspectant plus attentivement, il remarque que les câbles sont corrodés et qu'une courroie est sur le point de lâcher. Il remonte voir Thomas avec la liste. 

  « Ça va te coûter deux cents passes de pièces, minimum. Plus la main-d'œuvre si tu vas au garage. » 

  Le vieil homme blêmit. 

  — Deux cents ? Mon chèque de pension me laisse pas grand-chose après le loyer... » 

  Youssef connaît cette expression. Il l'a vue sur le visage de sa propre mère quand elle calculait combien il restait pour l'épicerie après avoir payé le loyer. 

  — Écoute. Je vais te faire ça pour cent passes, tout compris. Je commande les pièces aujourd'hui ; je les installe dimanche. - Tu ferais ça ? » 

  — On est voisins, non ? » 

  Le sourire de Thomas vaut tous les profits perdus. 

  De retour dans son appartement, Youssef commande les pièces en ligne, puis s'écroule sur son canapé défoncé. Il devrait dormir avant son shift de ce soir, mais son esprit bouillonne déjà. Il calcule : avec ce qu'il a mis de côté, il lui manque encore quinze mille dollars pour la mise de fonds sur le local qu'il a repéré sur l'avenue du Parc. Un ancien garage désaffecté, parfait pour démarrer petit.  Son téléphone vibre. Message de Karim, son collègue de l'atelier : « Boss cherche quelqu'un pour le shift du samedi. Triple tarif. Intéressé ? » 

  Youssef hésite trois secondes. Ça fait deux mois qu'il n'a pas eu de vraie journée de repos. Ses articulations le font souffrir, son dos le lance constamment et les cernes sous ses yeux ressemblent à des ecchymoses. Mais quinze mille dollars ne vont pas tomber du ciel. Il tape: « Je prends. » 

  L'après-midi file entre une sieste agitée et la préparation de son lunch pour la nuit — un sandwich au thon et des carottes. Vers dix-sept heures, il enfile son uniforme de travail et son manteau d'hiver. Avant de sortir, il jette un dernier coup d'œil à son appartement minuscule : la kitchenette exiguë, le canapé qui sert aussi de lit les mauvais jours, les murs défraîchis qu'il n'a jamais repeints. 

  Ce n'est pas grand-chose, mais c'est à lui. Et un jour, il aura mieux. 

  Dehors, le froid le gifle. Il marche vers l'arrêt de bus en soufflant des nuages de vapeur. Quelques flocons virevoltent sous les réverbères. Dans six mois, se dit-il, il conduira peut-être sa propre camionnette avec « Garage Youssef » écrit sur le flanc. 

  Le bus arrive, bondé et surchauffé. Youssef se faufile jusqu'au fond et s'accroche à la barre. Par la fenêtre embuée, il regarde défiler les rues de Rosemont, ce quartier qui n'est pas vraiment le sien mais qui commence doucement à le devenir. Il pense à Thomas et à sa Pontiac, à Agnès et son manteau brodé, à tous ces voisins dont il croise l'existence sans vraiment la connaître. 


  La ville scintille sous la neige qui tombe de plus en plus dru. Youssef ferme les yeux et imagine déjà la chaleur de l'atelier, l'odeur de l'huile moteur, le ronronnement familier des outils pneumatiques. Encore une nuit. Encore un pas vers son rêve. 

  Le bus s'arrête. Youssef descend et marche vers son avenir, un shift à la fois.
`,
  502: `Le silence des livres n'est pas le silence des hommes. Cette vérité, Marguerite Dufresne l'a comprise après quarante-trois ans passés entre les rayonnages de la Bibliothèque nationale. Maintenant, à soixante-dix-huit ans, retirée dans son appartement du cinquième étage, elle découvre que le silence de la solitude a une tout autre résonance. 

  Ce matin de février, Marguerite se lève avec le soleil. C'est une habitude qui lui reste de ses années de travail, quand elle ouvrait la bibliothèque à huit heures pile. Elle prépare son thé Earl Grey dans la théière de porcelaine héritée de sa mère, puis s'installe dans son fauteuil face à la fenêtre. De là, elle voit la cour intérieure et les fenêtres des voisins qui s'éveillent peu à peu. 

  Son appartement est un sanctuaire de papier. Des bibliothèques couvrent chaque mur, du sol au plafond. Romans, poésie, philosophie, histoire – toute une vie de lecture accumulée. Sur la table basse, une pile de livres neufs attend d'être catalogués dans son système personnel, une manie qu'elle ne peut abandonner. À côté, dans un verre d'eau, une rose blanche qu'elle a achetée hier chez la petite Agnès du premier. La fleuriste lui fait toujours un prix, sachant que la pension de Marguerite ne permet pas beaucoup d'extravagances. 

  Elle ouvre le carnet où elle note ses observations quotidiennes. C'est devenu son projet depuis la retraite : documenter la vie de l'immeuble comme on documenterait un écosystème. Ce matin, elle écrit : 

  7h12 – Le jeune homme du 316, James, sort avec son sac de sport. Expression fatiguée. Probable insomnie. 

  7h23 – Madame Leclercq du 312 arrose ses plantes sur le balcon. Robe de chambre bleue. Semble sereine. 

  7h45 – Francis du 608 rentre de son shift de nuit en taxi. Démarche lourde. La fatigue des années. 

  Marguerite pose son stylo et sirote son thé. Elle pense à tous ces gens qu'elle observe sans vraiment les connaître. Parfois, elle aimerait descendre frapper à leurs portes, partager un café, échanger des histoires. Mais quelque chose la retient. La peur du rejet, peutêtre. Ou simplement l'habitude de la distance. 

  Le téléphone sonne, brisant sa rêverie. C'est sa nièce, Sophie, qui appelle de Toronto. 

  « Tante Marguerite ? Comment vas-tu ? 

  — Bien, ma chérie. Je lisais. 

  — Toujours en train de lire ! Tu devrais sortir plus, te faire des amis dans l'immeuble. » 

  Marguerite sourit tristement. Sophie ne comprend pas que les livres sont ses amis les plus fidèles. Ils ne jugent pas, ne déçoivent pas, ne partent pas. 

  Après l'appel, elle décide de descendre chercher son courrier. Dans l'escalier, elle croise le jeune Antony du 512 qui monte quatre à quatre, un sac de matériel artistique à l'épaule. Il la salue poliment mais ne s'arrête pas. Marguerite se souvient de l'époque où les gens prenaient le temps de bavarder dans les escaliers. 

  Dans le hall, elle trouve une enveloppe dans sa boîte. Pas une facture cette fois, mais une vraie lettre, écrite à la main. L'adresse de l'expéditeur lui coupe le souffle : c'est celle de Paul Létourneau, un ancien collègue de la bibliothèque qu'elle n'a pas vu depuis dix ans. 

  Elle remonte précipitamment, le cœur battant comme celui d'une adolescente. Dans son appartement, elle s'assoit et ouvre délicatement l'enveloppe. 

  <em>Chère Marguerite, 

  J'espère que cette lettre te trouvera en bonne santé. J'ai eu ton adresse par Claudine qui travaille encore à la bibliothèque. Je sais que cela fait longtemps, trop longtemps peut-être, mais je pense souvent à nos discussions sur Proust et Modiano, à nos débats passionnés sur la classification Dewey. 

  Je serai à Montréal la semaine prochaine pour une conférence sur les archives numériques. J'aimerais beaucoup te revoir, si tu le souhaites. Peut-être pourrions-nous prendre un café, comme au bon vieux temps ? 

  Avec toute mon affection, Paul </em>

  Marguerite relit la lettre trois fois. Paul. Elle se souvient de ses yeux gris derrière ses lunettes rondes, de sa passion pour les incunables, de cette façon qu'il avait de caresser la couverture des livres anciens. Il y avait eu quelque chose entre eux, jamais dit, jamais agi, mais présent comme une promesse suspendue. 

  Elle passe l'après-midi à hésiter. Répondre ou non ? Le revoir pourrait être merveilleux ou terriblement décevant. Les années ont passé, ils ont changé. Elle n'est plus la bibliothécaire élégante qu'elle était, mais une vieille dame aux cheveux blancs et aux mains tachées. 


  Le soir tombe. La rose blanche dans son verre commence à s'ouvrir davantage, libérant un parfum délicat. Marguerite la contemple et y voit soudain une métaphore : même tard dans la saison, même seule dans son verre, la fleur ose encore s'épanouir. 

  Elle prend une feuille de papier et commence à écrire : 

  <em>Cher Paul, 

  Ta lettre m'a touchée plus que tu ne peux l'imaginer... </em>

  Dehors, les lumières de l'immeuble s'allument une à une. Marguerite écrit, et pour la première fois depuis longtemps, le silence de son appartement ne lui pèse plus. Il est plein de possibilités.  Appartement 001 

  Christelle Mercier sentait l'odeur lui monter au nez. Une odeur rance, métallique, une odeur qui la pétrifiait sur la chaise de son bureau. Elle n'osait plus vraiment se retourner vers le coin du cagibi depuis cette soirée-là, elle ne voulait pas s'en souvenir, les souvenirs étaient insoutenables. Elle n'aurait pas dû, ce n'était pas à elle de faire justice en ce bas monde. Elle regrettait son geste, mais elle ne pouvait plus revenir en arrière. Elle avait fait de son mieux pour le dissimuler, mais l'odeur commençait à se sentir dans tout le rez-de-chaussée, il fallait le faire disparaître pour de bon. M. Paquette… pourquoi avait-il encore balancé son sac poubelle pestilentiel au milieu de l'entrée ?! 

  Elle passait son temps à désinfecter et frotter, c'était un tel emmerdement, pas étonnant que Mathilde se soit échappée pour réviser ailleurs, l'espace clos du cagibi lui faisait horreur. L'horreur, oui, c'est une horreur, ce Cif acheté en réduc. Sinon, elle la vivait bien sa vie. 

  « On n'est pas malheureux. 

  — Pardon ? 

  Anthony Gracier se retourna alors qu'il signait la relocation de son box de garage. 

  — Oh rien, je marmonne, si seulement les gens pouvaient être plus respectueux… 

À ces mots, il blanchit. Il l'avait vue, l'autre soir. Elle était à côté de l'arbre près du cabanon du jardin communautaire. Le trou était profond. Il ne se demandait plus pourquoi. Ce sac, elle l'avait déposé au fond. Pourquoi enterrer un sac à une heure pareille ? Il resta quelques secondes au bord du trou, avant de finalement lâcher « Il l'avait pourtant bien cherché ». Il crut défaillir. Le mal était donc dans toutes les âmes, toutes les têtes, tous les gestes. Il savait, il devait vivre, il ne fallait pas qu'elle sache qu'il avait vu. 

— Pauvre chat, quand même. 

Entendant cela, il éclata d'un rire nerveux tel qu'elle releva aussitôt la tête, l'apostrophant. 

— C'est le chat de votre voisine, je vous signale. — Désolé, Christelle. 


Elle repartit sans un mot, longeant l'immeuble avant de rentrer dans sa loge. 

Depuis ce jour, Monsieur Gracier se dit qu'elle doit sûrement le voir comme une sorte de cynique à l'humour discutable. Christelle, elle, se dit que c'est un énergumène sympathique mais quelque peu solitaire. En outre, elle caresse le doux rêve de pouvoir un jour admirer ses productions. La curiosité de ses trois enfants déteint sur elle, c'est certain qu'ils la rajeunissent, néanmoins, en tant que gardienne, elle se doit de faire preuve de retenue. 

— Mais quand même, il est bizarre, le monsieur ! 

Ambroise venait de sortir de l'appartement, regardant fixement cet artiste amusé de voir un être en pyjama pilou le menacer d'une épée en déblatérant. 

— Ambroise, j'ai bientôt terminé et ne dis pas des choses pareilles ! — Il fait de la peinture ? demanda-t-il en pointant du doigt M. Gracier couvert d'une palette de peinture dans les tons jaune orangé. 

Christelle regarda M. Gracier avec un regard empreint d'excuses, auquel celui-ci répondit en levant son doigt vers le plafond, à sa plus grande surprise. Elle ne se fit pas vraiment prier, suivant l'artiste dans les escaliers, le petit Ambroise dans les bras. S'arrêtant sur le pas de la porte qu'il venait d'ouvrir, elle regarda fixement l'encadrement de la porte, les plinthes, le papier peint, à la recherche d'une quelconque trace d'usure, ce qui lui tira un sourire, lequel s'étira lorsqu'elle posa ses yeux sur les toiles de Gracier. Des fleurs flottant à la surface de l'eau dans une crique, des pots au milieu d'un océan, des formes strictes au milieu de l'informe. 

— C'est le niveau zéro de la créativité. Mais j'en suis assez fier, c'est des heures de travail pour un travail qui restera au mur des gens pour des décennies, commenta-t-il. — Vous vous contentez de cela ? 

Elle s'avança au-devant du modèle, dans la lumière de la fenêtre, pot en terre cuite dans lequel flottaient des pétales de coquelicots. Sur la table en bois du salon séchaient des tulipes, d'autres coquelicots, et çà et là, des roses blanches. Un crève-cœur sur lequel la gardienne de dizaines d'âmes ne s'attarda pas. 

— Je voudrais faire mieux, bien sûr, dit-il en lui servant un thé noir dans une tasse de porcelaine hors d'âge. 

S'asseyant en face de lui à la table de séchage, elle le jugea du regard. Sa jeunesse d'artiste lui manquait, ce désir de donner au cubisme sa touche personnelle. Personne ne s'était intéressé à cela, le père de ses enfants non plus. La vie ne lui avait pas permis de s'y consacrer. 

— Il vous faut un nouveau point de vue. » 

Portant la tasse à ses lèvres, Ambroise endormi, elle sentit enfin qu'elle pourrait s'accorder un peu de temps profitable en dehors de ce curieux devoir de gardiennage qui la rapprochait au plus près des gens tout en dressant une barrière. 

Les visites devinrent hebdomadaires. 
`,
  616 :`Un matin d’octobre à Rosemont. Le soleil s’infiltre à peine par les rideaux défraîchis de l’appartement 118, joue à cache-cache avec les volutes de fumée stagnantes. Sur la table basse, trois canettes vides, une bouteille de gin à moitié entamée, et un cendrier débordant de cendres et de silences écrasés.

  Sur le chevalet, une toile se dresse comme un songe figé : une rose blanche, gigantesque, souffle figé au cœur du tableau mais sa blancheur, traversée par la lumière hésitante du matin, se pare de reflets colorés. Elle change, elle veille. 
  
  Roméo, la quarantaine perdue entre deux soirs, s’éveille dans un canapé-lit qui retient l’empreinte de ses dérives. Son crâne bourdonne, sa gorge râpe le silence. Il se détache du coussin avec la lenteur d’un homme qui revient de loin. Une chemise froissée sur le dos, il dérive jusqu’à la cuisine. Le café goutte. Il fouille, farfouille, exhume son carnet noir. Pas celui des croquis : l’autre. Celui des éclats.

  Des phrases volées au néant, titres d’ombres, fragments de soi. Aujourd’hui : « Tout ce qui pourrit nourrit. »

   Il a été quelqu’un, autrefois. Un nom dans une galerie de Toronto, des regards suspendus à ses toiles, des amants oubliés avant l’aube. Puis vient l’épuisement du feu. Le blanc qui avale. L’alcool qui s’installe comme un brouillard toléré. Maintenant, il habite ici. En repli. En veille.

   Le mercredi, le voisin du 708 fait parler son saxophone. Ça râle, ça grince, ça cherche une issue.

   Roméo ignore son nom, mais attend ce cri de cuivre comme une délivrance. Il s’assoit, tasse en main, face à la rose. Il ajoute une ombre. Une respiration lumineuse sur le bord d’un pétale. Il peint sans comprendre. Il peint comme on expire.

   Deux semaines passent. Puis une nuit. Il rôde dans la cour, cigarette allumée comme un phare sans mer. En face, une femme arrose ses plantes. Silencieuse. Les bras tatoués d’histoires, un foulard qui retient la nuit. Une tige de rose blanche serpente le long de son poignet. Il retient son souffle. Il remonte, gribouille dans le noir : « Elle arrose le silence. »

   Les jours se fondent. Il boit encore, mais autrement. Moins pour fuir, plus pour brouiller les contours.

   Il repeint, rature ses propres légendes. Il colle, juxtapose : des plumes, des capsules rouillées, des souvenirs sans attaches. Il compose un langage de désordre.

   Un matin, une lettre. Glissée sous la porte, comme une caresse égarée. Papier épais. Odeur d’encre et de cèdre. Quelques mots tracés à la main : « Je vois vos toiles par la fenêtre. Je ne sais pas qui vous êtes, mais ce que vous faites me touche. Continuez. » Aucune signature. Juste cette vibration anonyme, douce, inespérée. Il plie le billet, l’insère dans le carnet noir. Ce jour-là, il ne boit pas. Il peint. Longtemps. Jusqu’à la nuit. Et la rose devient lumière. Immense. Iridescente de gris, et d’ombre tendre.

   Il ne découvre jamais l’auteur des mots. Mais il rêve parfois d’une femme aux bras constellés d’encre, qui peindrait avec ses larmes et du silence. Parfois, il se surprend à guetter, à travers les rideaux, les allées et venues d’une silhouette calme du troisième étage. Une femme seule, souvent  penchée sur un livre ou une plante. Il ne connaît pas son nom. Il l’imagine brodeuse de silences, peut-être aquarelliste du dimanche, peut-être celle qui lui a écrit. Peut-être pas. Mais chaque fois qu’il aperçoit ses gestes simples : une tasse
levée, une fenêtre entrouverte. Il se dit que c’est possible.
D’être vu sans être jugé. D’être touché sans être sauvé. Et ça
lui va.`,
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

// Application de la fonction de traitement au moment de la définition des textes
const apartmentTexts = Object.keys(rawApartmentTexts).reduce((acc, key) => {
  acc[key] = processText(rawApartmentTexts[key]);
  return acc;
}, {});

const Apartmentpage = ({ handlePageNavigation, setGeneratedIdea, generatedIdea, selectedApt, apartments }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audioContext, setAudioContext] = useState(null);
  const [isLoadingIdea, setIsLoadingIdea] = useState(false);

  const currentText = apartmentTexts[selectedApt] || "";
  const hasContent = apartments[selectedApt]?.hasText;

  const speakApartmentText = useCallback(
    async (text) => {
      if (isSpeaking || !text || !audioContext) return;

      setIsSpeaking(true);

      // Retirer les balises HTML/JSX pour la lecture TTS
      // On retire <br/> et <strong>
      const cleanText = text.replace(/<br\s*\/?>/gi, " ").replace(/<\/?strong>/gi, "");

      const prompt = `Say in a smooth, calm, and informative tone: ${cleanText}`;

      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;

      const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: "Charon" }, // Voix informative et ferme
            },
          },
        },
      };

      let response;
      let retries = 0;
      const maxRetries = 3;
      const baseDelay = 1000;

      while (retries < maxRetries) {
        try {
          response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (response.ok) {
            const result = await response.json();
            const part = result.candidates?.[0]?.content?.parts?.[0];
            const audioData = part?.inlineData?.data;
            const mimeType = part?.inlineData?.mimeType;

            if (audioData && mimeType && mimeType.startsWith("audio/")) {
              const pcmData = base64ToArrayBuffer(audioData);
              const pcm16 = new Int16Array(pcmData);
              // Le taux d'échantillonnage doit être extrait ou connu. TTS Gemini utilise généralement 24000
              const sampleRate = 24000;

              const wavBlob = pcmToWav(pcm16, sampleRate);
              const audioUrl = URL.createObjectURL(wavBlob);

              const audio = new Audio(audioUrl);
              audio.onended = () => setIsSpeaking(false);
              audio.onerror = () => {
                console.error("Audio playback error.");
                setIsSpeaking(false);
              };
              audio.play();
            } else {
              console.error("No valid audio data received from TTS API.");
              setIsSpeaking(false);
            }
            break; // Sortir de la boucle si succès
          }
        } catch (error) {
          console.error(`Attempt ${retries + 1} failed:`, error);
        }
        retries++;
        if (retries < maxRetries) {
          await new Promise((resolve) => setTimeout(resolve, baseDelay * Math.pow(2, retries)));
        }
      }

      if (!response || !response.ok) {
        console.error("Failed to fetch TTS audio after multiple retries.");
        setIsSpeaking(false);
      }
    },
    [isSpeaking, audioContext]
  );

  const generateSceneIdea = useCallback(
    async (aptNumber) => {
      if (isLoadingIdea) return;

      setIsLoadingIdea(true);
      setGeneratedIdea("");

      // Le niveau dans l'immeuble peut influencer la scène
      const floor = aptNumber.length === 3 ? aptNumber.charAt(0) : 0;
      const isRDC = aptNumber === "RDC";

      const systemPrompt =
        "Agissez comme un écrivain de fiction minimaliste et atmosphérique. Votre objectif est de fournir une courte description (maximum 3 phrases) d'une scène ou d'une ambiance qui pourrait servir de point de départ pour une histoire se déroulant dans l'appartement spécifié. N'utilisez pas de guillemets. Répondez uniquement en français.";

      let userQuery = `L'appartement ${aptNumber} est vide, situé au niveau ${floor}. Générez une courte ambiance pour cet appartement.`;
      if (isRDC) {
        userQuery = `L'appartement ${aptNumber} est le Rez-de-Chaussée de cet immeuble. Générez une courte ambiance pour ce lieu (peut être un commerce ou un lieu de passage).`;
      }

      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

      const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
      };

      let response;
      let retries = 0;
      const maxRetries = 3;
      const baseDelay = 1000;

      while (retries < maxRetries) {
        try {
          response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (response.ok) {
            const result = await response.json();
            const text =
              result.candidates?.[0]?.content?.parts?.[0]?.text || "Impossible de générer une idée pour le moment.";
            setGeneratedIdea(text);
            break; // Sortir de la boucle si succès
          }
        } catch (error) {
          console.error(`Attempt ${retries + 1} failed:`, error);
        }
        retries++;
        if (retries < maxRetries) {
          await new Promise((resolve) => setTimeout(resolve, baseDelay * Math.pow(2, retries)));
        }
      }

      if (!response || !response.ok) {
        setGeneratedIdea("Erreur de connexion avec l'API. Veuillez réessayer.");
      }

      setIsLoadingIdea(false);
    },
    [isLoadingIdea]
  );

  useEffect(() => {
    if (typeof window !== "undefined" && !audioContext) {
      setAudioContext(new (window.AudioContext || window.webkitAudioContext)());
    }
  }, [audioContext]);

  const goHome = () => {
    setIsLoadingIdea(false);
    setIsSpeaking(false);
    handlePageNavigation(null);
  };

  // Utility: Converts base64 PCM audio data to a WAV Blob
  const base64ToArrayBuffer = (base64) => {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  };

  // Utility: Converts raw PCM audio data (Int16Array) into a WAV Blob
  const pcmToWav = (pcm16, sampleRate = 24000) => {
    const pcmData = pcm16.buffer;
    const numChannels = 1;
    const bitsPerSample = 16;
    const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
    const blockAlign = numChannels * (bitsPerSample / 8);

    const buffer = new ArrayBuffer(44 + pcmData.byteLength);
    const view = new DataView(buffer);

    // RIFF identifier 'RIFF'
    view.setUint32(0, 0x52494646, false);
    // file length
    view.setUint32(4, 36 + pcmData.byteLength, true);
    // RIFF type 'WAVE'
    view.setUint32(8, 0x57415645, false);
    // format chunk identifier 'fmt '
    view.setUint32(12, 0x666d7420, false);
    // format chunk length
    view.setUint32(16, 16, true);
    // sample format (raw PCM)
    view.setUint16(20, 1, true);
    // channel count
    view.setUint16(22, numChannels, true);
    // sample rate
    view.setUint32(24, sampleRate, true);
    // byte rate (SampleRate * Channels * BitsPerSample/8)
    view.setUint32(28, byteRate, true);
    // block align (Channels * BitsPerSample/8)
    view.setUint16(32, blockAlign, true);
    // bits per sample
    view.setUint16(34, bitsPerSample, true);
    // data chunk identifier 'data'
    view.setUint32(36, 0x64617461, false);
    // data chunk length
    view.setUint32(40, pcmData.byteLength, true);

    // Write the PCM data
    const pcmBytes = new Uint8Array(pcmData);
    for (let i = 0; i < pcmData.byteLength; i++) {
      view.setInt8(44 + i, pcmBytes[i]);
    }

    return new Blob([view], { type: "audio/wav" });
  };

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

        {/* Contrôles d'action basés sur le contenu (TTS ou Génération d'idée) */}
        <div>
          {hasContent ? (
            // Bouton TTS pour les histoires existantes
            <button
              className='tts-button'
              onClick={() => speakApartmentText(rawApartmentTexts[selectedApt])} // TTS utilise le texte brut pour le nettoyage
              disabled={isSpeaking}>
              {isSpeaking ? <Loader2 size={20} className='animate-spin' /> : <Volume2 size={20} />}
              {isSpeaking ? "Lecture..." : "🔊 Écouter l'Histoire"}
            </button>
          ) : (
            // Bouton Générateur d'idée pour les appartements vides
            <button onClick={() => generateSceneIdea(selectedApt)} disabled={isLoadingIdea}>
              {isLoadingIdea ? <Loader2 size={20} className='animate-spin' /> : <Wand2 size={20} />}
              {isLoadingIdea ? "Génération..." : "✨ Idée de Scène"}
            </button>
          )}
        </div>

        {/* Le conteneur qui simule le document/fenêtre */}
        <div className='apartment-window'>
          {/* Afficher l'idée générée si elle existe */}
          {generatedIdea && !hasContent && (
            <div>
              <p className='font-semibold' style={{ color: "var(--title-color)" }}>
                Idée de Scène Générée :
              </p>
              <p className='italic text-gray-700'>{generatedIdea}</p>
            </div>
          )}

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
              {/* Le message est remplacé par l'idée générée ou le message d'attente */}
              {!generatedIdea && <p>En attente de votre écriture...</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apartmentpage;