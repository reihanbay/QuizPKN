import React from 'react';
import { Text, View, Image, StatusBar, ImageBackground } from 'react-native';
import styles from './styles';
import images from '../../configs/images';
// eslint-disable-next-line import/first
import PropTypes from 'prop-types';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../constants/storageKey';

export default class Component extends React.Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    const auth = await storage.get(STORAGE_KEY.TOKEN_LOGIN);

    StatusBar.setHidden(true);
    if (data !== null && JSON.stringify(auth) === JSON.stringify({})) {
      this.props.navigation.navigate('Login');
    } else {
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
