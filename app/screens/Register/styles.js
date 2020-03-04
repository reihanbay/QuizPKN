/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { FONT_BODY1_PRIMARY, COLOR_WHITE, COLOR_BASE_PRIMARY_LIGHT } from '../../styles';
import { scale, verticalScale } from '../../utils/scaling';
import metrics from '../../constants/metrics';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginVertical: metrics.baseMargin
  },
  checkBox: {
    left: scale(20),
    marginBottom: verticalScale(40),
    opacity: 0.4
  },
  bg: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
  container: {
    backgroundColor: '#6066D0'
  },
  forgotPassword: {
    ...FONT_BODY1_PRIMARY,
    justifyContent: 'flex-start',
    color: COLOR_WHITE,
    fontSize: 13,
    marginHorizontal: scale(25),
    width: scale(300)
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
    height: scale(210),
    marginTop: scale(15),
    marginVertical: metrics.baseMargin,
    resizeMode: 'contain',
    width: scale(260)
  },
  register: {
    color: COLOR_BASE_PRIMARY_LIGHT,
    fontWeight: 'bold'
  },
  header: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: metrics.doubleBaseMargin
  },
  header1: {
    color: COLOR_WHITE,
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: metrics.baseMargin
  },
  header2: {
    color: COLOR_WHITE,
    fontSize: 14,
    fontWeight: '100',
    marginBottom: metrics.doubleBaseMargin
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
