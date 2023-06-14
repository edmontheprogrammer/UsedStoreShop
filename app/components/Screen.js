import React from "react";
import { Constants } from "expo-constants";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";



function Screen({children, style}) {
    return <SafeAreaView style={[styles.screen, style]} >
            {children}

          </SafeAreaView> ;
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 25,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
        flex: 1, 
    }
})

export default Screen;