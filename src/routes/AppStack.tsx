import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import { HomeScreen } from "../Screens/HomeScreen";
import { SettingScreen } from "../Screens/SettingScreen";

export function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Página Inicial">
      <Stack.Screen
        name="Página Inicial"
        component={HomeScreen}
        options={{ headerTintColor: "#550aB1", headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="Configs"
        component={SettingScreen}
        options={{ headerTintColor: "#550aB1", headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
}
