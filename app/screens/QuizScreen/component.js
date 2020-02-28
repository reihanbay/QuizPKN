/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-plusplus */
// import React from 'react';
// import { View, ImageBackground, ActivityIndicator, Text } from 'react-native';
// import { Container, Content } from 'native-base';
// import PropTypes from 'prop-types';
// import Answer from '../../components/elements/BtnAnswer';
// import MainScreen from '../../components/layouts/MainScreen';
// import { IMAGES, ENDPOINT } from '../../configs';
// import styles from './styles';
// import Button from '../../components/elements/btnQuiz';
// // import I18n from '../../i18n';
// // import StatusBar from '../../components/elements/StatusBar';

// export default class Component extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       next: true,
//       nextBtn: true,
//       backBtn: true,
//       back: true,
//       // pilA: '',
//       // pilB: '',
//       // pilC: '',
//       // pilD: '',
//       data: []
//       // jsonData: ''
//     };
//   }
//   componentDidMount() {
//     console.log('ComponentDidmount Sedang Berjalan');
//     const urlFetch = fetch('http://34.238.41.114:8080/api/quiz/all', { method: 'GET' });
//     console.log('Fetch data sedang berjalan');
//     urlFetch
//       .then(response => {
//         if (response.status === 200) response.json();
//       })
//       .then(resJson => {
//         console.log('Mengatur State.data');
//         this.setState({
//           data: resJson.question
//         });
//       });
//   }
//   render() {
//     //   if (this.state.isLoading) {
//     //     return (
//     //         <View style={styles.mainContainer}>
//     //             <ActivityIndicator />
//     //         </View>
//     //     )
//     // } else {
//     console.log(`Render lifecycle: ${JSON.stringify(this.state.data)}`);
//     return (
//       <MainScreen>
//         <Container>
//           <ImageBackground source={IMAGES.bg.quiz} style={styles.bg}>
//             <Content style={styles.Container}>
//               <View style={styles.questContainer}>
//                 <Text style={styles.quest}>{this.state.data}</Text>
//               </View>
//               <Answer title="LoremIpsumColor Si JaMet" />
//               <Answer title="LoremIpsumColor Si JaMet" />
//               <Answer title="LoremIpsumColor Si JaMet" />
//               <Answer title="LoremIpsumColor Si JaMet" />
//               <View style={styles.btn}>
//                 <Button back={this.state.back} backBtn={this.state.backBtn} customContainer={styles.back} />
//                 <Button next={this.state.next} nextBtn={this.state.nextBtn} customContainer={styles.next} />
//               </View>
//             </Content>
//           </ImageBackground>
//         </Container>
//       </MainScreen>
//     );
//   }
// }

// Component.propTypes = {
//   // isLoading: true,
//   navigation: PropTypes.object
// };
// Component.defaultProps = {
//   navigation: null
// };
import React from 'react';
import { StatusBar, TouchableOpacity, View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Quiz from '../../components/elements/Quiz';
import IMAGES from '../../configs/images';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizFinish: false,
      score: 0
    };
  }
  _onPressBack = () => {
    this.props.navigation.goBack();
  };
  _quizFinish(score) {
    this.setState({ quizFinish: true, score });
  }
  _scoreMessage(score) {
    if (score <= 30) {
      return (
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Congratulations!</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="trophy" size={40} color="white" />
          </View>
          <View style={styles.line} />
          <Text style={styles.score}>Score:</Text>
          <Text style={styles.point}>{score} </Text>
        </View>
      );
    } else if (score > 30 && score < 60) {
      return (
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Congratulations!</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="trophy" size={40} color="white" />
            <Icon name="trophy" size={40} color="white" />
          </View>
          <View style={styles.line} />
          <Text style={styles.score}>Score:</Text>
          <Text style={styles.point}>{score} </Text>
        </View>
      );
    } else if (score >= 60) {
      return (
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Congratulations!</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="trophy" size={40} color="white" />
            <Icon name="trophy" size={40} color="white" />
            <Icon name="trophy" size={40} color="white" />
          </View>
          <View style={styles.line} />
          <Text style={styles.score}>Score:</Text>
          <Text style={styles.point}>{score} </Text>
        </View>
      );
    }
  }
  render() {
    return (
      <ImageBackground style={styles.bg} source={IMAGES.bg.quiz}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          {/* <View style={styles.toolbar}>
          <TouchableOpacity onPress={this._onPressBack}>
            <Text style={styles.toolbarButton}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.toolbarTitle} />
          <Text style={styles.toolbarButton} />
        </View> */}

          {this.state.quizFinish ? (
            <View style={styles.container}>
              <View style={styles.result}>{this._scoreMessage(this.state.score)}</View>
            </View>
          ) : (
            <Quiz quizFinish={score => this._quizFinish(score)} />
          )}
        </View>
      </ImageBackground>
    );
  }
}
Component.propTypes = {
  // isLoading: true,
  navigation: PropTypes.object
};
Component.defaultProps = {
  navigation: null
};
