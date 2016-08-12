/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import SideMenu from 'react-native-side-menu';

var Menu = require('./common/menu');
var Page = require('./common/page');

import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var textIndex = 0,
    textData = [
      'This is Page1.',
      'This is Page2.',
      'This is Page3.'
    ];

var aimaApp = React.createClass({
  render: function() {
    var menu = <Menu show={textIndex} />
    
    return (
      <SideMenu menu={menu}>
        <Page data={textData[textIndex]}></Page>
      </SideMenu>
    )
  }
});

var styles = StyleSheet.create({
  container: {

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9dd6eb'
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
    fontSize: 20,
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('aimaApp', () => aimaApp);
