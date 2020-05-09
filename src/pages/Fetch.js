import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {getData} from '../pages/api/mock';

export default class ModalTester extends Component {
  state = {
    data: null,
  };

  btnClick = () => {
    // Mock.setup({timeout: '200-500'});
    // Mock.mock('http://20181024Mock.com/mode1/tableDataOne', {
    //   'dataSource|3': [
    //     {
    //       'key|+1': 1,
    //       'mockTitle|1': [
    //         '哑巴',
    //         'Butter-fly',
    //         '肆无忌惮',
    //         '摩天大楼',
    //         '初学者',
    //       ],
    //       'mockAction|2': ['下载', '试听', '喜欢'],
    //     },
    //   ],
    // });
    let obj = {
      'key|+1': 1,
      'mockTitle|1': ['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
      'mockContent|1': [
        '你翻译不了我的声响',
        '数码宝贝主题曲',
        '摩天大楼太稀有',
        '像海浪撞破了山丘',
      ],
      'mockAction|1': ['下载', '试听', '喜欢'],
    };
    getData('getdata', obj);
    fetch('getdata').then((json) => {
      this.setState({data: JSON.stringify(json._bodyText)});
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>{this.state.data}</Text>
        <Button title="请求" onPress={this.btnClick} />
      </View>
    );
  }
}
