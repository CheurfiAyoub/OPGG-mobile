import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, ImageBackground} from 'react-native';

export default function MyProfileScreen() {
    const navigation = useNavigation()

    return (
    <View style={styles.container} ScrollView>
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../assets/images/viego_pdp.png')} resizeMode="cover" style={styles.header}>
            <View >
                <Text style={styles.title}>Mon Profile</Text>
            </View>
            </ImageBackground>
        </View>
        <View style={{ flex: 2.5, alignItems:'center', backgroundColor: 'blue'}}>
            <TouchableOpacity style={styles.homeButton}>
                <Text style={{fontSize:30, color: 'white'}} onPress={() => navigation.navigate('Home')}>Home</Text>
            </TouchableOpacity>
        </View>
      

    </View>
            )
}
        

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  header: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    },
  title: {
    color: 'white',
    fontSize: 36,
    marginTop: 150
    },
  homeButton: {
    backgroundColor: 'rgba(16, 2, 2, 0.85)',
    borderRadius: 30,
    marginTop: 25,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
 pdp: {
    backgroundColor: 'rgba(16, 2, 2, 0.85)',
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  imgpdp: {
    width: '100%',
    height: '100%',
    borderRadius: 50,

  }

  
  });