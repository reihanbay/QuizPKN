/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  logoContainer: { width: scale(100), height: scale(100) },
  logo: { flex: 1, width: undefined, height: undefined, marginBottom: METRICS.baseMargin },
  appTitle: { fontSize: 18, color: COLOR_WHITE },
  appVersion: { fontSize: 24, color: COLOR_WHITE, fontWeight: 'bold' },
  bg: {
    height: '100%',
    resizeMode: 'stretch',
    width: '100%'
  }
});
export default styles;
