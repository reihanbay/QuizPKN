import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, LoginStack , SignInStack , MenuStack , CourseStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    Login:LoginStack,
    App: Drawer,
    Menu: MenuStack,
    SignIn:SignInStack,
    Course: MenuStack,
    materi1: MenuStack,
    materi2: MenuStack,
    materi3: MenuStack,
    materi4: MenuStack,
    materi5: MenuStack,
    materi6: MenuStack,
    vidCourse: MenuStack,
    Quiz: quizStack


  },
  {
    initialRouteName: 'Quiz'
  }
);
