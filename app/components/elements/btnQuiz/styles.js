import { StyleSheet } from 'react-native';

import { COLOR_BASE_PRIMARY_DARK, COLOR_FONT_PRIMARY_LIGHT, COLOR_WHITE, COLOR_GREY } from '../../../styles';

const container = {
  width: 140,
  height: 50,
  justifyContent: 'center',
  borderRadius: 10
};

export default StyleSheet.create({
  container: {
    ...container
  },
  containerBack: {
    ...container,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#FCA82F'
  },
  containerNext: {
    ...container,
    backgroundColor: '#FCA82F'
  },
  icon: { alignSelf: 'center' },
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
