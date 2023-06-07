import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';



import ListItem from '../components/ListItem';
import colors from '../configs/colors';
import Icon from '../components/Icon';


const menuItems = [
   {
        title: "My Listings", 
        icon: {
            name: "format-list-bulleted", 
            backgroundColor: colors.primary
        }
   }, 
   {
    title: "My Messages", 
    icon: {
        name: "email", 
        backgroundColor: colors.secondary
    }
}
]

function AccountScreen(props) {
    return (
        <SafeAreaView style={styles.ContainerForSafeAreaView}>
        <View  style={styles.container}>
            <ListItem 
                title="Edmon Sebit"
                subTitle="MyEmail@gmail.com"
                image={require('../assets/edmon_whie_shirt_photo.jpg')}
            />
        </View>
        <View  style={styles.container}>
            <FlatList 
                data={menuItems}
                keyExtractor={menuItem => menuItem.title}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        ImageComponent={
                            <Icon  name={item.icon.name} 
                            backgroundColor={item.icon.backgroundColor} />
                        }
                     />
                 }
            />
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    ContainerForSafeAreaView: {
        backgroundColor: colors.light, 
    },
    container: {
        marginVertical: 20,
      backgroundColor: '#fff', 
    },
  });
  

export default AccountScreen;