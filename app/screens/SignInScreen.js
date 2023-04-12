import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const SignInScreen = ({ route }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { auth } = route.params;

  return (
    <View style={{ marginTop: 20 }}>
      <Text>Email</Text>
      <TextInput style={styles.input} onChangeText={setEmail} />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="Sign Up" onPress={() => auth("token")} />
    </View>
  );
};

export default SignInScreen;
