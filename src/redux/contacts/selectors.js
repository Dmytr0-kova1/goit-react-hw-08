import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.isError;
export const selectEditor = (state) => state.contacts.editingContact;

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

export const selectEditingContact = createSelector(
  [selectContacts, selectEditor],
  (contacts, editingContactId) => {
    return editingContactId
      ? contacts.find((contact) => contact.id === editingContactId)
      : null;
  }
);
