import { combineReducers } from 'redux';

import contacts from './contacts/slice';
import filter from './filter/slice';

export const contactsReducer = combineReducers({
  contacts,
  filter,
});
