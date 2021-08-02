import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: '@counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementCounter: draft => {
      draft.value += 1
    },
    decrementCounter: draft => {
      if (draft.value > 0) {
        draft.value -= 1
      }
    },
    randomIncCounter: (draft, action: PayloadAction<{ value: number }>) => {
      if (draft.value + action.payload.value < 99) {
        draft.value += action.payload.value
      }
    },
    resetCounter: draft => {
      draft.value = 0
    },
  },
})

export const { incrementCounter, decrementCounter, resetCounter, randomIncCounter } =
  counterSlice.actions

export const counterReducer = counterSlice.reducer
