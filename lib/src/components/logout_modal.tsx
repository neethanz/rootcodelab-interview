import React from 'react';
import {
  Modal,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';

export default function LogoutModal({visible, onClose}) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={onClose}>
            <Text>Cancel</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => {
                // Perform logout action here
                onClose();
              }}>
              <Text>Logging Out</Text>
              <Text>Are you sure want to logout?</Text>
              <Button title="Logout" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    backgroundColor: 'white',
    padding: 20,
    width: '80%',
    height: 200,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});
