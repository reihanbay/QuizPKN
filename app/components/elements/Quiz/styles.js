/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../../styles';
import { scale } from '../../../utils/scaling';
import metrics from '../../../constants/metrics';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    height: scale(50),
    width: scale(255),
    marginVertical: scale(10)
    // elevation: 1.0
  },
  questContainer: {
    width: scale(300),
    alignSelf: 'center',
    marginTop: metrics.doubleBaseMargin
  },
  quest: {
    fontSize: 16,
    color: COLOR_WHITE
  },
  bg: {
    height: '100%',
    resizeMode: 'stretch',
    width: '100%'
  },
  back: {
    marginRight: metrics.doubleBaseMargin
  },
  option: {
    width: scale(300),
    height: scale(40),
    justifyContent: 'center',
    padding: 0,
    borderWidth: 2,
    borderRadius: 5,
    lineHeight: 40,
    alignSelf: 'center',
    marginVertical: scale(5),
    borderColor: COLOR_WHITE,
    backgroundColor: 'transparent'
  },
  txtOption: {
    color: COLOR_WHITE,
    fontWeight: 'bold',
    fontSize: 14,
    marginHorizontal: metrics.baseMargin,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: scale(215)
  },
  container: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
    alignItems: 'center'
  },
  btn: {
    marginVertical: scale(50),
    flexDirection: 'row',
    alignSelf: 'center'
  },
  logo: {
    alignSelf: 'center',
    height: scale(250),
    marginTop: scale(25),
    resizeMode: 'contain',
    width: scale(250)
  },
  text: {
    fontWeight: 'normal'
  },
  bahas: {
    width: scale(300),
    justifyContent: 'flex-start',
    margin: metrics.doubleBaseMargin
  },
  titlePembahasan: {
    color: '#FCA82F',
    fontSize: 18,
    marginBottom: metrics.baseMargin
  },
  pembahasan: {
    color: '#FCA82F',
    fontSize: 16
  }
});

export default styles;
