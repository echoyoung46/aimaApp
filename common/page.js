'use strict';

import React from 'react';
import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';



var Page = React.createClass({
  getInitialState: function() {
    var data = this.props.data;

    return {
      data: data,
      index: 0
    }
  },
  render: function() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.state.data}
        </Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9dd6eb'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

module.exports = Page;