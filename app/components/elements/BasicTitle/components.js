import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { COLOR_WHITE, COLOR_EVENT_ERROR } from '../../../styles';
import { noop } from '../../../utils';

export default class Component extends React.Component {
  render() {
    const {
      image,
      label,
      editable,
      errorMessage,
      customContainer,
      customError,
      customLabel,
      customTextInput,
      onPressTextInput,
      onPressShowPass,
      onPressHiddenPass
    } = this.props;
    return (
      <View style={[styles.container, customContainer]}>
        <Text style={[styles.labelText, customLabel]}>{label}</Text>
        <TouchableOpacity style={styles.inputContainer} onPress={onPressTextInput}>
          <TextInput
            style={[editable ? styles.textInput : styles.textInputInactive, customTextInput]}
            underlineColorAndroid={errorMessage === null ? COLOR_WHITE : COLOR_EVENT_ERROR}
            pointerEvents="none"
            mode="outlined"
            editable={false}
            {...this.props}
          />
          <TouchableOpacity
            style={styles.showPass}
            onPressIn={onPressShowPass}
            onPressOut={onPressHiddenPass}
          >
            {image !== null && <Image source={image} resizeMode="contain" style={styles.image} />}
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={[styles.errorText, customError]}>{errorMessage}</Text>
      </View>
    );
  }
}

Component.propTypes = {
  customContainer: PropTypes.number,
  customError: PropTypes.object,
  customLabel: PropTypes.object,
  customTextInput: PropTypes.object,
  onPressTextInput: PropTypes.func,
  label: PropTypes.string,
  editable: PropTypes.bool,
  errorMessage: PropTypes.string,
  image: PropTypes.number,
  onPressShowPass: PropTypes.object,
  onPressHiddenPass: PropTypes.object
};

Component.defaultProps = {
  customContainer: null,
  customError: null,
  customLabel: null,
  customTextInput: null,
  onPressTextInput: noop,
  label: 'Field Title',
  editable: true,
  errorMessage: null,
  image: null,
  onPressShowPass: noop,
  onPressHiddenPass: noop
};
