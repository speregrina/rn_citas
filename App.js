/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { Text,StyleSheet, View, FlatList, TouchableHighlight } from 'react-native';
import  Cita  from './components/Cita';
import  Formulario  from './components/formulario';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const [mostrarform, setMostrarForm] =  useState (true);
  const [citas, setCitas]  = useState([
    {id: "1", paciente: "Hook", propietario:"Juan", sintomas:"No come" },
    {id: "2", paciente: "Redux", propietario:"Itzel", sintomas:"No duerme" },
    {id: "3", paciente: "Native", propietario:"Josue", sintomas:"No canta" },
    {id: "4", paciente: "Other", propietario:"Pedro", sintomas:"No hace ejercicio" }
  ]);
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const [textLista, setTextLista] = useState('Mostrar Lista');


  useEffect( ()=> {
    const obtenerCitasStorage =  async () => {
      try {
        const citasStorage = await AsyncStorage.getItem('citsa');
        console.log(citasStorage);
        if(citasStorage){
          setCitas(JSON.parse(citasStorage));
        }
      } catch (error) {
        console.log(error);
      }
    }
  },[]);

  const eliminarCitas = id => {
    //Eliminar citas del storage
    const citasFiltradas =  citas.filter( cita => cita.id !== id);
    setCitas( citasFiltradas);
    guardarCitasStorage(JSON.stringify(citasFiltradas));
  }

  const mostrarFL = () => {
    if( textLista === 'Mostrar Lista'){
      setTextLista('Agregar cita');
      setMostrarForm(false);
    }else{
      setTextLista('Mostrar Lista');
      setMostrarForm(true);
    }
  }

  //almacenar citas en el storage
  const guardarCitasStorage =  async (citasJSON) => {
    try {
      await AsyncStorage.setItem('citas',citsaJSON);
    } catch (error) {
      console.log(error);
    }
  }

    return ( 
      <View style={styles.contenedor}>
        <Text style={ styles.titulo }>Administrador citas</Text> 
        <TouchableHighlight style={styles.btnSubmit} onPress={ ()=> mostrarFL() }>
              <Text style={styles.textSubmit}>{textLista}</Text>
        </TouchableHighlight>
        <View style={styles.contenidos}>
          { mostrarform ? (
                 <Formulario
                  citas={citas}
                  setCitas={setCitas}
                  mostrarFL={mostrarFL}
                  guardarCitasStorage = {guardarCitasStorage}
                 />
          ) : (
              <>
              <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus citas':'No hay citas'}</Text>
              <FlatList
                data={citas}
                style={styles.listado}
                renderItem={ ({item}) => <Cita item={item} eliminarPaciente={eliminarCitas} /> }
                keyExtractor={ cita => cita.id }
                /> 
              </>
            )
          }
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#000',
    flex: 1,
  } , 
  titulo: {
        color: '#FFF', 
        textAlign: 'center',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        marginBottom: 20,
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Gill Sans Extrabold',
    },
    text:{
      color: '#FFF'
    },
    contenidos : {
      flex: 1,
      marginHorizontal: '2.5%',
      paddingTop:20
    },
    listado:{
      flex: 1, //tome todo el espacio del cel

    },
    btnSubmit: {
      padding: 8,
      textAlign: 'center',
      backgroundColor: 'blue',
      borderRadius: 64
  },
  textSubmit: {
      color: '#FFF',
      textAlign:'center'
  }
});

export default App;