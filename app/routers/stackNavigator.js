import { StackNavigator } from 'react-navigation';
import Menu from '../screens/Menu';
import QuizScreen from '../screens/QuizScreen';
import beforeEScreen from '../screens/beforeEScreen';
import beforeQScreen from '../screens/beforeQScreen';
import ExamScreen from '../screens/ExamScreen';
import ExamResult from '../screens/ExamResult';
import SessionScreen from '../screens/sessionScreen';
import Login from '../screens/Login';
import materi1 from '../screens/materi1';
import materi2 from '../screens/materi2';
import materi3 from '../screens/materi3';
import materi4 from '../screens/materi4';
import materi5 from '../screens/materi5';
import materi6 from '../screens/materi6';
import SplashScreen from '../screens/Splashscreen';
import Course from '../screens/Course';
import About from '../screens/About';
import Register from '../screens/Register';
import Home from '../screens/Home';

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const LogResStack = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const ExamStack = StackNavigator(
  {
    ExamScreen:{
      screen: ExamScreen,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    ExamResult:{
      screen: ExamResult,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SplashStack = StackNavigator(
  {
    SplashScreen:{
      screen: SplashScreen,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const beforeEStack = StackNavigator(
  {
    beforeEScreen:{
      screen: beforeEScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const beforeQStack = StackNavigator(
  {
    beforeQScreen:{
      screen: beforeQScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const SessionStack = StackNavigator(
  {
    SessionScreen:{
      screen: SessionScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const MenuStack = StackNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    Course: {
      screen: Course,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    materi1: {
      screen: materi1,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    materi2: {
      screen: materi2,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    materi3: {
      screen: materi3,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    materi4: {
      screen: materi4,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    materi5: {
      screen: materi5,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    materi6: {
      screen: materi6,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    About: {
        screen: About,
        navigationOptions: {
          tabBarVisible: true
        }
      }
    },
    { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const CourseStack = StackNavigator(
  {
    Course: {
      screen: Course,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    materi1: {
      screen: materi1,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    materi2: {
      screen: materi2,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    materi3: {
      screen: materi3,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    materi4: {
      screen: materi4,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    materi5: {
      screen: materi5,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    materi6: {
      screen: materi6,
      navigationOptions: {
        tabBarVisible: false
      }
    },
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const QuizStack = StackNavigator(
  {
    QuizScreen:{
      screen: QuizScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    },
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);