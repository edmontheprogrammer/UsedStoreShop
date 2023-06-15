import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';



import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';


import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import { Switch } from 'react-native';
import AppPicker from './app/components/AppPicker';


const categories = [
  { label: "Furniture", value: 1 }, 
  { label: "Clothing", value: 2 }, 
  { label: "Cameras", value: 3 }, 
]; 

export default function App() {
  
  const [category, setCategory] = useState(categories[0]); 


  const [isNew, setIsNew] = useState(false);

  return (
      <Screen>
          <AppPicker 
            selectedItem={category}
            onSelectItem={item => setCategory(item)}
          items={categories}  icon="apps" placeholder="Category" />
          <AppTextInput icon="email" placeholder="Email" /> 
      </Screen>
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
