import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  contactId: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.contactId = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.contactId = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
