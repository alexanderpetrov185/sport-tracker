import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MyWorkoutScreen from "../screens/MyWorkoutScreen";
import WorkoutsScreen from "../screens/WorkoutsScreen";
import StatisticScreen from "../screens/StatisticScreen";
import ProfileScreen from "../screens/ProfileScreen";

const TabStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "gray" },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="MyWorkoutScreen"
        component={MyWorkoutScreen}
        options={{
          tabBarLabel: "MyWorkout",
          tabBarIcon: () => (
            <FontAwesome5 name="dumbbell" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="WorkoutsScreen"
        component={WorkoutsScreen}
        options={{
          tabBarLabel: "Workouts",
          tabBarIcon: () => (
            <Ionicons name="md-list-outline" size={30} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="StatisticScreen"
        component={StatisticScreen}
        options={{
          tabBarLabel: "Statistic",
          tabBarIcon: () => (
            <Ionicons name="stats-chart-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <Ionicons name="md-person-outline" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
