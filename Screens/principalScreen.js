import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const PrincipalScreen= () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
         <View style={styles.header}>
        <Text style={styles.Text}>CTN</Text>
        </View>
        <View style={styles.header}>

        <Button
        color="#384358"
         style={styles.btn}
        title='registro'
      
        />
        <Divider
        style={styles.divider}
        />
        <Button
        color="#384358"
         style={styles.btn}
        title='boton2'
        onPress={() =>
            navigation.navigate ('Acceso')
    }
        />
         <Divider
         style={styles.divider}
         />
        <Button
        color="#384358"
         style={styles.btn}
        title='boton3'
        />
         <Divider
         style={styles.divider}
         />
        <Button
        color="#384358"
         style={styles.btn}
        title='boton4'
        />
         <Divider
         style={styles.divider}
         />
        </View>

        <View style={styles.body}>
        
             
        <Text style={styles.Textbody}>PROXIMAMENTE</Text>

        </View>

        <View>
        <Text>footer</Text>
        </View>

        </ScrollView>
      
    
    );
}
export default PrincipalScreen;

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
        backgroundColor:"#10152f",
        height: "700px",
    },
    Textbody:{
    textAlign:'center',
    fontSize:'30px'
    },
    Text:{
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
