import * as React from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../App";

const ProfileScreen = () => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
};

export default ProfileScreen;
