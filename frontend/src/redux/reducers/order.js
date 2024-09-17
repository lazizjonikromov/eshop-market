import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};

export const orderReducer = createReducer(initialState, (builder) => {
  builder
    // get all orders of user
    .addCase("getAllOrdersUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("getAllOrdersUserSuccess", (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    })
    .addCase("getAllOrdersUserFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // get all orders of seller
    .addCase("getAllOrdersShopRequest", (state) => {
      state.loading = true;
    })
    .addCase("getAllOrdersShopSuccess", (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    })
    .addCase("getAllOrdersShopFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // get all orders for admin
    .addCase("getAllOrdersAdminRequest", (state) => {
      state.adminOrderLoading  = true;
    })
    .addCase("getAllOrdersAdminSuccess", (state, action) => {
      state.adminOrderLoading  = false;
      state.adminOrders = action.payload;
    })
    .addCase("getAllOrdersAdminFailed", (state, action) => {
      state.adminOrderLoading  = false;
      state.error = action.payload;
    })

    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
