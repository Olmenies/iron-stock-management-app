// React Router Dom components
import { NavLink } from "react-router-dom";
// React Bootstrap components
import { Button } from "react-bootstrap";

//
// Component start
//
const ProductDetail = ({ selectedProduct }) => {

    console.log(selectedProduct);

    return (
        <div>
            <div>
                <p>{selectedProduct.code}</p>
                <p>{selectedProduct.name}</p>
                <p>{selectedProduct.stock}</p>
                <p>{selectedProduct.cost}</p>
            </div>
            <div>
                <Button>Modificar stock</Button>
                <NavLink to="/"><Button>volver</Button></NavLink>
            </div>
        </div>
    );
}

export default ProductDetail;