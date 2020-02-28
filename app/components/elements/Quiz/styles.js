/* eslint-disable react-native/no-color-literals */
import { StyleSheet, Dimensions } from 'react-native';
import { COLOR_WHITE } from '../../../styles';
import { scale } from '../../../utils/scaling';
import metrics from '../../../constants/metrics';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    height: scale(50),
    width: scale(255),
    marginVertical: scale(10)
    // elevation: 1.0
  },
  questContainer: {
    width: scale(300),
    alignSelf: 'center',
    marginTop: metrics.doubleBaseMargin
  },
  quest: {
    fontSize: 16,
    color: COLOR_WHITE
  },
  bg: {
    height: '100%',
    resizeMode: 'stretch',
    width: '100%'
  },
  back: {
    marginRight: metrics.doubleBaseMargin
  },
  // next: {
  //   marginLeft: metrics.baseMargin
  // },
  container: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
    alignItems: 'center'
  },
  btn: {
    marginVertical: scale(50),
    flexDirection: 'row',
    alignSelf: 'center'
  },
  logo: {
    alignSelf: 'center',
    height: scale(250),
    marginTop: scale(25),
    resizeMode: 'contain',
    width: scale(250)
  },
  text: {
    fontWeight: 'normal'
  }
});

export default styles;
