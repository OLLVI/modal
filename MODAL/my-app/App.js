import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }




  return (
    <View style={styles.container}>
    <Button title="Show modal message" onPress={toggleModal} />

    <Modal style={styles.modalContainer}
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>This is a modal...</Text>
          <Button title="Close Modal" onPress={toggleModal} />
        </View>
      </View>
    </Modal>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    margin: 20,
    marginTop: 100,
    padding: 20,
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
});
