'use strict';

import React from 'react';
import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

var Menu = React.createClass({
  getInitialState: function() {
    var show = this.props.show;
    return {
      show: show
    }
  },
  choose: function(i) {
    this.setState({
      show: i
    });
  },
  render: function() {
    return(
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={this.choose.bind(this, 0)} style={styles.item}>
          <Text style={styles.text}>
            list1
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={this.choose.bind(this, 1)} style={styles.item}>
          <Text style={styles.text}>
            list2
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.choose.bind(this, 2)} style={styles.item}>
          <Text style={styles.text}>
            list3
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
});

var styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'column'
    },
    item: {
        flex: 1,
        height: 50,
        backgroundColor: '#aaa'
    },
    text: {
        color: '#333',
        fontSize: 15,
        textAlign: 'center',
        margin: 1
    }
});

module.exports = Menu;