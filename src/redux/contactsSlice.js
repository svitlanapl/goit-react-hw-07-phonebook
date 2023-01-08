import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const initialState = {
    items: [],
    sLoading: false,
    error: null,
}

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    
    // Додаємо обробку зовнішніх екшенів
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,

        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected]: handleRejected,

        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === action.payload.id);
            state.items.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,
    },
});
  
export const contactsReducer = contactsSlice.reducer;


         
           
    
            
      
        

   
 




  

