import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BotonPress from '../Props/BotonPress';

const arr = [1,2,3,4,5,6,7,7,8,9,0];

class Cuadros extends Component {
    
    render() {
        return (
            

                <ScrollView>
                    
                    {
                            arr.map((item)=>(
                                <Text style={styles.txt}>{item}</Text>
                            ))
                        }
                        
           
                   
                </ScrollView>



        );
    }
}
/*
<View style={styles.container}>
 <View style={styles.caja1}>
                        <Text style={styles.txt}>Cuadro 2</Text>
                    </View>
                    <View style={styles.caja2}>
                        <Text style={styles.txt}>Cuadro 3</Text>
                    </View>

*/
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#eaeaea",

        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 15,
    },
    subcontainer: {
        flex: 0.5,

    },
    caja: {
        flex: 1,
        backgroundColor: 'red',
        height: 30,
        alignItems: "center",
    },
    caja1: {
        flex: 1,
        backgroundColor: '#8BC34A',
        alignItems: "center",
        height: 30,
    },
    caja2: {
        flex: 1,
        backgroundColor: "#e3aa1a",
        height: 30,
    },
    txt: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlignVertical: 'center',

    }


})


export default Cuadros;