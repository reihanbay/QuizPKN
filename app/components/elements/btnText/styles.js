import { StyleSheet } from 'react-native';

import { COLOR_WHITE } from '../../../styles';

const container = {
  width: 140,
  height: 50,
  justifyContent: 'center',
  borderRadius: 10
};

export default StyleSheet.create({
  container: {
    ...container
  },
  icon: { alignSelf: 'center' },
  text: {
    color: COLOR_WHITE,
    fontWeight: '400',
    fontSize: 16
  },
  nav: {
    textAlign: 'center',
    color: COLOR_WHITE,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
