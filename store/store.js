import {combineReducers, configureStore} from '@reduxjs/toolkit';
import profileReducer from '../slices/slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let combinedReducer = combineReducers({
  profileData: profileReducer,
});
const persistedProfileReducer = persistReducer(persistConfig, combinedReducer);
const persistedProfileStore = configureStore({
  reducer: persistedProfileReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default persistedProfileStore;
