import React from 'react';

import { Constants } from 'expo-constants';
import { StyleSheet, SafeAreaView } from 'react-native';

import { StatusBar } from 'expo-status-bar';

function Screen({children}) {
    return (
        <SafeAreaView style={styles.screen}>{children}         
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android', 
        backgroundColor: 'yellow',
        flex: 1,  
    }, 
})

export default Screen;