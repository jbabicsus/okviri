
import {createSlice} from "@reduxjs/toolkit";
export const userSlice = createSlice({

    name: "alerts",
    initialState: {
        user: null,
    },reducers: {
       setUser: (state) =>{
        state.loading = true;
       }
        
    }
});

export const { showLoading, hideLoading} = userSlice.actions;