import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const initialState = {
    error: null,
    loading: false,
    allgovernments: {}
};



export const get_allgovernments = createAsyncThunk(
    'allgovernments/get_allgovernments',
    async (body, { rejectWithValue }) => {
        try {
            const response = await axios.get("https://cannula-doctors.onrender.com/v1/countries/eg/states", body, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${"stateIso2"}`,
                },
            });

            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const governmentssSlice = createSlice(
    {
        name: "governments",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(get_allgovernments.pending, (state) => {
                    console.log("get_allgovernments.pending")
                    state.loading = true,
                        state.error = null
                })
                .addCase(get_allgovernments.fulfilled, (state, { payload }) => {
                    console.log("get_allgovernments.fulfilled, payload: \n", payload)
                    state.loading = false;
                    state.allgovernments = { ...payload}

                    AsyncStorage.setItem('allgovernments', JSON.stringify(payload));
                })
                .addCase(get_allgovernments.rejected, (state, { error, payload }) => {
                    console.log("get_allgovernments.rejected, payload: \n", payload)
                    state.error = error ? error.message : 'Network Error';
                    state.loading = false;
                    console.log(state, "  ", payload);
                })
                
        }
    }
)


export default governmentssSlice.reducer;
