'use strict';

import React from 'react';
import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var menu = React.createClass({
    render: function() {
        return(
          <View style={styles.menuContainer}>
            <View style={styles.item}>
              <Text style={styles.text}>
                list1
              </Text>
            </View>
            
            <View style={styles.item}>
              <Text style={styles.text}>
                list2
              </Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.text}>
                list3
              </Text>
            </View>
          </View>
        )
    }
});

var styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row'
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

module.exports = menu;