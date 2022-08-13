/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitState {
    userName: string | null
}

const initialState: InitState = {
    userName: 'Ricardo Cooper',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<InitState>) {
            state.userName = action.payload.userName
        },
        removeUser(state) {
            state.userName = null
        },
    },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
