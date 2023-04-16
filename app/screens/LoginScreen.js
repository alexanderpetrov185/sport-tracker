import { View, StyleSheet, ImageBackground } from "react-native";
import * as React from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { Login } from "../store/Actions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  wrap: {
    flex: 1,
    justifyContent: "center",
    padding: 28,
  },
  box: {
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    height: 250,
  },
  title: {
    fontSize: 45,
    color: "hotpink",
    marginBottom: 5,
    fontWeight: "bold",
  },
});

const LoginScreen = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Login(username, password));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/loginBg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.wrap}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            placeholder="Username"
            mode="outlined"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            placeholder="Password"
            mode="outlined"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button mode="contained" style={{ marginTop: 20 }} onPress={submit}>
            Login
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
