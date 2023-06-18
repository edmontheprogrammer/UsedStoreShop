import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from '../AppText';

// this is creating a custom ErrorMessage that we can display to the user in the 
// "LoginScreen" component
function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null; 

    return (
        <AppText style={styles.error}>
                {error}
        </AppText>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red', 
    }
})

export default ErrorMessage;
