import { setupListeners } from '@reduxjs/toolkit/query/react'
import { configureStore } from '@reduxjs/toolkit'
import config from './actions'

const store = configureStore(config)
setupListeners(store.dispatch)

export default store
