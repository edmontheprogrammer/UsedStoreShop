import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';



import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';


import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import { Switch } from 'react-native';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';


export default function App() {
  



  const [isNew, setIsNew] = useState(false);

  return (
     <RegisterScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
