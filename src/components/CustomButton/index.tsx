import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styles from './style';

interface CustomButtonProps extends TouchableOpacityProps {
  label: string;
  style?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  style = {},
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.8}
      {...otherProps}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
