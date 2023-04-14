import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import * as React from "react";

// temp styles
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Getting token...</Text>
      <ActivityIndicator size="large" style={styles.indicator} />
    </View>
  );
};

export default SplashScreen;
