/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable consistent-return */
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import MainScreen from '../../layouts/MainScreen';
import { IMAGES } from '../../../configs';
import Animbutton from '../../elements/BtnAnimate';
import Button from '../../elements/btnQuiz';
import { quizData } from '../../../data/jsonExam';
import styles from './styles';
import { scale } from '../../../utils/scaling';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.score = 0;
    this.state = {
      currentQuestion: 0, // id penomoran soal//
      myAnswer: null,
      options: [],
      disabled: true
    };
  }
  loadQuizData = () => {
    console.log(quizData[0].question);
    this.setState(() => ({
      questions: quizData[this.state.currentQuestion].question,
      answer: quizData[this.state.currentQuestion].answer,
      options: quizData[this.state.currentQuestion].options
    }));
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer } = this.state;

    if (myAnswer === answer) {
      this.score += 1;
    }
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => ({
        disabled: true,
        questions: quizData[this.state.currentQuestion].question,
        options: quizData[this.state.currentQuestion].options,
        answer: quizData[this.state.currentQuestion].answer
      }));
    }
  }
  // check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === quizData.length - 1) {
      this.props.examFinish(this.score * 10);
    }
  };
  render() {
    const { options, myAnswer, currentQuestion } = this.state;
    return (
      <MainScreen>
        <Container>
          <ImageBackground source={IMAGES.bg.quiz} style={styles.bg}>
            <Content style={styles.Container}>
              <View className="App">
                <View style={styles.questContainer}>
                  <Text style={styles.quest}>{this.state.questions}</Text>
                </View>
                {/* <Text>{`Questions ${currentQuestion}  out of ${quizData.length - 1} remaining `}</Text> */}
                {options.map(option => (
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
                {currentQuestion < quizData.length - 1 && (
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
                {currentQuestion === quizData.length - 1 && (
                  <View style={styles.btn}>
                    {/* <Button back backBtn customContainer={styles.back} onPress={() => this.prev()} /> */}
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
  examFinish: PropTypes.bool
};
Component.defaultProps = {
  examFinish: false
};
