
export const alertsSlice = createSlice({

    name: "alerts",
    initialState: {
        loading: false
    },reducers: {
        showLoading: (state, action) =>{
            state.loading = true;
        },

        hideLoading: (state) => {
            state.loading = false;
        }
    }
});

const { showLoading, hideLoading} = alertsSlice.actions;