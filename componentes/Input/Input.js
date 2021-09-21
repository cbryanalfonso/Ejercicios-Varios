import React, {Component} from 'react';
import { View, Alert, Button, TouchableOpacity , TextInput} from 'react-native';

class Input extends Component{
    render(){
        return(
            <View>
                <TextInput value={"Alfonso"}></TextInput>
            </View>
        );
    }
}

export default Input;
