import {StyleSheet} from 'react-native';
import getResponsiveValue, {SCREEN_WIDTH, colors} from '../../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: getResponsiveValue(5),
    borderRadius: getResponsiveValue(15),
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_WIDTH * 0.1,
    shadowColor: colors.shadow_color,
    elevation: getResponsiveValue(3),
    shadowOffset: {
      width: 0,
      height: getResponsiveValue(5),
    },
    shadowOpacity: 0.15,
    shadowRadius: getResponsiveValue(4),
  },
  name: {
    color: colors.black_matte,
    fontSize: getResponsiveValue(11),
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});
