import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createWrapper } from 'next-redux-wrapper'
import authReducer from './authSlice' // Import auth slice

// Persist config for Redux Persist
const persistConfig = {
    key: 'root',
    storage,
}

// Combine reducers
const rootReducer = combineReducers({
    auth: persistReducer(persistConfig, authReducer.reducer),
})

// Create Redux store
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
})

// Persistor
export const persistor = persistStore(store)

// Create Next.js wrapper
export const wrapper = createWrapper(() => store)

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
