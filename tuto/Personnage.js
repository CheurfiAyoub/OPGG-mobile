import { StyleSheet, Text } from "react-native";

const Personnage = (props) => {
    return (
     <Text style={styles.nom}>{props.name}</Text>  
    )    
}
  
const styles = StyleSheet.create({
  nom: {
    margin: 10,
    fontSize: 30,
    color: "white",
    backgroundColor: "red",
    padding: 20,
    borderRadius: 15
  }
})
export default Personnage;