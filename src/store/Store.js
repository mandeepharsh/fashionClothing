
import { compose,applyMiddleware,legacy_createStore as createStore } from "redux";
import {logger} from 'redux-logger';
import {rootReducer} from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  }
    

  const persistedReducer = persistReducer(persistConfig, rootReducer)




const middleWares = [process.env.NODE_ENV !== 'production' && logger,thunk].filter(Boolean);
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose ;

const middlewareEnhancer = composeEnhancer(applyMiddleware(...middleWares))



export const store = createStore(persistedReducer,undefined,middlewareEnhancer)
export let persistor = persistStore(store)