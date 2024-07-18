export interface Books {
    id: number
    book_author: string[]
    book_title: string
    book_publication_year: number
    book_publication_country: string
    book_publication_city: string
    book_pages: number
}

interface Params {
    page?: number
    filters?: [{
        type: string,
        values: string[]
    }]
}

export type ReturnBooks = { books: Books[], count: number }
export type ArgumentBooks = Params | {}
