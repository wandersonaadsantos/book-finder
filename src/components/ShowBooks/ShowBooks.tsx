import { FC, useState, useEffect } from 'react'
import { changeUrl, getURLParameters, validPageNumb, validChar } from '../../utils'
import { useGetBooksMutation } from '../../store/actions'
import LoadingPage from '../Generics/LoadingPage'
import ErrorPage from '../Generics/ErrorPage'
import FinderNav from './FinderNav'
import Params from './interface'
import Cards from './Cards'

const ShowBooks: FC = () => {
    const [allParams, setAllParams] = useState<Params>({
        pageNumb: 1,
        filter: '',
        searchFilter: ''
    })
    const [getContent, { data, isLoading, error }] = useGetBooksMutation()
    const lastPage: number = Math.ceil((data?.count || 1) / 20)
    const { pageNumb, searchFilter } = allParams
    const handleParams = (obj: Partial<Params>) => setAllParams({ ...allParams, ...obj })
    const decreIncre = (isSubtract?: boolean) => {
        if ((!isSubtract && pageNumb === lastPage) || (isSubtract && pageNumb === 1)) return null
        return handleParams({ pageNumb: isSubtract ? pageNumb - 1 : pageNumb + 1 })
    }

    useEffect(() => {
        const { page } = getURLParameters()
        if (validPageNumb(Number(page))) handleParams({ pageNumb: Number(page) })
    }, [])

    useEffect(() => {
        getContent({ page: pageNumb, filters: [{ type: 'all', values: [validChar(searchFilter) ? `${searchFilter}` : ''] }] })
        changeUrl(`/?page=${pageNumb}`)
    }, [pageNumb, searchFilter])

    if (error) return <ErrorPage err={`${JSON.stringify(error)}`} />
    if (isLoading || !data) return <LoadingPage />
    return (
        <div className='container py-5'>
            <FinderNav
                allParams={allParams}
                handleParams={handleParams}
                lastPage={lastPage}
                handleClick={(isSubtract?: boolean) => decreIncre(!!isSubtract)}
            />
            <Cards books={data?.books} />
        </div>
    )
}

export default ShowBooks
