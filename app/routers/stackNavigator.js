import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Menu from '../screens/Menu';
import Login from '../screens/Login';
import materi1 from '../screens/materi1';
import materi2 from '../screens/materi2';
import materi3 from '../screens/materi3';
import materi4 from '../screens/materi4';
import materi5 from '../screens/materi5';
import materi6 from '../screens/materi6';
import Course from '../screens/Course';
import SignIn from '../screens/SignIn';
import UploadPhoto from '../screens/UploadPhoto';
import History from '../screens/History';
import Account from '../screens/Account';
import OnBoarding from '../screens/OnBoarding';

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

export const SearchStack = StackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const LoginStack = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const SignInStack = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        tabBarVisible: true
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
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const UploadPhotoStack = StackNavigator(
  {
    UploadPhoto: {
      screen: UploadPhoto,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const HistoryStack = StackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const AccountStack = StackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const OnBoardingStack = StackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
