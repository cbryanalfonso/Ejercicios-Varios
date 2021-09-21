
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

const Button =({ text , onPresss}) => {
   return(
    <TouchableOpacity 
    onPress={onPresss}
    style={{
        backgroundColor: "red",
        alignSelf: 'center',
        marginHorizontal: 10,
        marginVertical: 25,
        paddingHorizontal: 7,
        paddingVertical: 10,
        
    }   
    }
    >
        <Text style={{color:'white'}}>{text}</Text>
    </TouchableOpacity>
   );
}


export default class Newboton extends Component{
    render(){
        return(
            <>
                <Button text="Hola perra" onPresss={()=>Alert.alert('adios perra')}></Button>
                <Button text="Hola perrita" onPresss={()=>Alert.alert('adios perrita')}></Button>
                </>
        );
    }
}