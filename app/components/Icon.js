import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

function Icon({
    name,
    size = 40, 
    backgroundColor = "#000",
    iconColor = "#fff"
}) {
    return (
        <View style={{
            width: size, 
            height: size, 
            borderRadius: size / 2, 
            // Note 1: backgroundColor: backgroundColor is setting the prop
            // "backgroundColor" to the "backgroundColor" variable declared above 
            backgroundColor : backgroundColor, 
            justifyContent: 'center', 
            alignItems: 'center', 
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />

        </View>
    );
}

export default Icon;