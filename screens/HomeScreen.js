import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function HomeScreen() {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={{ flex: 1}}>
        <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover" style={styles.header}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.title}>OPGG-Mobile</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 3, alignItems:'center'}}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Randomizer')}>
          <Text style={{fontSize:30, color: 'white'}}>Random</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{fontSize:30, color: 'white'}}>Mes builds</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{fontSize:30, color: 'white'}}>Classement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{fontSize:30, color: 'white'}}>Personnages</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#E71FDF',
    fontSize: 36
  },
  button: {
    backgroundColor: 'rgba(16, 2, 2, 0.85)',
    borderRadius: 30,
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 50,

  }


// 
// import { Button, View } from "react-native";

// const Menu = () => {
//     const router = useRouter()
//     return (
//         <View style={{flex: 1, backgroundColor:"lightgray", justifyContent: "space-around", flexDirection:"row"}}>
//             <Button
//                 onPress={()=>router.push('/profil')}
//                 title="Profil"
//                 accessibilityLabel="Profil"
//             />
//             <Button
//                 onPress={()=>router.push('/messages')}
//                 title="Message"
//                 accessibilityLabel="Learn more about this purple button"
//             />
//             <Button
//                 onPress={()=>router.push('/missions')}
//                 title="Missions"
//                 accessibilityLabel="Learn more about this purple button"
//             />
//         </View>
//     );

// }

// export default Menu;



});
