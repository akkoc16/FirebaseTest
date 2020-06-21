import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList, TextInput, Button } from 'react-native'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from '../styles';
import AsyncStorage from '@react-native-community/async-storage';


const ListPage = (props) => {
    const user = auth().currentUser

    const [data, setData] = useState("")
    const [list, setList] = useState([])

    useEffect(() => {
        database()
            .ref(`/${user.uid}/`)
            .once('value')
            .then(response => {
                if (response.val() != null) {
                    let responseList = Object.values(response.val());
                    setList(responseList);
                }
            })
    }, [])

    const sendData = () => {
        let newArray = [...list]
        newArray.push(data)
        setList(newArray)

        database().ref(`/${user.uid}/`).push(data)
    }

    const signOut = () => {
        auth().signOut()
        AsyncStorage.removeItem('@USER_ID')
        props.navigation.navigate("Login")
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold', margin: 5 }}>Kayıtlarım</Text>
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={list}
                    renderItem={({ item }) => <Text style={styles.list.item}>{item}</Text>}
                />

                <View>
                    <TextInput
                        style={styles.list.input}
                        onChangeText={(text) => setData(text)}
                    />
                    <Button
                        title="Gönder"
                        onPress={sendData}
                        color = "purple"
                    />
                    <Button
                        title="Çıkış Yap"
                        onPress={signOut}
                        color = "pink"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export { ListPage };