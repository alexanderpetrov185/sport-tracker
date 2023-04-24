import React from "react";
import { AuthStack, Navigator } from "./Navigator";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/SplashScreen";
import { Init } from "../store/Actions";

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

export default RootNavigation;
