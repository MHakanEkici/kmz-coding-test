import React from 'react';
import {TextInputProps, TextInput} from 'react-native';
import styles from './style';

const CustomInput: React.FC<TextInputProps> = ({...otherProps}) => {
  return <TextInput {...otherProps} style={styles.input} />;
};

export default CustomInput;
