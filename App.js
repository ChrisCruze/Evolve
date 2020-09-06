import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { firebase_sign_in_anonymous, firebase_sign_up_anonymous, firebase_sign_in, firebase_sign_out } from "./firebase";

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
      <TouchableWithoutFeedback
        onPress={() => {
          firebase_sign_up_anonymous({ email: "Cruzc09@gmail.com", password: "password@123" });
        }}
      >
        <Text>Sign Up</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          firebase_sign_in({ email: "Cruzc09@gmail.com", password: "password@123" });
        }}
      >
        <Text>Sign In</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          firebase_sign_out();
        }}
      >
        <Text>Sign Out</Text>
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
