import { StyleSheet } from 'react-native';
import { scale } from '../../../utils/scaling';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: scale(35),
    height: scale(35)
  }
});
