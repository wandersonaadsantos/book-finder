import { rest } from 'msw'

const handlers = [
    rest.post(`*books/`, (_, res, ctx) => res(ctx.json({
        books: [
            {
                id: 1,
                book_author: ['Author Name'],
                book_title: 'Book Title',
                book_publication_year: '2022',
                book_publication_country: 'Country',
                book_publication_city: 'City',
                book_pages: 300
            }
        ],
        count: 2425
    }))),
]

export default handlers
