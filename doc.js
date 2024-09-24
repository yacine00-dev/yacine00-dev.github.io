function mdp(event) {
    // Empêcher le formulaire de recharger la page
    event.preventDefault();

    // Récupérer la valeur saisie dans le champ texte
    let reponse = document.getElementById('texxt').value;

    // Vérification de la réponse correcte
    if (reponse === 'titam09/03/2023') {
        // Afficher un message de succès
        document.getElementById('message').innerHTML = "Bonne réponse, surprise déverrouillée !";

        // Ajouter un lien en dessous du message
        let lien = document.createElement("a");
        lien.href = "https://youtu.be/R0HxIO_ZsBc?feature=shared"; // URL de la surprise
        lien.textContent = "Clique ici pour découvrir la surprise !";
        lien.target = "_blank"; // Ouvre le lien dans un nouvel onglet

        // Ajouter le lien sous le message
        document.getElementById('message').appendChild(document.createElement("br")); // Saut de ligne
        document.getElementById('message').appendChild(lien);
    } else {
        // Message en cas de mauvaise réponse
        document.getElementById('message').innerHTML = "Réponse incorrecte, réessaye.";
    }

    // Affichage dans la console (facultatif)
    console.log(reponse);
}
