import { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";
import PostItImage from "@/assets/images/post-it.png";

const HomeScreen = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/notes");
    }
  }, [user, loading]);

  if (loading) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={PostItImage} style={styles.image} />
      <Text style={styles.title}>Stories app</Text>
      <Text style={styles.subtitle}>Read your stories</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/notes")}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/about")}
        >
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  image: {
    borderRadius: 10,
    height: 100,
    marginBottom: 20,
    width: 100,
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
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
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

export default HomeScreen;
