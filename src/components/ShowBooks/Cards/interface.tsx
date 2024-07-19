import { Books } from '../../../constants/interface'

export interface Structure {
    author: string
    publication_year: string
    publication_country: string
    publication_city: string
    pages: string
}

interface CardsProps {
    books: Books[]
}

export default CardsProps
