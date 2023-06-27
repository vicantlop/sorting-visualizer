import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import columns from './columnsSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {columns},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})