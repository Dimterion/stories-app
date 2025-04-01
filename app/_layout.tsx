import { Stack } from "expo-router";
import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";

const StoryLayout = () => {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="stories/[id]" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
};

export default StoryLayout;
