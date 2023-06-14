import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import colors from '../configs/colors';
import defaultStyles from '../configs/styles'; 
import Screen from './Screen';

import AppText from './AppText'


function AppPicker({ icon, placeholder, ...otherProps }) {

    const [modalVisible, setModalVisible] =  useState(false); 

    return (
        <>
            <TouchableWithoutFeedback onPress={ () => setModalVisible(true)} >
                <View style={styles.container} >

                    { icon && <MaterialCommunityIcons 
                        name={icon}
                        size={20}
                        // color={defaultStyles.colors.medium}
                        style={styles.icon} />}

                        <AppText style={styles.text}>{placeholder}</AppText>

                        { icon && <MaterialCommunityIcons 
                        name="chevron-down"
                        size={20}
                        // color={defaultStyles.colors.medium}
                        />}
                </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType='slide'>
            <Screen>
                <Button title='Close' onPress={() => setModalVisible(false)}/>
            </Screen>
        </Modal>
       </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light, 
        borderRadius: 25, 
        flexDirection: "row",
        width: '100%', 
        padding: 15, 
        marginVertical: 10, 
    }, 
    icon: {
        marginRight: 10, 

    }, 
    text: {
        flex: 1, 
    },
})

export default AppPicker;