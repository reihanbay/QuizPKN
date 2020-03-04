/* eslint-disable no-shadow */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import BackButton from '../../../../assets/svgs/Back';
import NextButton from '../../../../assets/svgs/Next';
import styles from './styles';
import { noop } from '../../../utils';

export default class Component extends React.Component {
  _renderIcon = () => {
    const { back, next, text } = this.props;
    let Component = <View />;
    let Text = <Text />;
    if (next) {
      Component = <NextButton />;
    } else if (back) {
      Component = <BackButton />;
    } else if (text) {
      Text = <Text style={styles.nav}>{text}</Text>;
    }
    return <View style={styles.icon}>{Component || Text}</View>;
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
  text: PropTypes.bool,
  nextBtn: PropTypes.bool,
  backBtn: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  customContainer: PropTypes.object
};

Component.defaultProps = {
  next: false,
  back: false,
  text: false,
  nextBtn: false,
  backBtn: false,
  customContainer: {}
};
