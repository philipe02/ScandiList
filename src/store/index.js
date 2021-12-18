
import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from './ducks/products'


export default configureStore({ reducer: { products: ProductsReducer } })
