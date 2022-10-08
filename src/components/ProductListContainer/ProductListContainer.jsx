// React components
import { useEffect, useState } from "react";
// React Bootstrap components
import { Container, Row, Col } from "react-bootstrap";
// Custom components
import { ProductList } from "../index";
//Mock data
import { PRODUCTS } from '../../utils/products';

//
// Component start
//
const ProductListContainer = () => {

    const [prodArray, setProdArray] = useState([]);

    useEffect(() => {
        setProdArray(PRODUCTS);
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <ProductList prodArray={prodArray} />
                </Col>
            </Row>
        </Container>
    )
}

export default ProductListContainer;