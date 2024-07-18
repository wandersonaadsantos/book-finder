import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CardsProps from './interface'
import NoResults from './NoResults'
import schema from './data'
import s from './Cards.module.scss'

const Cards: FC<CardsProps> = ({ books }) => {
    if (!books?.length) return <NoResults />
    const { author, publication_year, publication_country, publication_city, pages } = schema
    return (
        <div className='row'>
            {books.map(ele => {
                const { book_title, book_author, book_publication_year, book_publication_country, book_publication_city, book_pages } = ele
                return (
                    <div key={uuidv4()} className='col-12 col-md-6'>
                        <section className={`w-100 bg-light p-3 mb-md-4 mb-3 rounded-3`}>
                            <section className={`w-100 ${s.bookTitleSize}`}>
                                <p className='text-center h5 pt-3'>{book_title}</p>
                            </section>
                            <hr className='pb-3' />
                            <p><span className='h6 text-primary'>{author}</span>{book_author?.join(', ')}</p>
                            <p><span className='h6 text-primary'>{publication_year}</span>{book_publication_year}</p>
                            <p><span className='h6 text-primary'>{publication_country}</span>{book_publication_country}</p>
                            <p><span className='h6 text-primary'>{publication_city}</span>{book_publication_city}</p>
                            <p className='text-end'><span className='h6 text-primary'>{pages}</span>{book_pages}</p>
                        </section>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards
