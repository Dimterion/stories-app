import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";

import { useAuth } from "@/contexts/AuthContext";

const AuthScreen = () => {
  const router = useRouter();
  const { login, register } = useAuth();
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState(false);
  // Authentication
  const handleAuth = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required");
      return;
    }

    if (isRegistering && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    let response;

    if (isRegistering) {
      response = await register(email, password);
    } else {
      response = await login(email, password);
    }

    if (response?.error) {
      Alert.alert("Error", response.error);
      return;
    }

    router.replace("/notes");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{isRegistering ? "Sign Up" : "Login"}</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        textContentType="none"
      />

      {isRegistering && (
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          textContentType="none"
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleAuth}>
        <Text style={styles.buttonText}>
          {isRegistering ? "Sign Up" : "Login"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsRegistering(!isRegistering)}>
        <Text style={styles.switchText}>
          {isRegistering
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  header: {
    color: "#333",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  error: {
    color: "red",
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 12,
    padding: 12,
    width: "100%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#007bff",
    borderRadius: 8,
    marginTop: 10,
    paddingVertical: 12,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  switchText: {
    color: "#007bff",
    fontSize: 16,
    marginTop: 10,
  },
});

export default AuthScreen;
