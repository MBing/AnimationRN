/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';

export default class AnimationExample extends Component {
  constructor() {
    super();

    this.state = {
      bounceValue: new Animated.Value(0),
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.5);

    Animated
      .spring(
        this.state.bounceValue,
        {
          toValue: 0.8,
          friction: 1,
        }
      )
      .start();

    Animated
      .timing(
        this.state.fadeAnim,
        {
          toValue: 1,
          duration: 2000,
        },
      )
      .start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={styles.topHalf} />
        <Animated.View style={styles.bottomHalf} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topHalf: {
    flex: 1,
    backgroundColor: '#DC143C',
    transform: [
      {
        scale: this.state.bounceValue,
      },
    ],
  },
  bottomHalf: {
    flex: 1,
    backgroundColor: '#1E90FF',
    opacity: this.state.fadeAnim,
  },
});

AppRegistry.registerComponent('AnimationExample', () => AnimationExample);
