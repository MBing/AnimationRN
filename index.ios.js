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
      bounceValue: new Animated.value(0);
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
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={styles.topHalf} />
        <View style={styles.bottomHalf} />
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
  },
});

AppRegistry.registerComponent('AnimationExample', () => AnimationExample);
