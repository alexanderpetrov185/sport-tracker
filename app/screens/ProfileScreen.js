import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { logout } from "../src/actions/auth";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(logout());
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
      <Button mode="contained" style={{ marginTop: 20 }} onPress={submit}>
        Logout
      </Button>
    </View>
  );
};

export default ProfileScreen;
