import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '~/screens/Login';
import ForgotPassword from '~/screens/ForgotPassword';
import ChangePassword from '~/screens/ChangePassword';
import ConfirmCode from '~/screens/ConfirmCode';
import Signup from '~/screens/Signup';
import CreateAccount from '~/screens/CreateAccount';

const Routes = createStackNavigator(
  {
    Login,
    ForgotPassword,
    ChangePassword,
    ConfirmCode,
    Signup,
    CreateAccount,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      animationEnabled: false,
    },
  },
);

export default createAppContainer(Routes);
