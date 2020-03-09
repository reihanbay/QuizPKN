/* eslint-disable no-shadow */
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { noop } from '../../../utils';

export default class Component extends React.Component {
  _renderText = () => {
    const { text } = this.props;
    const Component = <Text style={styles.nav}>{text}</Text>;
    return Component;
  };
  render() {
    const { onPress = noop, customContainer } = this.props;
    const buttonStyle = styles.container;
    const ComponentView = TouchableOpacity;
    return (
      <ComponentView style={[buttonStyle, customContainer]} onPress={onPress}>
        <View style={buttonStyle}>{this._renderText()}</View>
      </ComponentView>
    );
  }
}

Component.propTypes = {
  text: PropTypes.isRequired,
  onPress: PropTypes.func.isRequired,
  customContainer: PropTypes.object
};

Component.defaultProps = {
  customContainer: {}
};
