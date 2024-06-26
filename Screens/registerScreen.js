import react from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const Register = () => {
  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>Registrate</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
      />
      <TextInput style={styles.input}
        placeholder="Apellido"
      />
      <TextInput style={styles.input}
        placeholder="Username@gmail.com"
      />
      <TextInput style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
          <TextInput style={styles.input}
        placeholder="Confirmar Password"
        secureTextEntry={true}
      />
    </View>
  );
}
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'orange',
    fontSize: '40px',
    fontFamily: 'courier',
    padding: '20px',
  },
  text2: {
    color: 'orange',
    fontSize: '15px',
    fontFamily: 'courier',
    padding: '10px',
  },
  input: {
    width: '200px',
    color: 'grey',
    height: '20px',
    padding: '20px',
    margin: '5px',
    fontSize: '13px',
    borderRadius: '20px',
    borderColor: 'white',
    borderWidth: 2,
    fontFamily: 'courier',
  },
  button: {
    backgroundColor: "ligthgrey",
    padding: '10px',
    borderradius: '20px',
    width: '80px',
    margin: '15px',
    fontSize: '15px',
    borderColor: 'grey',
    borderRadius: '4px',
    color: 'black',
  },
});
