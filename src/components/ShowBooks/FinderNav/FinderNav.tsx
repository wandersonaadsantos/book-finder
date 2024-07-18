import { FC } from 'react'
import FinderNavProps from './interface'

const FinderNav: FC<FinderNavProps> = ({ lastPage, handleClick, allParams, handleParams }) => {
    if (!handleClick || !handleParams) return null
    const { pageNumb, filter } = allParams
    return (
        <div className='row mb-5'>
            <div className='col-12'>
                <p className='text-center h1 text-primary mb-5'>Find books</p>
            </div>
            <div className='col-12 col-md-6 text-center text-md-start'>
                <section className='w-100 mb-3'>
                    <input
                        placeholder='Search for a book'
                        className='px-3 text-center me-3 h6 py-1'
                        value={filter}
                        onChange={(ev) => handleParams({ filter: ev.target.value })}
                    />
                    <button
                        type='button'
                        className='btn btn-primary h6'
                        onClick={() => handleParams({ pageNumb: 1, searchFilter: filter })}
                    >
                        Search
                    </button>
                </section>
            </div>
            <div className='col text-center'>
                <p className='bg-secondary p-1 mb-3 text-light'>{'Max page: '}{lastPage}</p>
            </div>
            <div className='col text-center'>
                <p className='bg-secondary p-1 mb-3 text-light'>{'Page: '}{pageNumb}</p>
            </div>
            <div className='col-12 col-md-2'>
                <section className='w-100 mb-3 text-md-end text-center'>
                    <button
                        type='button'
                        className={`btn btn-primary h6 ${pageNumb <= 1 ? 'disabled' : ''}`}
                        onClick={() => !(pageNumb === 1) && handleClick(true)}
                    >
                        Prev
                    </button>
                    <button
                        type='button'
                        className={`btn btn-outline-primary h6 ms-3 ${lastPage <= pageNumb ? 'disabled' : ''}`}
                        onClick={() => !(pageNumb === lastPage) && handleClick()}
                    >
                        Next
                    </button>
                </section>
            </div>
        </div>
    )
}

export default FinderNav
