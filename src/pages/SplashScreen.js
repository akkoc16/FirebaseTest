import React, { useEffect } from 'react'
import {SafeAreaView,Text,View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const SplashScreen = (props) => {
    useEffect(()=> {
        AsyncStorage.getItem('@USER_ID')
            .then(res => {
                if (res == null)
                    props.navigation.navigate("Login")
                else
                    props.navigation.navigate("ListPage")
            })
    }, []) 

    return (
        <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 50, fontWeight: 'bold'}}>
                My app!!
            </Text>
        </SafeAreaView>
    )
}
export {SplashScreen};