// Action Types

import { createAction, createReducer } from "@reduxjs/toolkit"


export const selectProduct = createAction('SELECT_PRODUCT')
export const resetSelected = createAction('RESET_SELECTED')
export const setErrors = createAction('SET_ERRORS')
export const resetErrors = createAction('RESET_ERRORS')
export const openModal = createAction('OPEN_MODAL')
export const closeModal = createAction('CLOSE_MODAL')
export const setLoading = createAction('SET_LOADING')


//Reducer

const initialState = {
    products: [],
    errors: [],
    loading: false,
    openModal: false,
    modalOptions: { message: '', type: '', actions: [] }
}

export default createReducer(initialState, {
    [setErrors.type]: (state, action) => {
        return { ...state, errors: action.payload }
    },
    [resetErrors.type]: (state, action) => {
        return { ...state, errors: [] }
    },
    [openModal.type]: (state, action) => {
        return { ...state, openModal: true, modalOptions: action.payload }
    },
    [closeModal.type]: (state, action) => {
        return { ...state, openModal: false, modalOptions: { message: '', type: '', actions: [] } }
    },
    [setLoading.type]: (state, action) => {
        return { ...state, loading: action.payload }
    }
})