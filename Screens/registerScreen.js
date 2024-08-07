import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';


const Register = () => {
  return (
  <View>
    <Text style={styles.logo}>CTN</Text>
    <Text style={styles.inputs}>Ingrese sus datos para registrarse</Text>
    <TextInput style={styles.inputs} placeholder="Nombre completo:"/>
    <TextInput style= {styles.inputs}placeholder="example@gmail.com:"/>
    <TextInput style={styles.inputs} placeholder="password:" secureTextEntry={true}/>
    <TextInput style={styles.inputs}placeholder="confirm password:"secureTextEntry={true}/>
    <Text style={styles.boton}>Crear cuenta</Text>
  </View>
  );
}
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10152f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 100,
    marginLeft: 570,
  },
  inputs: {
    marginLeft: 570,
    padding: 13,
    marginTop: 8,
    width: 200,
    fontSize: 20,
    borderColor: 'black',
  },
  boton: {
    marginLeft: 595,
    padding: 8,
    marginTop: 8,
    width: 200,
    fontSize: 20,
  },
});
