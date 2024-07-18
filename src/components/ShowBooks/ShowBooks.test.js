import { render, screen } from '@testing-library/react'
import ShowBooks from './'
import * as schemaMocked from './data'

describe('testing on ShowBooks component', () => {
    test('render ShowBooks with title "Find books"', () => {
        render(<ShowBooks />)
        expect(screen.getByText(/Find books/)).toBeInTheDocument()
    })
    test('should not render ShowBooks without schema', () => {
        schemaMocked.default = null
        const { container } = render(<ShowBooks />)
        expect(container).toBeEmptyDOMElement()
    })
})