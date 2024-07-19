import { FC } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ErrorProps from './interface'

const ErrorPage: FC<ErrorProps> = ({ err }) => (
    <Container className='py-5'>
        <Row>
            <Col className='pt-5 text-center'>
                <p className='h5 pt-5 text-danger'><strong>Something went wrong!!</strong></p>
                {err && <p className='mb-0'>{'Error msg: '}{err}</p>}
            </Col>
        </Row>
    </Container>
)

export default ErrorPage
