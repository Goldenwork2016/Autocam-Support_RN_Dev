import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '~/screens/Login';
import ForgotPassword from '~/screens/ForgotPassword';
import ConfirmCode from '~/screens/ConfirmCode';

const Routes = createAppContainer(
  createSwitchNavigator({Login, ForgotPassword, ConfirmCode}),
);

export default Routes;
