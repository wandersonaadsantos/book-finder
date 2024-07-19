import { screen } from '@testing-library/react'
import { renderWithProviders } from '../utils/testutils'
import server from '../utils/server'
import { rest } from 'msw'
import App from './'

describe('testing on App component', () => {
    test('render default component and check text', async () => {
        renderWithProviders(<App />)
        expect(screen.getByText(/Loading .../i)).toBeInTheDocument()
        expect(await screen.findByText(/Find books/)).toBeInTheDocument()
    })
    test('handles error response', async () => {
        // force msw to return error response
        server.use(rest.post('*books/', (_, res, ctx) => res(ctx.status(500))))
        renderWithProviders(<App />)
        expect(await screen.findByText('Something went wrong!!')).toBeInTheDocument()
    })
})
