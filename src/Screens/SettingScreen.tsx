import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { MyButton } from "../components/MyButton";
import { styles } from "./styles";

export function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de configuracoes.</Text>
      <Text>
        by <Text style={styles.otherText}>zk</Text>
      </Text>
    </View>
  );
}
