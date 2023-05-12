import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsInitialState = [
  {id: 'id-1', userName: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', userName: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', userName: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', userName: 'Annie Copeland', number: '227-91-26'}
];
    const contactsSlice = createSlice({
        name: "contacts",
        initialState: {
          0: contactsInitialState
        },
        reducers : {
            addContact: {
                reducer(state, action) {
                  state[0] = [...state[0], action.payload];
                  // state[0].push(action.payload)
                },
                prepare(number, userName) {
                  return {
                    payload: {
                      id: nanoid(),
                      userName: userName,
                      number: number,
                    }
                  }
                },
              },
            deleteContact(state, action) {
                // const index = state.findIndex(contact => contact.id === action.payload)
                // state.splice(index, 1);
                state[0] = state[0].filter(task => task.id !== action.payload);
            }
        }
        
    })
    const persistConfig = {
      key: 'contacts-initial-state',
      storage,
      whitelist: ["0"],
    }
    
    
    export const { addContact, deleteContact } = contactsSlice.actions;
    export const contactsReducer =  contactsSlice.reducer;
    export const persistedReducer = persistReducer(persistConfig, contactsReducer )