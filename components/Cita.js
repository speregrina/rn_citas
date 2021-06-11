import React from 'react';
<<<<<<< HEAD
import { Text, View, StyleSheet } from 'react-native';
=======
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
>>>>>>> a8d36093bdffa8f7f6b3e804d4bdd92a048da2b9


const Cita = ({item, eliminarPaciente}) => {

    const dialogoEliminar = id => {
        console.log('eliminando...', id);
        //return;
        eliminarPaciente(id);
    }

    return (
        <View style={styles.cita}>
<<<<<<< HEAD
            <View>
                <Text styles={styles.label}>ID: </Text>
                <Text>{item.id}</Text>  
            </View>
            <View>
                <Text styles={styles.label}>Paciente: </Text>
                <Text>{item.paciente}</Text>  
            </View>
            <View>
                <Text styles={styles.label}>Propietario: </Text>
                <Text>{item.propietario}</Text>  
            </View>
            <View>
                <Text>Sintomas: </Text>
                <Text>{item.sintomas}</Text>  
            </View>
=======
                <View>
                    <Text style={styles.label}>ID</Text>
                    <Text style={styles.texto}>{item.id}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Paciente</Text>
                    <Text style={styles.texto}>{item.paciente}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Propietario</Text>
                    <Text style={styles.texto}>{item.propietario}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Sintomas</Text>
                    <Text style={styles.texto}>{item.sintomas}</Text>
                </View>

                <View>
                    <TouchableHighlight style={styles.btnEliminar} onPress={ ()=> dialogoEliminar(item.id) }>
                        <Text style={styles.textEliminar}>Eliminar &times;</Text>
                    </TouchableHighlight>
                </View>
>>>>>>> a8d36093bdffa8f7f6b3e804d4bdd92a048da2b9
        </View>
        )
}
const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#006393',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    label:{
        color: '#FFF',
        fontWeight:'bold',
        fontSize: 18,
        marginTop: 15
    },
    texto:{
        color: '#FFF',
        fontSize: 15
    }, 
    btnEliminar: {
        paddingTop: 20,
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'red',

    },
    textEliminar: {
        color: '#FFF',
        textAlign:'center'
    }
})

const styles = StyleSheet.create({
    cita:{
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    label:{

    },
    texto: {

    }
})

export default Cita;

