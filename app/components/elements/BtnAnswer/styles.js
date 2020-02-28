import { StyleSheet } from 'react-native';

import { COLOR_WHITE } from '../../../styles';
import { scale } from '../../../utils/scaling';
import metrics from '../../../constants/metrics';

const container = {};

export default StyleSheet.create({
  container: {
    width: 300,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR_WHITE,
    marginVertical: metrics.baseMargin,
    marginTop: metrics.baseMargin
  },
  image: {
    width: scale(40),
    height: scale(40)
  },
  showText: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: scale(215)
  },
  containerFlat: {
    ...container,
    backgroundColor: 'transparent'
  },
  text1: {
    color: COLOR_WHITE,
    fontWeight: '400',
    fontSize: 16
  },
  // text2: {
  //   color: COLOR_WHITE,
  //   fontWeight: '100',
  //   fontSize: 13
  // },
  button: {
    lineHeight: 40
  }
});
