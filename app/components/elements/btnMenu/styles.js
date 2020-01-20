import { StyleSheet } from 'react-native';

import {
  COLOR_BASE_PRIMARY_MAIN,
  COLOR_BASE_PRIMARY_LIGHT,
  COLOR_BASE_PRIMARY_DARK,
  COLOR_FONT_PRIMARY_LIGHT,
  COLOR_WHITE
} from '../../../styles';

const container = {
  width: 225,
  height: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 70
};

export default StyleSheet.create({
  container: {
    ...container,
    backgroundColor: COLOR_BASE_PRIMARY_LIGHT
  },
  containerDisabled: {
    ...container,
    backgroundColor: COLOR_FONT_PRIMARY_LIGHT
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
    fontWeight: '500',
    fontSize: 20
  },
  textDisabled: {
    color: COLOR_WHITE,
    fontSize: 20
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
  buttonDisabled: {}
});
