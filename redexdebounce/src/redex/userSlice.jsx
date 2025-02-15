import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";
import axios from `axios`

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (query) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?q=${query}`);
    return response.data;
  });

  const userSlice = createSlice({
    name: `users`,
    initialState: {
        users: [],
        loading: false,
        query: '',
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;

        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
        })
        .addCase(fetchUsers.rejected, (state) => {
            state.loading = false;
        });

    },
  });

  export const {setQuery} = userSlice.actions;
  export default userSlice.reducer;