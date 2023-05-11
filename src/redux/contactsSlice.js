import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
    {id: 'id-1', userName: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', userName: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', userName: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', userName: 'Annie Copeland', number: '227-91-26'}];
    const contactsSlice = createSlice({
        name: "contacts",
        initialState: contactsInitialState,
        reducers : {
            addContact: {
                reducer(state, action) {
                  console.log(state, action.payload);
                  state.push(action.payload)
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
                const index = state.findIndex(contact => contact.id === action.payload)
                state.splice(index, 1);
                console.log(action.payload);
            }
        }
        
    })

      
    export const { addContact, deleteContact } = contactsSlice.actions;
    export const contactsReducer =  contactsSlice.reducer;