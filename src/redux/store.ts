import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoSlice from './slice/todoSlice';
import themeSlice from './slice/themeSlice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  todoSlice,
  themeSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const reduserPersist = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: reduserPersist,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;
