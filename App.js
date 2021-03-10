/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Text,StyleSheet, View, FlatList } from 'react-native';
import  Cita  from './components/Cita';

const App = () => {

  const [citas, setCitas]  = useState([
    {id: "1", paciente: "Hook", propietario:"Juan", sintomas:"No come" },
    {id: "2", paciente: "Redux", propietario:"Itzel", sintomas:"No duerme" },
    {id: "3", paciente: "Native", propietario:"Josue", sintomas:"No canta" },
    {id: "4", paciente: "Other", propietario:"Pedro", sintomas:"No hace ejercicio" }
  ]);
  const [value, onChangeText] = React.useState('Useless Placeholder');

    return ( 
      <View style={styles.contenedor}>
        <Text style={ styles.titulo }>Administrador citas</Text> 
        
          <FlatList
              data={citas}
              renderItem={ ({item}) => <Cita item={item} /> }
              keyExtractor={ cita => cita.id }
              />

        </View>
    );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#CCC',
    flex: 1
  } , 
  titulo: {
        color: '#FFF', 
        textAlign: 'center',
        marginTop: 40,
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Gill Sans Extrabold',
    },
    text:{
      color: '#FFF'
    }
});

export default App;