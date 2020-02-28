import React from 'react';
import { Text, View, Image, StatusBar, ImageBackground } from 'react-native';

import styles from './styles';
import images from '../../configs/images';
// eslint-disable-next-line import/first
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    StatusBar.setHidden(true);

    if (data !== null) {
      this.props.navigation.navigate('Menu');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 4000)
    );
  render() {
    return (
      <ImageBackground source={images.bg.menu} style={styles.bg}>
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <Image source={images.ic} resizeMode="contain" style={styles.logo} />
          </View>
          <Text style={styles.appVersion}>E-Learn</Text>
        </View>
      </ImageBackground>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
