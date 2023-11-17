import {StyleSheet} from 'react-native';
import getResponsiveValue, {SCREEN_WIDTH, colors} from '../../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: getResponsiveValue(5),
    paddingTop: getResponsiveValue(10),
    borderRadius: getResponsiveValue(15),
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_WIDTH * 0.36,
    shadowColor: 'rgb(110,142,204)',
    elevation: getResponsiveValue(3),
    shadowOffset: {
      width: 0,
      height: getResponsiveValue(5),
    },
    shadowOpacity: 0.15,
    shadowRadius: getResponsiveValue(4),
  },
  image: {
    height: SCREEN_WIDTH * 0.22,
    aspectRatio: '1/1',
    alignSelf: 'center',
  },
  name: {
    color: colors.black_matte,
    fontSize: getResponsiveValue(12),
    marginTop: getResponsiveValue(5),
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});
