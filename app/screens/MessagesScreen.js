import React, { useState } from 'react';
import { 
        FlatList, 
        renderItem, 
        Image, 
        SafeAreaView, 
        StyleSheet,
        Platform, 
        StatusBar, 
        View
      } from 'react-native';

import { Constants } from 'expo-constants';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1, 
        title: 'Edmon T1', 
        description: 'Post 1 description D1',
        image: require('../assets/edmon_whie_shirt_photo.jpg'),
        
    }, 
    {
        id: 2, 
        title: 'Edmon T2', 
        description: 'Post 2 description D2',
        image: require('../assets/edmon_whie_shirt_photo.jpg'),
    },
]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);


    const handleDelete = message => {
        // Delete the message from messages 
        // Call the server 
        setMessages(messages.filter(m => m.id !== message.id)); 
    }

    return (
        <SafeAreaView style={styles.screen}>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => 
                <ListItem 
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("Message selected", item)}
                    renderRightActions={ () =>  
                     <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                />}   

                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2, 
                            title: 'Edmon T2', 
                            description: 'Post 2 description D2',
                            image: require('../assets/edmon_whie_shirt_photo.jpg'),
                        },
                    ])
                }}
                />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
        backgroundColor: 'yellow',
        flex: 1, 
    }
})

export default MessagesScreen;