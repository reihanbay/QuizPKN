/* eslint-disable no-console */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable consistent-return */
import React from 'react';
import { View, Text, ImageBackground, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Container, Content } from 'native-base';
import MainScreen from '../../layouts/MainScreen';
import { IMAGES } from '../../../configs';
import Animbutton from '../../elements/BtnAnimate';
import Button from '../../elements/btnQuiz';
import styles from './styles';
import { scale } from '../../../utils/scaling';
import Loading from '../../elements/Loading';

console.disableYellowBox = true;

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.score = 0;
    this.state = {
      loading: true,
      currentQuestion: 0, // id penomoran soal//
      myAnswer: null,
      disabled: true
      // data: []
    };
  }

  componentDidMount() {
    this.loadQuizData();
  }

  loadQuizData = () => {
    Axios.get('http://3.84.200.157/api/quiz')
      .then(res => {
        this.setState({
          data: res.data.data,
          loading: false
        });
      })
      .catch(err => {
        this.setState({
          data: err.response
        });
        ToastAndroid.show('Network Error', ToastAndroid.SHORT);
      });
  };

  nextQuestionHandler = () => {
    const { myAnswer, currentQuestion, data } = this.state;

    if (myAnswer === data[currentQuestion].answer) {
      this.score += 1;
    }
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.currentQuestion !== prevState.currentQuestion) {
  //     this.setState(() => ({
  //       disabled: true,
  //       questions: quizData[this.state.currentQuestion].question,
  //       options: quizData[this.state.currentQuestion].options,
  //       answer: quizData[this.state.currentQuestion].answer
  //     }));
  //   }
  // }
  // check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === this.state.data.length - 1) {
      this.props.quizFinish(this.score * 10);
    }
  };
  render() {
    const { loading, myAnswer, currentQuestion, data } = this.state;
    return loading ? (
      <MainScreen style={{ justifyContent: 'center', alignitems: 'center' }}>
        <Loading />
      </MainScreen>
    ) : (
      <MainScreen>
        <Container>
          <ImageBackground source={IMAGES.bg.quiz} style={styles.bg}>
            <Content style={styles.Container}>
              <View className="App">
                <View style={styles.questContainer}>
                  <Text style={styles.quest}>{data[currentQuestion].question}</Text>
                </View>
                {/* <Text>{`Questions ${currentQuestion}  out of ${quizData.length - 1} remaining `}</Text> */}
                {data[currentQuestion].options.map(option => (
                  <View key={option.id} style={{ margin: 10 }}>
                    <Animbutton
                      countCheck={this.state.countCheck}
                      onColor="#FCA82F"
                      effect="flash"
                      customBtn={{
                        marginVertical: scale(5),
                        justifyContent: 'center',
                        alignSelf: 'center',
                        padding: 0,
                        width: 300,
                        height: 40,
                        borderWidth: 2,
                        lineHeight: 40,
                        borderColor: 'white',
                        backgroundColor: myAnswer === option ? '#FCA82F' : null,
                        borderRadius: 10
                      }}
                      onPress={() => this.checkAnswer(option)}
                      text={option}
                    />
                  </View>
                ))}
                {currentQuestion < data.length - 1 && (
                  <View style={styles.btn}>
                    <Button
                      next
                      nextBtn
                      customContainer={styles.next}
                      disabled={this.state.disabled}
                      onPress={this.nextQuestionHandler}
                    />
                  </View>
                )}
                {currentQuestion === data.length - 1 && (
                  <View style={styles.btn}>
                    <Button
                      next
                      nextBtn
                      customContainer={styles.next}
                      disabled={this.state.disabled}
                      onPress={this.finishHandler}
                    />
                  </View>
                )}
              </View>
            </Content>
          </ImageBackground>
        </Container>
      </MainScreen>
    );
  }
}
Component.propTypes = {
  quizFinish: PropTypes.bool
};
Component.defaultProps = {
  quizFinish: false
};
