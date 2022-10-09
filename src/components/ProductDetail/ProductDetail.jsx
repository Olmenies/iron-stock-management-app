// React Router Dom components
import { NavLink } from "react-router-dom";
// React Bootstrap components
import { Button, Card } from "react-bootstrap";

//
// Component start
//
const ProductDetail = ({ selectedProduct, showStockModal, showProductModal }) => {

    return (

        <Card className='mt-5 pb-5' style={{ width: '18rem', alignItems: 'center', justifyContent: 'center' }}>
            <Card.Body>
                <Card.Title>Detalle del producto:</Card.Title>
            </Card.Body>
            <Card.Subtitle>{selectedProduct.name}</Card.Subtitle>
            <Card.Text>Código: {selectedProduct.code}</Card.Text>
            <Card.Text>Stock: {selectedProduct.stock}</Card.Text>
            <Card.Text>Alarma: {selectedProduct.alarm}</Card.Text>

            <Button
                className="mb-1"
                style={{ width: '70%' }}
                onClick={() => showStockModal()}
            >
                Modificar stock
            </Button>
            <Button
                className="mb-1"
                style={{ width: '70%' }}
                onClick={() => showProductModal()}
            >
                Modificar producto
            </Button>
            <NavLink to="/" style={{ width: '100%' }}>
                <Button
                    style={{ width: '70%' }}
                    variant="secondary"
                >
                    Volver
                </Button>
            </NavLink>
        </Card>
    );
}

export default ProductDetail;