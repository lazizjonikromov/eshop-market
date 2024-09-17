import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  success: false,
  error: null,
};

export const eventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("eventCreateRequest", (state) => {
      state.loading = true;
    })
    .addCase("eventCreateSuccess", (state, action) => {
      state.loading = false;
      state.event = action.payload;
      state.success = true;
    })
    .addCase("eventCreateFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    })

    // get all events from shop
    .addCase("getAllEventsShopRequest", (state) => {
      state.loading = true;
    })
    .addCase("getAllEventsShopSuccess", (state, action) => {
      state.loading = false;
      state.events = action.payload;
    })
    .addCase("getAllEventsShopFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // delete event of a shop
    .addCase("deleteEventRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteEventSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("deleteEventFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // get all events from shop
    .addCase("getAllEventsRequest", (state) => {
      state.loading = true;
    })
    .addCase("getAllEventsSuccess", (state, action) => {
      state.loading = false;
      state.allEvents = action.payload;
    })
    .addCase("getAllEventsFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
