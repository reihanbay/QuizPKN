/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';
import metrics from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_WHITE
  },
  about: {
    marginVertical: metrics.baseMargin,
    marginHorizontal: metrics.doubleBaseMargin,
    margin: 0,
    marginBottom: metrics.baseMargin,
    flexDirection: 'row',
    width: scale(300),
    height: scale(60)
  },
  pict: {
    width: scale(100),
    height: scale(40),
    alignSelf: 'center',
    resizeMode: 'contain',
    marginHorizontal: metrics.doubleBaseMargin
  },
  picture: {
    width: scale(60),
    height: scale(60),
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  pic: {
    flex: 1,
    height: scale(60)
  },
  bg: {
    height: '100%',
    resizeMode: 'stretch',
    width: '100%'
  },
  desc: {
    flex: 3,
    flexDirection: 'column',
    marginHorizontal: metrics.doubleBaseMargin,
    height: scale(60)
  },
  name: {
    fontSize: 18,
    color: '#FCA82F',
    marginBottom: scale(5)
  },
  self: {
    marginBottom: scale(0),
    fontSize: 15,
    color: COLOR_WHITE
  },
  mail: {
    marginBottom: scale(0),
    fontSize: 13,
    color: COLOR_WHITE
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
    color: COLOR_WHITE
  },
  title: {
    marginHorizontal: metrics.doubleBaseMargin,
    marginVertical: metrics.baseMargin
  },
  iklan: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: metrics.doubleBaseMargin,
    margin: 0,
    marginBottom: metrics.doubleBaseMargin,
    width: scale(300)
  },
  touchMe: {
    height: scale(40),
    backgroundColor: COLOR_WHITE,
    borderRadius: 10
  },
  sup: {
    textAlign: 'center',
    fontSize: 14,
    color: COLOR_WHITE,
    marginVertical: metrics.baseMargin
  }
});

export default styles;
