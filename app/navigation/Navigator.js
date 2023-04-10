import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../screens/ProfileScreen";
import { StatisticScreen } from "../screens/StatisticScreen";
import WorkoutsScreen from "../screens/WorkoutsScreen";
import MyWorkoutScreen from "../screens/MyWorkoutScreen";
import { SvgProfile } from "../../assets/svg/SvgProfile";
import { SvgWorkouts } from "../../assets/svg/SvgWorkouts";
import { SvgStatistic } from "../../assets/svg/SvgStatistic";
import { SvgMyWorkout } from "../../assets/svg/SvgMyWorkout";

export const Navigator = () => {
  const Tab = createBottomTabNavigator();

  const TabStack = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="MyWorkoutScreen"
          component={MyWorkoutScreen}
          options={{
            tabBarLabel: "MyWorkout",
            tabBarIcon: () => <SvgMyWorkout />,
          }}
        />
        <Tab.Screen
          name="WorkoutsScreen"
          component={WorkoutsScreen}
          options={{
            tabBarLabel: "Workouts",
            tabBarIcon: () => <SvgWorkouts />,
          }}
        />
        <Tab.Screen
          name="StatisticScreen"
          component={StatisticScreen}
          options={{
            tabBarLabel: "Statistic",
            tabBarIcon: () => <SvgStatistic />,
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: () => <SvgProfile />,
          }}
        />
      </Tab.Navigator>
    );
  };

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="App"
    >
      <Stack.Screen name={"Tab"} component={TabStack} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="StatisticScreen" component={StatisticScreen} />
      <Stack.Screen name="WorkoutScreen" component={WorkoutsScreen} />
      <Stack.Screen name="MyWorkoutScreen" component={MyWorkoutScreen} />
    </Stack.Navigator>
  );
};
