import React, {useState} from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';

const BottomModal = props => {
  const [isModalVisible, setModalVisible] = useState(true);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onSwipeEventer = e => {
    console.log(e);
  };
  return (
    <Modal
      // onBackdropPress={() => setModalVisible(false)}
      // onBackButtonPress={() => setModalVisible(false)}
      isVisible={isModalVisible}
      swipeDirection="down"
      // onSwipeComplete={toggleModal}500
      backdropColor="transparent"
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      avoidKeyboard={true}
      onSwipeMove={e => onSwipeEventer(e)}
      animationInTiming={900}
      animationOutTiming={500}
      hideModalContentWhileAnimating={true}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      style={styles.modal}>
      <View style={styles.modalContent}>{props.component}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    // backgroundColor: 'white',
  },
  modal: {
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    margin: 0,
  },
  modalContent: {
    borderColor: 'red',
    backgroundColor: 'white',
    paddingTop: 40,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 300,
    paddingBottom: 40,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomModal;
