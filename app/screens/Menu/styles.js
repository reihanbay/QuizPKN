/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import { scale } from '../../utils/scaling';
import metrics from '../../constants/metrics';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginVertical: scale(10),
    flexDirection: 'row'
    // elevation: 1.0
  },
  bg: {
    height: '100%',
    resizeMode: 'stretch',
    width: '100%'
  },
  hijau: {
    backgroundColor: '#4EC6BA'
    // elevation: 1.0
  },
  ungu: {
    backgroundColor: '#B557D6'
    // elevation: 1.0
  },
  biru: {
    backgroundColor: '#4AA5D8'
    // elevation: 1.0
  },
  showImg: {
    marginHorizontal: scale(15),
    marginVertical: scale(15),
    width: scale(40),
    height: scale(40)
  },
  container: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  about: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: metrics.doubleBaseMargin,
    margin: 0,
    marginBottom: metrics.doubleBaseMargin,
    width: scale(300)
  },
  header: {
    alignSelf: 'center',
    marginTop: metrics.baseMargin
  },
  headerText: {
    fontSize: 22,
    fontWeight: '500',
    width: scale(300),
    color: COLOR_WHITE
  },
  headerText1: {
    fontSize: 22,
    fontWeight: 'bold',
    width: scale(300),
    color: COLOR_WHITE
  },
  headerText2: {
    fontSize: 20,
    fontWeight: 'normal',
    width: scale(300),
    color: COLOR_WHITE
  },
  logo: {
    alignSelf: 'center',
    height: scale(250),
    marginTop: scale(10),
    resizeMode: 'contain',
    width: scale(250)
  },
  text1: {
    color: COLOR_WHITE,
    fontWeight: 'bold',
    fontSize: 16
  },
  text2: {
    color: COLOR_WHITE,
    fontWeight: '100',
    fontSize: 13
  }
});

export default styles;
