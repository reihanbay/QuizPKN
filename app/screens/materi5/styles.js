/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import metrics from '../../constants/metrics';

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
    resizeMode: 'stretch',
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
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  },
  Content: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '300'
  },
  desc: {
    fontSize: 16,
    color: '#FFF'
  },
  subSection: {
    fontSize: 14,
    color: '#fff'
  },
  sectionTitle: {
    marginTop: metrics.doubleBaseMargin,
    marginVertical: metrics.baseMargin
  },
  section: {
    marginVertical: metrics.baseMargin
  },
  footerMarg: {
    marginBottom: metrics.doubleBaseMargin
  }
  // text: {
  //   fontWeight: 'normal'
  // }
});

export default styles;
