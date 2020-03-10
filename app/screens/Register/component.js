/* eslint-disable no-console */
import React from 'react';
import { Image, Text, ToastAndroid, ImageBackground, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import images from '../../configs/images';
import I18n from '../../i18n';
import StatusBar from '../../components/elements/StatusBar';
import BasicTitle from '../../components/elements/BasicTitle';
import Button from '../../components/elements/Button';
import { ENDPOINT } from '../../configs';
// import { STORAGE_KEY } from '../../constants';
// import storage from '../../utils/storage';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      username: '',
      fullname: '',
      email: '',
      password: '',
      // confirmPass: '',
      disableButton: true,
      isLoading: false
    };
  }
  _handleLogin = async () => {
    this.props.navigation.navigate('Login');
  };
  _handleRegis = async () => {
    const { username, fullname, email, password } = this.state;
    const params = { email, password, username, fullname };
    try {
      this.setState({ isLoading: true });
      console.log({ params });
      const result = await ENDPOINT.register(params);
      console.log({ result });
      if (result.code === 201) {
        ToastAndroid.show('Your Account has Registered', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Failed', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('network error', ToastAndroid.SHORT);
    } finally {
      this.setState({ isLoading: false });
    }
    this.props.navigation.navigate('Login');
  };

  // try {
  //   this.setState({ isLoading: true });
  //   console.log({ params });
  //   const result = await ENDPOINT.register(params);
  //   console.log({ result });
  //   // if (result.expires_in === 3600)
  //   if (result.code === 200) {
  //     await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.data);
  //     ToastAndroid.show('Your Account has Registered', ToastAndroid.SHORT);
  //     this._handleLogin();
  //   } else {
  //     ToastAndroid.show('Failed to Register', ToastAndroid.SHORT);
  //   }
  // } catch (error) {
  //   ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
  // } finally {
  //   this.setState({ isLoading: false });
  // }

  // };
  _handleShowPass = () => {
    this.setState({ showPass: !this.state.showPass });
  };
  _handleEmail = async text => {
    await this.setState({ email: text });
    this.checkField();
  };
  _handlePassword = async text => {
    await this.setState({ password: text });
    this.checkField();
  };
  _handleUsName = async text => {
    await this.setState({ username: text });
    this.checkField();
  };
  _handleFullName = async text => {
    await this.setState({ fullname: text });
    this.checkField();
  };
  // _handleConfirmPass = async text => {
  //   await this.setState({ confirmPass: text });
  //   this.checkField();
  // };
  checkField() {
    const { username, fullname, email, password } = this.state;
    if (email !== '' && password !== '' && username !== '' && fullname !== '') {
      this.setState({ disableButton: false });
      // if (confirmPass === password) {

      // } else {
      //   ToastAndroid.show('Password must match', ToastAndroid.SHORT);
      // }
    } else {
      // ToastAndroid.show('Please fill all the credentials', ToastAndroid.SHORT);
      this.setState({ disableButton: true });
    }
  }

  render() {
    const { isLoading } = this.state;
    return (
      <MainScreen isLoading={isLoading} style={styles.container}>
        <StatusBar />
        <ImageBackground source={images.bg.login} style={styles.bg}>
          <ScrollView>
            <Image source={images.logo} style={styles.logo} />
            <Text style={[styles.header, styles.header1]}>{I18n.t('header.header1')}</Text>
            <Text style={[styles.header, styles.header2]}>{I18n.t('header.header2')}</Text>
            <BasicTitle
              customContainer={styles.inputBoxName}
              customTextInput={styles.inputName}
              label={I18n.t('username')}
              image={images.user}
              onChangeText={this._handleUsName}
            />
            <BasicTitle
              customContainer={styles.inputBoxName}
              customTextInput={styles.inputName}
              label={I18n.t('fullname')}
              image={images.user}
              onChangeText={this._handleFullName}
            />
            <BasicTitle
              customContainer={styles.inputBoxName}
              customTextInput={styles.inputName}
              label={I18n.t('email')}
              image={images.user}
              onChangeText={this._handleEmail}
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
            {/* <BasicTitle
              customContainer={styles.inputBoxPass}
              customTextInput={styles.inputPass}
              label={I18n.t('confPassword')}
              password
              secureTextEntry={this.state.showPass}
              image={images.lock}
              onPressShowPass={this._handleShowPass}
              onPressHiddenPass={this._handleShowPass}
              onChangeText={this._handleConfirmPass}
            /> */}
            <Button
              onPress={this._handleRegis}
              customContainer={styles.button}
              title={I18n.t('signUp')}
              disabled={this.state.disableButton}
            />
            <View style={{ marginVertical: 10 }}>
              <Text style={styles.forgotPassword}>
                {I18n.t('Have')}
                <Text onPress={this._handleLogin} style={styles.register}>
                  {'  '}
                  {I18n.t('signIn')}
                </Text>
              </Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
