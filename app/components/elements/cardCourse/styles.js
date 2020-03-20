import { StyleSheet } from 'react-native';

import { COLOR_WHITE } from '../../../styles';
import { scale } from '../../../utils/scaling';
import metrics from '../../../constants/metrics';

export default StyleSheet.create({
  container: {
    width: scale(280),
    height: scale(140),
    borderRadius: 20,
    flexDirection: 'row'
  },
  Background: {
    height: '100%',
    resizeMode: 'stretch',
    width: '100%'
  },
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 1,
    flexDirection: 'row-reverse'
  },
  text: {
    color: COLOR_WHITE,
    fontWeight: '500',
    fontSize: 20,
    width: scale(240),
    height: scale(46),
    marginHorizontal: metrics.doubleBaseMargin,
    marginTop: metrics.doubleBaseMargin
  },
  touch: {
    height: scale(40),
    width: scale(110),
    backgroundColor: COLOR_WHITE,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: metrics.doubleBaseMargin,
    marginTop: metrics.baseMargin
  },
  pressText: {
    color: '#24A7A7',
    fontWeight: '500',
    fontSize: 15
  },
  button: {
    lineHeight: 40
  }
});
