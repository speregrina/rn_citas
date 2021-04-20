import React, { useState } from 'react'
import { Text, View, TextInput,StyleSheet, Button, TouchableHighlight, Alert, ScrollView } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import shortid from 'shortid';

const formulario = ({citas, setCitas,mostrarFL}) => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [paciente, guardarPaciente]   = useState('');
    const [propietario, guardarPropietario]   = useState('');
    const [telefono, guardarTelefono]   = useState('');
    const [sintomas, guardarSintomas]   = useState('');

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      //setShow(Platform.OS === 'ios');
      setDate(currentDate);
      const  horaOps = { hour: 'numeric', minute: '2-digit', hour12:false}
      if(mode == 'date')
            guardarFecha(currentDate.toLocaleString());
    else    
            guardarHora(currentDate.toLocaleString('en-US',horaOps));
    };
  
    const showMode = (currentMode) => {
        console.log('abriendo date-picker...');
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    const crearNuevaCita = () => {
        console.log('validaciones de formulario');
        if(paciente.trim() === '' || 
        propietario.trim() === '' || 
        telefono.trim() === '' || 
        fecha.trim() === '' ||
        sintomas.trim === '')
        {
            //Fallo la valdiacion
            console.log('Algo fallo...');
            mostratAlerta();
            return;
        }
        
        const cita= { paciente, propietario, telefono, fecha, hora, sintomas };
        cita.id  = shortid.generate();
        console.log(citas);
        console.log(cita);
        const nuevasCitas =  [...citas, cita];
        console.log(nuevasCitas);
        setCitas(nuevasCitas);

        //Cerrar form
        mostrarFL();
        //Resetear formulario
        guardarFecha('');
        guardarHora('');
        guardarPaciente('');
        guardarPropietario('');
        guardarTelefono('');
        guardarSintomas('');
    }

    const mostratAlerta = () => {
        Alert.alert(
            'Error', //titulo
            'Todos los campos son obligatorios', // cuerpo del mensaje
            [{
                text: 'Aceptar' //Arreglo de botones
            }]
        )
    }


   
    
        return (
            <>
            <ScrollView style={styles.formulario}>
                <View>
                    <Text style={styles.label}> Paciente: </Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText= { texto => guardarPaciente(texto) }
                    />
                </View>
                <View>
                    <Text style={styles.label}> Dueño: </Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText= { texto => guardarPropietario(texto) }
                    />
                </View>
                <View>
                    <Text style={styles.label}> Teléfono Contacto: </Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText= { texto => guardarTelefono(texto) }
                        keyboardType= 'phone-pad'
                    />
                </View>
                <View>
                    <View>
                        <Text style={styles.label}>Selecciona Fecha: {fecha}</Text>
                        <Button onPress={showDatepicker} title="Seleccionar fecha" />
                    </View>
                    <View>
                        <Text style={styles.label}>Selecciona Hora: {hora}</Text>
                        <Button onPress={showTimepicker} title="Seleccionar hora" />
                    </View>
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        locale="es-ES"
                        onChange={onChange}
                        />
                    )}
                </View>
                <View>
                    <Text style={styles.label}>Sintomas: </Text>
                    <TextInput 
                        multiline
                        style={styles.input}
                        onChangeText= { texto => guardarSintomas(texto) }
                    />
                </View>
                <View>
                    <TouchableHighlight style={styles.btnSubmit} onPress={ ()=> crearNuevaCita() }>
                        <Text style={styles.textSubmit}>Agregar</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
            
            </>
        )
}
const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        //marginHorizontal: '2.5%'
    },
    label:{
        color: '#000',
        fontWeight:'bold',
        fontSize: 18,
        marginTop: 5
    },
    input: {
        //color: '#FFF',
        //backgroundColor:'#0f0700',
        marginVertical: 5,
        height: 35,
        marginHorizontal:15,
        borderColor: 'gray',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    btnSubmit: {
        paddingTop: 20,
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'blue',
    },
    textSubmit: {
        color: '#FFF',
        textAlign:'center'
    }

})

export default formulario
