/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/no-string-refs */
/* eslint-disable default-case */
import React from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { COLOR_WHITE } from '../../../styles';
import metrics from '../../../constants/metrics';
import { scale } from '../../../utils/scaling';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }

  _onPress() {
    this.props.onPress(!this.state.status);
    this.setState({ status: !this.state.status });
    switch (this.props.effect) {
      case 'bounce':
        this.refs.view.bounce(800);
        break;
      case 'flash':
        this.refs.view.flash(800);
        break;
      case 'jello':
        this.refs.view.jello(800);
        break;
      case 'pulse':
        this.refs.view.pulse(800);
        break;
      case 'rotate':
        this.refs.view.rotate(800);
        break;
      case 'rubberBand':
        this.refs.view.rubberBand(800);
        break;
      case 'shake':
        this.refs.view.shake(800);
        break;
      case 'swing':
        this.refs.view.swing(800);
        break;
      case 'tada':
        this.refs.view.tada(800);
        break;
      case 'wobble':
        this.refs.view.wobble(800);
        break;
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this._onPress()}>
        <Animatable.View
          ref="view"
          style={{
            marginVertical: metrics.baseMargin,
            justifyContent: 'center',
            alignSelf: 'center',
            padding: 0,
            width: 300,
            height: 40,
            borderWidth: 2,
            lineHeight: 40,
            borderColor: this.state.status ? this.props.onColor : COLOR_WHITE,
            backgroundColor: this.state.status ? this.props.onColor : 'transparent',
            borderRadius: 10
          }}
        >
          <Text
            style={{
              color: this.state.status ? 'white' : 'white',
              fontWeight: 'bold',
              fontSize: 14,
              marginHorizontal: metrics.baseMargin,
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: scale(215)
            }}
          >
            {this.props.text}
          </Text>
        </Animatable.View>
      </TouchableWithoutFeedback>
    );
  }
}
Component.propTypes = {
  text: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
  // status: PropTypes.bool
  // onPress: PropTypes.bool
};

Component.defaultProps = {
  // onPress: !this.state.status
};
