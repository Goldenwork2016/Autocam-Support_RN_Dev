import React from 'react';
import {AuthProvider} from './Store';

import Routes from '~/routes';
import CodePush from 'react-native-code-push';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
