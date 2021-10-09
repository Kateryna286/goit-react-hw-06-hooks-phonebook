import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contacts-reducer';

const contactsPersistConfig = {
  key: 'Contacts',
  storage,
  blacklist: ['filter'],
};

// чтоб убрать ошибку из консоли
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  //devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const moduleDefaultForExport = { store, persistor };

export default moduleDefaultForExport;