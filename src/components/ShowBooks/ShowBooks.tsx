import { FC } from 'react'
import Cards from './Cards'
import schema from './data'

const ShowBooks: FC = () => {
    if (!schema) return null
    const { fakeResp, title } = schema
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-center h1 text-primary mb-5'>{title}</p>
                </div>
            </div>
            <Cards books={fakeResp?.books} />
        </div>
    )
}

export default ShowBooks
