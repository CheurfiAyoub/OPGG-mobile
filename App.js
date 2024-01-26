import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Compteur from './Compteur';
import Personnage from './Personnage';


export default function App() {
  const player = {
    pseudo: "Ayoub",
    rank: "silver",
    age: 19
  }
  

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize:20, color:"blue"}}>Un petit pas pour l'homme, un grand pas pour le jeux vidéo!</Text>
      <Text>Hello {player.pseudo}</Text>
      <Compteur/>
      <Personnage name="Rammus" />
      <Personnage name="Olaf"/>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
