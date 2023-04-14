import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyWorkoutScreen from "../screens/MyWorkoutScreen";
import WorkoutsScreen from "../screens/WorkoutsScreen";
import StatisticScreen from "../screens/StatisticScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TabStack from "./TabStack";
import SplashScreen from "../screens/SplashScreen";
import SignInScreen from "../screens/SignInScreen";

export const Navigator = ({ state }) => {
  // Navigator
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="App"
    >
      {state.isLoading ? (
        // We haven't finished checking for the token yet
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : state.userToken == null ? (
        // No token found, user isn't signed in
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: "Sign in",
            // When logging out, a pop animation feels intuitive
            animationTypeForReplace: state.isSignout ? "pop" : "push",
          }}
        />
      ) : (
        <>
          <Stack.Screen name={"Tab"} component={TabStack} />
          <Stack.Screen name="MyWorkoutScreen" component={MyWorkoutScreen} />
          <Stack.Screen name="WorkoutsScreen" component={WorkoutsScreen} />
          <Stack.Screen name="StatisticScreen" component={StatisticScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

// const [isLoading, setIsLoading] = React.useState(true);
//   const [userToken, setUserToken] = React.useState(null);

//   const auth = (token) => {
//     setUserToken(token);
//   };

//   const getUserToken = async () => {
//     // testing purposes
//     const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
//     try {
//       // custom logic
//       await sleep(2000);
//       const token = null;
//       setUserToken(token);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   React.useEffect(() => {
//     getUserToken();
//   }, []);

//   if (isLoading) {
//     // We haven't finished checking for the token yet
//     return <SplashScreen />;
//   }
