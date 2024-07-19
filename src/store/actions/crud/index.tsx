import type { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import books from './books'

export * from './books'

const finalDef = {
    reducer: {
        books: books.reducer
    },
    middleware: (getMidDef: GetDefaultMiddleware) => getMidDef().concat(...[
        books.middleware
    ])
}

export default finalDef