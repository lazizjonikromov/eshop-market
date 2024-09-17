import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  success: false,
  error: null,
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("productCreateRequest", (state) => {
      state.loading = true;
    })
    .addCase("productCreateSuccess", (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.success = true;
    })
    .addCase("productCreateFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    })

    // get all products from shop
    .addCase("getAllProductsShopRequest", (state) => {
      state.loading = true;
    })
    .addCase("getAllProductsShopSuccess", (state, action) => {
      state.loading = false;
      state.products = action.payload;
    })
    .addCase("getAllProductsShopFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // delete product of a shop
    .addCase("deleteProductRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteProductSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("deleteProductFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // get all products
    .addCase("getAllProductsRequest", (state) => {
      state.loading = true;
    })
    .addCase("getAllProductsSuccess", (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
    })
    .addCase("getAllProductsFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
