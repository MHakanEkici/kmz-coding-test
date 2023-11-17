import {StyleSheet} from 'react-native';
import getResponsiveValue, {SCREEN_WIDTH, colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subCategory_list_container: {
    padding: getResponsiveValue(10),
    marginVertical: getResponsiveValue(10),
  },
  subCategory_list_content: {
    flex: 1,
    alignItems: 'center',
  },
  left_icon_container: {
    marginLeft: getResponsiveValue(8),
    padding: getResponsiveValue(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  seperator: {
    width: SCREEN_WIDTH * 0.03,
  },
});
