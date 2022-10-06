import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        date: '20 Jun 2022',
        description: 'Golden Sun Bakery',
        amount: 50,
        balance: 2187.79,
        type: 'Electronic',
        category: 'Food',
        notes: ''
    },
    {
        id: 2,
        date: '20 Jun 2022',
        description: 'Golden Sun Bakery',
        amount: 40,
        balance: 2147.79,
        type: 'Electronic',
        category: 'Food',
        notes: ''
    },
    {
        id: 3,
        date: '20 Jun 2022',
        description: 'Golden Sun Bakery',
        amount: 30,
        balance: 2117.79,
        type: 'Electronic',
        category: 'Food',
        notes: ''
    },
    {
        id: 4,
        date: '20 Jun 2022',
        description: 'Golden Sun Bakery',
        amount: 20,
        balance: 2097.79,
        type: 'Electronic',
        category: 'Food',
        notes: ''
    },
    {
        id: 5,
        date: '20 Jun 2022',
        description: 'Golden Sun Bakery',
        amount: 10,
        balance: 2087.79,
        type: 'Electronic',
        category: 'Food',
        notes: ''
    },
    {
        id: 6,
        date: '20 Jun 2022',
        description: 'Golden Sun Bakery',
        amount: 5,
        balance: 2082.79,
        type: 'Electronic',
        category: 'Food',
        notes: ''
    }
]

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        setCategory: (state, action) => (state = action.payload),
        setNotes: (state, action) => (state = action.payload),
    }
})

export const { setCategory, setNotes } = transactionSlice.actions

export const selectTransaction = (state) => state.transaction

export default transactionSlice.reducer