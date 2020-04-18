import React from 'react';

import Routes from '~/routes';
import CodePush from 'react-native-code-push';

const App = () => <Routes />;

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
