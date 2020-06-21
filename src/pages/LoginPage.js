import React, { useState } from 'react'
import {SafeAreaView, Text,View, TextInput , TouchableOpacity, Alert} from 'react-native'
import styles from '../styles'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-community/async-storage';



const LoginPage = (props) => {
    const [usermail, setUserMail] = useState("")
    const [userpass, setPassword] = useState("")

    setmail = text => setUserMail(text)
    setpas = text => setPassword(text)

    const LoginUser = async () => {
        try {
            await auth().signInWithEmailAndPassword(usermail,userpass)
            props.navigation.navigate("ListPage")
            AsyncStorage.setItem('@USER_ID', auth().currentUser.uid)
        }
        catch (error) {
            console.log(error);
            Alert.alert("Myapp","Bir hata oluştu.")
        }

    }
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#d7ccc8'}}>
            <View style={{flex:1}}>
                <TextInput
                    style={styles.login.input}
                    placeholder= "E-posta adresinizi giriniz.."
                    placeholderTextColor= "white"
                    onChangeText={setmail}
                    autoCapitalize="none"></TextInput>
                <TextInput
                    style={styles.login.input}
                    placeholder= "Şifrenizi giriniz.."
                    placeholderTextColor= "white"
                    onChangeText={setpas}
                    secureTextEntry></TextInput>
                <TouchableOpacity style={styles.login.buttonContainer} onPress={LoginUser}>
                    <Text>
                        Giriş Yap
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.login.buttonContainer} onPress={()=>props.navigation.navigate("Signup")}>
                    <Text>
                        Kayıt Ol
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export {LoginPage};