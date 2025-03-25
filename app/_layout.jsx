import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

const HeaderElements = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return user ? (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => router.push("/about")}
      >
        <Text style={styles.buttonText}>❔</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.buttonText}>↪️</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity
      style={styles.linkButton}
      onPress={() => router.push("/")}
    >
      <Text style={styles.buttonText}>🏠</Text>
    </TouchableOpacity>
  );
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

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  logoutButton: {
    backgroundColor: "#ff3b30",
    borderRadius: 8,
    marginRight: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  linkButton: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    marginRight: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default RootLayout;
