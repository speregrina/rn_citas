import React from 'react';
import { Text, View } from 'react-native';


const Cita = ({item}) => {
    return (
        <View>
            <Text>{item.paciente}</Text>
        </View>
        )
}

export default Cita;

