import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';

import colors from './styles';

import Login from '~/screens/Login';
import ForgotPassword from '~/screens/ForgotPassword';
import ChangePassword from '~/screens/ChangePassword';
import ConfirmCode from '~/screens/ConfirmCode';
import Signup from '~/screens/Signup';
import CreateAccount from '~/screens/CreateAccount';
import Products from '~/screens/Products';
import CustomSideMenu from '~/components/CustomSideMenu';

const AppDrawerNavigator = createDrawerNavigator(
  {
    Login,
    ForgotPassword,
    Products,
  },
  {
    contentComponent: CustomSideMenu,
    drawerWidth: Dimensions.get('window').width * 0.58,
    hideStatusBar: true,
    overlayColor: 1,
    contentOptions: {
      activeTintColor: colors.grey,
    },
  },
);

const Routes = createStackNavigator(
  {
    AppDrawerNavigator,
    Login,
    ForgotPassword,
    Products,
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
