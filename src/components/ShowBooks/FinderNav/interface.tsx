import Params from '../interface'

interface FinderNavProps {
    allParams: Params
    handleParams: (p: Partial<Params>) => void
    lastPage: number
    handleClick: (p?: boolean) => void
}

export default FinderNavProps
