import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";
import noteService from "@/services/noteService";
import NoteList from "@/components/NoteList";
import AddNoteModal from "@/components/AddNoteModal";

const NoteScreen = () => {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  // State
  const [notes, setNotes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace("/auth");
    }
  }, [user, authLoading]);

  useEffect(() => {
    if (user) {
      fetchNotes();
    }
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    const response = await noteService.getNotes(user.$id);

    if (response.error) {
      setError(response.error);
      Alert.alert("Error", response.error);
    } else {
      setNotes(response.data);
      setError(null);
    }

    setLoading(false);
  };

  const addNote = async () => {
    if (newNote.trim() === "") return;

    const response = await noteService.addNote(user.$id, newNote);

    if (response.error) {
      Alert.alert("Error", response.error);
    } else {
      setNotes([...notes, response.data]);
    }

    setNewNote("");
    setModalVisible(false);
  };

  const deleteNote = async (id) => {
    Alert.alert("Delete Note", "Are you sure you want to delete this note?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          const response = await noteService.deleteNote(id);

          if (response.error) {
            Alert.alert("Error", response.error);
          } else {
            setNotes(notes.filter((note) => note.$id !== id));
          }
        },
      },
    ]);
  };

  const editNote = async (id, newText) => {
    if (!newText.trim()) {
      Alert.alert("Error", "Note text cannot be empty");
      return;
    }

    const response = await noteService.updateNote(id, newText);

    if (response.error) {
      Alert.alert("Error", response.error);
    } else {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.$id === id ? { ...note, text: response.data.text } : note
        )
      );
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <>
          {error && <Text style={styles.errorText}>{error}</Text>}
          {notes.length === 0 ? (
            <Text style={styles.noNotesText}>You have no notes</Text>
          ) : (
            <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
          )}
        </>
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>

      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 20,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  noNotesText: {
    color: "#555",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "center",
  },
  addButton: {
    alignItems: "center",
    backgroundColor: "#007bff",
    borderRadius: 8,
    bottom: 20,
    left: 20,
    padding: 15,
    position: "absolute",
    right: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default NoteScreen;
