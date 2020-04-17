import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '~/screen/Login';

const Routes = createAppContainer(createSwitchNavigator({Login}));

export default Routes;
