import { View, Text, ActivityIndicator } from "react-native";
import * as React from "react";

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Loading...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default SplashScreen;
