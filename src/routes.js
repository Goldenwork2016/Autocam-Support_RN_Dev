import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '~/screens/Login';
import ForgotPassword from '~/screens/ForgotPassword';
import ConfirmCode from '~/screens/ConfirmCode';

const Routes = createStackNavigator(
  {
    Login,
    ForgotPassword,
    ConfirmCode,
  },
  {
    defaultNavigationOptions: {
      header: null,
      animationEnabled: false,
    },
  },
);

export default createAppContainer(Routes);
