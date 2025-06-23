import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import navReducer from './navSlice';
import categoryReducer from './categorySlice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedCategoryReducer = persistReducer(persistConfig, categoryReducer);

const appStore = configureStore({
    reducer: {
        nav: navReducer,
        category: persistedCategoryReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default appStore;
export const persistor = persistStore(appStore);
