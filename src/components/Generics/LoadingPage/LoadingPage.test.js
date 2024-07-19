import { render, screen } from '@testing-library/react'
import LoadingPage from './LoadingPage'

test('render loading text', () => {
	render(<LoadingPage />)
	const linkElement = screen.getByText(/Loading .../)
	expect(linkElement).toBeInTheDocument()
})
