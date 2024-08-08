import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
  <View>
  <Text style={styles.logo}>CTN</Text>
  <View style={styles.cont}>
    <Text style={styles.input2}>Ingrese sus datos para registrarse</Text>
    <Text style={styles.textos}>Nombre completo :</Text>
    <TextInput style={styles.inputs}/>
    <Text style={styles.textos}>Correo :</Text>
    <TextInput style= {styles.inputs}/>
    <Text style={styles.textos}>Contraseña :</Text>
    <TextInput style={styles.inputs} secureTextEntry={true}/>
    <Text style={styles.textos}>Confirmar contraseña :</Text>
    <TextInput style={styles.inputs}secureTextEntry={true}/>
  </View>
    <Button
        color="#384358"
         style={styles.btn}
        title='crear cuenta'
        onPress={ () =>
            navigation.navigate('Principal')
        }
        />
  </View>
  );
}
export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10152f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont :{
    backgroundColor: 'grey',
    padding: 10,
  },
  logo: {
    fontSize: 80,
    marginLeft: 570,
    margin: 8,
  },
  inputs: {
    marginLeft: 520,
    padding: 13,
    marginTop: 8,
    width: 275,
    fontSize: 10,
    height: 10,
  },
  btn: {
    marginLeft: 595,
    padding: 8,
    margin: 10,
    width: 200,
    fontSize: 20,
  },
  input2: {
    fontSize: 30,
    marginLeft: 555,
    width: 270,
    marginBottom: 15,
  },
  textos: {
    marginLeft: 520,
    margin: 3,
    fontSize: 18,
  },
});
