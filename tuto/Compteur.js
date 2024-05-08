import { useState } from "react";
import { Button, Text, View } from "react-native";

const Compteur = () => {
    const [compteur, setCompteur] = useState(0)

    return (
        <View>
            <Text>{compteur}</Text>
            <Button title='Increase' onPress={() => setCompteur(compteur + 1)}></Button>
        </View>
    );
}

export default Compteur;