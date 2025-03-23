import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

const HeaderLogout = () => {
  const { user, logout } = useAuth();

  return user ? (
    <TouchableOpacity style={styles.logoutButton} onPress={logout}>
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  ) : null;
};

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
          headerRight: () => <HeaderLogout />,
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

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: "#ff3b30",
    borderRadius: 8,
    marginRight: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RootLayout;
