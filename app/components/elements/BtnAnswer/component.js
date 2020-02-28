import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { noop } from '../../../utils';

export default class Component extends React.Component {
  render() {
    const { onPress = noop, customContainer, customText1 } = this.props;
    const { title } = this.props;
    const containerStyle = styles.container;
    const textStyle1 = styles.text1;
    const ComponentView = TouchableOpacity;
    return (
      <ComponentView style={[containerStyle, customContainer]} onPress={onPress}>
        <View style={[containerStyle, customContainer]}>
          <View style={styles.showText}>
            <Text style={[textStyle1, customText1]}>{title}</Text>
          </View>
        </View>
      </ComponentView>
    );
  }
}

Component.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  customContainer: PropTypes.object,
  customText1: PropTypes.object
};

Component.defaultProps = {
  customContainer: {},
  customText1: {}
};
