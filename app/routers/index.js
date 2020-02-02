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
    Course: CourseStack,
    materi1: CourseStack,
    materi2: CourseStack,
    materi3: CourseStack,
    materi4: CourseStack,
    materi5: CourseStack,
    materi6: CourseStack

  },
  {
    initialRouteName: 'Course'
  }
);
