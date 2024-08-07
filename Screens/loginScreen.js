import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,} from 'react-native';

const Login= () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>BIENVENIDO</Text>
            <Text style={styles.text}>Login</Text>
            <Text style={styles.text2}>Ingrese su cuenta:</Text>
            <TextInput
                style={styles.input}
                placeholder="example@gmail.com"
            />

            <TextInput style={styles.input}
                placeholder="password"
                secureTextEntry={true}
            />
            <Text style={styles.text3}>¿No tienes cuenta? Ingresa a Registros</Text>
        </View>
    
    );
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'orange',
        fontSize: 40,
        margin: 5,
    },
    text1: {
        color: 'orange',
        fontSize: 40,
        padding: 45,
    },
    text2: {
        color: 'orange',
        fontSize: 18,
        margin: 10,
    },
    text3: {
        color: 'orange',
        fontSize: 18,
        width: 300,
    },
    input: {
        width: 200,
        color: 'grey',
        height: 20,
        padding: 20,
        margin: 15,
        fontSize: 13,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 2,
    },
    buttonContainer: {
        backgroundColor: "black",
        padding: '15px',
        borderradius: '5',
        width: '250px',
        margin: '15px',
        fontSize: '15px',
        borderColor: 'white',
        borderRadius: '20px',
        color: 'grey',
    },
});
