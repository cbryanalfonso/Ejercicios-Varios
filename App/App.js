import React, {Component} from  'react';
import {TouchableOpacity, StyleSheet, TextInput, View, Text, Alert, Button} from 'react-native'

export default class App extends Component{
    render(){
        return(
            <TouchableOpacity
            activeOpacity={1.0}
            style={styles.container}
            >
                <View style={styles.inputBox}>
                    <TextInput style={styles.input}
                    placeholder={"Nombre del usuario"}
                    underlineColorAndroid={'transparent'}
                    placeholderTextColor={"#ccc"}
                    autoCapitalize='none'
                    >

                    </TextInput>

                </View>
                <View style={styles.inputBox}>
                    <TextInput style={styles.input}
                    placeholder={"Contraseña"}
                    underlineColorAndroid={'transparent'}
                    placeholderTextColor={"#ccc"}
                    autoCapitalize='none'
                    secureTextEntry={true}
                    >

                    </TextInput>

                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btText}> Iniciar sesión </Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btText}> Registrarse </Text>

                </TouchableOpacity>

            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    input: {
        width: 200,
        height: 40,
        fontSize: 20,
        color: '#fff',// El texto ingresado en el cuadro de entrada es blanco
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#66f',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});