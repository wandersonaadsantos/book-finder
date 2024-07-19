import { PropsWithChildren, ReactElement } from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../store'

export const renderWithProviders = (ui: ReactElement) => {
    const Wrapper = ({ children }: PropsWithChildren) => <Provider store={store}>{children}</Provider>
    return { store, ...render(ui, { wrapper: Wrapper }) }
}
