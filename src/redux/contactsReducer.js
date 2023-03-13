import { combineReducers } from 'redux';

import contacts from './contacts/contactSlice';
import filter from './filter/filterSlice';

export const contactsReducer = combineReducers({
  contacts,
  filter,
});
