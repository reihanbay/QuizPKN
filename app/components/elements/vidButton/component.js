import React from 'react';
import { TouchableOpacity, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import images from '../../../configs/images';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('vidCourse');
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress} style={styles.container}>
        <ImageBackground style={styles.icon} source={images.vid} />
      </TouchableOpacity>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
