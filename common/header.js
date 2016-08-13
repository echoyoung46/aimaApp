import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  PixelRatio
} from 'react-native';

var Header = React.createClass({
  render: function(){
    return (
      <View style={styles.flex}>
        <Text style={styles.font}>
          <Text style={styles.font_1}>网易</Text>
          <Text style={styles.font_2}>新闻</Text>
          <Text>有态度°</Text>
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  flex: {
    marginTop: 25,
    height: 50,
    borderBottomWidth: 3/PixelRatio.get(),
    borderBottomColor: '#ef2d36',
    alignItems: 'center'
  },
  font: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  font_1: {
    color: '#333'
  },
  font_2: {
    color: '#333',
    backgroundColor: '#cd1d1c'
  }
});

module.exports = Header;