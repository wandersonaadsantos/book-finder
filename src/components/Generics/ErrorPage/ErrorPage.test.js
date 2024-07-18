import { render, screen } from '@testing-library/react'
import ErrorPage from './ErrorPage'

describe('testing on ErrorPage component', () => {
	test('render error title', () => {
		render(<ErrorPage />)
		expect(screen.getByText(/Something went wrong!!/)).toBeInTheDocument()
	})
	test('render error with Message error', () => {
		render(<ErrorPage err='Message error' />)
		expect(screen.getByText(/Message error/)).toBeInTheDocument()
	})
})
