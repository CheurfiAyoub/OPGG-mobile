import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function RandomizerScreen() {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={{ flex: 1}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize:36, marginTop: 100}}>Randomizer</Text>
          </View>
        </View>
        <View style={{ flex: 1.5, alignItems:'center',}}>
            <TouchableOpacity style={styles.button} >
                <Text style={{fontSize:30, color: 'white'}}>Items</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{fontSize:30, color: 'white'}}>Runes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{fontSize:30, color: 'white'}}>Champions</Text>
            </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems:'center',}}>  
            <TouchableOpacity style={styles.button}>
                <Text style={{fontSize:30, color: 'white'}}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
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
  button: {
    backgroundColor: 'rgba(16, 2, 2, 0.85)',
    borderRadius: 30,
    marginTop: 25,
    paddingVertical: 10,
    paddingHorizontal: 50,

    }
  
  });