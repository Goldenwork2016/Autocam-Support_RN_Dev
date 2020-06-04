import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Chat = ({message = 'Loading...'}) => {
  return <Text style={styles.text}>{message}</Text>;
};

export default Chat;
