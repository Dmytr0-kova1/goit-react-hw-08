import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { selectContacts, selectEditor } from "./selectors";
import { selectFilter } from "../filters/selectors";
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
  editingContact: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setEditingContact: (state, action) => {
      state.editingContact = action.payload;
    },
    clearEditingContact: (state) => {
      state.editingContact = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.isLoading = false;
        state.editingContact = null;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.isLoading = false;
        state.editingContact = null;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          editContact.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          editContact.rejected
        ),
        (state, action) => {
          state.isError = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export const contactsReducer = slice.reducer;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(filter.toLowerCase());
      const numberMatch = item.number.includes(filter);
      return nameMatch || numberMatch;
    });
  }
);

export const { setEditingContact, clearEditingContact } = slice.actions;

export const selectEditingContact = createSelector(
  [selectContacts, selectEditor],
  (contacts, editingContactId) => {
    return editingContactId
      ? contacts.find((contact) => contact.id === editingContactId)
      : null;
  }
);
