import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, LoginStack , RegiStack , MenuStack , SplashStack, QuizStack, ExamStack } from './stackNavigator';
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
    ExamScreen: ExamStack,
    ExamResult: ExamStack,
    Splash: SplashStack


  },
  {
    initialRouteName: 'Splash'
  }
);
