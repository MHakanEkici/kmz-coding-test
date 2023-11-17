import {StyleSheet} from 'react-native';
import getResponsiveValue from '../../constants';

export default StyleSheet.create({
  list_container: {
    marginTop: getResponsiveValue(10),
  },
  list: {
    padding: getResponsiveValue(7),
    justifyContent: 'space-around',
  },
});
