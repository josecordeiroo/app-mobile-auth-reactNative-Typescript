import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import { HomeScreen } from "../Screens/HomeScreen";

export function AppStack() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="Página Inicial"
        component={HomeScreen}
        options={{ headerTintColor: "green" }}
      />
    </Stack.Navigator>
  );
}
