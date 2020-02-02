import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    height: scale(50),
    width: scale(255),
    marginVertical: scale(10)
    // elevation: 1.0
  },
  container: {
    backgroundColor: COLOR_WHITE
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
  }
});

export default styles;
