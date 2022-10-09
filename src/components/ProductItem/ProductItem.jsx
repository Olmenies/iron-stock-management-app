// React Router Dom
import { NavLink } from "react-router-dom";
// React Bootstrap components
import { Button } from "react-bootstrap";
// Styles
import {COLORS} from '../../constants/styles.js';

//
// Component start
//
const ProductListItem = ({ item }) => {

    if(item.stock === 0) {
        console.log('asd');
    }

    return (
        <tr style={{ backgroundColor: item.stock === 0 ? COLORS.danger : item.stock <= item.alarm && COLORS.warn }} >
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.stock}</td>
            <td>{item.alarm}</td>
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