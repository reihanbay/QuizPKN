import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  Platform,
  ImageBackground
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { noop } from '../../../utils';
import images from '../../../configs/images';

export default class Component extends React.Component {
  render() {
    const { onPress = noop, type, customContainer, customText2 } = this.props;
    const { customText1 } = this.props;
    const { title } = this.props;
    const { press } = this.props;
    let containerStyle = styles.container;
    let ComponentView = TouchableOpacity;
    const Background = ImageBackground;
    if (type.match(/flat-ripple|raised-ripple/) && Platform.OS === 'android') {
      ComponentView = TouchableNativeFeedback;
    }
    if (type.match(/flat|flat-ripple/)) {
      containerStyle = styles.containerFlat;
    }
    return (
      // <ComponentView style={[containerStyle, customContainer]} onPress={onPress}>
      //   <View style={[containerStyle, customContainer]}>
      //     <Text style={[textStyle, customText]}>{title}</Text>
      //   </View>
      // </ComponentView>
      <View style={[containerStyle, customContainer]}>
        <Background source={images.card} style={styles.Background}>
          <View style={styles.flex1}>
            <Text style={[styles.text, customText1]}>{title}</Text>
          </View>
          <View style={styles.flex2}>
            <ComponentView style={styles.touch} onPress={onPress}>
              <Text style={[styles.pressText, customText2]}>{press}</Text>
            </ComponentView>
          </View>
        </Background>
      </View>
    );
  }
}

Component.propTypes = {
  title: PropTypes.string.isRequired,
  press: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  customContainer: PropTypes.object,
  customText1: PropTypes.object,
  customText2: PropTypes.object,
  type: PropTypes.oneOf(['flat', 'flat-ripple', 'raised', 'raised-ripple'])
};

Component.defaultProps = {
  customContainer: {},
  customText1: {},
  customText2: {},
  type: 'raised'
};
