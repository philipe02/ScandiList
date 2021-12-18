// Action Types

import { createAction, createReducer } from "@reduxjs/toolkit"


export const selectProduct = createAction('SELECT_PRODUCT')
export const resetSelected = createAction('RESET_SELECTED')
export const setErrors = createAction('SET_ERRORS')
export const resetErrors = createAction('RESET_ERRORS')


//Reducer

const initialState = {
    products: [],
    selectedProducts: [],
    errors: []
}

export default createReducer(initialState, {
    [selectProduct.type]: (state, action) =>
        action.payload.check ?
            { ...state, selectedProducts: [...state.selectedProducts, action.payload.sku] } :
            { ...state, selectedProducts: state.selectedProducts.splice(state.selectedProducts.indexOf(action.payload.sku, 1)) },
    [resetSelected.type]: (state, action) => {
        return { ...state, selectedProducts: [] }
    },
    [setErrors.type]: (state, action) => {
        return { ...state, errors: action.payload }
    },
    [resetErrors.type]: (state, action) => {
        return { ...state, errors: [] }
    }
})