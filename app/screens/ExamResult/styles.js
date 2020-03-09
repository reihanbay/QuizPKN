/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';
import metrics from '../../constants/metrics';

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
  next: {
    backgroundColor: '#FCA82F'
  },
  container: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
    alignItems: 'center'
  },
  btn: {
    marginVertical: scale(40),
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
  },
  bahas: {
    width: scale(300),
    justifyContent: 'flex-start',
    margin: metrics.doubleBaseMargin
  },
  titlePembahasan: {
    color: '#FCA82F',
    fontSize: 18,
    marginBottom: metrics.baseMargin,
    fontWeight: 'bold',
    padding: 0
  },
  pembahasan: {
    color: '#FCA82F',
    fontSize: 16,
    marginBottom: metrics.baseMargin,
    fontWeight: 'bold',
    padding: 0
  }
});

export default styles;
