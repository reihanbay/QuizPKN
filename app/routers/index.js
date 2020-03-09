import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, LoginStack , RegiStack , MenuStack , SplashStack, QuizStack, beforeStack, ExamStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    Login:LoginStack,
    App: Drawer,
    About: MenuStack,
    Menu: MenuStack,
    Register:RegiStack,
    Course: MenuStack,
    materi1: MenuStack,
    materi2: MenuStack,
    materi3: MenuStack,
    materi4: MenuStack,
    materi5: MenuStack,
    materi6: MenuStack,
    QuizScreen: QuizStack,
    beforeScreen: beforeStack,
    ExamScreen: ExamStack,
    ExamResult: ExamStack,
    Splash: SplashStack


  },
  {
    initialRouteName: 'Menu'
  }
);
