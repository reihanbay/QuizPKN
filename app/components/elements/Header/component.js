import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import BackButton from '../BackButton';
import VidButton from '../vidButton';
import CourseButton from '../courseButton';
import { noop } from '../../../utils';

export default class Component extends React.Component {
  _renderLeft = () => {
    const { back, course, leftComponent, leftContainerStyle } = this.props;
    let LeftComponent = <View />;
    if (course) {
      LeftComponent = <CourseButton />;
    } else if (back) {
      LeftComponent = <BackButton />;
    } else if (leftComponent) {
      LeftComponent = leftComponent;
    }
    return <View style={[styles.leftRightContainer, leftContainerStyle]}>{LeftComponent}</View>;
  };

  _renderCenter = () => {
    const { title, centerComponent, centerContainerStyle } = this.props;
    return (
      <View style={[styles.centerContainer, centerContainerStyle]}>
        {title ? this._renderTitle(title) : centerComponent}
      </View>
    );
  };

  _renderTitle = title => <Text style={styles.title}>{title}</Text>;

  _renderRight = () => {
    const { onPress = noop, vid, rightComponent, rightContainerStyle } = this.props;
    let RightComponent = <View />;
    if (vid) {
      RightComponent = <VidButton />;
    } else if (rightComponent) {
      RightComponent = rightComponent;
    }
    return (
      <View style={[styles.leftRightContainer, rightContainerStyle]} onPress={onPress}>
        {RightComponent}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this._renderLeft()}
        {this._renderCenter()}
        {this._renderRight()}
      </View>
    );
  }
}

Component.propTypes = {
  title: PropTypes.string,
  leftContainerStyle: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  centerContainerStyle: PropTypes.object,
  rightContainerStyle: PropTypes.object,
  leftComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.any]),
  centerComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.any]),
  rightComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.any]),
  back: PropTypes.bool,
  vid: PropTypes.bool,
  course: PropTypes.bool
};

Component.defaultProps = {
  title: '',
  leftContainerStyle: {},
  centerContainerStyle: {},
  rightContainerStyle: {},
  leftComponent: <View />,
  centerComponent: <View />,
  rightComponent: <View />,
  back: false,
  vid: false,
  course: false
};
