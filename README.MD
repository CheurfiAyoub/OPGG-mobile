  {Pour appeler un objet il faut la mettre ente acollade}
  
  const player = {
    pseudo: "Ayoub",
    rank: "silver",
    age: 19
  }
  <Text>Hello {player.pseudo}</Text>

   Permet d'initialiser plusieurs propriétées et de les appelées avec {objet.propriétée}
_____________

const Compteur = () => {
    const [compteur, setCompteur] = useState(0)}

Fonction fléchées
    const [valeur, permet de changer la valeur]
                setCompteur(compteur + 1)

    useState -> sert à reactualiser un élément directement lorsque sa valeur change
    (un hook)
_________________________________________________________________________________

composant : <Texte>
variable : chaine de caractère et nombre
objet : const player
accéder aux propriétées d'un objet
JSX : du Javascript à l'intérieur du HTML 
Création de mon propre composant
props de composants
styling inline
le hook useState

