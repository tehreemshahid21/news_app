import { configureStore } from "@reduxjs/toolkit";
import getNews from '../FeatureSlice/NewSlice';

export const store = configureStore({
  reducer: {
    newsApi: getNews, 
  },
});

export default store;