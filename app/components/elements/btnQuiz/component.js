/* eslint-disable no-shadow */
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import BackButton from '../../../../assets/svgs/Back';
import NextButton from '../../../../assets/svgs/Next';
import styles from './styles';
import { noop } from '../../../utils';

export default class Component extends React.Component {
  _renderIcon = () => {
    const { back, next } = this.props;
    let Component = <View />;
    if (next) {
      Component = <NextButton />;
    } else if (back) {
      Component = <BackButton />;
    }
    return <View style={styles.icon}>{Component}</View>;
  };
  render() {
    const { onPress = noop, backBtn, nextBtn, customContainer } = this.props;

    let buttonStyle = styles.container;
    const ComponentView = TouchableOpacity;
    if (backBtn) {
      buttonStyle = styles.containerBack;
    }
    if (nextBtn) {
      buttonStyle = styles.containerNext;
    }
    return (
      <ComponentView
        backBtn={backBtn}
        nextBtn={nextBtn}
        style={[buttonStyle, customContainer]}
        onPress={onPress}
      >
        <View style={[buttonStyle]}>{this._renderIcon()}</View>
      </ComponentView>
    );
  }
}

Component.propTypes = {
  next: PropTypes.bool,
  back: PropTypes.bool,
  nextBtn: PropTypes.bool,
  backBtn: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  customContainer: PropTypes.object
};

Component.defaultProps = {
  next: false,
  back: false,
  nextBtn: false,
  backBtn: false,
  customContainer: {}
};
