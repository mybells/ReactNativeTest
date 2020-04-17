/**
 * @format
 */
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, connect} from 'react-redux';
import {store} from './src/pages/store';

/* example */
import ModalTester from './src/pages/ModalTester';
import RootNavigator from './src/pages/RootNavigator';
import Redux from './src/pages/Redux';

const mapStateToProps = (state) => {
  return {num: state.num};
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeState: () => {
      dispatch({type: 'INCREMENT'});
    },
  };
};

const ReduxExample = connect(mapStateToProps, mapDispatchToProps)(Redux);
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <SafeAreaView>
          <ScrollView>
            {/* 模态框 */}
            <ModalTester />
            {/* 使用Redux */}
            <Provider store={store}>
              <ReduxExample />
            </Provider>
          </ScrollView>
        </SafeAreaView>
        {/* 导航 */}
        <RootNavigator />
      </NavigationContainer>
    );
  }
}
AppRegistry.registerComponent(appName, () => App);
