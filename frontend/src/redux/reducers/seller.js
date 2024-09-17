import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};

export const sellerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoadSellerRequest", (state) => {
      state.loading = true;
    })
    .addCase("LoadSellerSuccess", (state, action) => {
      state.isSeller = true;
      state.loading = false;
      state.seller = action.payload;
    })
    .addCase("LoadSellerFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isSeller = false;
    })

    // get all sellers --- admin
    .addCase("getAllSellersRequest", (state) => {
      state.loading = true;
    })
    .addCase("getAllSellersSuccess", (state, action) => {
      state.loading = false;
      state.sellers = action.payload;
    })
    .addCase("getAllSellersFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
