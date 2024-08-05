import react from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';

const Register = () => {
  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>CTN</Text>
      <Divider style={styles.divider}/>
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
  text: {
    color: 'white',
    fontSize: 65,
    backgroundColor: '#384358',
    width: 2000,
    padding: 35,
    top: -195,
    textAlign: 'center',
  },
  divider: {
    Color: '#8d0c1b',
  },
});
