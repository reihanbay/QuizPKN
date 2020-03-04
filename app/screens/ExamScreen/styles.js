/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK } from '../../styles';
import { scale } from '../../utils/scaling';
import metrics from '../../constants/metrics';

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
  score: {
    color: COLOR_BLACK,
    fontSize: 16,
    fontWeight: 'bold'
  },
  header: {
    color: COLOR_BLACK,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: scale(10)
  },
  line: {
    borderWidth: 1,
    borderColor: COLOR_BLACK,
    width: scale(270),
    marginVertical: metrics.baseMargin
  },
  result: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    width: scale(310),
    height: scale(220),
    borderRadius: 10
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolbar: {
    backgroundColor: '#81c04d',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  toolbarButton: {
    width: 55,
    color: '#fff',
    textAlign: 'center'
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1
  },
  point: {
    color: COLOR_BLACK,
    fontSize: 60,
    fontWeight: 'bold'
  },
  back: {
    marginRight: metrics.doubleBaseMargin,
    backgroundColor: '#D95353'
  },
  next: {
    backgroundColor: '#4EC65A'
  },
  nav: {
    color: COLOR_WHITE,
    fontSize: 20,
    fontWeight: '400'
  },
  btn: {
    marginVertical: scale(50),
    flexDirection: 'row',
    alignSelf: 'center'
  }
});

export default styles;
