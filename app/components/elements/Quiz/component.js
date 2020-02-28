/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-plusplus */
import React from 'react';
import { Text, View, ImageBackground, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import MainScreen from '../../layouts/MainScreen';
import { IMAGES, ENDPOINT } from '../../../configs';
import styles from './styles';
import Animbutton from '../BtnAnimate';
import Button from '../../elements/btnQuiz';
// import I18n from '../../i18n';
// import StatusBar from '../../components/elements/StatusBar';

let arrnew = [];
const jsonData = {
  quiz: {
    quiz1: {
      question1: {
        correctoption: 'option1',
        options: {
          option1: 'Pengadilan tata Negara',
          option2: 'Komnas HAM',
          option3: 'Komnas anti kekerasan terhadap perempuan',
          option4: 'Pengadilan HAM'
        },
        question: '1. Berikut ini yang tidak termasuk lembaga peradilan HAM yaitu…'
      },
      question2: {
        correctoption: 'option2',
        options: {
          option1: 'Komnas anti kekerasan terhadap perempuan',
          option2: 'Komnas HAM',
          option3: 'Pengadilan HAM',
          option4: 'Pengadilan Militer'
        },
        question:
          '2.Upaya peningkatan penegakkan serta penannggulangan segala bentuk kekerasan terhadap perempuan merupakan tujuan dari…'
      },
      question3: {
        correctoption: 'option3',
        options: {
          option1: 'Criminal',
          option2: 'Kemanusiaan',
          option3: 'Genosida',
          option4: 'General'
        },
        question:
          '3.Suatu perbuatan yang dilakukan dengan tujuan untuk memusnakan atau menghancurkan sebagian atau seluruh bangsa, ras, kelompok agama kelompok etnis, merupakan kejahatan..'
      },
      question4: {
        correctoption: 'option4',
        options: {
          option1: 'Kebutuhan masyarakat tidak terpenuhi',
          option2: 'Kesejahteraan masyarakat tidak terwujud',
          option3: 'Kebutuhan masyarakat tidak menentu',
          option4: 'Kedamaian masyarakat terganggu'
        },
        question: '4. Segala perbuatan yang tidak menghormati hak orang lain akan menyebabkan …'
      }
    }
  }
};
export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.qno = 0;
    this.score = 0;
    this.incorrect = 0;
    const jdata = jsonData.quiz.quiz1;
    arrnew = Object.keys(jdata).map(k => jdata[k]);
    this.state = {
      question: arrnew[this.qno].question,
      options: arrnew[this.qno].options,
      correctoption: arrnew[this.qno].correctoption,
      countCheck: 0
    };
  }

  prev() {
    if (this.qno > 0) {
      this.qno--;
      this.setState({
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption
      });
    }
  }
  next() {
    if (this.qno < arrnew.length - 1) {
      this.qno++;

      this.setState({
        countCheck: 0,
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption
      });
    } else {
      this.props.quizFinish(this.score * 25);
    }
  }
  // disabled() {
  //   if (this.qno++) {
  //     this.setState({ check: this.state.status });
  //   }
  // }
  _answer(status, ans) {
    if (status === true) {
      const count = this.state.countCheck + 1;
      this.setState({ countCheck: count });
      if (ans === this.state.correctoption) {
        this.score += 1;
      }
    } else {
      const count = this.state.countCheck - 1;
      this.setState({ countCheck: count });
      if (this.state.countCheck < 1 || ans === !this.state.correctoption) {
        this.score -= 1;
      }
    }
  }
  render() {
    const currentOptions = this.state.options;
    const options = Object.keys(currentOptions).map(k => (
      <View key={k} style={{ margin: 10 }}>
        <Animbutton
          countCheck={this.state.countCheck}
          onColor="#FCA82F"
          effect="flash"
          // status={status => this._answer(status, k)}
          // onPress={status=>this.next()}
          onPress={status => this._answer(status, k)}
          text={currentOptions[k]}
        />
      </View>
    ));

    return (
      <MainScreen>
        <Container>
          <ImageBackground source={IMAGES.bg.quiz} style={styles.bg}>
            <Content style={styles.Container}>
              <View style={styles.questContainer}>
                <Text style={styles.quest}>{this.state.question}</Text>
              </View>
              <View>{options}</View>
              <View style={styles.btn}>
                <Button back backBtn customContainer={styles.back} onPress={() => this.prev()} />
                <Button next nextBtn customContainer={styles.next} onPress={() => this.next()} />
              </View>
            </Content>
          </ImageBackground>
        </Container>
      </MainScreen>
    );
  }
}
Component.propTypes = {
  // isLoading: true,
  quizFinish: PropTypes.bool
};
Component.defaultProps = {
  quizFinish: false
};
