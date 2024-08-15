import {configureStore} from '@reduxjs/toolkit';
import userReduser from './slices/userSlices';

 const store = configureStore({
    reducer:{
        userInfo:userReduser,
    }
})

export default store;