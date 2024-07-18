import { FC } from 'react'
import { Row, Col, InputGroup, FormControl, Button, ButtonGroup } from 'react-bootstrap'
import FinderNavProps from './interface'

const FinderNav: FC<FinderNavProps> = ({ lastPage, handleClick, allParams, handleParams }) => {
    if (!handleClick || !handleParams) return null
    const { pageNumb, filter } = allParams
    return (
        <Row className='mb-5'>
            <Col xs={12}>
                <p className='text-center h1 text-primary mb-5'>Find books</p>
            </Col>
            <Col xs={12} md={6} className='text-center text-md-start'>
                <InputGroup>
                    <FormControl
                        placeholder='Search for a book'
                        value={filter}
                        onChange={(ev) => handleParams({ filter: ev.target.value })}
                    />
                    <Button variant="primary" onClick={() => handleParams({ pageNumb: 1, searchFilter: filter })}>
                        Search
                    </Button>
                </InputGroup>
            </Col>
            <Col className='text-center'>
                <p className='bg-secondary p-1 mb-3 text-light'>{'Max page: '}{lastPage}</p>
            </Col>
            <Col className='text-center'>
                <p className='bg-secondary p-1 mb-3 text-light'>{'Page: '}{pageNumb}</p>
            </Col>
            <Col xs={12} md={2}>
                <section className='w-100 mb-3 text-md-end text-center'>
                    <ButtonGroup>
                        <Button
                            variant="secondary"
                            disabled={pageNumb <= 1}
                            onClick={() => handleClick(true)}
                        >
                            Prev
                        </Button>
                        <Button
                            variant="primary"
                            disabled={lastPage <= pageNumb}
                            onClick={() => handleClick()}
                        >
                            Next
                        </Button>
                    </ButtonGroup>
                </section>
            </Col>
        </Row>
    )
}

export default FinderNav
