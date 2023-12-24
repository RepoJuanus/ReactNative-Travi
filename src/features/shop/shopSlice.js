import { createSlice } from '@reduxjs/toolkit'
import allProducts from '../../Data/products.json'
import allCategories from '../../Data/categories.json'


const initialState = {
    value: {
        products: allProducts,
        categories: allCategories,
        productSelected: {},
        productsFilteredByCategory: [],
    }
}

export const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {

    }
})

export const { } = shopSlice.actions

export default shopSlice.reducer