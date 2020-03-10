/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import metrics from '../../constants/metrics';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginVertical: metrics.baseMargin,
    flexDirection: 'row'
    // elevation: 1.0
  },
  container: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  bg: {
    height: '100%',
    resizeMode: 'stretch',
    width: '100%'
  },
  title: {
    marginVertical: metrics.baseMargin,
    marginHorizontal: scale(25),
    justifyContent: 'flex-start'
  },
  // eslint-disable-next-line react-native/no-color-literals
  titleText: {
    fontSize: 22,
    color: COLOR_WHITE,
    fontWeight: 'bold'
  },
  right: {
    width: scale(45),
    height: scale(45)
  },
  header: {
    width: scale(360),
    height: scale(85)
  },
  back: {
    marginVertical: scale(25),
    marginHorizontal: scale(40)
  },
  text1: {
    fontSize: 18,
    fontWeight: '500',
    color: COLOR_WHITE,
    width: scale(220),
    height: scale(40),
    marginLeft: scale(-20),
    marginHorizontal: metrics.doubleBaseMargin
  },
  showImg: {
    marginHorizontal: scale(15),
    marginVertical: scale(15),
    width: scale(40),
    height: scale(40)
  },
  me: {
    backgroundColor: '#D95353',
    shadowColor: '#D95353',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 7.0,

    elevation: 5
  },
  ji: {
    backgroundColor: '#D87D4A',
    shadowColor: '#D87D4A',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 7.0,

    elevation: 10
  },
  ku: {
    backgroundColor: '#E1D036',
    shadowColor: '#E1D036',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 7.0,

    elevation: 10
  },
  hi: {
    backgroundColor: '#4EC65A',
    shadowColor: '#4EC65A',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 7.0,

    elevation: 10
  },
  bi: {
    backgroundColor: '#4ABED8',
    shadowColor: '#4ABED8',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 7.0,

    elevation: 10
  },
  ni: {
    backgroundColor: '#5764D6',
    shadowColor: '#5764D6',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 7.0,

    elevation: 10
  }
});

export default styles;
