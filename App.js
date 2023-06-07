
import { StyleSheet, Text, View } from 'react-native';

import MessagesScreen from './app/screens/MessagesScreen';
import { SafeAreaView } from 'react-native';

import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';

export default function App() {
  return (
    <SafeAreaView >
      <ListItem 
          title="My title" 
          ImageComponent={<Icon name="email"/>} />

    </SafeAreaView>
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
