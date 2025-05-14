import { useEffect } from "react";
import { StatusBar } from "react-native";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

import "./globals.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    "AmaticSC-Regular": require("../assets/fonts/AmaticSC-Regular.ttf"),
    "Amaranth-Regular": require("../assets/fonts/Amaranth-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar hidden={true} />

      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="stories/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;
