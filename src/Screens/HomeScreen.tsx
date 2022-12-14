import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { MyButton } from "../components/MyButton";
import { styles } from "./styles";

export function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esta tela só pode ser vista por usuários autenticados.</Text>
      <MyButton onPress={() => navigation.navigate('Configs')} title="Ir para configurações"/>
      <Text>
        by <Text style={styles.otherText}>zk</Text>
      </Text>
    </View>
  );
}
