
import React, { Component, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Navigator from './componentes/Navigator'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, Alert, ScrollView, Image, TextInput }
  from 'react-native';


//const App = () => {
//function App () {
 /* function App(){
    return (
        <Navigator>
  
        </Navigator>
  
    );
  }*/
  
class App extends Component {
  state = {
    estatura: '',
    peso: '',
    imc: '',
    imcResultado: '',
    factorial: '',
  }

  handleestatura = (text) => {
    this.setState({ estatura: text })
  }
  handlepeso = (text) => {
    this.setState({ peso: text })
  }




  calculate = (estatura, peso) => {

    var result = (parseFloat(peso) * 10000) / (parseFloat(estatura) * parseFloat(estatura));
    result = result.toFixed(2);
    this.setState({ imc: result })
    if (result < 18.5) {
      this.setState({ imcResultado: 'Bajo de peso' })
    }
    else if (result >= 18.5 && result < 25) {
      this.setState({ imcResultado: 'Peso normal' })
    }
    else if (result >= 25 && result < 30) {
      this.setState({ imcResultado: 'Sobrepeso' })
    }
    else if (result >= 30) {
      this.setState({ imcResultado: 'Obeso' })
    }
    else {
      alert('Incorrect Input!');
      this.setState({ imcResultado: '' })
    }
  }
  handleFactorial = (text) => {
    this.setState({ factorial: text })
  }
  handleResultado = (factorial) => {
    var fac = (parseInt(factorial));
    var i = 0;
    var i;
    var resul = 0;
    resul = fac * (fac - 1);
    for (i = fac - 2; i > 1; i--) {
      resul = resul * i;
    }

    this.setState({ factorial : resul })

  }

  botonPresionado(){
    alert("Haz presionado el boton amigo mio. ");
  }

  render() {
    

    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Ingrese su peso en kg de favor: </Text>
        <TextInput style={styles.input}
          placeholder="86"
          keyboardType="numeric"
          onChangeText={(text)=>setName(text)}
          onChangeText = {this.handlepeso}
         // onChangeText={this.handleFactorial}
        >


        </TextInput>
        <Text style={styles.txt}>Ingrese su estatura en cm: </Text>
        <TextInput
          style={styles.input}
          placeholder="167"
          keyboardType="numeric"
          onChangeText={(text)=>setName(text)}
          onChangeText={this.handleestatura}
        >

        </TextInput>

        <Button title="Calcular"
        onPress={()=>this.calculate(this.state.estatura, this.state.peso)}

        ></Button>
        <Text style={styles.output}>{this.state.imc}</Text>
        <Text style={styles.resultText}>{this.state.imcResultado}</Text>

    <Text style={styles.txt}>Ingrese el número del número que desea el factorial: </Text>
        <TextInput style={styles.input}
          placeholder="5"
          keyboardType="numeric"
          onChangeText={(text)=>setName(text)}
          onChangeText={this.handleFactorial}
        />

        <Button title="Calcular factorial"
        onPress={()=>this.handleResultado(this.state.factorial)}
        ></Button>

        
        <Text style={styles.output}>{this.state.factorial}</Text>
        
        <View style={styles.buttonContainer}>
          <Button 
            onPress={this.botonPresionado}
            title="Presioname amigo mio"
          >


          </Button>
          <Button
            onPress={this.botonPresionado}
            title="Presioname nuevamente"
            color="red"
            
          ></Button>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: '#f9c2ff',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  logo: {
    width: 400,
    height: 400,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    //flex: 1,
  },
  resultText: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    color: 'blue'
  },
  output: {
    textAlign: "center",
    fontSize: 30,
  },
  txt: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'justify'


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

//export default App;
/*import React, { Component, useState } from 'react';
import Vista from './componentes/ejercicio1/Vista'
import Boton from './componentes/ejercicio1/Boton'
import Newboton from './componentes/Boton/Newboton'
import BotonPress from './componentes/Props/BotonPress';
import Cuadros from './componentes/Sexto/Cuadros';
import Inc from './componentes/Input/Input';
import { View, Alert, Button, TouchableOpacity, SafeAreaView, TextInput, StyleSheet, Text } from 'react-native';

function App () {

  //render() {
    const [name , setName] = useState("");
    return (

      <SafeAreaView style={styles.container}>
        <Text style={styles.txt}>
          Ingrese su nombre
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setName(text)}
        />

        <Button title=" Presioname" onPress={()=>Alert.alert('Hola ',name)}></Button>


      </SafeAreaView>

    );
 // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    //flex: 1,
  },
  txt: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center'

  },
});
*/
export default App;


