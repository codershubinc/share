import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the Auth state type
interface AuthState {
    isAuthenticated: boolean
    user: any | null
}

// Initial state
const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
}

// Create the auth slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction) => {
            state.isAuthenticated = true
            state.user = action.payload
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.user = null
        },
        setUser: (state, action: PayloadAction<AuthState['user']>) => {
            state.user = action.payload
            state.isAuthenticated = !!action.payload
        }
    }
})

export const { login, logout, setUser } = authSlice.actions
export default authSlice
