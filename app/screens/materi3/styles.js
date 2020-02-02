/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import metrics from '../../constants/metrics';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    marginVertical: metrics.baseMargin
    // elevation: 1.0
  },
  container: {
    backgroundColor: COLOR_WHITE
  },
  containerText: {
    alignSelf: 'center',
    marginHorizontal: metrics.doubleBaseMargin
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
    fontSize: 24,
    color: '#4994B9',
    fontWeight: 'bold'
  },
  mentionedContent: {
    fontSize: 20,
    color: '#057370'
  },
  Content: {
    fontSize: 14,
    color: '#68BBB9',
    fontWeight: '300'
  },
  desc: {
    fontSize: 18,
    color: '#8F8F8F'
  },
  sectionTitle: {
    marginTop: metrics.doubleBaseMargin,
    marginVertical: metrics.baseMargin
  },
  section: {
    marginVertical: metrics.baseMargin
  },
  footerMarg: {
    marginBottom: scale(400)
  }
  // text: {
  //   fontWeight: 'normal'
  // }
});

export default styles;
