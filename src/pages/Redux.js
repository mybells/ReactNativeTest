import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class Redux extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Button title="增加" onPress={this.props.changeState} />
        <Text>{this.props.num}</Text>
      </View>
    );
  }
}
