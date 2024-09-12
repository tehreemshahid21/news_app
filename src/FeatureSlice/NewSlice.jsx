import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("news", async (newsname) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${newsname}&apiKey=cfa2f020a32f43ee8b3703543386bd33`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  });
  

  export const getNews = createSlice({
    name: "newsApi", 
    initialState: {
      news: [],
      loading: false,
      error: null,
    },
 
   extraReducers: {
      [fetchData.pending]: (state) => {
        state.loading = true;
      },
      [fetchData.fulfilled]: (state, action) => {
        state.loading = false;
        state.news = action.payload;
      },
      [fetchData.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });

  export default getNews.reducer;