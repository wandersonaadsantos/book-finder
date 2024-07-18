export interface Structure {
    author: string
    publication_year: string
    publication_country: string
    publication_city: string
    pages: string
}

export interface Books {
    id: number
    book_author: string[]
    book_title: string
    book_publication_year: number
    book_publication_country: string
    book_publication_city: string
    book_pages: number
}

interface CardsProps {
    books: Books[]
}

export default CardsProps
