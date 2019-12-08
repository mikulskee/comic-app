import React, { useState } from "react";
import Navigator from "./routes/Navigator";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const getFonts = () =>
  Font.loadAsync({
    "rancho-regular": require("./assets/fonts/Rancho-Regular.ttf"),
    "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf")
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
