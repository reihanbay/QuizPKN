/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';
import metrics from '../../constants/metrics';

const scoreCircleSize = 300;
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
  // next: {
  //   marginLeft: metrics.baseMargin
  // },
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
  score: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: scale(10)
  },
  line: {
    borderWidth: 1,
    borderColor: COLOR_WHITE,
    width: scale(270),
    marginVertical: metrics.baseMargin
  },
  result: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCA82F',
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
    justifyContent: 'center',
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
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold'
  }
});

export default styles;
