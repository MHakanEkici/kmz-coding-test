import {StyleSheet} from 'react-native';
import getResponsiveValue, {SCREEN_WIDTH, colors} from '../../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: getResponsiveValue(5),
    margin: getResponsiveValue(10),
    paddingTop: getResponsiveValue(10),
    borderRadius: getResponsiveValue(15),
    alignItems: 'center',
    alignSelf: 'center',
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 0.25,
    shadowColor: colors.shadow_color,
    elevation: getResponsiveValue(3),
    shadowOffset: {
      width: 0,
      height: getResponsiveValue(5),
    },
    shadowOpacity: 0.15,
    shadowRadius: getResponsiveValue(4),
  },
  quantity: {
    color: colors.theme,
    fontSize: getResponsiveValue(20),
    marginTop: getResponsiveValue(8),
    fontWeight: 'bold',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  name: {
    color: colors.black_matte,
    fontSize: getResponsiveValue(14),
    marginTop: getResponsiveValue(5),
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});
