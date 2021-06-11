import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const Cita = ({item}) => {
    return (
        <View style={styles.cita}>
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
        </View>
        )
}

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

