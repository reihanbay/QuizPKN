import React from 'react';
import { TouchableOpacity, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import images from '../../../configs/images';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('Course');
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress} style={styles.container}>
        <ImageBackground style={styles.icon} source={images.course} />
      </TouchableOpacity>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
