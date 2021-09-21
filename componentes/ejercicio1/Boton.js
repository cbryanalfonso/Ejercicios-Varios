import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button ,Alert} from 'react-native';

export default class Boton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Left button"
                    color="#841584"
                    onPress={() => Alert.alert('Left button pressed')}
                />
                <TouchableOpacity
                    title="Soy un boton"
                    color="#841584"
                    onPress={() => Alert.alert('Hola perra')}
                ></TouchableOpacity>
            
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
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