import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, LogResStack , CourseStack , MenuStack , SplashStack, QuizStack, beforeStack } from './stackNavigator';

export default SwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    Login:LogResStack,
    Register:LogResStack,
    // App: Drawer,
    About: MenuStack,
    Menu: MenuStack,
    Course: MenuStack,
    materi1: CourseStack,
    materi2: CourseStack,
    materi3: CourseStack,
    materi4: CourseStack,
    materi5: CourseStack,
    materi6: CourseStack,
    QuizScreen: QuizStack,
    beforeScreen: beforeStack,
    ExamScreen: QuizStack,
    ExamResult: QuizStack,
    Splash: SplashStack


  },
  {
    initialRouteName: 'Splash'
  }
);
