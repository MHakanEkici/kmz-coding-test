import {StyleSheet} from 'react-native';
import getResponsiveValue, {colors} from '../../constants';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    padding: getResponsiveValue(15),
    marginVertical: getResponsiveValue(10),
    borderRadius: getResponsiveValue(10),
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: getResponsiveValue(20),
  },
});
