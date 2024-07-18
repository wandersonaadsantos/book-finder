import { FC, useState, useEffect } from 'react'
import { changeUrl, getURLParameters, validNumber } from '../../utils'
import FinderNav from './FinderNav'
import Params from './interface'
import Cards from './Cards'
import schema from './data'

const ShowBooks: FC = () => {
    const [allParams, setAllParams] = useState<Params>({
        pageNumb: 1,
        filter: '',
        searchFilter: ''
    })
    const lastPage: number = Math.ceil(schema?.count / 20)
    const { pageNumb, searchFilter } = allParams
    const handleParams = (obj: Partial<Params>) => setAllParams({ ...allParams, ...obj })
    const decreIncre = (isSubtract?: boolean) => handleParams({ pageNumb: isSubtract ? pageNumb - 1 : pageNumb + 1 })

    useEffect(() => {
        const { page } = getURLParameters()
        if (validNumber(Number(page))) handleParams({ pageNumb: Number(page) })
    }, [])

    useEffect(() => {
        // console.log({ page: pageNumb, filters: [{ type: 'all', values: [validChar(searchFilter) ? `${searchFilter}` : ''] }] })
        changeUrl(`/?page=${pageNumb}`)
    }, [pageNumb, searchFilter])

    return (
        <div className='container py-5'>
            <FinderNav
                allParams={allParams}
                handleParams={handleParams}
                lastPage={lastPage}
                handleClick={(isSubtract?: boolean) => decreIncre(!!isSubtract)}
            />
            <Cards books={schema?.books} />
        </div>
    )
}

export default ShowBooks
