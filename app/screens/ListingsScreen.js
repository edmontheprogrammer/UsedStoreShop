import React from 'react';
import { FlatList, StyleSheet } from 'react-native';


import Screen from '../components/Screen';
import Card from '../components/Card'; 
import colors from '../configs/colors'

const listings = [
    {
        id: 1, 
        title: 'Sony camera for sale', 
        price: 55, 
        image: require('../assets/sony_camera.jpg')
    },
    {
        id: 2, 
        title: 'Record player ... enjoy classic music', 
        price: 83, 
        image: require('../assets/record_player.jpg')
    },
    {
        id: 3, 
        title: 'Used car. Still works. Need to sell because I am moving back to Europe', 
        price: 5000, 
        image: require('../assets/car.jpg')
    }
];

function ListingsScreen(props) {
    return (
       <Screen  style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => 
                <Card
                    title={item.title}
                    subTitle={"$" + item.price}
                    image={item.image}
                 />
                }
             />
       </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;