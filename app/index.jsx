import { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";
import PostItImage from "@/assets/images/post-it.png";

const HomeScreen = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

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
    <View
      style={styles.container}
      className="flex-1 justify-center items-center bg-[#f8f9fa]"
    >
      <Image source={PostItImage} style={styles.image} />
      <Text style={styles.title} className="text-primary">
        Stories app
      </Text>
      <Text style={styles.subtitle} className="text-dark-200">
        Read your stories
      </Text>

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
      <Link href="/onboarding">Onboarding</Link>
      <Link href="/story/storyOne">Story One</Link>
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
    justifyContent: "center",
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
