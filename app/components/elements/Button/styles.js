import { StyleSheet } from 'react-native';

import {
  COLOR_BASE_PRIMARY_LIGHT,
  COLOR_BASE_PRIMARY_DARK,
  COLOR_FONT_PRIMARY_LIGHT,
  COLOR_WHITE,
  COLOR_GREY
} from '../../../styles';

const container = {
  width: 300,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10
};

export default StyleSheet.create({
  container: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_LIGHT
  },
  containerDisabled: {
    ...container,
    backgroundColor: COLOR_GREY
  },
  containerFlat: {
    ...container,
    backgroundColor: 'transparent'
  },
  containerPressed: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_DARK
  },
  text: {
    color: COLOR_WHITE,
    fontWeight: '400',
    fontSize: 16
  },
  textDisabled: {
    color: COLOR_WHITE,
    fontSize: 16
  },
  textPressed: {
    color: COLOR_FONT_PRIMARY_LIGHT
  },
  button: {
    lineHeight: 40
  },
  buttonPressed: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_DARK
  },
  buttonDisabled: {
    backgroundColor: COLOR_GREY
  }
});
