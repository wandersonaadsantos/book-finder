import { render, screen } from '@testing-library/react'
import FinderNav from './'

const allProps = {
    lastPage: 2,
    handleClick: jest.fn(),
    handleParams: jest.fn(),
    allParams: {
        pageNumb: 1, filter: ''
    }
}

describe('testing on FinderNav component', () => {
    test('should not render without props', () => {
        const { container } = render(<FinderNav />)
        expect(container).toBeEmptyDOMElement()
    })
    test('render FinderNav with title "Find books"', () => {
        render(<FinderNav {...allProps} />)
        expect(screen.getByText(/Find books/)).toBeInTheDocument()
    })
    test('renders prev disable button', () => {
        render(<FinderNav {...allProps} />)
        expect(screen.getByText(/Prev/)).toBeDisabled()
    })
    test('renders next disable button', () => {
        render(<FinderNav {...allProps} allParams={{ pageNumb: 2, filter: '' }} />)
        expect(screen.getByText(/Next/)).toBeDisabled()
    })
})