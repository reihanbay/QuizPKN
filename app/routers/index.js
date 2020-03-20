import { SwitchNavigator } from 'react-navigation';
import { LogResStack , CourseStack , MenuStack , SplashStack, QuizStack, ExamStack, beforeQStack, beforeEStack } from './stackNavigator';

export default SwitchNavigator(
  {
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
    beforeEScreen: beforeEStack,
    beforeQScreen: beforeQStack,
    ExamScreen: ExamStack,
    ExamResult: ExamStack,
    Splash: SplashStack


  },
  {
    initialRouteName: 'Splash'
  }
);
