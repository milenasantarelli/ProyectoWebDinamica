import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native';
import { Divider } from 'react-native-elements';



const AccesoperScreen= () => {
    return (
        <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.Logo}>CTN</Text>
        </View>
        <View style={styles.header}>
            <Button color="#384358"style={styles.btn} title='registro'/>

            <Divider style={styles.divider}/>

            <Button color="#384358"style={styles.btn}title='boton2'/>

            <Divider style={styles.divider}/>

            <Button color="#384358" style={styles.btn}title='boton3'/>

            <Divider style={styles.divider}/>

            <Button color="#384358"style={styles.btn}title='boton4'/>

            <Divider style={styles.divider}/>

        </View>
        <View style={styles.body}>
        
            <Text style={styles.Text2}>Ingrese sus datos</Text>
            <Text style={styles.textos}>Codigo de administrador:</Text>
            <TextInput style={styles.inputs}/>
            <Text style={styles.textos}>Contraseña:</Text>
            <TextInput style={styles.inputs} secureTextEntry={true}/>
            <Text style={styles.textos}>Nombre:</Text>
            <TextInput style={styles.inputs}/>
            <Text style={styles.boton}>Entrar</Text>
        </View>

        <View>
        <Text>footer</Text>
        </View>
        </ScrollView>
    );
}
export default AccesoperScreen;

const styles = StyleSheet.create({
    container: {
        flex: '1px',
      padding:'20'
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:"#384358",
        height:"100px",
    },
    body:{
        height: "700px",
    },
    Text2:{
    textAlign:'center',
    fontSize:'30px',
    margin: 8,
    },
    textos:{
        textAlign: 'left',
        fontSize: 20,
        margin:8,
        marginLeft: 520,
    },
    inputs:{
        marginLeft: 520,
        padding: 13,
        marginTop: 8,
        width: 275,
        fontSize: 10,
        height: 10,
    },
    boton:{
        textAlign:'center',
        fontSize:20,
        margin: 8,
        backgroundColor: 'darkgrey',
        width: 60,
        marginLeft: 590,
    },
    Logo:{
        color:"#f5f7f8",
        fontSize: "40px",
    },
    btn:{
        marginHorizontal:'2px',                                                                               
    },
    divider:{
        
        backgroundColor:"#f5f7f8",
        marginHorizontal:'2px',
    },
});