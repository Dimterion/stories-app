import { StyleSheet, Text, View } from "react-native";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stories app</Text>
      <Text style={styles.subtitle}>About stories app</Text>
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
});

export default AboutScreen;
