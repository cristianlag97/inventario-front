import { createSlice } from '@reduxjs/toolkit';

const inventarioSlice = createSlice({
    name: 'inventario',
    initialState: {
        laptops: [],
        pcs: [],
        errorMessage: '',
        view: 'Pcs'
    },
    reducers: {
        getAllPcsDB: (state, { payload }) => {
            state.pcs = payload;
            state.errorMessage = null;
        },
        createNewPcs: (state, { payload }) => {
            state.pcs.push(payload);
            state.errorMessage = null;
        },
        changeView: (state, { payload }) => {
            state.view = payload;
            state.errorMessage = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    createNewPcs,
    getAllPcsDB,
    changeView,
} = inventarioSlice.actions;
export default inventarioSlice;