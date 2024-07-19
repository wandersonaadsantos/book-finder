import { render, screen } from '@testing-library/react'
import NoResults from './'

describe('testing on NoResults component', () => {
    test('render ShowBooks with title "No books found"', () => {
        render(<NoResults />)
        expect(screen.getByText(/No books found/)).toBeInTheDocument()
    })
})