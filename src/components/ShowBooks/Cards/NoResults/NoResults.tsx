import { FC } from 'react'
import { Row, Col } from 'react-bootstrap'

const NoResults: FC = () => (
    <Row>
        <Col>
            <p className='text-center py-5'>No books found</p>
        </Col>
    </Row>
)

export default NoResults
