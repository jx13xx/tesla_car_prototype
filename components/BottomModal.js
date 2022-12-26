import React, {useState} from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {PressableButton} from './Button';
import Amount from './Amount';
import Description from './Description';
import {PrefixText, SuffixText} from './organisms/Text';

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
      <View style={styles.modalContent}>
        <View style={styles.innerContent}>
          <View style={styles.topSpecsContainer}>
            <View style={styles.topSpecTile}>
              <PrefixText>3.5s</PrefixText>
              <SuffixText>0-60mph</SuffixText>
            </View>
            <View style={styles.verticleLine}></View>
            <View style={styles.topSpecTile}>
              <PrefixText>150mph</PrefixText>
              <SuffixText>Top Speed</SuffixText>
            </View>
          </View>
          <Description>
            Tesla All-Wheel Drive has two independent motors. Unlike traditional
            all-wheel drive systems, these two motors digitally control torque
            to the front and rear wheels—for far better handling and traction
            control.{' '}
          </Description>
          <View style={styles.priceContainer}>
            <Amount>AED 235,000</Amount>
            <PressableButton
              onPress={() => true}
              title="Next"
              bgColor="white"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: 'white',
  },
  modal: {
    justifyContent: 'flex-end',
    backgroundColor: 'black',
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
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: 'transparent',
    borderRadius: 3,
  },
  text: {
    color: '#bbb',
    fontSize: 24,
    marginTop: 100,
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  innerContent: {
    marginLeft: 10,
    marginRight: 10,
  },
  priceContainer: {
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
  },
  topSpecsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
    rowGap: 10,
    marginBottom: 10,
  },
  verticleLine: {
    height: '75%',
    marginLeft: '2%',
    marginRight: '2%',
    width: 1,
    backgroundColor: '#000',
  },
  topSpecTile: {
    marginLeft: 30,
    marginRight: 30,
  },
});

export default BottomModal;
