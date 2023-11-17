import {StyleSheet} from 'react-native';
import getResponsiveValue, {colors} from '../../constants';

export default StyleSheet.create({
  category_list_container: {
    padding: getResponsiveValue(10),
    borderRadius: getResponsiveValue(15),
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: getResponsiveValue(5),
    padding: getResponsiveValue(5),
  },
  name: {
    color: colors.black_matte,
    fontSize: getResponsiveValue(17),
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  seperator: {
    backgroundColor: colors.theme,
    height: 1,
    width: '100%',
  },
});
