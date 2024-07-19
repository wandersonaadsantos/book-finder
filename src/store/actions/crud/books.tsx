import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from '../../../constants/client'
import { ReturnBooks, ArgumentBooks } from '../../../constants/interface'

const books = createApi({
    baseQuery,
    reducerPath: 'books',
    endpoints: (builder) => ({
        getBooks: builder.mutation<ReturnBooks, ArgumentBooks>({
            query: (param) => ({
                url: `books/`,
                method: 'POST',
                body: param
            })
        })
    })
})

export const { useGetBooksMutation } = books
export default books
