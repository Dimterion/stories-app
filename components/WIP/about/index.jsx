import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

const AboutScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stories app</Text>
      <Text style={styles.subtitle}>About stories app</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/notes")}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    flex: 1,
    gap: 10,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "#333",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "#666",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#007bff",
    borderRadius: 8,
    minWidth: 200,
    paddingHorizontal: 25,
    paddingVertical: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AboutScreen;
