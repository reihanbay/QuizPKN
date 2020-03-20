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
  WebViewStyle: {
    marginTop: 10,
    marginBottom: 20
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
    resizeMode: 'contain',
    width: '100%'
  },
  title: {
    marginVertical: metrics.doubleBaseMargin,
    marginHorizontal: 40
  },
  // eslint-disable-next-line react-native/no-color-literals
  titleText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  },
  mentionedContent: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '300'
  },
  Content: {
    fontSize: 14,
    color: '#68BBB9',
    fontWeight: '300'
  },
  desc: {
    fontSize: 18,
    color: '#FFF'
  },
  sectionTitle: {
    marginTop: metrics.doubleBaseMargin,
    marginVertical: metrics.baseMargin
  },
  section: {
    marginVertical: metrics.baseMargin
  },
  footerMarg: {
    marginBottom: scale(60)
  }
  // text: {
  //   fontWeight: 'normal'
  // }
});

export default styles;
