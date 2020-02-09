import React from 'react';
import { Image, Text, ToastAndroid, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import images from '../../configs/images';
import I18n from '../../i18n';
import StatusBar from '../../components/elements/StatusBar';
import BasicTitle from '../../components/elements/BasicTitle';
import Button from '../../components/elements/Button';
import { ENDPOINT } from '../../configs';
import { STORAGE_KEY } from '../../constants';
import storage from '../../utils/storage';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // checked: false,
      showPass: true,
      email: '',
      password: '',
      disableButton: true,
      isLoading: false
    };
  }
  // _handleLogin = async () => {
  //   this.props.navigation.navigate('Menu');
  // };
  _handleRegister = async () => {
    this.props.navigation.navigate('SignIn');
  };
  _handleLogin = async () => {
    const { email, password } = this.state;
    const params = { email, password };
    try {
      this.setState({ isLoading: true });
      const result = await ENDPOINT.login(params);
      if (result.code === 200) {
        await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.data);
        this.props.navigation.navigate('Menu');
      } else {
        ToastAndroid.show('Failed to login', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  // _handleCheckbox = () => {
  //   this.setState({ checked: !this.state.checked });
  // };
  // _handleShowPass = () => {
  //   this.setState({ showPass: !this.state.showPass });
  // };
  _handleUsername = async text => {
    await this.setState({ email: text });
    this.checkField();
  };
  _handlePassword = async text => {
    await this.setState({ password: text });
    this.checkField();
  };
  checkField() {
    const { email, password } = this.state;
    if (email === '' || password === '') {
      this.setState({ disableButton: true });
    } else {
      this.setState({ disableButton: false });
    }
  }
  render() {
    const { isLoading } = this.state;
    return (
      <MainScreen isLoading={isLoading} style={styles.container}>
        <StatusBar />
        <ImageBackground source={images.bg.login} style={styles.bg}>
          <Image source={images.logo} style={styles.logo} />
          <Text style={[styles.header, styles.header1]}>{I18n.t('header.header1')}</Text>
          <Text style={[styles.header, styles.header2]}>{I18n.t('header.header2')}</Text>
          <BasicTitle
            customContainer={styles.inputBoxName}
            customTextInput={styles.inputName}
            label={I18n.t('email')}
            image={images.user}
            onChangeText={this._handleUsername}
          />
          <BasicTitle
            customContainer={styles.inputBoxPass}
            customTextInput={styles.inputPass}
            label={I18n.t('password')}
            password
            secureTextEntry={this.state.showPass}
            image={images.lock}
            onPressShowPass={this._handleShowPass}
            onPressHiddenPass={this._handleShowPass}
            onChangeText={this._handlePassword}
          />
          {/* <CheckBox
          style={styles.checkBox}
          value={this.state.checked}
          title="Click Here"
          onValueChange={this._handleCheckbox}
        />
        <Text style={styles.rememberMe}>{I18n.t('rememberMe')}</Text> */}
          <Button
            onPress={this._handleLogin}
            customContainer={styles.button}
            title={I18n.t('login')}
            disabled={this.state.disableButton}
          />
          <Text style={styles.forgotPassword}>
            {I18n.t('dontHave')}
            <Text onPress={this._handleRegister} style={styles.register}>
              {'  '}
              {I18n.t('signUp')}
            </Text>
          </Text>
        </ImageBackground>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
// Component.defaultProps = {
//   navigation: null
// };
