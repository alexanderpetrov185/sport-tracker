import { View, StyleSheet, ImageBackground } from "react-native";
import * as React from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { init, login } from "../src/actions/auth";
import { useDispatch } from "react-redux";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();

  React.useEffect(() => dispatch(init()), []);

  const submit = () => {
    dispatch(login(username, password));
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
          <Button
            mode="elevated"
            textColor="white"
            style={{
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: "black",
              borderWidth: 1,
              borderColor: "#bfbfbf",
            }}
            onPress={submit}
          >
            Login
          </Button>
          <Button
            mode="elevated"
            textColor="white"
            style={{
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: "black",
              borderWidth: 1,
              borderColor: "#bfbfbf",
            }}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            To Register
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

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
    color: "white",
    marginBottom: 5,
    fontWeight: "bold",
    textShadowColor: "purple",
    textShadowOffset: { width: 1, height: 1 },
  },
});
