import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { firebase_sign_in_anonymous } from "./firebase";
export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          firebase_sign_in_anonymous();
        }}
      >
        <Text>Login</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
