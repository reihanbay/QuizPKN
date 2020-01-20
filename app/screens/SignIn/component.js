import React from 'react';
import { Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import images from '../../configs/images';
import I18n from '../../i18n';
import StatusBar from '../../components/elements/StatusBar';
import BasicTitle from '../../components/elements/BasicTitle';
import Button from '../../components/elements/Button';
// import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      showPass: true,
      username: '',
      password: '',
      disableButton: true
    };
  }
  _handleLogin = async () => {
    this.props.navigation.navigate('Home');
  };
  _handleRegister = async () => {
    this.props.navigation.navigate('Register');
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
  _handleCheckbox = () => {
    this.setState({ checked: !this.state.checked });
  };
  _handleShowPass = () => {
    this.setState({ showPass: !this.state.showPass });
  };
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
        <BasicTitle
          customContainer={styles.inputBoxName}
          customTextInput={styles.inputName}
          label={I18n.t('username')}
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
        <BasicTitle
          customContainer={styles.inputBoxPass}
          customTextInput={styles.inputPass}
          label={I18n.t('confPassword')}
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
          title={I18n.t('signUp')}
          disabled={this.state.disableButton}
        />
        <Text style={styles.forgotPassword}>
          {I18n.t('Have')}
          <Text onPress={this._handleRegister} style={styles.register}>
            {'  '}
            {I18n.t('signIn')}
          </Text>
        </Text>
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
