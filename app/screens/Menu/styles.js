import { StyleSheet } from 'react-native';
import { COLOR_GREY, FONT_BODY1_PRIMARY, COLOR_WHITE, COLOR_BASE_PRIMARY_LIGHT } from '../../styles';
import { scale, verticalScale } from '../../utils/scaling';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    height: scale(60)
    // elevation: 1.0
  },
  checkBox: {
    left: scale(20),
    marginBottom: verticalScale(40),
    opacity: 0.4
  },
  container: {
    backgroundColor: COLOR_WHITE
  },
  forgotPassword: {
    ...FONT_BODY1_PRIMARY,
    alignSelf: 'center',
    color: COLOR_GREY,
    fontSize: 13,
    marginTop: 15
  },
  inputBoxName: {
    ...FONT_BODY1_PRIMARY,
    alignSelf: 'center',
    // marginTop: scale(20),
    width: scale(300)
  },
  inputBoxPass: {
    ...FONT_BODY1_PRIMARY,
    alignSelf: 'center',
    marginBottom: 10,
    width: scale(300)
  },
  inputName: {
    ...FONT_BODY1_PRIMARY
  },
  inputPass: {
    ...FONT_BODY1_PRIMARY
  },
  logo: {
    alignSelf: 'center',
    height: scale(250),
    marginTop: scale(25),
    resizeMode: 'contain',
    width: scale(250)
  },
  register: {
    color: COLOR_BASE_PRIMARY_LIGHT
  }
  // rememberMe: {
  //   ...FONT_HEADLINE3_PRIMARY,
  //   color: COLOR_GREY,
  //   left: scale(55),
  //   marginTop: verticalScale(-70),
  //   fontSize: 14
  // }
});

export default styles;
