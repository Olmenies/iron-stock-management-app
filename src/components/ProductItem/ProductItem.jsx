// React Router Dom
import { NavLink } from "react-router-dom";
// React Bootstrap components
import { Button } from "react-bootstrap";

//
// Component start
//
const ProductListItem = ({ item, handlerOnDetail }) => {

    return (
        <tr>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.stock}</td>
            <td>

                <NavLink to={`/ProductDetail/${item.code}`} >
                    <Button>
                        Detalle
                    </Button>
                </NavLink>
            </td>
        </tr>
    );
}

export default ProductListItem;