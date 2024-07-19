import { FC } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const LoadingPage: FC = () => (
    <Container className='container py-5'>
        <Row>
            <Col className='pt-5 text-center'>
                <p className='h5 pt-5'>Loading ...</p>
            </Col>
        </Row>
    </Container>
)

export default LoadingPage
