import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, LoginStack , SignInStack , MenuStack , SplashStack, QuizStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    Login:LoginStack,
    App: Drawer,
    About: MenuStack,
    Menu: MenuStack,
    SignIn:SignInStack,
    Course: MenuStack,
    materi1: MenuStack,
    materi2: MenuStack,
    materi3: MenuStack,
    materi4: MenuStack,
    materi5: MenuStack,
    materi6: MenuStack,
    QuizScreen: QuizStack,
    Splash: SplashStack


  },
  {
    initialRouteName: 'Splash'
  }
);
