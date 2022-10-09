// React Bootstrap components
import { Container, Row, Col, Table } from "react-bootstrap";
// Custom components
import { ProductItemContainer } from "../index";

const ProducList = ({ prodArray }) => {

    return (
        <Container>
            <Row>
                <Col>
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Producto</th>
                                <th>Stock</th>
                                <th>-</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prodArray.map((item, i) => <ProductItemContainer item={item} key={i}/>)}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default ProducList;