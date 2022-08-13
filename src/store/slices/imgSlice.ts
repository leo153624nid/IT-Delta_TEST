/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Image } from './userSlice'

export interface Comment {
    id: number | null
    text: string | null
    date: number | null
}

export interface ImageData extends Image {
    comments: Comment[]
}

interface InitState {
    imageData: ImageData
}

const initialState: InitState = {
    imageData: {
        id: null,
        url: null,
        comments: [],
    },
}

const imgSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        setImageData(state, action: PayloadAction<InitState>) {
            state.imageData = action.payload.imageData
        },
    },
})

export const { setImageData } = imgSlice.actions

export default imgSlice.reducer
