import {StyleSheet} from 'react-native';
import getResponsiveValue, {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: getResponsiveValue(50),
    borderColor: colors.black_matte,
    borderWidth: getResponsiveValue(1),
    borderRadius: getResponsiveValue(10),
    marginVertical: getResponsiveValue(5),
    paddingLeft: getResponsiveValue(10),
    backgroundColor: colors.white,
  },
});
