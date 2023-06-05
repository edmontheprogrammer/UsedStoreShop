import React from 'react'
import { Text} from 'react-native'


import styles from './styles';

// We can also create a heading component using this strategy 
// <Heading>My Heading</Heading>

function AppText({children}) {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}


export default AppText; 