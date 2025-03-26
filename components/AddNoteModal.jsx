import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const AddNoteModal = ({
  modalVisible,
  setModalVisible,
  newNote,
  setNewNote,
  addNote,
}) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add a New Note</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter note..."
            placeholderTextColor="#aaa"
            value={newNote}
            onChangeText={setNewNote}
          />
          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={addNote}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderColor: "#ccc",
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 15,
    padding: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    alignItems: "center",
    backgroundColor: "#ccc",
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    padding: 10,
  },
  cancelButtonText: {
    color: "#333",
    fontSize: 16,
  },
  saveButton: {
    alignItems: "center",
    backgroundColor: "#007bff",
    borderRadius: 5,
    flex: 1,
    padding: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default AddNoteModal;
