import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import metrics from '../../constants/metrics';

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    marginVertical: metrics.baseMargin
    // elevation: 1.0
  },
  container: {
    backgroundColor: COLOR_WHITE
  },
  bg: {
    height: '100%',
    resizeMode: 'stretch',
    width: '100%'
  },
  title: {
    marginVertical: metrics.doubleBaseMargin,
    marginHorizontal: 40
  },
  // eslint-disable-next-line react-native/no-color-literals
  titleText: {
    fontSize: 30,
    color: '#4994B9',
    fontWeight: 'bold'
  }
  // text: {
  //   fontWeight: 'normal'
  // }
});

export default styles;
