/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable consistent-return */
import React from 'react';
import { View, Text, ImageBackground, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Container, Content } from 'native-base';
import MainScreen from '../../components/layouts/MainScreen';
import { IMAGES } from '../../configs';
import Animbutton from '../../components/elements/BtnAnimate';
import ButtonText from '../../components/elements/btnText';
import Button from '../../components/elements/btnQuiz';
import styles from './styles';
import { scale } from '../../utils/scaling';
import Loading from '../../components/elements/Loading';

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
    Axios.get('http://3.84.200.157/api/latihan')
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
  backQuestionHandler = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion - 1
    });
    console.log(this.state.currentQuestion);
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.currentQuestion !== prevState.currentQuestion) {
  //     this.setState(() => ({
  //       disabled: true,
  //       questions: quizData[this.state.currentQuestion].question,
  //       options: quizData[this.state.currentQuestion].options,
  //       answer: quizData[this.state.currentQuestion].answer,
  //       bahas: quizData[this.state.currentQuestion].bahas
  //     }));
  //   }
  // }
  // check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    const data = this.state;
    if (this.state.currentQuestion === data.length - 1) {
      this.props.navigation.navigate('Menu');
    }
  };
  operation = () => {
    const { currentQuestion, data } = this.state;
    if (currentQuestion === 0) {
      return (
        <View style={styles.btn}>
          <Button
            next
            nextBtn
            customContainer={styles.next}
            disabled={this.state.disabled}
            onPress={this.nextQuestionHandler}
          />
        </View>
      );
    } else if (currentQuestion < data.length - 1) {
      return (
        <View style={styles.btn}>
          <Button back backBtn customContainer={styles.back} onPress={this.backQuestionHandler} />
          <Button
            next
            nextBtn
            customContainer={styles.next}
            disabled={this.state.disabled}
            onPress={this.nextQuestionHandler}
          />
        </View>
      );
    } else if (currentQuestion === data.length - 1) {
      return (
        <View style={styles.btn}>
          <Button back backBtn customContainer={styles.back} onPress={this.backQuestionHandler} />
          <ButtonText
            text="Selesai"
            customContainer={styles.next}
            disabled={this.state.disabled}
            onPress={this.props.navigation.navigate('Menu')}
          />
        </View>
      );
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
                        backgroundColor: myAnswer === data[currentQuestion].answer ? '#FCA82F' : null,
                        borderRadius: 10
                      }}
                      onPress={() => this.checkAnswer(option)}
                      text={option}
                    />
                  </View>
                ))}
                <View style={styles.bahas}>
                  <Text style={styles.titlePembahasan}>Pembahasan :</Text>
                  <Text style={styles.pembahasan}>{data[currentQuestion].bahas}</Text>
                </View>
                {this.operation()}
              </View>
            </Content>
          </ImageBackground>
        </Container>
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
