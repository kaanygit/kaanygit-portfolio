import { applyMiddleware, compose, createStore,Middleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import persistedReducer from "./persist";
import persistStore from "redux-persist/es/persistStore";



declare global{
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?:typeof compose
    }
}

const sagaMiddleware=createSagaMiddleware();

const middleWares=[process.env.NODE_ENV!=='production'&&logger,sagaMiddleware].filter((middleware):middleware is Middleware =>Boolean(middleware));
const composeEnchear=(process.env.NODE_ENV!=='production'&&window &&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||compose;
const composeEnchears=composeEnchear(applyMiddleware(...middleWares));

const store=createStore(persistedReducer,composeEnchears);
const persistor=persistStore(store);

// sagaMiddleware.run(rootSaga);

export {store,persistor}
