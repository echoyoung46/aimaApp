import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';

var List = React.createClass({
  render: function() {
    return (
      <ScrollView style={styles.flex}>
        <Text style={styles.list_item} onPress={this.goTo}>11111111</Text>
        <Text style={styles.list_item} onPress={this.goTo}>22222222</Text>
        <Text style={styles.list_item} onPress={this.goTo}>33333333</Text>
      </ScrollView>
    )
  },
  goTo: function(){
    this.props.navigator.push({
      component: Detail,
      title: '邮轮详情',
      rightButtonTitle: '购物车',
      onRightButtonPress: function(){
        alert('进入购物车');
      }
    })
  }
});

var Detail = React.createClass({
  render: function(){
    return (
      <ScrollView>
        <Text>详情页</Text>
        <Text>这是详情页</Text>
      </ScrollView>
    )
  }
});

var styles = StyleSheet.create({
  list_item: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center'
  },
  list_item_font: {
    fontSize: 16
  },
  flex: {
    flex: 1
  }
});

module.exports = List;