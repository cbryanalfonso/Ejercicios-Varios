import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainS from './Screens/Login/mainS/mainS'
import Login from './Screens/NLogin/Login'
import React from "react";

const Stack = createNativeStackNavigator();

export default function Navigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name = "login"
                    component={Login}
                    >
                </Stack.Screen>
                <Stack.Screen
                    name="mainS"
                    component={MainS}
                ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    );
}

//export default Navigation;