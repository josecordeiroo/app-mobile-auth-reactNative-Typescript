import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import {AuthContext} from "../contexts/Auth"

export function Router() {
  const authContext = useContext(AuthContext)
  return (
    <NavigationContainer>
      {authContext.authData ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  );
}
