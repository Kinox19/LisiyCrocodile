import { legacy_createStore as createStore} from 'redux'
import rootReducer from "../reducers/reducers";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'root',
//     storage,
//   }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(rootReducer);

// export const persistor = persistStore(store);

export default store;