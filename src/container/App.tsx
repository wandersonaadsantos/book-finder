import { FC } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ShowBooks from '../components/ShowBooks'

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ShowBooks />} />
                <Route path='*' element={<Navigate replace to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
