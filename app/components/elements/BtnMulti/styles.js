import { StyleSheet } from 'react-native';

import { scale } from '../../../utils/scaling';

const container = {};

export default StyleSheet.create({
  container: {
    width: 300,
    height: 85,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10
  },
  image: {
    width: scale(40),
    height: scale(40)
  },
  showText: {
    flexDirection: 'column',
    marginVertical: scale(15),
    width: scale(215)
  },
  containerFlat: {
    ...container,
    backgroundColor: 'transparent'
  },
  // text1: {
  //   color: COLOR_WHITE,
  //   fontWeight: '400',
  //   fontSize: 16
  // },
  // text2: {
  //   color: COLOR_WHITE,
  //   fontWeight: '100',
  //   fontSize: 13
  // },
  button: {
    lineHeight: 40
  }
});
