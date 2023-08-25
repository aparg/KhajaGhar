import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import MyStack from './MyStack';
import {useEffect} from 'react';
// const App = () => {
//   useEffect(() => SplashScreen.hide(), []);
//   return <Entry />;
// };

const App = () => {
  useEffect(() => SplashScreen.hide(), []);
  return <MyStack />;
};
export default App;
