import { render, screen } from '@testing-library/react'
import App from './App'

describe('testing on App component', () => {
    test('render default component and check text "Find books"', () => {
        render(<App />)
        expect(screen.getByText(/Find books/)).toBeInTheDocument()
    })
})