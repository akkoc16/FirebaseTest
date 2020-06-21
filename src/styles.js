import { StyleSheet } from 'react-native'

const styles = {
    login: StyleSheet.create({
        input: {
            color: 'white',
            margin: 5,
            marginVertical: 10,
            borderRadius: 5,
            padding: 10,
            backgroundColor: '#bdbdbd'
        },
        buttonContainer: {
            padding: 10,
            margin: 5,
            borderRadius: 5,
            alignItems: 'center',
            backgroundColor: '#3ca59d',
        }
    }),
    list: StyleSheet.create({
        input: {
            borderRadius: 5,
            padding: 5,
            margin: 5,
            backgroundColor: '#bdbdbd'
        },
        item: {
            backgroundColor: '#eceff1',
            padding: 10,
            margin: 10,
            fontWeight: 'bold',
            fontSize: 15
        }
    })
}

export default styles