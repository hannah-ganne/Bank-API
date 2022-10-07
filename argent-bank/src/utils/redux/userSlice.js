import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    firstName: "",
    lastName: "",
    token: "",
    isLoading: false,
    hasError: false
}

export const login = createAsyncThunk(
    "user/login",
    async ({ email, password }, thunkAPI) => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        }
        const data = await fetch("http://localhost:3001/api/v1/user/login", options)
        const json = await data.json()
        return json.body.token
    }
)

export const getProfile = createAsyncThunk(
    "user/getProfile",
    async ({ token }, thunkAPI) => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const data = await fetch("http://localhost:3001/api/v1/user/profile", options)
        const json = await data.json()
        return json.body
    }
)

export const editName = createAsyncThunk(
    "user/editName",
    async ({ firstName, lastName, token }, thunkAPI) => {
        const options = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
            })
        }
        const data = await fetch("http://localhost:3001/api/v1/user/profile", options)
        const json = await data.json()
        return json.body
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state, action) => {
            state.firstName = ""
            state.lastName = ""
            state.token = ""
        }
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.isLoading = true
            state.hasError = false
        },
        [login.fulfilled]: (state, action) => {
            state.isLoading = false
            state.hasError = false
            state.token = action.payload
        },
        [login.rejected]: (state, action) => {
            state.isLoading = false
            state.hasError = true
        },
        [getProfile.pending]: (state, action) => {
            state.isLoading = true
            state.hasError = false
        },
        [getProfile.fulfilled]: (state, action) => {
            state.isLoading = false
            state.hasError = false
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        [getProfile.rejected]: (state, action) => {
            state.isLoading = false
            state.hasError = true
        },
        [editName.pending]: (state, action) => {
            state.isLoading = true
            state.hasError = false
        },
        [editName.fulfilled]: (state, action) => {
            state.isLoading = false
            state.hasError = false
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        [editName.rejected]: (state, action) => {
            state.isLoading = false
            state.hasError = true
        },
        
    }
})

export const selectUser = (state) => state.user

export const { logout } = userSlice.actions

export default userSlice.reducer