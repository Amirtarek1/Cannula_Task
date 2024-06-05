import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import SpecializationsSlice from "../../src/Redux/Reducers/Get_Specializations"
import governmentssSlice from "../../src/Redux/Reducers/Get_Egypt_Governments"


const store = configureStore({
    reducer:{
        specializations : SpecializationsSlice,
        governments : governmentssSlice,
    },
})

export default store;