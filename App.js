import * as React from "react";
<<<<<<< HEAD
import { Store } from "./app/store/Index";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import RootNavigation from "./app/navigation/RootNavigation";
=======
import { Navigator } from "./app/navigation/Navigator";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Store } from "./app/store/Index";
import { Init } from "./app/store/Actions";
import SplashScreen from "./app/screens/SplashScreen";
import { AuthStack } from "./app/navigation/AuthStack";
import { StatusBar } from "react-native";

const RootNavigation = () => {
  const token = useSelector((state) => state.authReducer.authToken);

  const [loading, setLoading] = React.useState(true);

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  };

  React.useEffect(() => {
    init();
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {token === null ? <AuthStack /> : <Navigator />}
    </NavigationContainer>
  );
};
>>>>>>> 1d849ae25b3688148835468490d47d83c2e229dd

export default function App() {
  return (
    <Provider store={Store}>
      <StatusBar theme="auto" />
      <RootNavigation />
    </Provider>
  );
}
