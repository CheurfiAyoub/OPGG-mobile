# Tuto ReactNative routing

1.  Pour créer de nouveaux écrans/pages ajouter un fichier **[nom_du_fichier].js** dans le dossier screens

    Ex:

        export default function Page1Screen() {
            return (
                <>
                    <Text>Page1 screen</Text>
                </>
            )
        }

2.  Puis ajouter dans le fichier App.js une balise Stack.Screen

    Ex :

        <Stack.Screen name="Page1" component={Page1Screen} />







<!-- ___________________________________________________
COURS - RAPPEL
___________________________________________________
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
 -->
