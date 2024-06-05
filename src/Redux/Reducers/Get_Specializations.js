import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const initialState = {
    error: null,
    loading: false,
    allspecializations: {}
};



export const get_All_Specializations = createAsyncThunk(
    'Specializations/get_All_Specializations',
    async (body, { rejectWithValue }) => {
        try {
            const response = await axios.get("https://cannula-doctors.onrender.com/doctor-app/register/specializations", body, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);



const SpecializationsSlice = createSlice(
    {
        name: "Specializations",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(get_All_Specializations.pending, (state) => {
                    console.log("get_All_Specializations.pending")
                    state.loading = true,
                        state.error = null
                })
                .addCase(get_All_Specializations.fulfilled, (state, { payload }) => {
                    console.log("get_All_Specializations.fulfilled, payload: \n", payload)
                    state.loading = false;
                    state.allspecializations = { ...payload}

                    AsyncStorage.setItem('allspecializations', JSON.stringify(payload));
                })
                .addCase(get_All_Specializations.rejected, (state, { error, payload }) => {
                    console.log("get_All_Specializations.rejected, payload: \n", payload)
                    state.error = error ? error.message : 'Network Error';
                    state.loading = false;
                    console.log(state, "  ", payload);
                })
                
        }
    }
)


export default SpecializationsSlice.reducer;
