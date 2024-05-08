import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, ImageBackground } from 'react-native';

export default function ChampionsScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container} ScrollView>
        <View style={{ flex: 1}} >
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize:36, marginTop: 100}}>Personnages</Text>
          </View>
        </View>
        <View style={{ flex: 1.5, alignItems:'center',}}>
            <TouchableOpacity style={styles.button}>
              <ImageBackground></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeButton}>
                <Text style={{fontSize:30, color: 'white'}} onPress={() => navigation.navigate('Home')}>Home</Text>
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
  homeButton: {
    backgroundColor: 'rgba(16, 2, 2, 0.85)',
    borderRadius: 30,
    marginTop: 25,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  button: {
    backgroundColor: 'rgba(16, 2, 2, 0.85)',
    borderRadius: 100,
    width: 80,
    height: 80,
  }
  
  });