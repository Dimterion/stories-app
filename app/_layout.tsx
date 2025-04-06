import { StatusBar } from "react-native";
import { Stack } from "expo-router";
import "./globals.css";

const StoryLayout = () => {
  return (
    <>
      <Stack>
        <StatusBar hidden={true} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="stories/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default StoryLayout;
