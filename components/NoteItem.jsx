import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const NoteItem = ({ note, onDelete, onEdit }) => {
  const inputRef = useRef(null);
  // State
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);

  const handleSave = () => {
    if (editedText.trim() === "") return;
    onEdit(note.$id, editedText);
    setIsEditing(false);
  };

  return (
    <View style={styles.noteItem}>
      {isEditing ? (
        <TextInput
          ref={inputRef}
          value={editedText}
          onChangeText={setEditedText}
          autoFocus
          onSubmitEditing={handleSave}
          returnKeyType="done"
        />
      ) : (
        <Text style={styles.noteText}>{note.text}</Text>
      )}
      <View style={styles.actions}>
        {isEditing ? (
          <TouchableOpacity
            onPress={() => {
              handleSave();
              inputRef.current?.blur();
            }}
          >
            <Text style={styles.edit}>💾</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Text style={styles.edit}>✏️</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => onDelete(note.$id)}>
          <Text style={styles.delete}>❌</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    padding: 15,
  },
  noteText: {
    fontSize: 18,
  },
  actions: {
    flexDirection: "row",
  },
  edit: {
    color: "blue",
    fontSize: 18,
    marginRight: 10,
  },
  delete: {
    color: "red",
    fontSize: 18,
  },
});

export default NoteItem;
