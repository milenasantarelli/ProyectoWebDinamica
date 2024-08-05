import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//screens
import loginScreen from "./Screens/loginScreen";
import registerScreen from "./Screens/registerScreen";
import principalScreen from "./Screens/principalScreen";
const Tab = createBottomTabNavigator();

function MyTabs (){
return(
    <Tab.Navigator>
        <Tab.Screen name="login" component={loginScreen}/>
        <Tab.Screen name="register" component={registerScreen}/>
        <Tab.Screen name="principal" component={principalScreen}/>
    </Tab.Navigator>

);
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/> 
        </NavigationContainer>
    );

}