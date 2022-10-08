// React Bootstrap components
import {Container, Row, Col } from 'react-bootstrap';
// Custom components
import {ProductListContainer} from '../index';

const HomeContainer = () => {

    return(
        <Container>
            <Row>
                <Col>
                    <ProductListContainer />
                </Col>
            </Row>
        </Container>
    )
}

export default HomeContainer;