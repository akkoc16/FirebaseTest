import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from '../styles'

const SignupPage = (props) => {
    const [usermail, setUserMail] = useState("")
    const [userpass, setPassword] = useState("")
    const [userpassRep, setPasswordRep] = useState("")


    setMail = text => setUserMail(text)

    setPass = text => setPassword(text)

    setPassRep = text => setPasswordRep(text)

    const signUser = async () => {
        if(userpass == userpassRep) {
            try {
                await auth().createUserWithEmailAndPassword(usermail,userpass)
                Alert.alert("MyApp", "Hesap oluşturuldu..")
                props.navigation.goBack()
            }
            catch (error) {
                Alert.alert("MyApp", errorResolve(error.code))
            }
        }
        else 
            Alert.alert("MyApp", "Şifreler eşleşmedi..")
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#d7ccc8' }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>

                <TextInput
                    style={styles.login.input}
                    placeholder="E-posta adresinizi giriniz.."
                    placeholderTextColor="white"
                    onChangeText={setMail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.login.input}
                    placeholder="Şifrenizi giriniz.."
                    placeholderTextColor="white"
                    onChangeText={setPass}
                    secureTextEntry
                />

                <TextInput
                    style={styles.login.input}
                    placeholder="Şifrenizi tekrar giriniz.."
                    placeholderTextColor="white"
                    onChangeText={setPassRep}
                    secureTextEntry
                />

                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity style={styles.login.buttonContainer} onPress={signUser}>
                        <Text>Kayıt Ol</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.login.buttonContainer} onPress={()=>props.navigation.navigate("Login")}>
                        <Text>Vazgeç</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export { SignupPage };