import { render, screen, fireEvent } from '@testing-library/react'
import ShowBooks from './'

describe('testing on ShowBooks component', () => {
    beforeEach(() => { window.history.pushState(null, '', '/?page=1') })
    test('renders ShowBooks with title "Find books"', () => {
        render(<ShowBooks />)
        expect(screen.getByText(/Find books/)).toBeInTheDocument()
    })
    test('navigates between pages when "prev" and "next" buttons are clicked', () => {
        render(<ShowBooks />)
        // Check starts on page 1
        expect(screen.getByText(/Page: 1/)).toBeInTheDocument()
        // Click next button
        fireEvent.click(screen.getByText(/Next/))
        // Check if it is page 2
        expect(screen.getByText(/Page: 2/)).toBeInTheDocument()
        // Click prev button
        fireEvent.click(screen.getByText(/Prev/))
        // Check if it is page 1 again
        expect(screen.getByText(/Page: 1/)).toBeInTheDocument()
    })
    test('must start on page 1 and cannot be less than that', () => {
        render(<ShowBooks />)
        //check starts on page 1
        expect(screen.getByText(/Page: 1/)).toBeInTheDocument()
        // click prev button
        fireEvent.click(screen.getByText(/Prev/))
        //check if it is page 1 again
        expect(screen.getByText(/Page: 1/)).toBeInTheDocument()
    })
    test('must start on page 122 and cannot be more than that', () => {
        window.history.pushState(null, '', '/?page=122')
        render(<ShowBooks />)
        //check starts on page 122
        expect(screen.getByText(/Page: 122/)).toBeInTheDocument()
        // click prev button
        fireEvent.click(screen.getByText(/Next/))
        //check if it is page 122 again
        expect(screen.getByText(/Page: 122/)).toBeInTheDocument()
    })
    test('should call handleChanges correctly', () => {
        render(<ShowBooks />)
        const searchInput = screen.getByPlaceholderText(/Search for a book/)
        fireEvent.change(searchInput, { target: { value: 'New Book' } })
        expect(searchInput.value).toBe('New Book')
    })
    test('should search for New Book', () => {
        window.history.pushState(null, '', '/?page=3')
        render(<ShowBooks />)
        const searchInput = screen.getByPlaceholderText(/Search for a book/)
        fireEvent.change(searchInput, { target: { value: 'New Book' } })
        fireEvent.click(screen.getByText(/Search/))
        expect(screen.getByText(/Page: 1/)).toBeInTheDocument()
    })
    test('it receives page as invalid number, handlePage corrects it to page 1', () => {
        window.history.pushState(null, '', '/?page={safhskfjsd}')
        render(<ShowBooks />)
        expect(screen.getByText(/Page: 1/)).toBeInTheDocument()
    })
})