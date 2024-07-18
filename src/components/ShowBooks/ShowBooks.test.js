import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from '../../utils/testutils'
import server from '../../utils/server'
import { rest } from 'msw'
import ShowBooks from './'

describe('testing on ShowBooks component', () => {
    beforeEach(() => { window.history.pushState(null, '', '/?page=1') })
    test('renders ShowBooks with title "Find books"', async () => {
        renderWithProviders(<ShowBooks />)
        expect(screen.getByText(/Loading .../i)).toBeInTheDocument()
        expect(await screen.findByText(/Find books/)).toBeInTheDocument()
    })
    test('navigates between pages when "prev" and "next" buttons are clicked', async () => {
        renderWithProviders(<ShowBooks />)
        // Check starts on page 1
        expect(await screen.findByText(/Page: 1/)).toBeInTheDocument()
        // Click next button
        fireEvent.click(await screen.findByText(/Next/))
        // Check if it is page 2
        expect(await screen.findByText(/Page: 2/)).toBeInTheDocument()
        // Click prev button
        fireEvent.click(await screen.findByText(/Prev/))
        // Check if it is page 1 again
        expect(await screen.findByText(/Page: 1/)).toBeInTheDocument()
    })
    test('must start on page 1 and cannot be less than that', async () => {
        renderWithProviders(<ShowBooks />)
        //check starts on page 1
        expect(await screen.findByText(/Page: 1/)).toBeInTheDocument()
        // click prev button
        fireEvent.click(await screen.findByText(/Prev/))
        //check if it is page 1 again
        expect(await screen.findByText(/Page: 1/)).toBeInTheDocument()
    })
    test('must start on page 122 and cannot be more than that', async () => {
        window.history.pushState(null, '', '/?page=122')
        renderWithProviders(<ShowBooks />)
        //check starts on page 122
        expect(await screen.findByText(/Page: 122/)).toBeInTheDocument()
        // click prev button
        fireEvent.click(await screen.findByText(/Next/))
        //check if it is page 122 again
        expect(await screen.findByText(/Page: 122/)).toBeInTheDocument()
    })
    test('should call handleChanges correctly', async () => {
        renderWithProviders(<ShowBooks />)
        const searchInput = await screen.findByPlaceholderText(/Search for a book/)
        fireEvent.change(searchInput, { target: { value: 'New Book' } })
        expect(searchInput.value).toBe('New Book')
    })
    test('should search for New Book', async () => {
        window.history.pushState(null, '', '/?page=3')
        renderWithProviders(<ShowBooks />)
        const searchInput = await screen.findByPlaceholderText(/Search for a book/)
        fireEvent.change(searchInput, { target: { value: 'New Book' } })
        fireEvent.click(await screen.findByText(/Search/))
        expect(await screen.findByText(/Page: 1/)).toBeInTheDocument()
    })
    test('it receives page as invalid number, handlePage corrects it to page 1', async () => {
        window.history.pushState(null, '', '/?page={safhskfjsd}')
        renderWithProviders(<ShowBooks />)
        expect(await screen.findByText(/Page: 1/)).toBeInTheDocument()
    })
    test('handles error response', async () => {
        // force msw to return error response
        server.use(rest.post('*books/', (_, res, ctx) => res(ctx.status(500))))
        renderWithProviders(<ShowBooks />)
        expect(await screen.findByText(/Something went wrong!!/i)).toBeInTheDocument()
    })
})