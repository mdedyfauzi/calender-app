import { configureStore } from '@reduxjs/toolkit';
import calenderReducer from './calenderSlice';

export default configureStore({
  reducer: {
    calender: calenderReducer,
  },
});
