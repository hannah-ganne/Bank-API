import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        checking: [
            {
                id: 0,
                date: '20 Jun 2022',
                description: 'Golden Sun Bakery',
                amount: 5,
                balance: 2082.79,
                type: 'Electronic',
                category: 'Food',
                notes: ''
            },
            {
                id: 1,
                date: '20 Jun 2022',
                description: 'Golden Sun Bakery',
                amount: 10,
                balance: 2087.79,
                type: 'Electronic',
                category: 'Food',
                notes: ''
            },
            {
                id: 2,
                date: '20 Jun 2022',
                description: 'Golden Sun Bakery',
                amount: 20,
                balance: 2097.79,
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
                amount: 40,
                balance: 2147.79,
                type: 'Electronic',
                category: 'Food',
                notes: ''
            },
            {
                id: 5,
                date: '20 Jun 2022',
                description: 'Golden Sun Bakery',
                amount: 50,
                balance: 2187.79,
                type: 'Electronic',
                category: 'Food',
                notes: ''
            }
        ],
    savings: [
            {
                id: 0,
                date: '18 Jun 2022',
                description: 'Savings',
                amount: 5,
                balance: 10928.42,
                type: 'Wire Transfer',
                category: '',
                notes: ''
            },
            {
                id: 1,
                date: '18 Jun 2022',
                description: 'Savings',
                amount: 10,
                balance: 10923.42,
                type: 'Wire Transfer',
                category: '',
                notes: ''
            },
            {
                id: 2,
                date: '18 Jun 2022',
                description: 'Savings',
                amount: 20,
                balance: 10913.42,
                type: 'Wire Transfer',
                category: '',
                notes: ''
            },
            {
                id: 3,
                date: '18 Jun 2022',
                description: 'Savings',
                amount: 30,
                balance: 10893.42,
                type: 'Wire Transfer',
                category: '',
                notes: ''
            },
            {
                id: 4,
                date: '18 Jun 2022',
                description: 'Savings',
                amount: 40,
                balance: 10863.42,
                type: 'Wire Transfer',
                category: '',
                notes: ''
            },
            {
                id: 5,
                date: '18 Jun 2022',
                description: 'Savings',
                amount: 50,
                balance: 10823.42,
                type: 'Wire Transfer',
                category: '',
                notes: ''
            },
        ],
        credit: [
            {
                id: 0,
                date: '17 Jun 2022',
                description: 'Darty',
                amount: 39,
                balance: 184.30,
                type: 'Electronic',
                category: '',
                notes: ''
            },
            {
                id: 1,
                date: '17 Jun 2022',
                description: 'Darty',
                amount: 20,
                balance: 145.30,
                type: 'Electronic',
                category: '',
                notes: ''
            },
            {
                id: 2,
                date: '17 Jun 2022',
                description: 'Darty',
                amount: 35,
                balance: 125.30,
                type: 'Electronic',
                category: '',
                notes: ''
            },
            {
                id: 3,
                date: '17 Jun 2022',
                description: 'Darty',
                amount: 30,
                balance: 90.30,
                type: 'Electronic',
                category: '',
                notes: ''
            },
            {
                id: 4,
                date: '17 Jun 2022',
                description: 'Darty',
                amount: 20.30,
                balance: 60.30,
                type: 'Electronic',
                category: '',
                notes: ''
            },
            {
                id: 5,
                date: '17 Jun 2022',
                description: 'Darty',
                amount: 40,
                balance: 40,
                type: 'Electronic',
                category: '',
                notes: ''
            }
        ]
    }

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            const objIndex = state.findIndex(obj => obj.id === action.payload.id)
            state[objIndex].category = action.payload.category
        },
        setNotes: (state, action) => {
            const objIndex = state.findIndex(obj => obj.id === action.payload.id)
            state[objIndex].notes = action.payload.notes
        },
    }
})

export const { setCategory, setNotes } = transactionSlice.actions

export const selectTransaction = (state) => state.transaction

export default transactionSlice.reducer