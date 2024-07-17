import { render, screen } from '@testing-library/react'
import ShowBooks from './ShowBooks'

describe('testing on ShowBooks component', () => {
    test('render and check text "Find books"', () => {
        render(<ShowBooks />)
        expect(screen.getByText(/Find books/)).toBeInTheDocument()
    })
})