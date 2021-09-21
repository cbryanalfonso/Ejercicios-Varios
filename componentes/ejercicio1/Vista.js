import React, { Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Vista extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cuadros}>
                    <Text>Hola mundo</Text>
                </View>
                <View style={styles.cuadros2}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        height: 100,
        //backgroundColor: 'red',
    },
    cuadros: {
        flex: 0.2,
        height: 100,

       
        backgroundColor: 'blue',
    },
    cuadros2: {
        flex: 0.3,
        height: 100,
        backgroundColor: 'yellow',
    }
});