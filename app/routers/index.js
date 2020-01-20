import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, LoginStack , SignInStack , MenuStack} from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    Login:LoginStack,
    App: Drawer,
    Menu: MenuStack,
    SignIn:SignInStack
  },
  {
    initialRouteName: 'Login'
  }
);
