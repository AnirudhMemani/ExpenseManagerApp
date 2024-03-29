import {combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';
import incomeSlice from './reducers/income-slice';
import loginSlice from './reducers/login-slice';
import EncryptedStorage from 'react-native-encrypted-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';
import transactionSlice from './reducers/transaction-slice';

const reducers = combineReducers({
  login: loginSlice,
  income: incomeSlice,
  transaction: transactionSlice,
});

const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
  timeout: 20000,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  any
>;
