import { render, screen } from '@testing-library/react'
import FinderNav from './'

describe('testing on FinderNav component', () => {
    test('should not render without props', () => {
        const { container } = render(<FinderNav />)
        expect(container).toBeEmptyDOMElement()
    })
    test('render FinderNav with title "Find books"', () => {
        render(<FinderNav {...{
            lastPage: 2,
            handleClick: jest.fn(),
            handleParams: jest.fn(),
            allParams: {
                pageNumb: 1, filter: ''
            }
        }} />)
        expect(screen.getByText(/Find books/)).toBeInTheDocument()
    })
})