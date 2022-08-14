/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Image } from './userSlice'

export interface Comment {
    id: number
    text: string
    date: number
}

export interface ImageData extends Image {
    comments: Comment[]
}

interface InitState {
    imageData: ImageData
}

const initialState: InitState = {
    imageData: {
        id: 0,
        url: '',
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
        clearImageData(state) {
            state.imageData = {
                id: 0,
                url: '',
                comments: [],
            }
        },
    },
})

export const { setImageData, clearImageData } = imgSlice.actions

export default imgSlice.reducer
