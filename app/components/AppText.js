import React from 'react'
import { Text} from 'react-native'

import defaultStyles from '../configs/styles'; 

// We can also create a heading component using this strategy 
// <Heading>My Heading</Heading>

function AppText({children, style}) {
  return (
    <Text style={[defaultStyles.text, style]}>{children}</Text>
  );
}


export default AppText; 