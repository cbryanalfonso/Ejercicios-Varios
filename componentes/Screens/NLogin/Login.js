import React from "react";
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from './styles';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>

            </View>
            <View style={styles.subcontainer}>
               
                <Button
                    title="Iniciar sesión"
                    onPress={() => navigation.navigate('mainS')}

                >
                    Picame</Button>
                   
            </View>
           
        </View>
    );
}