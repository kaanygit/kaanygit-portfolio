import { PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import persistReducer from "redux-persist/es/persistReducer";
import RootState, { rootReducer } from "./root-reducer";



const persistConfig:PersistConfig<RootState>={
    key:'root',
    storage,
};

const persistedReducer=persistReducer(persistConfig,rootReducer);

export default persistedReducer;

