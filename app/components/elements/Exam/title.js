/* eslint-disable react/sort-comp */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { COLOR_WHITE, COLOR_BASE_PRIMARY_PURPLE, COLOR_JINGGA } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';
import Button from '../../components/elements/Button';
import Button2 from '../../components/elements/Button2';

export default class Question extends React.Component {
  constructor() {
    super();

    this.state = {
      answer: null
    };
  }

  renderOptions = question => {
    if (question.type === 'boolean') {
      return [
        <RadioButton value="True" key={1}>
          <Text style={styles.radioText}>True</Text>
        </RadioButton>,

        <RadioButton value="False" key={2}>
          <Text style={styles.radioText}>False</Text>
        </RadioButton>
      ];
    }
    const result = [];

    question.incorrect_answers.forEach((item, index) => {
      const key = `${question.id}-${index}`;

      if (index === this.props.correctPosition) {
        const key2 = `${question.id}-100`;
        result.push(
          <RadioButton value={question.correct_answer} key={key2}>
            <Text style={styles.radioText}>{question.correct_answer}</Text>
          </RadioButton>
        );
      }

      result.push(
        <RadioButton value={item} key={key}>
          <Text style={styles.radioText}>{item}</Text>
        </RadioButton>
      );
    });

    return result;
  };
  prev() {
    if (this.current > 0) {
      this.current--;
    }
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 12,
          backgroundColor: COLOR_BASE_PRIMARY_PURPLE
        }}
      >
        <Text style={{ fontSize: 16, color: COLOR_WHITE, textAlign: 'left', padding: scale(20) }}>
          Kuis {this.props.current + 1} out of 10
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'normal',
            color: COLOR_WHITE,
            marginLeft: scale(20),
            marginRight: scale(10),
            paddingTop: scale(5),
            paddingBottom: scale(10)
          }}
        >
          {this.props.question.question}
        </Text>
        <RadioGroup onSelect={(index, answer) => this.setState({ answer })} selectedIndex={null}>
          {this.renderOptions(this.props.question)}
        </RadioGroup>
        <View style={styles.tombol}>
          <View style={styles.button2}>
            <Button2 title="Kembali" onPress={() => this.prev()} />
          </View>
          <View style={styles.button1}>
            <Button
              title="lanjut"
              onPress={() => {
                this.props.onSelect(this.state.answer);
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
