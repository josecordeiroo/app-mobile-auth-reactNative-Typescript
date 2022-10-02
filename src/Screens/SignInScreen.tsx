import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import logo from "../assets/zklogo.png";

import { MyTextInput } from "../components/MyTextInput";
import{MyButton} from "../components/MyButton"
import {styles} from './styles'

export function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={[styles.container, {justifyContent: 'center'}]}>
      <Image
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
        source={logo}
      />
      <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <MyTextInput
        placeholder="senha"
        value={password}
        onChangeText={setPassword}
      />

      <MyButton title='Entrar'/>
    </View>
  );
}
