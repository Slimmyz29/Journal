content_page1 = [
    `<h3><strong>Bumringhton Azrael</strong></h3><img src="public/img/Apparence.jpg" style="width: auto;height: 75%;" alt="">`,
    `
    <h3><strong>10 Mars XXX</strong></h3>
        <p>Aujourd’hui mère m’as offert ce carnet, je suis très heureux, depuis que j’ai appris à écrire j’ai toujours souhaité obtenir de quoi m'exprimer, et de cette façon je pense pouvoir m'exprimer</p> 
    <h3><strong>11 Mars XXX</strong></h3>
        <p>Mince, j'étais si excité que j’ai oublié de me présenter je suis Konrad Gessner, j’ai 8 ans, je souhaite devenir un soldat de l’humanité pour protéger ma mère, elle m’as élevé seul et travaille dur tous les jours pour pouvoir subvenir a nos besoin, la vie a Utopia n’est pas simple et très cher, je me demande d’ailleurs pourquoi elle veut rester ici dans cette maison miteuse, un amis m’as dit que pour le même prix je pouvais avoir une grande maison a Shiganshina, mais peut importe je suis heureux actuellement même si je n’ai pas vraiment beaucoup d’amis, la majorité ici son riche et ne souhaite pas parler avec moi, apparemment une fille m’as dit que son père refusait qu’elle parle a un fils de catin, je ne sais pas vraiment ce que sa signifie et ma mère me dit d’ignorer ce genre d’insulte. </p> 
        <button onclick="PageSuivante(1)">Page Précedente</button></div>
    `,
    `
    <p>Apres etre devenue le major de ma promo je suis rentrer dans le BDE et le CPT ma offert de la viande!Vous vous rendez compte de la VIANDE, ça doit faire au moins 100 siècle que je n’en es pas manger, je suis vraiment heureux, je ne dis pas que la soupe et le pain ne me satisfait pas, c’est juste que manger de la nourriture plus cher c’est souvent meilleurs.</p>
    <h3><strong>11 Février XXX</strong></h3>
    <p>
    Aujourd’hui j’ai 16 ans, ma situation n’as pas réellement changé en 3 ans ça me fait d’ailleurs bizarre de reprendre ce livre, plus jeunes j'étais assez spéciale, bon je vais vous faire un résumé de ses 3 ans. J’ai appris avec le temps qu’elle était le travail de ma mère, je continue à feindre la vérité, ma mère reste persuadée que je ne sais pas. Son métier est simple et m’as permis de comprendre beaucoup de chose concernant ma famille, ma mère passe du temps en compagnie de riche noble et échange d’argent, c’est d’ailleurs surement pour cette raison que ma mère a décidé de s’installer à Utopia, terre remplie de riche noble, tous capable de payer des centaines et des milliers de pièce pour quelque heure en sa compagnie. J’ai également gagner en maturité durant ses 3 ans le monde est cruel et je ne suis plus aussi naïf qu’avant 
    </p>
    <button onclick="PageSuivante(2)">Page Précedente</button></div>
    `,
    `
    `,
];
content_page2 = [
    `<h3><strong>Identité</strong></h3><br><p>Nom: Burminghton</p><p>Prenom: Azrael</p><br><p>Lieux de Naissance: Shiganshina</p><p>Date de Naissance: 29 Decembre XXX</p><p>Age: 21 ans</p><br><p>Numéro D'identité: 4929 1049 6131 4085</p><p>Nombre de frère et soeurs: Fils Unique</p><br><p>Lieux de Résidence: Shiganshina</p><p>Evenement Notable:</p><dd> - N/A</dd><img style="width: auto; height: 30%;" src="public/img/Tampon-BS.jpg" alt=""><br><div class="flex-box"><button onclick="PageSuivante(2)">Page Suivante</button></div>`,
    `
    <h3><strong>13 Février XXX</strong></h3>
    <p> Aujourd’hui,je suis partit en entrainement avec le BDE,nous somme monter dans les hauteur du camps d'entrainement et nous nous somme entrainer a l'épée,mais ne vous inquitez pas le petit Azrael n'est plus le meme je suis devenue bien plus fort qu'avant j'ai d'ailleur battut Werner en combat.</p>
    `,
];

function PageSuivante(nb) {
    document.getElementById("page1").innerHTML = content_page1[nb - 1];
    document.getElementById("page2").innerHTML = content_page2[nb - 1];
};

setTimeout(function() {
    PageSuivante(1);
}, 10);
