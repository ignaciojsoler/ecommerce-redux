import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: []
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            //Check if product is already exist
            const itemAlreadyExist = state.list.find((item) => item.id === newItem.id)

            return itemAlreadyExist ? {
                //Increase the quantity
                ...state,
                list: state.list.map((item) =>
                    item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            } : {
                ...state,
                list: [...state.list, { ...newItem, quantity: 1 }]
            }


        },
        deleteItem: (state, action) => {
            const newItem = action.payload
            const itemToDelete = state.list.find(item => item.id === newItem.id)
            return itemToDelete.quantity > 1 ? {
                ...state,
                list: state.list.map(item => item.id === newItem.id ? {...item, quantity: item.quantity - 1} : item)
            } : {
                ...state,
                list: state.list.filter(item => item.id !== newItem.id)
            }
        },
        clearList: (state) => {
          state.list = []
        }

    },
})

export const { addItem, deleteItem, clearList } = cartSlice.actions