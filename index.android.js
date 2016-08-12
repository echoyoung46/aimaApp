/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import Swiper from 'react-native-swiper';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// var Search = require('./common/search');

// class aimaApp extends Component {
//   render() {
//     return (
//       <Search></Search>
//     )
//   }
// }



var aimaApp = React.createClass({
  render: function() {
    return (
      <View>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={[styles.slide, styles.slide1]}>
            <Text style={styles.text}>第一张</Text>
          </View>
          <View style={[styles.slide, styles.slide2]}>
            <Text style={styles.text}>第二张</Text>
          </View>
          <View style={[styles.slide, styles.slide3]}>
            <Text style={styles.text}>第三张</Text>
          </View>
        </Swiper>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  wrapper: {

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1: {
    backgroundColor: '#9dd6eb'
  },
  slide2: {
    backgroundColor: '#97cae5'
  },
  slide3: {
    backgroundColor: '#92bbd9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('aimaApp', () => aimaApp);
