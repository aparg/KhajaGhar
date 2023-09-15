import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import MyStack from './MyStack';
import {useEffect} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import persistedProfileStore from './store/store';

const App = () => {
  useEffect(() => SplashScreen.hide(), []);
  let persistor = persistStore(persistedProfileStore);
  return (
    <Provider store={persistedProfileStore}>
      <PersistGate persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <MyStack />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};
export default App;
