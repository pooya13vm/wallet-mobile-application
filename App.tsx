import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import RootStack from "./navigators/RootStack";
import Welcome from "./screens/Welcome";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/Fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/Fonts/Lato-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <RootStack />;
}
