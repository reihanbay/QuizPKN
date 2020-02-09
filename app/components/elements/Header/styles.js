import { StyleSheet, Platform } from 'react-native';
import { COLOR_WHITE, FONT_HEADLINE6_PRIMARY } from '../../../styles';
import metrics from '../../../constants/metrics';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    height: Platform.OS === 'ios' ? 44 : 85
  },
  centerContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftRightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: metrics.doubleBaseMargin
  },
  title: {
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_WHITE
  }
});
