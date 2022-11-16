import { configureStore } from "@reduxjs/toolkit"
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"
import { rootPeristConfig, rootReducer } from "./rootReducer"



const store = configureStore({
    reducer: persistReducer(rootPeristConfig, rootReducer),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }),
    
})

const persistor = persistStore(store)

const { dispatch } = store;
const useSelector = useAppSelector
const useDispatch = () => useAppDispatch();

export { useDispatch, store, persistor, useSelector, dispatch }
