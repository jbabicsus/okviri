
import {createSlice} from "@reduxjs/toolkit";
export const userSlice = createSlice({

    name: "user",
    initialState: {
        user: null,
    },reducers: {
       setUser: (state, action) =>{
        state.user = action.payload;
       }
        
    }
});

export const { showLoading, hideLoading} = userSlice.actions;