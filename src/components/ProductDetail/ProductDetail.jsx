// React Router Dom components
import { NavLink } from "react-router-dom";
// React Bootstrap components
import { Button, Modal } from "react-bootstrap";

//
// Component start
//
const ProductDetail = ({ selectedProduct, showModal }) => {

    return (
        <div>
            <div>
                <p>{selectedProduct.code}</p>
                <p>{selectedProduct.name}</p>
                <p>{selectedProduct.stock}</p>
            </div>
            <div>
                <Button
                    onClick={() => showModal()}
                >
                    Modificar stock
                </Button>
                <NavLink to="/">
                    <Button>Volver</Button>
                </NavLink>
            </div>
        </div>
    );
}

export default ProductDetail;