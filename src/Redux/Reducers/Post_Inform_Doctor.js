import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const initialState = {
    error: null,
    loading: false,
    Doctor_information: {}
};



export const post_doctor = createAsyncThunk(
    'addoctor/post_doctor',
    async (body, { rejectWithValue }) => {
        try {
            const response = await axios.post("https://cannula-doctors.onrender.com/doctor-app/register/join-request/:channel", body, {
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


const governmentssSlice = createSlice(
    {
        name: "addoctor",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(post_doctor.pending, (state) => {
                    console.log("post_doctor.pending")
                    state.loading = true,
                        state.error = null
                })
                .addCase(post_doctor.fulfilled, (state, { payload }) => {
                    console.log("post_doctor.fulfilled");
                    state.loading = false;
                    console.log(payload);
                    if (payload.error) {
                      console.log("BAD CREDENTIALS");
                    } else {
                      state.signUp = true;
                      state.loading = false;
                      state.userData = payload.userData;
                      console.log(payload);
                    }
                })
                .addCase(post_doctor.rejected, (state, { error, payload }) => {
                    console.log("post_doctor.rejected, payload: \n", payload)
                    state.error = error ? error.message : 'Network Error';
                    state.loading = false;
                    console.log(state, "  ", payload);
                })
                
        }
    }
)


export default governmentssSlice.reducer;
