import React from "react";
import {View, Button, Text, StyleSheet} from 'react-native';

import fade from '../../../Interaccion/FadeInView'


export default function MainS ({navigator}){
    
    return(
        <View>
            <Text>
                Hola
            </Text>

        <View style={styles.buttonContainer}>
          <Button 
            //onPress={this.botonPresionado}
            onPress={()=> alert("Hola")}
            title="Presioname amigo mio"
          >


          </Button>
          <Button
            ///onPress={this.botonPresionado}
            onPress={()=> alert("Adios")}
            title="Presioname nuevamente"
            color="red"
            
          ></Button>

         

        </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 5,
      backgroundColor: '#f9c2ff',
    },
buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});