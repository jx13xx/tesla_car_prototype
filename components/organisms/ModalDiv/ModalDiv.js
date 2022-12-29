import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const Modal = styled.View`
  flex: 1;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: auto;
  justifycontent: 'flex-end';
  background-color: ${props => (props.dark ? '#000' : '#fff')};
  margin: 0;
`;

const ModalContent = styled.View`
  backgroundcolor: 'white';
  paddingtop: 40px;
  paddinghorizontal: 12px;
  bordertoprightradius: 20px;
  bordertopleftradius: 20px;
  height: auto;
  maxheight: 300px;
  paddingbottom: 40px;
`;

const ModalDiv = props => {
  return (
    <Modal dark={props.dark}>
      <ModalContent>{props.component}</ModalContent>
    </Modal>
  );
};

export default ModalDiv;
