import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TypeRootStackParamList } from '@/navigation/navigation.types';
import Home from '@/components/screens/home/Home';
import Profile from '@/components/screens/profile/Profile';

const RootStack = createStackNavigator<TypeRootStackParamList>();

export default function App() {
  return (
  <RootStack.Navigator initialRouteName="Home">
    <RootStack.Screen name="Home" component={Home} />
    <RootStack.Screen
      name="Profile"
      component={Profile}
    />
  </RootStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
