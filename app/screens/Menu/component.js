import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import images from '../../configs/images';
import I18n from '../../i18n';
import StatusBar from '../../components/elements/StatusBar';
import Button from '../../components/elements/btnMenu';
// import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // checked: false,
      // showPass: true,
      // username: '',
      // password: '',
      // disableButton: true
    };
  }
  _handleLogin = async () => {
    this.props.navigation.navigate('Home');
  };
  // _handleLogin = async () => {
  //   const { username, password } = this.state;
  //   const params = {
  //     username,
  //     password,
  //     gate: 'app-agree'
  //   };
  //   await ENDPOINT.login(params);
  //   this.props.navigation.navigate('Home');
  // };
  _handleUsername = async text => {
    await this.setState({ username: text });
    this.checkField();
  };
  _handlePassword = async text => {
    await this.setState({ password: text });
    this.checkField();
  };
  checkField() {
    const { username, password } = this.state;
    if (username === '' || password === '') {
      this.setState({ disableButton: true });
    } else {
      this.setState({ disableButton: false });
    }
  }
  render() {
    return (
      <MainScreen style={styles.container}>
        <StatusBar />
        <Image source={images.logo} style={styles.logo} />
        <Button
          onPress={this._handleLogin}
          customContainer={styles.button}
          title={I18n.t('signUp')}
          disabled={this.state.disableButton}
        />
        {/* <Button
          onPress={this._handleLogin}
          customContainer={styles.button}
          title={I18n.t('signUp')}
          disabled={this.state.disableButton}
        />
        <Button
          onPress={this._handleLogin}
          customContainer={styles.button}
          title={I18n.t('signUp')}
          disabled={this.state.disableButton}
        /> */}
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object
};
Component.defaultProps = {
  navigation: null
};
