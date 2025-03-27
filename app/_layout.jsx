import { Stack } from "expo-router";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import HeaderElements from "@/components/HeaderElements";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ff8c00",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
          headerRight: () => <HeaderElements />,
          headerTitleAlign: "center",
          contentStyle: {
            backgroundColor: "#f8f9fa",
            paddingHorizontal: 10,
            paddingTop: 10,
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="notes" options={{ headerTitle: "Notes" }} />
        <Stack.Screen name="auth" options={{ headerTitle: "Login" }} />
        <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
