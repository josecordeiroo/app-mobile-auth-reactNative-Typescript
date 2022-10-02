import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import { SignInScreen } from "../Screens/SignInScreen";

export function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="Fazer Login"
        component={SignInScreen}
        options={{ headerTintColor: "green" }}
      />
    </Stack.Navigator>
  );
}
