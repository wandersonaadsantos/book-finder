import { render, screen } from '@testing-library/react'
import Cards from './Cards'

const books = [{
    id: 1,
    book_author: ['Author Name'],
    book_title: 'Book Title',
    book_publication_year: '2022',
    book_publication_country: 'Country',
    book_publication_city: 'City',
    book_pages: 300
}]

describe('testing on Cards component', () => {
    test('should return null without props', () => {
        render(<Cards />)
        expect(screen.queryByText(/Book: /)).toBeNull()
    })
    test('should not render any card if "books" prop is an empty array', () => {
        render(<Cards books={[]} />)
        expect(screen.queryByText(/Book: /)).toBeNull()
    })
    test('should render card with book details if "books" prop is provided', () => {
        render(<Cards books={books} />)
        expect(screen.getByText('Book Title')).toBeInTheDocument()
        expect(screen.getByText('Country')).toBeInTheDocument()
    })
    test('should not render Country string if is not present in the props', () => {
        render(<Cards books={[{
            id: 1,
            book_author: ['Author Name'],
            book_title: 'Book Title',
            book_publication_year: '2022',
            book_publication_city: 'City',
            book_pages: 300
        }]} />)
        expect(screen.getByText(/2022/)).toBeInTheDocument()
        expect(screen.queryByText('Country')).toBeNull()
    })
})