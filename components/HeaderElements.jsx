import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";

const HeaderElements = () => {
  const router = useRouter();
  const { user, logout } = useAuth();

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

export default HeaderElements;
