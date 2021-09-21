import React, { Component, PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button ,Alert} from 'react-native';

class BotonPress extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            count : 0,
        };
        this.handleUp = this.handleUp.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleMenos = this.handleMenos.bind(this);
    }
    handleUp(){
        const { count : ct} = this.state;
        this.setState({count : ct + 1});
    }
    handleReset(){
        const { count : ct } = this.state;
        this.setState({count: 0});
    }
    handleMenos(){
        const { count : ct } = this.state;
        this.setState({count : ct -1 });
    }
    render(){
        const { count } = this.state;
        return (
            <View style={styles.container}>
                
                <Text style={styles.txt}>Hola, usted lleva presionando el boton {count} numero de veces</Text>
                <Button title =" Presioname" onPress={this.handleUp}></Button>       
                <Button title ="Reset" onPress={this.handleReset}></Button>    
                <Button title="Restar uno :v" onPress={this.handleMenos}></Button>     
            </View>
    
    
        );
    }
      

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'purple',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
        
    }
})

export default BotonPress;