import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingTop: 25,
    height: 80,
    backgroundColor: "silver",
  },
  text: {
    fontSize: 20,
    color: "tomato",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Header;
