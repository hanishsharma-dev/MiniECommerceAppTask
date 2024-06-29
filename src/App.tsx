import React from 'react';
import {StyleSheet} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import RootNavigator from './navigation/RootNavigator';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
