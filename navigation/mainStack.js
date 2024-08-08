import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import principalScreen from "../Screens/principalScreen";
import registerScreen from "../Screens/registerScreen";
import accesoperScreen from "../Screens/accesoperScreen";

const Stack = createNativeStackNavigator();
const MainStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Registro">
                 <Stack.Screen
                name="Registro" 
                component={registerScreen}
                />
            <Stack.Screen
            name="Principal"
            component={principalScreen}
            />
            <Stack.Screen
            name="Acceso"
            component={accesoperScreen}
            />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;