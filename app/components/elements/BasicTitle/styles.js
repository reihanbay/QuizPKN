/* eslint-disable import/named */
import { StyleSheet } from 'react-native';
import {
  FONT_LABEL1_PRIMARY,
  COLOR_GREY,
  FONT_PLACEHOLDER_PRIMARY,
  FONT_LABEL2_PRIMARY,
  COLOR_EVENT_ERROR,
  COLOR_WHITE
} from '../../../styles';
import { verticalScale, scale } from '../../../utils/scaling';

const styles = StyleSheet.create({
  errorText: {
    ...FONT_LABEL2_PRIMARY,
    color: COLOR_EVENT_ERROR,
    marginTop: -5
  },
  image: {
    height: scale(20),
    width: scale(20)
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: -3
  },
  labelText: {
    ...FONT_LABEL1_PRIMARY,
    color: COLOR_WHITE
  },
  showPass: {
    marginLeft: scale(-30),
    marginTop: verticalScale(10)
  },
  textInput: {
    ...FONT_PLACEHOLDER_PRIMARY,
    color: COLOR_WHITE,
    width: scale(300),
    marginLeft: -3
  },
  textInputInactive: {
    ...FONT_PLACEHOLDER_PRIMARY,
    color: COLOR_GREY,
    width: scale(300),
    marginLeft: -3
  }
});

export default styles;
