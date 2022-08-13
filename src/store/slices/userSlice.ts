/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Image {
    id: number | null
    url: string | null
}

interface InitState {
    userName: string | null
    images: Image[]
}

const initialState: InitState = {
    userName: null,
    images: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<InitState>) {
            state.userName = action.payload.userName
            state.images = [...action.payload.images]
        },
        removeUser(state) {
            state.userName = null
            state.images = []
        },
    },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
