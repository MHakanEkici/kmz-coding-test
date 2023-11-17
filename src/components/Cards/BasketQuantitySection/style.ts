import {StyleSheet} from 'react-native';
import getResponsiveValue, {SCREEN_WIDTH, colors} from '../../../constants';

export default StyleSheet.create({
  edit_countInBasket_card: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    width: SCREEN_WIDTH * 0.08,
    height: SCREEN_WIDTH * 0.26,
    borderWidth: getResponsiveValue(2),
    borderRadius: getResponsiveValue(4),
    backgroundColor: colors.theme,
    borderColor: colors.theme,
  },
  edit_countInBasket_button: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getResponsiveValue(4),
    backgroundColor: colors.white,
  },
  countInBasket_container: {
    flex: 7,
    backgroundColor: colors.theme,
    borderRadius: getResponsiveValue(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  countInBasket_text: {
    fontSize: getResponsiveValue(20),
    fontWeight: 'bold',
    color: colors.black_night,
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    width: SCREEN_WIDTH * 0.08,
    height: SCREEN_WIDTH * 0.08,
    backgroundColor: colors.theme,
    borderColor: colors.theme,
    borderRadius: getResponsiveValue(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
