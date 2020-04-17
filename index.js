/**
 * @format
 */
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

/* example */
import ModalTester from './src/pages/ModalTester';
import RootNavigator from './src/pages/RootNavigator';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <SafeAreaView>
          <ScrollView>
            {/* 模态框 */}
            <ModalTester />
            {/* 导航 */}
          </ScrollView>
        </SafeAreaView>
        <RootNavigator />
      </NavigationContainer>
    );
  }
}
AppRegistry.registerComponent(appName, () => App);
