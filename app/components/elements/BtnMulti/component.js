import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { noop } from '../../../utils';

export default class Component extends React.Component {
  render() {
    const { onPress = noop, customContainer, customText1, customText2, image, showImg } = this.props;
    const { title, desc } = this.props;
    const containerStyle = styles.container;
    const textStyle1 = styles.text1;
    const textStyle2 = styles.text2;
    const ComponentView = TouchableOpacity;
    return (
      <ComponentView style={[containerStyle, customContainer]} onPress={onPress}>
        <View style={[containerStyle, customContainer]}>
          <View style={showImg}>
            {image !== null && <Image source={image} resizeMode="contain" style={styles.image} />}
          </View>
          <View style={styles.showText}>
            <Text style={[textStyle1, customText1]}>{title}</Text>
            <Text style={[textStyle2, customText2]}>{desc}</Text>
          </View>
        </View>
      </ComponentView>
    );
  }
}

Component.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  customContainer: PropTypes.object,
  customText1: PropTypes.object,
  customText2: PropTypes.object,
  showImg: PropTypes.object,
  image: PropTypes.number
};

Component.defaultProps = {
  customContainer: {},
  customText1: {},
  customText2: {},
  showImg: {},
  image: null
};
