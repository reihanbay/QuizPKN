// import React from 'react';
// import { Image } from 'react-native';
// import PropTypes from 'prop-types';
// 
// import styles from './styles';
// import images from '../../configs/images';

// import Button from '../../components/elements/Button';
// // import { ENDPOINT } from '../../configs';

// export default class Component extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   _handleCourse = async () => {
//     this.props.navigation.navigate('Course');
//   };
//   _handleExam = async () => {
//     this.props.navigation.navigate('Exam');
//   };
//   _handleQuiz = async () => {
//     this.props.navigation.navigate('Quiz');
//   };
//   _handleAbout = async () => {
//     this.props.navigation.navigate('About');
//   };

//   render() {
//     return (
//       <MainScreen style={styles.container}>
//         <StatusBar />
//         <Image source={images.logo} style={styles.logo} />
//         <Button
//           onPress={this._handleLogin}
//           customContainer={styles.button}
//           customText={styles.text}
//           title={I18n.t('menu.course.text')}
//           isUpperCase={false}
//         />
//         <Button
//           onPress={this._handleLogin}
//           customContainer={styles.button}
//           customText={styles.text}
//           title={I18n.t('menu.exam')}
//           isUpperCase={false}
//         />
//         <Button
//           onPress={this._handleLogin}
//           customContainer={styles.button}
//           customText={styles.text}
//           title={I18n.t('menu.quiz')}
//           isUpperCase={false}
//         />
//         <Button
//           onPress={this._handleLogin}
//           customContainer={styles.button}
//           customText={styles.text}
//           title={I18n.t('menu.aboutUs')}
//           isUpperCase={false}
//         />
//       </MainScreen>
//     );
//   }
// }

// Component.propTypes = {
//   navigation: PropTypes.object
// };
// Component.defaultProps = {
//   navigation: null
// };
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Container, Content }
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import images from '../../configs/images';
import style from './styles.js';
import I18n from '../../i18n';
import StatusBar from '../../components/elements/StatusBar';

export default class components extends React.Component{
  
  _question = () =>(
    <View><Text>blalala</Text></View>
  )

  }

  render(){
    return (
      <MainScreen>
        <Container>
          <ImageBackground source={images.bg.quiz}>
          <Content>
          {this._question)}
          </Content>
          </ImageBackground>
        </Container>
      </MainScreen>
    );
  }
}

Component.propTypes={
  navigation: PropTypes.object
};
Component.defaultProps={
  navigation: null
};