/**
 * @format
 */
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

/* example */
import ModalTester from './src/pages/modal';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {/* 模态框 */}
          <ModalTester />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
AppRegistry.registerComponent(appName, () => App);
