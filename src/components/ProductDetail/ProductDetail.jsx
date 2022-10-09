// React Router Dom components
import { NavLink } from "react-router-dom";
// React Bootstrap components
import { Button } from "react-bootstrap";

//
// Component start
//
const ProductDetail = ({ selectedProduct, showStockModal, showProductModal }) => {

    return (
        <div>
            <div>
                <p>Código: {selectedProduct.code}</p>
                <p>Producto: {selectedProduct.name}</p>
                <p>Stock: {selectedProduct.stock}</p>
                <p>Alarma: {selectedProduct.alarm}</p>
            </div>
            <div>
                <NavLink to="/">
                    <Button variant="secondary">Volver</Button>
                </NavLink>
                <Button
                    onClick={() => showStockModal()}
                >
                    Modificar stock
                </Button>
                <Button
                    onClick={() => showProductModal()}
                >
                    Modificar producto
                </Button>
            </div>
        </div>
    );
}

export default ProductDetail;